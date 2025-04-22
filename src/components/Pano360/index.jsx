import { useEffect, useRef } from 'react';
import { Viewer } from '@photo-sphere-viewer/core';
import '@photo-sphere-viewer/core/index.css';
import styles from './Pano360.module.css';

// On ne force pas le focus automatique sur le conteneur,
// car cela volerait le focus à l'utilisateur au chargement,
// empêchant la navigation clavier naturelle vers les éléments précédents.
// L'utilisateur peut naviguer jusqu'au viewer avec Tab. 
// Le clavier réagit quand c'est en fullscreen, sinon, les boutons de navigation s'affiche.

export default function Pano360({ image, caption }) {
  const containerRef = useRef(null);
  const viewerRef = useRef(null);
  const id = `desc-${caption?.replace(/\s+/g, '-').toLowerCase()}`;

  useEffect(() => {
    if (!containerRef.current) return;

    if (viewerRef.current) {
      viewerRef.current.destroy();
    }

    const viewer = new Viewer({
      container: containerRef.current,
      panorama: image,
      caption: caption || '',
      navbar: ['zoom', 'move', 'fullscreen'],
      lang: {
        zoom: 'Zoom',
        zoomOut: 'Dézoomer',
        zoomIn: 'Zoomer',
        moveUp: 'Haut',
        moveDown: 'Bas',
        moveLeft: 'Gauche',
        moveRight: 'Droite',
        fullscreen: 'Plein écran',
      },
    });

    viewerRef.current = viewer;

    const handleKeyDown = (e) => {
      const step = 5 * Math.PI / 180;
      try {
        const position = viewer.getPosition();
        if (!position?.yaw || !position?.pitch) return;

        switch (e.key) {
          case 'ArrowLeft':
            viewer.rotate({ yaw: position.yaw - step });
            break;
          case 'ArrowRight':
            viewer.rotate({ yaw: position.yaw + step });
            break;
          case 'ArrowUp':
            viewer.rotate({ pitch: position.pitch + step });
            break;
          case 'ArrowDown':
            viewer.rotate({ pitch: position.pitch - step });
            break;
        }
      } catch {}
    };

    const el = containerRef.current;

    const handleFocus = () => {
      el?.addEventListener('keydown', handleKeyDown);
    };

    const handleBlur = () => {
      el?.removeEventListener('keydown', handleKeyDown);
    };

    el?.addEventListener('focus', handleFocus);
    el?.addEventListener('blur', handleBlur);

    return () => {
      el?.removeEventListener('focus', handleFocus);
      el?.removeEventListener('blur', handleBlur);
      el?.removeEventListener('keydown', handleKeyDown);
      viewer.destroy();
    };
  }, [image]);

  return (
    <>
      <div
        ref={containerRef}
        className={styles.container}
        role="application"
        aria-label="Visite virtuelle"
        aria-describedby={id}
        tabIndex="0"
      />
      <p id={id} hidden>
        Vue panoramique : {caption}
      </p>
    </>
  );
}

