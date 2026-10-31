// Bouton de retour en haut repris de bibweb (src/components/coquille/RetourHaut.astro)
import React, {useEffect, useRef, useState} from 'react';
import {ArrowUp} from '@phosphor-icons/react';
import styles from './styles.module.css';

export default function BackToTopButton() {
  const bouton = useRef(null);
  const [visible, setVisible] = useState(false);
  const [infobulleFermee, setInfobulleFermee] = useState(false);

  useEffect(() => {
    let enAttente = false;
    const mettreAJour = () => {
      enAttente = false;
      setVisible(window.scrollY > window.innerHeight * 1.5);
    };
    const auDefilement = () => {
      if (enAttente) return;
      enAttente = true;
      requestAnimationFrame(mettreAJour);
    };
    // Échap ferme l'infobulle ; elle revient au prochain survol ou focus (WCAG 1.4.13)
    const auClavier = (e) => {
      if (e.key === 'Escape' && bouton.current.matches(':hover, :focus-visible')) setInfobulleFermee(true);
    };

    window.addEventListener('scroll', auDefilement, {passive: true});
    window.addEventListener('resize', mettreAJour, {passive: true});
    document.addEventListener('keydown', auClavier);
    mettreAJour();

    return () => {
      window.removeEventListener('scroll', auDefilement);
      window.removeEventListener('resize', mettreAJour);
      document.removeEventListener('keydown', auClavier);
    };
  }, []);

  // Le focus revient au début du document : le bouton, masqué en haut de page,
  // ne doit pas le garder (WCAG 2.4.3)
  const remonter = () => {
    window.scrollTo({top: 0});
    const corps = document.body;
    corps.setAttribute('tabindex', '-1');
    corps.style.outline = 'none';
    corps.focus({preventScroll: true});
    corps.addEventListener(
      'blur',
      () => {
        corps.removeAttribute('tabindex');
        corps.style.removeProperty('outline');
      },
      {once: true},
    );
  };

  return (
    <button
      ref={bouton}
      type="button"
      className={styles.bouton}
      data-visible={visible || undefined}
      data-infobulle-fermee={infobulleFermee || undefined}
      aria-label="Retour en haut de la page"
      onClick={remonter}
      onPointerLeave={() => setInfobulleFermee(false)}
      onBlur={() => setInfobulleFermee(false)}>
      <ArrowUp size={24} weight="bold" aria-hidden="true" />
    </button>
  );
}
