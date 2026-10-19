import React, {useEffect, useRef, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import {ArrowSquareOut, MapPin} from '@phosphor-icons/react';
import 'leaflet/dist/leaflet.css';
import {getLinkProps} from '@site/src/utils/links';
import styles from './styles.module.css';

// Carte des bibliothèques offrant l'impression 3D, avec la liste des lieux à côté
// (en dessous sur mobile). La liste est rendue côté serveur : elle reste lisible
// même sans la carte. Cliquer sur un lieu centre la carte et ouvre sa bulle ;
// cliquer sur un marqueur met le lieu en évidence dans la liste.

const REGION_DEFAUT = 'Montréal';

function regionDe(lieu) {
  return lieu.region ?? REGION_DEFAUT;
}

function regionsDe(lieux) {
  return [...new Set(lieux.map(regionDe))];
}

function mouvementReduit() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}

// Contenu de la bulle, construit en DOM pour ne pas injecter de HTML brut.
function contenuBulle(lieu) {
  const racine = document.createElement('div');

  const titre = document.createElement('strong');
  titre.className = styles.popupTitle;
  titre.textContent = lieu.title;
  racine.appendChild(titre);

  const modeles = document.createElement('ul');
  modeles.className = styles.popupList;
  lieu.tags.forEach((tag) => {
    const item = document.createElement('li');
    item.textContent = tag.label;
    modeles.appendChild(item);
  });
  racine.appendChild(modeles);

  if (lieu.mapLink) {
    const lien = document.createElement('a');
    lien.href = lieu.mapLink;
    lien.target = '_blank';
    lien.rel = 'noopener noreferrer';
    lien.textContent = 'Itinéraire Google Maps';
    racine.appendChild(lien);
  }

  return racine;
}

function Carte({lieux, region, selection, onMarqueur}) {
  const conteneurRef = useRef(null);
  const carteRef = useRef(null);
  const groupesRef = useRef({});
  const marqueursRef = useRef({});
  const onMarqueurRef = useRef(onMarqueur);
  onMarqueurRef.current = onMarqueur;

  useEffect(() => {
    // Leaflet a besoin de window : chargé seulement dans le navigateur.
    const L = require('leaflet');

    const carte = L.map(conteneurRef.current, {
      scrollWheelZoom: false, // ne pas bloquer le défilement de la page
      zoomControl: false,
    });
    L.control.zoom({zoomInTitle: 'Zoom avant', zoomOutTitle: 'Zoom arrière'}).addTo(carte);

    // Fond OpenStreetMap, rendu monochrome en CSS (voir styles.module.css).
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(carte);

    // Marqueurs numérotés comme la liste (1, 2, 3…)
    const icone = (numero) =>
      L.divIcon({
        className: styles.marker,
        html: `<span aria-hidden="true">${numero}</span>`,
        iconSize: [26, 26],
        iconAnchor: [13, 13],
        popupAnchor: [0, -13],
      });

    const groupes = {};
    const marqueurs = {};
    lieux.forEach((lieu, index) => {
      const nom = regionDe(lieu);
      groupes[nom] ??= L.featureGroup().addTo(carte);
      const marqueur = L.marker(lieu.coords, {
        icon: icone(index + 1),
        title: `${index + 1}. ${lieu.title}`,
        alt: lieu.title,
      })
        .bindPopup(contenuBulle(lieu))
        .addTo(groupes[nom]);
      marqueurs[lieu.title] = marqueur;

      // Clavier : à l'ouverture, le focus entre dans la bulle (lien Itinéraire
      // atteignable) ; à la fermeture, il revient au marqueur.
      marqueur.on('popupopen', (e) => {
        const bulle = e.popup.getElement();
        const fermer = bulle?.querySelector('.leaflet-popup-close-button');
        if (fermer) {
          fermer.setAttribute('aria-label', 'Fermer');
          fermer.setAttribute('title', 'Fermer');
        }
        bulle?.querySelector('a[href]:not(.leaflet-popup-close-button)')?.focus({preventScroll: true});
        onMarqueurRef.current?.(lieu.title);
      });
      marqueur.on('popupclose', (e) => {
        const bulle = e.popup.getElement();
        if (!bulle || bulle.contains(document.activeElement) || document.activeElement === document.body) {
          marqueur.getElement()?.focus({preventScroll: true});
        }
      });
    });

    carteRef.current = carte;
    groupesRef.current = groupes;
    marqueursRef.current = marqueurs;

    return () => {
      carte.remove();
      carteRef.current = null;
    };
  }, [lieux]);

  // Cadrage sur la région choisie
  useEffect(() => {
    const carte = carteRef.current;
    const groupe = groupesRef.current[region];
    if (!carte || !groupe) return;
    carte.fitBounds(groupe.getBounds(), {padding: [40, 40], maxZoom: 15});
  }, [region, lieux]);

  // Lieu choisi dans la liste : centrer et ouvrir sa bulle
  useEffect(() => {
    const carte = carteRef.current;
    const marqueur = selection && marqueursRef.current[selection.title];
    if (!carte || !marqueur) return;
    carte.setView(marqueur.getLatLng(), Math.max(carte.getZoom(), 15), {
      animate: !mouvementReduit(),
    });
    marqueur.openPopup();
  }, [selection]);

  return (
    <div
      ref={conteneurRef}
      className={styles.map}
      role="region"
      aria-label="Carte des bibliothèques offrant l'impression 3D"
    />
  );
}

function Lieu({lieu, numero, actif, afficherRegion, onVoir, itemRef}) {
  return (
    <li ref={itemRef} className={clsx(styles.lieu, actif && styles.lieuActif)}>
      <span className={styles.numero} aria-hidden="true">{numero}</span>
      <div className={styles.lieuCorps}>
      <h3 className={styles.lieuTitre}>
        {lieu.titleLink ? (
          <Link {...getLinkProps(lieu.titleLink)} data-ignore-external="true">
            {lieu.title}
          </Link>
        ) : (
          lieu.title
        )}
      </h3>

      {(lieu.location || afficherRegion) && (
        <p className={styles.lieuEmplacement}>
          <MapPin size={14} weight="fill" aria-hidden="true" />
          <span>
            {afficherRegion && <>{regionDe(lieu)}{lieu.location && ' · '}</>}
            {lieu.location}
          </span>
        </p>
      )}

      {lieu.tags?.length > 0 && (
        <ul className={styles.modeles} aria-label="Modèles disponibles">
          {lieu.tags.map((tag) => (
            <li key={tag.label}>
              {tag.href ? (
                <Link {...getLinkProps(tag.href)} className={styles.modele} data-ignore-external="true">
                  {tag.label}
                </Link>
              ) : (
                <span className={styles.modele}>{tag.label}</span>
              )}
            </li>
          ))}
        </ul>
      )}

      <div className={styles.actions}>
        <button type="button" className={styles.boutonLien} onClick={() => onVoir(lieu)}>
          Voir sur la carte<span className="sr-only"> : {lieu.title}</span>
        </button>
        {lieu.mapLink && (
          <Link {...getLinkProps(lieu.mapLink)} className={styles.lienAction} data-ignore-external="true">
            Itinéraire<span className="sr-only"> vers {lieu.title}</span>
            <ArrowSquareOut size={14} aria-hidden="true" />
          </Link>
        )}
      </div>
      </div>
    </li>
  );
}

export default function CarteImpression3D({lieux}) {
  const regions = regionsDe(lieux);
  const [region, setRegion] = useState(regions[0]);
  const [selection, setSelection] = useState(null);
  const [actif, setActif] = useState(null);
  const zoneCarteRef = useRef(null);
  const listeRef = useRef(null);
  const itemsRef = useRef({});
  // defile : la liste dépasse sa hauteur ; fin : on est arrivé en bas
  const [defilement, setDefilement] = useState({defile: false, fin: true});

  useEffect(() => {
    const liste = listeRef.current;
    if (!liste) return undefined;
    const mesurer = () => {
      const defile = liste.scrollHeight > liste.clientHeight + 1;
      const fin = liste.scrollTop + liste.clientHeight >= liste.scrollHeight - 4;
      setDefilement((prec) => (prec.defile === defile && prec.fin === fin ? prec : {defile, fin}));
    };
    mesurer();
    liste.addEventListener('scroll', mesurer, {passive: true});
    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(mesurer) : null;
    observer?.observe(liste);
    return () => {
      liste.removeEventListener('scroll', mesurer);
      observer?.disconnect();
    };
  }, []);

  function voirSurLaCarte(lieu) {
    setRegion(regionDe(lieu));
    setActif(lieu.title);
    // Nouvel objet à chaque clic, pour rouvrir la bulle même si le lieu ne change pas
    setSelection({title: lieu.title});
    // Sur mobile, la carte est au-dessus de la liste : la ramener à l'écran
    const zone = zoneCarteRef.current;
    if (zone) {
      const r = zone.getBoundingClientRect();
      if (r.top < 0 || r.bottom > window.innerHeight) {
        zone.scrollIntoView({block: 'nearest', behavior: mouvementReduit() ? 'auto' : 'smooth'});
      }
    }
  }

  // Marqueur ouvert sur la carte : mettre le lieu en évidence et le faire défiler
  // dans la liste (seulement à l'intérieur de la liste, pas toute la page).
  function surMarqueur(title) {
    setActif(title);
    const liste = listeRef.current;
    const item = itemsRef.current[title];
    if (liste && item && liste.scrollHeight > liste.clientHeight) {
      liste.scrollTop = item.offsetTop - 8;
    }
  }

  return (
    <div className={styles.wrapper}>
      {regions.length > 1 && (
        <div className={styles.regions} role="group" aria-label="Afficher la région">
          {regions.map((nom) => (
            <button
              key={nom}
              type="button"
              className={clsx(
                'button button--sm',
                nom === region ? 'button--primary' : 'button--secondary',
              )}
              aria-pressed={nom === region}
              onClick={() => setRegion(nom)}
            >
              {nom}
            </button>
          ))}
        </div>
      )}

      <div className={styles.disposition}>
        <div ref={zoneCarteRef} className={styles.zoneCarte}>
          <BrowserOnly fallback={<div className={styles.map} aria-hidden="true" />}>
            {() => (
              <Carte lieux={lieux} region={region} selection={selection} onMarqueur={surMarqueur} />
            )}
          </BrowserOnly>
        </div>

        <div
          className={styles.panneau}
          data-defile={defilement.defile ? 'true' : 'false'}
          data-fin={defilement.fin ? 'true' : 'false'}
        >
          <p className={styles.entete} id="liste-lieux-3d">
            <strong>{lieux.length} bibliothèques</strong>
            <span className={styles.indice} aria-hidden="true">Faites défiler ↓</span>
          </p>
          <ul ref={listeRef} className={styles.liste} aria-labelledby="liste-lieux-3d">
          {lieux.map((lieu, index) => (
            <Lieu
              key={lieu.title}
              numero={index + 1}
              lieu={lieu}
              actif={actif === lieu.title}
              afficherRegion={regionDe(lieu) !== REGION_DEFAUT}
              onVoir={voirSurLaCarte}
              itemRef={(el) => {
                itemsRef.current[lieu.title] = el;
              }}
            />
          ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
