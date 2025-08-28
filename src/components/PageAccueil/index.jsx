// src/pages/index.jsx

import React from 'react';
import styles from './styles.module.css';
import CardBib from '@site/src/components/CardBib';
import CardRow from '@site/src/components/CardRow';
import ProchainsAteliers from '@site/src/components/ProchainsAteliers';
import CardMedia from '@site/src/components/CardMedia';
import {
  Cube,
  AppWindow,
  Network,
  Microphone,
} from '@phosphor-icons/react';


const images = [
  '/img/homepage1.webp',
  '/img/homepage2.webp',
  '/img/homepage3.webp',
  '/img/homepage4.webp',
];

export default function PageAccueil() {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  return (
    <>
      <section
        className={styles.introSection}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), #111), url(${randomImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '0 0 12px 12px',
          color: '#fff',
        }}
      >
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
            moreText="Enregistrer des balados"
            small
            color="jaune"
          />
          <CardBib
            title="Impression 3D"
            Icon={Cube}
            href="/creatives/impression3d"
            moreText="Imprimer vos objets"
            small
            color="jaune"
          />
          <CardBib
            title="Accès à distance aux logiciels"
            Icon={AppWindow}
            href="/informatique/connexion-distance"
            moreText="En savoir plus"
            small
            color="jaune"
          />
          <CardBib
            title="Accès hors campus"
            Icon={Network}
            href="/informatique/hors-campus"
            moreText="Configuration Proxy et VPN"
            small
            color="jaune"
          />
        </CardRow>
      </section>

      <section className={styles.cardsSection}>
        <div className={styles.cardsContainer}>
          <div className={styles.leftColumn}>
            <CardMedia
              to="/creatives/vr"
              title="Réalité virtuelle"
              text="Immersion totale, expérience ultime."
              imageUrl="/img/home-vr.webp"
            />
            <CardMedia
              to="/informatique/ava"
              title="Postes Apportez Votre Appareil"
              text="Étendez votre horizon de travail."
              imageUrl="/img/home-ava.webp"
            />
          </div>
          <div className={styles.rightColumn}>
            <ProchainsAteliers />
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
            <a id="bouton-espaces" href="/espaces" className="button button--secondary">
  Découvrir nos espaces →
</a>
          </div>
          <div className={styles.spacesImages}>
            {['/img/espace-1.webp', '/img/espace-2.webp', '/img/espace-3.webp'].map(
              (src, idx) => (
                <div key={idx} className={styles.spacesImageWrapper}>
                  <img src={src} alt="" className={styles.spacesImage} />
                  <div className={styles.spacesOverlay} />
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}