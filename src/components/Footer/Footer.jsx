import React from 'react';
import Link from '@docusaurus/Link';
import {
  ChatCircleDots,
  PaperPlaneTilt,
  InstagramLogo,
  YoutubeLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        {/* Colonne Contact */}
        <div className={styles.contact}>
          <h3>Les bibliothèques de l'Université de Montréal • studio·bib</h3>
          <Link to="/a-propos/nous-joindre" className={styles.contactLink}>
            <ChatCircleDots size={20} />
            <span>Nous joindre</span>
          </Link>
          {/* <Link to="mailto:studio@bib.umontreal.ca" className={styles.contactLink}>
            <PaperPlaneTilt size={20} />
            <span>Nous écrire</span>
          </Link> */}
          <div className={styles.social}>
            <a href="#" aria-label="Instagram"><InstagramLogo size={24} /></a>
            <a href="#" aria-label="YouTube"><YoutubeLogo size={24} /></a>
            <a href="#" aria-label="LinkedIn"><LinkedinLogo size={24} /></a>
          </div>
        </div>

        <div className={styles.logoContainer}>
          <img
            src="/img/sceaubib.svg"
            alt="Logo des bibliothèques"
            className={styles.logo}
          />
        </div>
      </div>

      {/* Barre légale toujours en bas */}
      <div className={styles.bottomBar}>
        <span>
          © 2025 Bibliothèques de l’Université de Montréal.  
          Contenu sous{" "}
          <a href="https://creativecommons.org/licenses/by/4.0/deed.fr">CC BY 4.0</a>
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