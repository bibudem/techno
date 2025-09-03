import React from 'react';
import Link from '@docusaurus/Link';
import {
  ChatCircleDots,
  MonitorPlay,
  BookOpenText,
  InstagramLogo,
  YoutubeLogo,
  LinkedinLogo,
  CubeFocus,
  VideoCamera,
  Cube,
  Circle,
  Desktop,
  User,
  Info,
  HouseLine,
  Siren,
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
          <h3>Besoin d’aide?</h3>
          
          <Link to="/a-propos/nous-joindre" className={styles.contactLink}>
            <ChatCircleDots size={20} />
            <span>Nous joindre</span>
          </Link>
          <Link to="https://umontreal.account.worldcat.org/account" className={styles.contactLink}>
            <User size={20} />
            <span>Votre dossier</span>
          </Link>
          <Link to="/a-propos/" className={styles.contactLink}>
            <Info size={20} />
            <span>À propos</span>
          </Link>

          {/* Bloc Urgence style contactLink, mais avec marge haut */}
          <div className={styles.urgenceInContact}>
            <a href="tel:5143437771" className={styles.contactLink}>
              <Siren size={20} weight="fill" color="#f04e24" />
              <span>Urgence UdeM - 514 343-7771</span>
            </a>
          </div>
        </div>

        {/* Séparateur vertical */}
        <div className={styles.divider} />

        {/* Colonne Liens rapides */}
        <div className={styles.linkSection}>
          <h3>Liens rapides</h3>
            <Link to="https://bib.umontreal.ca/" className={styles.linkItem}>
            <HouseLine size={20} />
            <span>Site des bibliothèques UdeM</span>
          </Link>
          <Link to="https://boite-outils.bib.umontreal.ca/" className={styles.linkItem}>
            <Circle size={20} weight="fill" color="#f04e24"/>
            <span>Boite à outils</span>
          </Link>
          <Link to="https://studio.bib.umontreal.ca/" className={styles.linkItem}>
            <Circle size={20} weight="fill" color="#FFCA40"/>
            <span>studio•bib</span>
          </Link>
          <Link to="https://umontreal.scholaris.ca/" className={styles.linkItem}>
            <Circle size={20} weight="fill" color="#024244"/>
            <span>Papyrus</span>
          </Link>
          <Link to="https://geoapp.bibl.ulaval.ca/" className={styles.linkItem}>
            <Circle size={20} weight="fill" color="#CCE2F3"/>
            <span>GéoIndex</span>
          </Link>
          <Link to="https://calypso.bib.umontreal.ca/" className={styles.linkItem}>
            <Circle size={20} weight="fill" color="#FEE1DE"/>
            <span>Calypso</span>
          </Link>
        </div>
        
        {/* Séparateur vertical */}
        <div className={styles.divider} />

        {/* Logo + Icônes sociales */}
        <div className={styles.logoContainer}>
          <a
            href="https://bib.umontreal.ca"
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
          © 2025 Bibliothèques de l’Université de Montréal.
          Contenu sous{" "}
          <a href="https://creativecommons.org/licenses/by/4.0/deed.fr">
            CC BY 4.0
          </a>
        </span>
        <span>|</span>
        <Link to="https://vie-privee.umontreal.ca/confidentialite/">Confidentialité</Link>
        <span>|</span>
        <Link to="https://bib.umontreal.ca/conditions-utilisation">Conditions d’utilisation</Link>
        <span>|</span>
        <Link to="/a-propos/accessibilite">Accessibilité</Link>
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
              color: "#fff",
              textDecoration: "underline",
              cursor: "pointer",
              font: "inherit"
            }}
            onMouseOver={e => (e.target.style.color = 'var(--color-accent)')}
            onMouseOut={e => (e.target.style.color = '#fff')}
          >
            Préférences de témoins
          </button>
        </span>
      </div>
    </footer>
  );
}