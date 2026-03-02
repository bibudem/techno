import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

function isDarkModeActive() {
  if (typeof document === 'undefined') return false;

  const root = document.documentElement;
  const attrTheme = root.getAttribute('data-theme');
  const storedTheme = window.localStorage.getItem('theme');
  const activeTheme = attrTheme || storedTheme || 'light';

  return activeTheme === 'dark';
}

export default function LogoWrapper() {
  const [isDark, setIsDark] = useState(isDarkModeActive);

  useEffect(() => {
    const root = document.documentElement;
    const refresh = () => setIsDark(isDarkModeActive());

    refresh();

    const observer = new MutationObserver(refresh);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ['data-theme', 'data-theme-choice', 'class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={styles.wrapper}
    >
      {/* Logo Bibliothèques (légèrement plus bas) */}
      <Link to="https://bib.umontreal.ca">
        <img
          src={isDark ? "/img/logobib-dark.svg" : "/img/logobib.svg"}
          alt="Bibliothèques UdeM"
          height="36"
          className={`${styles.logoBase} ${styles.logoBib}`}
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
          src={isDark ? "/img/logostudio-dark.svg" : "/img/logostudio.svg"}
          alt="studio•bib"
          height="26"
          className={`${styles.logoBase} ${styles.logoStudio}`}
        />
      </Link>
    </div>
  );
}
