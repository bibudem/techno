// src/pages/index.jsx
import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import CardBib from '@site/src/components/CardBib';
import CardRow from '@site/src/components/CardRow';
import ProchainsAteliers from '@site/src/components/ProchainsAteliers';
import {
  Cube,
  AppWindow,
  Network,
  Microphone,
  ArrowRight,
} from '@phosphor-icons/react';

const images = [
  '/img/homepage1.webp',
  '/img/homepage2.webp',
  '/img/homepage3.webp',
  '/img/homepage4.webp',
  '/img/homepage5.webp',
];

const slogans = [
  'Là où les idées prennent vie.',
  'Imaginez. Réalisez. Partagez.',
  'La créativité en action.',
  'L’innovation au service de la communauté.',
  'Faites vibrer vos idées.',
  'L’étincelle de vos projets.',
  'Les bibliothèques en mode création numérique.',
  'Connectés par la créativité.',
  'La créativité comme moteur de recherche.',
];

const miniHeroes = [
  {
    title: 'Postes d’édition',
    description:
      'Montez vos projets vidéo, audio et graphiques avec des logiciels spécialisés.',
    href: '/medias/postes-edition',
    image: '/img/cover/edition.webp',
  },
  {
    title: 'Réalité virtuelle',
    description:
      'Explorez des expériences immersives avec les casques Meta Quest 3 disponibles en bibliothèque.',
    href: '/creatives/vr',
    image: '/img/cover/vr.webp',
  },
];

const infoHeroes = [
  {
    title: 'Problème informatique? Pas de panique!',
    description: 'Notre équipe est là pour vous soutenir.',
    href: '/a-propos/soutien-informatique/',
    image: '/img/home-info.webp',
  },
  {
    title: 'Postes Apportez Votre Appareil',
    description: 'Étendez votre horizon de travail.',
    href: '/informatique/ava',
    image: '/img/home-ava.webp',
  },
];

export default function PageAccueil() {
  // Choix aléatoire dès l'initialisation (pas de re-render inutile)
  const [randomImage] = React.useState(
    () => images[Math.floor(Math.random() * images.length)]
  );
  const [subtitle] = React.useState(
    () => slogans[Math.floor(Math.random() * slogans.length)]
  );

  return (
    <>
      <section
        className={styles.introSection}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), var(--c-111111)), url(${randomImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '0 0 12px 12px',
          color: 'var(--white)',
        }}
      >
<div className={styles.introContainer}>
  <div className={styles.introHeader}>
    <img 
      src="/img/logo-studiobib.svg" 
      alt="studio·bib" 
      className={styles.introLogo} 
    />
    <p className={styles.introSubtitleRight}>
      {subtitle}
    </p>
  </div>
  <div className={styles.introButtons}>{/* Boutons */}</div>
</div>
      </section>

      <section className="homepage-section">
        <CardRow>
          <CardBib
            title="Studios balado"
            Icon={Microphone}
            href="/espaces/studiosbalado"
            moreText="Découvrir les studios"
            small
            color="jaune"
          />
          <CardBib
            title="Impression 3D"
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
            {infoHeroes.map((hero) => (
              <Link
                key={hero.href}
                to={hero.href}
                className={`${styles.miniHeroCard} ${styles.leftMiniHeroCard}`}
                style={{
                  backgroundImage: `url(${hero.image})`,
                }}
              >
                <div className={styles.miniHeroContent}>
                  <h3 className={styles.miniHeroTitle}>{hero.title}</h3>
                  <p className={styles.miniHeroText}>{hero.description}</p>
                </div>
                <span className={styles.miniHeroArrow}>
                  <ArrowRight size={24} weight="light" aria-hidden="true" />
                </span>
              </Link>
            ))}
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
              Des espaces pour créer, fabriquer et expérimenter
            </h2>
            <p className={styles.spacesDescription}>
              Les Ateliers de fabrication sont des lieux ouverts à la communauté UdeM pour explorer la fabrication numérique : impression 3D, découpeuse, électronique et plus encore.
Venez découvrir les outils, développer vos projets et concrétiser vos idées, avec l’accompagnement de notre équipe.
            </p>
            <a
              href="/espaces/ateliers"
              className={`button button--secondary ${styles.spacesButtonLink}`}
            >
              <span>Découvrir les Ateliers</span>
              <ArrowRight
                size={20}
                weight="light"
                className={styles.spacesButtonIcon}
                aria-hidden="true"
              />
            </a>
          </div>
          <div className={styles.spacesImages}>
            {['/img/espace-2.webp', '/img/espace-3.webp'].map(
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

      <section className={styles.miniHeroesSection}>
        <div className={styles.miniHeroesContainer}>
          {miniHeroes.map((hero) => (
            <Link
              key={hero.href}
              to={hero.href}
              className={styles.miniHeroCard}
              style={{
                backgroundImage: `url(${hero.image})`,
              }}
            >
              <div className={styles.miniHeroContent}>
                <h3 className={styles.miniHeroTitle}>{hero.title}</h3>
                <p className={styles.miniHeroText}>{hero.description}</p>
              </div>
              <span className={styles.miniHeroArrow}>
                <ArrowRight size={24} weight="light" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
