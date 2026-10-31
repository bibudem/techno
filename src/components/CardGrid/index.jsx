import React, {useId} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  ArrowRight,
  MapTrifold,
  Needle,
  Question,
  Yarn,
  Cube,
  VirtualReality,
  Circuitry,
  Nut,
  Scissors,
  Robot,
  Slideshow,
  FilmReel,
  Desktop,
  Microphone,
  VideoCamera,
  MonitorPlay,
  TreeStructure,
  Password,
  WifiHigh,
  Network,
  Printer,
  Scan,
  Laptop,
  Monitor,
  DeviceTablet,
  FilmStrip,
  AppWindow,
  Headphones,
  DesktopTower,
  BriefcaseMetal,
  Gauge,
  BookOpenText,
  FileAudio,
  Waveform,
  FileVideo,
  Record,
  PencilSimpleLine,
  CubeFocus,
} from '@phosphor-icons/react';
import {getLinkProps} from '@site/src/utils/links';
import styles from './CardGrid.module.css';


const iconMap = {
  Needle,
  MapTrifold,
  Yarn,
  Question,
  Cube,
  VirtualReality,
  Circuitry,
  Nut,
  Scissors,
  Robot,
  Slideshow,
  FilmReel,
  Desktop,
  Microphone,
  VideoCamera,
  MonitorPlay,
  TreeStructure,
  Password,
  WifiHigh,
  Network,
  Printer,
  Scan,
  Laptop,
  Monitor,
  DeviceTablet,
  FilmStrip,
  AppWindow,
  Headphones,
  DesktopTower,
  BriefcaseMetal,
  Gauge,
  BookOpenText,
  FileAudio,
  Waveform,
  FileVideo,
  Record,
  PencilSimpleLine,
  CubeFocus,
  needle: Needle,
  'map-trifold': MapTrifold,
  yarn: Yarn,
  question: Question,
};

// headingLevel : niveau des titres des cartes, selon la place de la grille dans la page
// empile : cartes l'une par-dessus l'autre, sur une seule colonne
export default function CardGrid({items = [], headingLevel = 2, empile = false}) {
  const gridId = useId();
  const Titre = `h${headingLevel}`;

  if (!items.length) {
    return null;
  }

  return (
    <div className={clsx(styles.grid, empile && styles.empile)} role="list">
      {items.map((item, idx) => {
        const Icon = iconMap[item.icon];
        const hasImage = Boolean(item.image);
        const description = typeof item.description === 'string'
          ? item.description.trim()
          : '';
        const hasDescription = Boolean(description);
        const titleId = `${gridId}-card-title-${idx}`;
        const descId = `${gridId}-card-desc-${idx}`;

        return (
          <article key={`${item.link || idx}-${idx}`} role="listitem" className={styles.item}>
            <Link
              {...getLinkProps(item.link)}
              className={clsx(styles.card, item.petit && styles.petit, item.mention && styles.misEnAvant)}
              data-ignore-external="true"
              aria-labelledby={titleId}
              aria-describedby={hasDescription ? descId : undefined}>
              <div className={styles.media} aria-hidden="true">
                {hasImage && (
                  <>
                    <img
                      className={styles.mediaImage}
                      src={item.image}
                      alt=""
                      loading="lazy"
                    />
                    <div className={styles.mediaShade} />
                  </>
                )}
                {Icon && (
                  <span className={styles.iconBadge}>
                    <Icon className={styles.icon} size={20} aria-hidden="true" />
                  </span>
                )}
              </div>

              <div className={styles.content}>
                {/* Format compact : pas de bandeau, l'icône passe au-dessus du titre */}
                {item.petit && Icon && (
                  <span className={styles.iconPetit} aria-hidden="true">
                    <Icon size={20} />
                  </span>
                )}
                <Titre id={titleId} className={styles.title}>
                  {/* Dans le titre pour faire partie du nom accessible du lien */}
                  {item.title}
                  {item.mention && <span className={styles.mention}>{item.mention}</span>}
                </Titre>
                {hasDescription && (
                  <p id={descId} className={styles.description}>
                    {description}
                  </p>
                )}
              </div>

              <div className={styles.footer} aria-hidden="true">
                <span className={styles.pastille}>
                  <ArrowRight className={styles.arrow} size={20} />
                </span>
              </div>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
