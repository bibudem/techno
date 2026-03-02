import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

function isDarkThemeActive() {
  if (typeof document === 'undefined') return false;

  const root = document.documentElement;
  const body = document.body;

  const attrTheme = root.getAttribute('data-theme');
  if (attrTheme === 'dark') return true;
  if (attrTheme === 'light') return false;

  const attrThemeChoice = root.getAttribute('data-theme-choice');
  if (attrThemeChoice === 'dark') return true;
  if (attrThemeChoice === 'light') return false;

  if (root.classList.contains('theme-dark')) return true;
  if (root.classList.contains('theme-light')) return false;
  if (body?.classList.contains('theme-dark')) return true;
  if (body?.classList.contains('theme-light')) return false;

  try {
    return window.localStorage.getItem('theme') === 'dark';
  } catch {
    return false;
  }
}

export default function LogoWrapper() {
  const [isDark, setIsDark] = useState(isDarkThemeActive);

  useEffect(() => {
    const refresh = () => setIsDark(isDarkThemeActive());
    const observer = new MutationObserver(refresh);
    const root = document.documentElement;

    refresh();

    observer.observe(root, {
      attributes: true,
      attributeFilter: ['data-theme', 'data-theme-choice', 'class'],
    });

    if (document.body) {
      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ['class'],
      });
    }

    window.addEventListener('storage', refresh);
    window.addEventListener('focus', refresh);
    window.addEventListener('themechange', refresh);

    return () => {
      observer.disconnect();
      window.removeEventListener('storage', refresh);
      window.removeEventListener('focus', refresh);
      window.removeEventListener('themechange', refresh);
    };
  }, []);

  return (
    <div
      className={styles.wrapper}
    >
      {/* Logo Bibliothèques (légèrement plus bas) */}
      <Link to="https://bib.umontreal.ca">
        <img
          src={isDark ? '/img/logobib-dark.svg' : '/img/logobib.svg'}
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
          src={isDark ? '/img/logostudio-dark.svg' : '/img/logostudio.svg'}
          alt="studio•bib"
          height="26"
          className={`${styles.logoBase} ${styles.logoStudio}`}
        />
      </Link>
    </div>
  );
}
