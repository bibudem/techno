import React from 'react';
import styles from './styles.module.css';
import CardBib from '@site/src/components/CardBib';
import CardRow from '@site/src/components/CardRow';
import { Cube, AppWindow, VideoCamera, Network, Microphone, PaintBrush } from '@phosphor-icons/react';

export default function HomepageFeatures() {
  return (
    <>
      <section className={styles.introSection}>
        <div className={styles.introContainer}>
          <h1 className={styles.introTitle}>
            <span className={styles.introLight}>studio</span>
            <span className={styles.introDot}>•</span>
            <span className={styles.introBold}>bib</span>
          </h1>
          <p className={styles.introSubtitle}>
            Là où les idées prennent vie.
          </p>
          <div className={styles.introButtons}>{/* Boutons */}</div>
        </div>
      </section>

      <section className="homepage-section">
  <CardRow>
    <CardBib
      title="Studio Balado"
      Icon={Microphone}
      href="#"
      moreText=""
      small
      color="jaune"
    />
    <CardBib
      title="Impression 3D"
      Icon={Cube}
      href="#"
      moreText=""
      small
      color="jaune"
    />
    <CardBib
      title="Accès à distance aux logiciels"
      Icon={AppWindow}
      href="#"
      moreText=""
      small
      color="jaune"
    />
    <CardBib
      title="Accès hors campus (Proxy et VPN)"
      Icon={Network}
      href="#"
      moreText=""
      small
      color="jaune"
    />
  </CardRow>

  </section>
      <section className={styles.cardsSection}>
        <div className={styles.cardsContainer}>
          <div className={styles.cardVR}>
            <div>
              <h3 className={styles.cardVRTitle}>Réalité virtuelle</h3>
              <p className={styles.cardVRText}>
                Immersion totale,<br /> expérience ultime.
              </p>
            </div>
            <div className={styles.cardArrow}>→</div>
          </div>

          <div className={styles.cardWorkshops}>
            <div className={styles.cardHeader}>Prochains ateliers</div>
            <ul className={styles.cardList}>
              {[{
                date: '11 mars 2025',
                title: 'Création de balado',
                location: 'Bibliothèque mathématiques et informatique',
              }, {
                date: '18 mars 2025',
                title: 'Initiation à l’impression 3D',
                location: 'Bibliothèque Marguerite d’Youville',
              }, {
                date: '18 mars 2025',
                title: 'Découpeuse numérique',
                location: 'Bibliothèque Thérèse-Gouin-Décarie',
              }].map(({ date, title, location }, idx) => (
                <li key={idx} className={styles.cardItem}>
                  <div className={styles.cardItemTop}>
                    <span className={styles.cardDate}>{date}</span>
                    <span> — </span>
                    <a href="#" className={styles.cardTitle}>{title}</a>
                  </div>
                  <div className={styles.cardLocation}>{location}</div>
                </li>
              ))}
            </ul>
            <div className={styles.cardFooter}>
              <a href="#" className={styles.cardMore}>Voir tous les ateliers →</a>
            </div>
          </div>
        </div>
      </section>

      

      <section className={styles.spacesSection}>
        <div className={styles.spacesContainer}>
          <div className={styles.spacesText}>
            <h2 className={styles.spacesTitle}>
              Un lieu pour chaque projet,<br /> une idée pour chaque espace.
            </h2>
            <p className={styles.spacesDescription}>
              Chaque espace est conçu pour stimuler la créativité, l’apprentissage
              et l’innovation. Que ce soit pour expérimenter des technologies
              émergentes, collaborer sur des projets ou explorer de nouvelles idées,
              chaque lieu offre une opportunité d’inventer, de créer et de partager.
            </p>
            <a href="/espaces" className={styles.spacesButton}>
              Découvrir nos espaces →
            </a>
          </div>
          <div className={styles.spacesImages}>
            {["/img/espace-1.jpg", "/img/espace-2.jpg", "/img/espace-3.jpg"].map((src, idx) => (
              <div key={idx} className={styles.spacesImageWrapper}>
                <img src={src} alt="" className={styles.spacesImage} />
                <div className={styles.spacesOverlay} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
