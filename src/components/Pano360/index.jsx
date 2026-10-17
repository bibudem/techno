import React, { useEffect, useId, useRef, useState } from 'react';
import '@photo-sphere-viewer/core/index.css';
import styles from './Pano360.module.css';

// Visite virtuelle 360°.
// - photo-sphere-viewer (et three.js, ~160 Ko gzip) n'est chargé que lorsque le
//   panorama approche de l'écran : les pages ne le téléchargent plus d'office.
// - Clavier : flèches pour tourner, +/- pour zoomer, seulement quand la visite a le
//   focus (l'option keyboard:'always' écouterait toute la fenêtre et bloquerait le
//   défilement de la page).
// - Alternative textuelle : la légende est décrite, et l'image est accessible à plat.

const LANG = {
  zoom: 'Zoom',
  zoomOut: 'Dézoomer',
  zoomIn: 'Zoomer',
  moveUp: 'Haut',
  moveDown: 'Bas',
  moveLeft: 'Gauche',
  moveRight: 'Droite',
  fullscreen: 'Plein écran',
  loadError: 'Le panorama n’a pas pu être chargé.',
  webglError: 'Votre navigateur ne permet pas d’afficher la visite 360° (WebGL non disponible).',
  twoFingers: 'Utilisez deux doigts pour naviguer',
  ctrlZoom: 'Utilisez Ctrl + molette pour zoomer',
};

// Les boutons de la barre de photo-sphere-viewer sont des <div> : on leur donne
// un rôle et un nom, et on les rend activables avec Espace comme avec Entrée.
function rendreBoutonsAccessibles(container) {
  container.querySelectorAll('.psv-button').forEach((bouton) => {
    bouton.setAttribute('role', 'button');
    const nom = bouton.getAttribute('title');
    if (nom && !bouton.getAttribute('aria-label')) bouton.setAttribute('aria-label', nom);
  });
}

function activerAvecEspace(event) {
  if (event.key !== ' ') return;
  const bouton = event.target.closest?.('.psv-button');
  if (!bouton) return;
  event.preventDefault();
  bouton.click();
}

export default function Pano360({ image, legende, caption, title, alt }) {
  const texte = legende || caption || alt || title || '';
  const nom = title ? `Visite virtuelle 360° : ${title}` : 'Visite virtuelle 360°';
  const descriptionId = useId();
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // 1) Attendre que le panorama soit proche de l'écran
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 2) Charger la bibliothèque et créer la visionneuse
  useEffect(() => {
    if (!visible || !containerRef.current) return undefined;
    const container = containerRef.current;
    let viewer = null;
    let annule = false;

    import('@photo-sphere-viewer/core').then(({ Viewer }) => {
      if (annule) return;
      viewer = new Viewer({
        container,
        panorama: image,
        caption: texte,
        navbar: ['zoom', 'move', 'caption', 'fullscreen'],
        keyboard: 'fullscreen',
        lang: LANG,
      });
      viewer.addEventListener('ready', () => {
        rendreBoutonsAccessibles(container);
        if (container.contains(document.activeElement)) viewer.startKeyboardControl();
      }, { once: true });
      container.addEventListener('keydown', activerAvecEspace);
    });

    const onFocusIn = () => viewer?.startKeyboardControl();
    const onFocusOut = (event) => {
      if (!container.contains(event.relatedTarget)) viewer?.stopKeyboardControl();
    };
    container.addEventListener('focusin', onFocusIn);
    container.addEventListener('focusout', onFocusOut);

    return () => {
      annule = true;
      container.removeEventListener('keydown', activerAvecEspace);
      container.removeEventListener('focusin', onFocusIn);
      container.removeEventListener('focusout', onFocusOut);
      viewer?.destroy();
    };
  }, [visible, image, texte]);

  return (
    <figure className={styles.figure}>
      <div
        ref={containerRef}
        className={styles.container}
        role="application"
        aria-roledescription="visite virtuelle"
        aria-label={nom}
        aria-describedby={descriptionId}
        tabIndex={0}
      />
      <figcaption id={descriptionId} className={styles.legende}>
        {texte && <span>{texte}. </span>}
        <span className={styles.aide}>
          Flèches pour tourner, + et − pour zoomer.{' '}
          <a href={image} target="_blank" rel="noopener noreferrer">
            Voir l’image panoramique à plat
          </a>
        </span>
      </figcaption>
    </figure>
  );
}
