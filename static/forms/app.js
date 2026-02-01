// Configuration
const WEBHOOK_URL = 'https://ordo.bib.umontreal.ca/webhook-test/93220624-f402-457b-84f4-d7d95c85eefe';
const FETCH_TIMEOUT_MS = 15000;

// Variables globales
let selectedType = null;

const statusDiv = document.getElementById('statusMessage');
const formEl = document.getElementById('demandeForm');
const formContainer = document.getElementById('formContainer');
const coutsSection = document.getElementById('couts-section');

function showStatus(kind, message) {
  statusDiv.className = 'status-message ' + (kind === 'success' ? 'status-success' : 'status-error');
  statusDiv.textContent = message;
  statusDiv.style.display = 'block';
  statusDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function hideStatus() {
  statusDiv.style.display = 'none';
  statusDiv.textContent = '';
}

function setType(type) {
  selectedType = type;

  // UI selection
  document.querySelectorAll('.type-card').forEach(c => {
    const isSelected = (c.dataset.type === type);
    c.classList.toggle('selected', isSelected);
    c.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
  });

  // Hidden field
  document.getElementById('type_demande').value = type;

  // Show form
  formContainer.classList.add('active');
  hideStatus();

  // Costs section
  if (type === 'avec-frais') {
    coutsSection.style.display = 'block';
    updateCoutTotal(true);
  } else {
    coutsSection.style.display = 'none';
    clearCostFields();
  }

  // Scroll
  setTimeout(() => {
    formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

// Click + access clavier (Enter/Space)
document.querySelectorAll('.type-card').forEach(card => {
  card.addEventListener('click', () => setType(card.dataset.type));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setType(card.dataset.type);
    }
  });
});

// Conditionnel: "offert_par_autre"
const offertParEl = document.getElementById('offert_par');
const offertParAutreEl = document.getElementById('offert_par_autre');

function syncOffertParAutre() {
  const isAutre = offertParEl.value === 'Autre';
  offertParAutreEl.disabled = !isAutre;
  offertParAutreEl.required = isAutre;
  if (!isAutre) offertParAutreEl.value = '';
}
offertParEl.addEventListener('change', syncOffertParAutre);
syncOffertParAutre();

function clearCostFields() {
  const costFields = [
    'frais_inscription', 'cout_transport', 'moyen_transport',
    'hebergement_nombre_nuits', 'cout_par_nuit',
    'montant_frais_transport_hotel_etc', 'autres_infos_evaluation_couts'
  ];
  costFields.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  updateCoutTotal(false);
}

function numFloat(id) {
  const v = document.getElementById(id)?.value;
  const n = v === '' || v == null ? 0 : parseFloat(v);
  return Number.isFinite(n) ? n : 0;
}

function numInt(id) {
  const v = document.getElementById(id)?.value;
  const n = v === '' || v == null ? 0 : parseInt(v, 10);
  return Number.isFinite(n) ? n : 0;
}

function updateCoutTotal(forceShow) {
  if (selectedType !== 'avec-frais') return;

  const fraisInscription = numFloat('frais_inscription');
  const coutTransport = numFloat('cout_transport');
  const coutParNuit = numFloat('cout_par_nuit');
  const nombreNuits = numInt('hebergement_nombre_nuits');
  const autresFrais = numFloat('montant_frais_transport_hotel_etc');

  const total = fraisInscription + coutTransport + (coutParNuit * nombreNuits) + autresFrais;

  const displayDiv = document.getElementById('cout-total-display');
  const montantSpan = document.getElementById('cout-total-montant');

  if (forceShow || total > 0) {
    displayDiv.style.display = 'block';
    montantSpan.textContent = total.toFixed(2) + ' $';
  } else {
    displayDiv.style.display = 'none';
  }
}

['frais_inscription', 'cout_transport', 'cout_par_nuit', 'hebergement_nombre_nuits', 'montant_frais_transport_hotel_etc']
  .forEach(id => document.getElementById(id)?.addEventListener('input', () => updateCoutTotal(false)));

// Fetch robuste avec timeout
async function fetchWithTimeout(url, options, timeoutMs) {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(t);
  }
}

function normalizeDatetimeLocal(value) {
  // On garde la valeur brute du datetime-local (pas de décalage TZ)
  return value || null;
}

// Soumission du formulaire
formEl.addEventListener('submit', async (e) => {
  e.preventDefault();
  hideStatus();

  if (!selectedType) {
    showStatus('error', '❌ Veuillez d’abord sélectionner le type de demande (avec ou sans frais).');
    return;
  }

  if (!formEl.checkValidity()) {
    formEl.reportValidity();
    showStatus('error', '❌ Certains champs obligatoires sont manquants ou invalides.');
    return;
  }

  const submitBtn = document.querySelector('.submit-btn');
  submitBtn.disabled = true;
  submitBtn.textContent = '⏳ Envoi en cours...';

  // Collecter les données
  const formData = new FormData(formEl);
  const data = {};

  for (const [key, value] of formData.entries()) {
    if (['matricule', 'nombre_jours', 'nombre_heures', 'hebergement_nombre_nuits'].includes(key)) {
      data[key] = value !== '' ? parseInt(value, 10) : null;
      if (data[key] !== null && !Number.isFinite(data[key])) data[key] = null;
    }
    else if (['frais_inscription', 'cout_transport', 'cout_par_nuit', 'montant_frais_transport_hotel_etc'].includes(key)) {
      data[key] = value !== '' ? parseFloat(value) : null;
      if (data[key] !== null && !Number.isFinite(data[key])) data[key] = null;
    }
    else if (['date_debut', 'date_limite_inscription_hative'].includes(key)) {
      data[key] = normalizeDatetimeLocal(value);
    }
    else {
      data[key] = value || null;
    }
  }

  // Nettoyage conditionnel
  if (data.offert_par !== 'Autre') {
    data.offert_par_autre = null;
  }

  // Coût total
  if (selectedType === 'avec-frais') {
    const fraisInscription = data.frais_inscription || 0;
    const coutTransport = data.cout_transport || 0;
    const coutParNuit = data.cout_par_nuit || 0;
    const nombreNuits = data.hebergement_nombre_nuits || 0;
    const autresFrais = data.montant_frais_transport_hotel_etc || 0;
    data.cout_total_prevu = fraisInscription + coutTransport + (coutParNuit * nombreNuits) + autresFrais;
  } else {
    data.cout_total_prevu = null;
  }

  // Timestamps + timezone
  const nowIso = new Date().toISOString();
  data.cree = nowIso;
  data.modifie = nowIso;
  data.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || null;

  try {
    const response = await fetchWithTimeout(
      WEBHOOK_URL,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      },
      FETCH_TIMEOUT_MS
    );

    const result = await response.json().catch(() => ({}));

    if (response.ok) {
      showStatus('success', result.message || '✅ Demande soumise avec succès !');
      setTimeout(() => {
        formEl.reset();
        selectedType = null;

        document.querySelectorAll('.type-card').forEach(c => {
          c.classList.remove('selected');
          c.setAttribute('aria-pressed', 'false');
        });

        formContainer.classList.remove('active');
        hideStatus();
        clearCostFields();
        syncOffertParAutre();
      }, 2500);
    } else {
      const msg = result?.message
        ? `❌ ${result.message}`
        : `❌ Erreur serveur (HTTP ${response.status}). Veuillez réessayer.`;

      // ✅ Fix critique template string (et message lisible)
      throw new Error(msg);
    }

  } catch (error) {
    const isTimeout = (error && error.name === 'AbortError');
    console.error('Erreur:', error);
    showStatus(
      'error',
      isTimeout
        ? '❌ Délai dépassé (connexion lente). Veuillez réessayer.'
        : (error?.message || '❌ Erreur lors de l’envoi. Veuillez vérifier votre connexion et réessayer.')
    );
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = '📤 Soumettre la demande';
  }
});