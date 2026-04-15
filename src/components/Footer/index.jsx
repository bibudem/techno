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

function CcByBadge({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 138 64"
      aria-hidden="true"
      focusable="false"
    >
      <g transform="translate(-5.5 3.5)">
        <circle cx="37.785" cy="28.501" r="28.836" fill="currentColor" />
        <path
          fill="#fff"
          d="M37.441-3.5q13.428 0 22.857 9.372 4.513 4.514 6.857 10.314 2.343 5.8 2.344 12.314-.001 6.572-2.314 12.313-2.315 5.743-6.828 10.143-4.684 4.628-10.629 7.086-5.942 2.457-12.285 2.457c-6.343 0-8.276-.808-12.143-2.429q-5.8-2.428-10.4-7.027t-7-10.372C5.5 34.899 5.5 32.767 5.5 28.5q0-6.343 2.428-12.2t7.057-10.486Q24.127-3.499 37.441-3.5m.116 5.772q-10.971 0-18.458 7.657-3.772 3.829-5.8 8.6a25.2 25.2 0 0 0-2.029 9.972q-.001 5.144 2.029 9.913 2.029 4.774 5.8 8.516t8.515 5.715a25.7 25.7 0 0 0 9.943 1.971q5.14.001 9.973-1.999 4.827-2.001 8.713-5.771 7.485-7.313 7.484-18.344 0-5.314-1.943-10.057-1.941-4.742-5.654-8.458-7.718-7.715-18.573-7.715m-.401 20.915-4.287 2.229q-.686-1.428-1.685-2-1-.57-1.858-.571-4.285 0-4.286 5.657 0 2.57 1.085 4.113 1.086 1.544 3.201 1.544 2.8 0 3.944-2.743l3.942 2q-1.257 2.344-3.486 3.686-2.227 1.343-4.914 1.343-4.286.001-6.915-2.629-2.628-2.628-2.628-7.313 0-4.571 2.657-7.257t6.715-2.686q5.944-.002 8.515 4.627m18.457 0-4.229 2.229q-.686-1.427-1.686-2-1.003-.57-1.914-.571-4.286 0-4.287 5.657 0 2.57 1.086 4.113 1.084 1.544 3.201 1.544 2.799 0 3.941-2.743l4 2q-1.314 2.344-3.541 3.686a9.23 9.23 0 0 1-4.857 1.343q-4.343.001-6.941-2.629-2.603-2.628-2.602-7.313 0-4.571 2.658-7.257 2.655-2.685 6.713-2.686 5.944-.002 8.458 4.627"
        />
      </g>
      <g transform="translate(68.5 3.5)">
        <circle cx="37.637" cy="28.806" r="28.276" fill="currentColor" />
        <path
          fill="#fff"
          d="M37.443-3.5q13.483 0 22.742 9.257Q69.499 15.072 69.5 28.5q0 13.486-9.145 22.456Q50.641 60.5 37.443 60.5q-12.973 0-22.514-9.43Q5.501 41.642 5.5 28.5t9.429-22.742Q24.186-3.501 37.443-3.5m.114 5.772q-10.914 0-18.457 7.657-7.83 8.001-7.829 18.572 0 10.63 7.77 18.398 7.771 7.772 18.514 7.771 10.685.002 18.629-7.828 7.543-7.257 7.543-18.343 0-10.913-7.656-18.571-7.656-7.656-18.514-7.656m8.572 18.285v13.085h-3.656v15.542h-9.944V33.643h-3.656V20.557q0-.857.599-1.457.602-.6 1.457-.6h13.144q.8 0 1.428.6t.628 1.457m-13.087-8.228q0-4.513 4.458-4.514c4.458-.001 4.457 1.504 4.457 4.514q0 4.457-4.457 4.457c-4.457 0-4.458-1.486-4.458-4.457"
        />
      </g>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer} data-site-footer>
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
              <Siren size={20} weight="fill" color="var(--rouge-orange-500)" />
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
            <Circle size={20} weight="fill" color="var(--rouge-orange-500)"/>
            <span>Boite à outils</span>
          </Link>
          <Link to="https://studio.bib.umontreal.ca/" className={styles.linkItem}>
            <Circle size={20} weight="fill" color="var(--jaune)"/>
            <span>studio•bib</span>
          </Link>
          <Link to="https://umontreal.scholaris.ca/" className={styles.linkItem}>
            <Circle size={20} weight="fill" color="var(--vert-fonce)"/>
            <span>Papyrus</span>
          </Link>
          <Link to="https://geoapp.bibl.ulaval.ca/" className={styles.linkItem}>
            <Circle size={20} weight="fill" color="var(--bleu-200)"/>
            <span>GéoIndex</span>
          </Link>
          <Link to="https://calypso.bib.umontreal.ca/" className={styles.linkItem}>
            <Circle size={20} weight="fill" color="var(--rose-300)"/>
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
        <span className={styles.legalItem}>
          2026 - Bibliothèques de l’Université de Montréal.
        </span>
        <span className={styles.bottomBarDivider}>|</span>
        <span className={styles.licenseNotice}>
          <span>Sauf indications contraires, ce site est sous licence</span>
          <a
            href="https://creativecommons.org/licenses/by/4.0/deed.fr"
            className={styles.licenseLink}
            rel="license noopener noreferrer"
          >
            <CcByBadge className={styles.ccBadge} />
            <span>CC BY 4.0</span>
          </a>
        </span>
        <span className={styles.bottomBarDivider}>|</span>
        <Link to="https://vie-privee.umontreal.ca/confidentialite/">Confidentialité</Link>
        <span className={styles.bottomBarDivider}>|</span>
        <Link to="https://bib.umontreal.ca/conditions-utilisation">Conditions d’utilisation</Link>
        <span className={styles.bottomBarDivider}>|</span>
        <Link to="/a-propos/accessibilite">Accessibilité</Link>
        <span className={styles.bottomBarDivider}>|</span>
        <span>
          <button
            type="button"
            onClick={() => window.klaro?.show()}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              margin: 0,
              color: "var(--white)",
              textDecoration: "underline",
              cursor: "pointer",
              font: "inherit"
            }}
            onMouseOver={e => (e.target.style.color = 'var(--color-accent)')}
            onMouseOut={e => (e.target.style.color = 'var(--white)')}
          >
            Préférences de témoins
          </button>
        </span>
      </div>
    </footer>
  );
}
