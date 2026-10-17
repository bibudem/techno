import React, {useEffect, useRef, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import clsx from 'clsx';
import 'leaflet/dist/leaflet.css';
import styles from './styles.module.css';

const REGION_DEFAUT = 'Montréal';

function regionsDe(lieux) {
  return [...new Set(lieux.map((lieu) => lieu.region ?? REGION_DEFAUT))];
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

function Carte({lieux}) {
  const conteneurRef = useRef(null);
  const carteRef = useRef(null);
  const groupesRef = useRef({});
  const regions = regionsDe(lieux);
  const [region, setRegion] = useState(regions[0]);

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

    const icone = L.divIcon({
      className: styles.marker,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
      popupAnchor: [0, -12],
    });

    const groupes = {};
    lieux.forEach((lieu) => {
      const nom = lieu.region ?? REGION_DEFAUT;
      groupes[nom] ??= L.featureGroup().addTo(carte);
      const marqueur = L.marker(lieu.coords, {icon: icone, title: lieu.title, alt: lieu.title})
        .bindPopup(contenuBulle(lieu))
        .addTo(groupes[nom]);

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

    return () => {
      carte.remove();
      carteRef.current = null;
    };
  }, [lieux]);

  useEffect(() => {
    const carte = carteRef.current;
    const groupe = groupesRef.current[region];
    if (!carte || !groupe) return;
    carte.fitBounds(groupe.getBounds(), {padding: [40, 40], maxZoom: 15});
  }, [region, lieux]);

  return (
    <>
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
      <div
        ref={conteneurRef}
        className={styles.map}
        role="region"
        aria-label="Carte des bibliothèques offrant l'impression 3D"
      />
    </>
  );
}

export default function CarteImpression3D({lieux}) {
  return (
    <div className={styles.wrapper}>
      <BrowserOnly fallback={<div className={styles.map} aria-hidden="true" />}>
        {() => <Carte lieux={lieux} />}
      </BrowserOnly>
    </div>
  );
}
