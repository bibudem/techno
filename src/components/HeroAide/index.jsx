import React from 'react';
import styles from './HeroAide.module.css';
import Link from '@docusaurus/Link';
import { HandWaving } from '@phosphor-icons/react';

export default function HeroAide() {
  return (
    <section className={styles.heroSection}>
        <HandWaving size={128} color="#ffca40" weight="duotone" className={styles.heroIcon} />
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