import React from 'react';
import Link from '@docusaurus/Link';
import {
  ChatCircleDots,
  PencilSimpleLine,
  MonitorPlay,
  BookOpenText,
  InstagramLogo,
  YoutubeLogo,
  LinkedinLogo,
  CubeFocus,
  VideoCamera,
  Cube,
  Desktop,
  HouseLine,
} from "@phosphor-icons/react";
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.footerTitle}>
        Les bibliothèques de l'Université de Montréal - studio•bib
      </h2>

      <div className={styles.content}>
        {/* Colonne À propos */}
        <div className={styles.contact}>
          <h3>À propos</h3>
          
          <Link to="/a-propos/nous-joindre" className={styles.contactLink}>
            <ChatCircleDots size={20} />
            <span>Nous joindre</span>
          </Link>
          <Link to="/a-propos/contribuer" className={styles.contactLink}>
            <PencilSimpleLine size={20} />
            <span>Contribuer</span>
          </Link>
          <Link to="/a-propos/accessibilite" className={styles.contactLink}>
            <MonitorPlay size={20} />
            <span>Accessibilité</span>
          </Link>
          <Link to="/a-propos/politique" className={styles.contactLink}>
            <BookOpenText size={20} />
            <span>Politique d’utilisation</span>
          </Link>
        </div>

        {/* Séparateur vertical */}
        <div className={styles.divider} />

        {/* Colonne Liens rapides */}
        <div className={styles.linkSection}>
  <h3>Liens rapides</h3>
  <a
    href="https://bib.umontreal.ca"
    className={styles.contactLink}
    // target="_blank"
    rel="noopener noreferrer"
  >
    <HouseLine size={20} />
    <span>Site des bibliothèques</span>
  </a>
  <Link to="/espaces" className={styles.linkItem}>
    <Cube size={20} />
    <span>Espaces</span>
  </Link>
  <Link to="/informatique" className={styles.linkItem}>
    <Desktop size={20} />
    <span>Ressources informatiques</span>
  </Link>
  <Link to="/creatives" className={styles.linkItem}>
    <CubeFocus size={20} />
    <span>Technologies créatives</span>
  </Link>
  <Link to="/medias" className={styles.linkItem}>
    <VideoCamera size={20} />
    <span>Productions médias</span>
  </Link>
</div>
{/* Séparateur vertical */}
<div className={styles.divider} />
        {/* Logo + Icônes sociales */}
        <div className={styles.logoContainer}>
        <a
    href="https://bib.umontreal.ca"
    // target="_blank"
    rel="noopener noreferrer"
    aria-label="Page d'accueil des bibliothèques"
  >
    <img
      src="/img/sceaubib.svg"
      alt="Logo des bibliothèques"
      className={styles.logo}
    />
  </a>
          <div className={styles.socialBelowLogo}>
            <a href="https://www.instagram.com/umontreal/" aria-label="Instagram">
              <InstagramLogo size={24} />
            </a>
            <a href="https://www.youtube.com/@BibliothequesUdeM" aria-label="YouTube">
              <YoutubeLogo size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Barre légale */}
      <div className={styles.bottomBar}>
  <span>
    © 2025 Bibliothèques de l’Université de Montréal.
    Contenu sous{" "}
    <a href="https://creativecommons.org/licenses/by/4.0/deed.fr">
      CC BY 4.0
    </a>
  </span>
  <span>|</span>
  <Link to="https://vie-privee.umontreal.ca/confidentialite/">Confidentialité</Link>
  <span>|</span>
  <Link to="https://bib.umontreal.ca/conditions-utilisation">Conditions d’utilisation</Link>
  <span>|</span>
  <span>
  <button
    type="button"
    onClick={() => window.klaro?.show()}
    style={{
      background: "none",
      border: "none",
      padding: 0,
      margin: 0,
      color: "#fff", // 👈 identique aux autres liens
      textDecoration: "underline",
      cursor: "pointer",
      font: "inherit"
    }}
    onMouseOver={e => (e.target.style.color = 'var(--color-accent)')}
    onMouseOut={e => (e.target.style.color = '#fff')}
  >
    Gérer les paramètres de cookies
  </button>
</span>
</div>
    </footer>
  );
}