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
import styles from './CardGrid.module.css';

const EXTERNAL_LINK_PATTERN = /^(?:[a-z][a-z\d+\-.]*:|\/\/)/i;

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

function isExternalLink(link) {
  return EXTERNAL_LINK_PATTERN.test(link);
}

function getLinkProps(link) {
  if (!link) {
    return {to: '#'};
  }

  return isExternalLink(link) ? {href: link} : {to: link};
}

export default function CardGrid({items = []}) {
  const gridId = useId();

  if (!items.length) {
    return null;
  }

  return (
    <div className={styles.grid} role="list">
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
              className={clsx(styles.card, item.petit && styles.petit, !hasImage && styles.cardNoImage)}
              data-ignore-external="true"
              aria-labelledby={titleId}
              aria-describedby={hasDescription ? descId : undefined}>
              <div className={styles.media} aria-hidden="true">
                {hasImage && (
                  <img
                    className={styles.mediaImage}
                    src={item.image}
                    alt=""
                    loading="lazy"
                  />
                )}
                <div className={styles.mediaShade} />
                {Icon && (
                  <span className={styles.iconBadge}>
                    <Icon className={styles.icon} size={20} aria-hidden="true" />
                  </span>
                )}
              </div>

              <div className={styles.content}>
                <h2 id={titleId} className={styles.title}>
                  {item.title}
                </h2>
                {hasDescription && (
                  <p id={descId} className={styles.description}>
                    {description}
                  </p>
                )}
              </div>

              <div className={styles.footer} aria-hidden="true">
                <ArrowRight className={styles.arrow} size={20} />
              </div>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
