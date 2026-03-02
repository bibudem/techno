import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function LogoWrapper() {
  return (
    <div
      className={styles.wrapper}
    >
      {/* Logo Bibliothèques (légèrement plus bas) */}
      <Link to="https://bib.umontreal.ca">
        <img
          src="/img/logobib.svg"
          alt="Bibliothèques UdeM"
          height="36"
          className={`${styles.logoBase} ${styles.logoBib} ${styles.logoLight}`}
        />
        <img
          src="/img/logobib-dark.svg"
          alt="Bibliothèques UdeM"
          height="36"
          className={`${styles.logoBase} ${styles.logoBib} ${styles.logoDark}`}
        />
      </Link>

      {/* Séparateur centré */}
      <div
        className={styles.separatorWrap}
      >
        <div
          className={styles.separator}
        />
      </div>

      {/* Logo Studio (légèrement plus bas) */}
      <Link to="/" className={styles.studioLink}>
        <img
          src="/img/logostudio.svg"
          alt="studio•bib"
          height="26"
          className={`${styles.logoBase} ${styles.logoStudio} ${styles.logoLight}`}
        />
        <img
          src="/img/logostudio-dark.svg"
          alt="studio•bib"
          height="26"
          className={`${styles.logoBase} ${styles.logoStudio} ${styles.logoDark}`}
        />
      </Link>
    </div>
  );
}
