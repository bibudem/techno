moment.locale('fr');

// --- Configuration ---
const PROXY = "https://ordo.bib.umontreal.ca/webhook/axper";

const LIBRARIES = [
  {
    url: "https://cloud.axper.com/api/LiveView/0232534a-6fb5-4f46-a694-0150cf7c803b",
    name: "Bibliothèque des lettres et sciences humaines",
    address: "Pavillon Samuel-Bronfman",
    code: "ss",
    capacity: 1017
  },
  {
    url: "https://cloud.axper.com/api/LiveView/3b296801-de07-4b59-a021-8a4e4806063e",
    name: "Bibliothèque de droit",
    address: "Pavillon Maximilien-Caron, 4e étage",
    code: "dr",
    capacity: 530
  },
  {
    url: "https://cloud.axper.com/api/LiveView/207eef5f-b115-4e3d-8a49-9ed47cc207e2",
    name: "Bibliothèque de mathématiques et informatique",
    address: "Pavillon André-Aisenstadt",
    code: "mi",
    capacity: 280
  },
  {
    url: "https://cloud.axper.com/api/LiveView/ad6f418c-8cfc-49a4-84b6-3b53f98638f8",
    name: "Bibliothèque de la santé",
    address: "Pavillon Roger-Gaudry, 6e étage",
    code: "sa",
    capacity: 150
  },
  {
    url: "https://cloud.axper.com/api/LiveView/174b8dc7-ab11-40d8-b975-15ec5c9033f0",
    name: "Bibliothèque Kinésiologie",
    address: "2100, boul. Édouard-Montpetit, 8e étage",
    code: "ki",
    capacity: 150
  },
  {
    url: "https://cloud.axper.com/api/LiveView/e5de541f-9f52-44c7-a532-9a8bae754e99",
    name: "Bibliothèque Aménagement",
    address: "Pavillon de la Faculté de l'aménagement",
    code: "am",
    capacity: 150
  },
  {
    url: "https://cloud.axper.com/api/LiveView/90e3ca77-5750-4f22-bc77-2f2504f1a212",
    name: "Bibliothèque Marguerite-d'Youville",
    address: "Pavillon Marguerite-d'Youville",
    code: "pa",
    capacity: 165
  },
  {
    url: "https://cloud.axper.com/api/LiveView/ff34308a-6b8b-4627-82b2-6bb6f43fd2f4",
    name: "Bibliothèque Hubert-Reeves",
    address: "Complexe des sciences du campus MIL",
    code: "sciences",
    capacity: 200
  },
  {
    url: "https://cloud.axper.com/api/LiveView/7e347ba2-ec2d-42cf-a0f9-a9d058dbfa30",
    name: "Bibliothèque Thérèse-Gouin-Décarie",
    address: "Pavillon Marie-Victorin",
    code: "ed",
    capacity: 255
  },
  {
    url: "https://cloud.axper.com/api/LiveView/bb42ee28-fca9-4337-b1ed-6eab9d20c2c8",
    name: "Bibliothèque de musique",
    address: "Pavillon de la faculté de musique",
    code: "mu",
    capacity: 45
  }
];

// --- Fonctions utilitaires ---

async function getSchedules(code) {
  try {
    const res = await fetch(`https://api.bib.umontreal.ca/horaires/${code}?fin=P1D`);
    if (!res.ok) return null;
    const data = await res.json();
    return data.evenements[0];
  } catch {
    return null;
  }
}

function isClosed(ev) {
  if (!ev) return false;
  const now = moment();
  const day = moment(ev.date);
  if (ev.debut1 === '' && ev.fin2 === '') return true;
  const open = now.isBetween(
    day.clone().add(moment.duration(ev.debut1)),
    day.clone().add(moment.duration(ev.debut2 || ev.fin2))
  );
  return !open;
}

function getStatus(n, closed) {
  if (closed) return { cls: 'ferme', msg: 'Fermé' };
  if (n < 80) return { cls: 'faible', msg: 'Places disponibles' };
  if (n < 99) return { cls: 'moyen', msg: 'Quelques places restantes' };
  return { cls: 'eleve', msg: 'Complet' };
}

// --- Animation douce (fade in/out) ---
async function smoothReplace(contentFn) {
  const container = document.getElementById('libraries');

  // Fade out
  container.style.transition = 'opacity 0.4s ease';
  container.style.opacity = '0';
  await new Promise(r => setTimeout(r, 400));

  // Replace content
  container.innerHTML = '';
  await contentFn();

  // Fade in
  container.style.transition = 'opacity 0.6s ease';
  container.style.opacity = '1';
  await new Promise(r => setTimeout(r, 600));
}

// --- Récupération des données ---
async function fetchLibraryData(lib) {
  try {
    const [occupRes, event] = await Promise.all([
      fetch(`${PROXY}?url=${encodeURIComponent(lib.url)}`),
      getSchedules(lib.code)
    ]);

    if (!occupRes.ok) throw new Error("Erreur d'accès aux données Axper");
    const data = await occupRes.json();

    const occupancy = data.occupancyValue || 0;
    const percent = Math.round((occupancy / lib.capacity) * 100);
    const closed = isClosed(event);
    const status = getStatus(percent, closed);

    return { ...lib, status };
  } catch (err) {
    console.warn("Erreur pour", lib.name, err);
    return {
      ...lib,
      status: { cls: 'ferme', msg: 'Données indisponibles' }
    };
  }
}

// --- Affichage principal ---
async function display() {
  const now = moment().format('dddd D MMMM YYYY, HH:mm');
  document.querySelector('.datetime').textContent = now;

  await smoothReplace(async () => {
    const container = document.getElementById('libraries');
    const results = await Promise.all(LIBRARIES.map(fetchLibraryData));

    // 🔠 Tri alphabétique par nom
    results.sort((a, b) => a.name.localeCompare(b.name, 'fr', { sensitivity: 'base' }));

    results.forEach(lib => {
      const div = document.createElement('div');
      div.className = 'library';
      div.innerHTML = `
        <h2>${lib.name}</h2>
        <small>${lib.address}</small>
        <div class="status ${lib.status.cls}">${lib.status.msg}</div>
      `;
      container.appendChild(div);
    });
  });
}

// --- Boucle de rafraîchissement ---
display();
setInterval(display, 30000);