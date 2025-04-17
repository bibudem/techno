// src/components/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';
import {
  ChatCircleDots,
  PaperPlaneTilt,
  Phone,
  InstagramLogo,
  YoutubeLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

const contactLinks = [
  { label: 'Clavarder avec nous', icon: <ChatCircleDots size={24} />, href: '#' },
  { label: 'Nous écrire',      icon: <PaperPlaneTilt size={24} />, href: 'mailto:studio@bib.umontreal.ca' },
];

const socialIcons = [
  <InstagramLogo size={28} key="insta" />,
  <YoutubeLogo size={28}   key="yt"    />,
  <LinkedinLogo size={28}  key="li"    />,
];

const Footer = () => (
  <footer className={styles.piedDePage}>
    <div className={styles.backgroundTop} />
    <div className={styles.mainContent}>
      <div className={styles.contactSection}>
        <h3>Joindre l'équipe studio·bib</h3>
        <div className={styles.contactLinks}>
          {contactLinks.map((item, idx) => (
            <a key={idx} href={item.href} className={styles.contactItem}>
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </div>
        <div className={styles.socialIcons}>{socialIcons}</div>
      </div>

      <div className={styles.aboutSection}>
        {/* Colonnes “À propos” laissées vides volontairement */}
        <div className={styles.aboutColumns}>
          <div className={styles.column}></div>
          <div className={styles.column}></div>
        </div>
      </div>

      <img
        className={styles.logo}
        src="/img/sceaubib.svg"
        alt="Logo Bibliothèques UdeM"
      />
    </div>

    <div className={styles.bottomBar}>
      <span>
        Les bibliothèques de l'Université de Montréal, 2025. Le contenu du site est sous{" "}
        <a href="https://creativecommons.org/licenses/by/4.0/deed.fr">licence CC BY 4.0</a>
      </span>
      <span>|</span>
      <a href="https://vie-privee.umontreal.ca/confidentialite/">Confidentialité</a>
      <span>|</span>
      <a href="#">Condition d’utilisation</a>
      <span>|</span>
  <a
    href="#"
    className={styles.cookieSettingsLink}
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

export default Footer;