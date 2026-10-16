import React from 'react';
import useRevealOnScroll from '@site/src/utils/useRevealOnScroll';
import styles from './HeroAide.module.css';
import Link from '@docusaurus/Link';
import { HandWaving } from '@phosphor-icons/react';

export default function HeroAide() {
  const iconRef = useRevealOnScroll(styles.animate);

  return (
    <section className={styles.heroSection}>
      <HandWaving
        ref={iconRef}
        size={128}
        color="var(--jaune)"
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