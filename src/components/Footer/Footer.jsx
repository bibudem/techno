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
} from "@phosphor-icons/react";
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h3 className={styles.footerTitle}>
        Les bibliothèques de l'Université de Montréal • studio·bib
      </h3>

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
          <Link to="/" className={styles.linkItem}>Espaces</Link>
          <Link to="/informatique" className={styles.linkItem}>Ressources informatiques</Link>
          <Link to="/creatives" className={styles.linkItem}>Technologies créatives</Link>
          <Link to="/medias" className={styles.linkItem}>Productions médias</Link>
        </div>

        {/* Logo + Icônes sociales */}
        <div className={styles.logoContainer}>
          <img
            src="/img/sceaubib.svg"
            alt="Logo des bibliothèques"
            className={styles.logo}
          />
          <div className={styles.socialBelowLogo}>
            <a href="#" aria-label="Instagram">
              <InstagramLogo size={24} />
            </a>
            <a href="#" aria-label="YouTube">
              <YoutubeLogo size={24} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <LinkedinLogo size={24} />
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
        <Link to="#">Conditions d’utilisation</Link>
        <span>|</span>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.udem_open_cookie_consent_intro?.();
          }}
        >
          Paramètres des témoins
        </a>
      </div>
    </footer>
  );
}