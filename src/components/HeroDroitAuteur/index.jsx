import React from 'react';
import useRevealOnScroll from '@site/src/utils/useRevealOnScroll';
import styles from './HeroDroitAuteur.module.css';
import Link from '@docusaurus/Link';
import { BellRinging } from '@phosphor-icons/react';

export default function HeroDroitAuteur() {
  const iconRef = useRevealOnScroll(styles.animate);

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroIconWrapper}>
        <BellRinging
          ref={iconRef}
          size={128}
          color="var(--rouge-orange-500)"
          weight="duotone"
          className={styles.heroIcon}
        />
      </div>
      <div className={styles.heroContent}>
        <h2 className={styles.heroTitle}>Droit d’auteur et création</h2>
        <p className={styles.heroText}>
          Protégez vos créations et respectez celles des autres.
        </p>
        <Link
          className="button button--primary"
          to="https://boite-outils.bib.umontreal.ca/c.php?g=740213&p=5341650"
        >
          Consulter le guide
        </Link>
      </div>
    </section>
  );
}