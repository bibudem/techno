// Footer.jsx
import styles from './Footer.module.css';
import {
  ChatCircleDots,
  PaperPlaneTilt,
  Phone,
  InstagramLogo,
  YoutubeLogo,
  LinkedinLogo,
  BellRinging,
} from "@phosphor-icons/react";

const contactLinks = [
  { label: 'Clavarder avec nous', icon: <ChatCircleDots size={24} />, href: '#' },
  { label: 'Nous écrire', icon: <PaperPlaneTilt size={24} />, href: 'mailto:studio@bib.umontreal.ca' },
];

const socialIcons = [
  <InstagramLogo size={28} key="insta" />,
  <YoutubeLogo size={28} key="yt" />,
  <LinkedinLogo size={28} key="li" />,
];

const aboutLinks1 = [
  // 'Équipe',
  // 'Mission',
  // 'Contribuer',
  // 'Accessibilité',
  // 'Politiques et règlements',
];

const aboutLinks2 = [
  // 'Nouvelles',
  // 'Nous soutenir',
  // 'Accessibilité Web',
];

const Footer = () => {
  return (
    <footer className={styles.piedDePage}>
      <div className={styles.backgroundTop} />
      <div className={styles.mainContent}>
        <div className={styles.contactSection}>
          <h3>Joindre l'équipe studio·bib</h3>
          <div className={styles.contactLinks}>
            {contactLinks.map((item, index) => (
              <a key={index} href={item.href} className={styles.contactItem}>
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </div>
          <div className={styles.socialIcons}>
            {socialIcons}
          </div>
          {/* <div className={styles.urgence}>
            <BellRinging size={32} color="#fc9403"/>
            <span>Urgence 514 343-7771</span>
          </div> */}
        </div>

        <div className={styles.aboutSection}>
          {/* <h3>À propos de studio·bib</h3> */}
          <div className={styles.aboutColumns}>
            <div className={styles.column}>
              {aboutLinks1.map((text, index) => (
                <a key={index} href="#">{text}</a>
              ))}
            </div>
            <div className={styles.column}>
              {aboutLinks2.map((text, index) => (
                <a key={index} href="#">{text}</a>
              ))}
            </div>
          </div>
        </div>

        <img
          className={styles.logo}
          src="/img/sceaubib.svg"
          alt="Logo Bibliothèques UdeM"
        />
      </div>

      <div className={styles.bottomBar}>
        <span>© Université de Montréal, 2025. Tous droits réservés</span>
        <span>|</span>
        <a href="#">Confidentialité</a>
        <span>|</span>
        <a href="#">Condition d’utilisation</a>
        <span>|</span>
        <a href="#">Paramètres des témoins</a>
      </div>
    </footer>
  );
};

export default Footer;