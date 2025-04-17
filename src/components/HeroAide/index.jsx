import React, { useEffect, useRef } from 'react';
import styles from './HeroAide.module.css';
import Link from '@docusaurus/Link';
import { HandWaving } from '@phosphor-icons/react';

export default function HeroAide() {
  const iconRef = useRef(null);

  useEffect(() => {
    const iconEl = iconRef.current;
    if (!iconEl) return;
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          iconEl.classList.add(styles.animate);
          obs.unobserve(iconEl);
        }
      },
      { threshold: 0.5 } // déclenche quand 50% de l’icône est visible
    );
    observer.observe(iconEl);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.heroSection}>
      <HandWaving
        ref={iconRef}
        size={128}
        color="#ffca40"
        weight="duotone"
        className={styles.heroIcon}
      />
      <h2 className={styles.heroTitle}>Nous sommes là pour vous aider</h2>
      <p className={styles.heroText}>
        Besoin d’un coup de main? Que ce soit pour l’informatique ou la création,<br />
        notre équipe est là pour vous soutenir.
      </p>
      <Link className="button button--primary" to="/a-propos/nous-joindre">
        Nous joindre
      </Link>
    </section>
  );
}