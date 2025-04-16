import React from 'react';
import styles from './styles.module.css';
import CardBib from '@site/src/components/CardBib';
import CardRow from '@site/src/components/CardRow';
import ProchainsAteliers from '@site/src/components/ProchainsAteliers';
import { Cube, AppWindow, VideoCamera, Network, Microphone, PaintBrush, ArrowRight } from '@phosphor-icons/react';

export default function PageAccueil() {
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
      title="Studios Audio"
      Icon={Microphone}
      href="/espaces/studioaudio"
      moreText=""
      small
      color="jaune"
    />
    <CardBib
      title="Impression 3D"
      Icon={Cube}
      href="/creatives/impression3d"
      moreText=""
      small
      color="jaune"
    />
    <CardBib
      title="Accès à distance aux logiciels"
      Icon={AppWindow}
      href="/informatique/connexion-distance"
      moreText=""
      small
      color="jaune"
    />
    <CardBib
      title="Accès hors campus (Proxy et VPN)"
      Icon={Network}
      href="/informatique/hors-campus"
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
            <div className={styles.cardArrow}>
              <ArrowRight size={24} weight="light" color="#000" />
            </div>
          </div>

          <ProchainsAteliers />
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
