import React from 'react';
import Link from '@docusaurus/Link';
import { ArrowSquareOut, CalendarCheck, MapPin } from '@phosphor-icons/react';
import styles from './StudioCard.module.css';

const EXTERNAL_LINK_PATTERN = /^(?:[a-z][a-z\d+\-.]*:|\/\/)/i;

function isExternalLink(link) {
  return EXTERNAL_LINK_PATTERN.test(link);
}

function getLinkProps(link) {
  if (!link) {
    return { to: '#' };
  }

  if (isExternalLink(link)) {
    return {
      href: link,
      target: '_blank',
      rel: 'noopener noreferrer',
    };
  }

  return { to: link };
}

const StudioCard = ({
  title,
  location,
  description,
  mapLink,
  reserveLink,
  reserveText,
  secondaryLinks = [],
}) => (
  <article className={styles.card}>
    <div className={styles.topBar} aria-hidden="true" />

    <div className={styles.header}>
      <h3 className={styles.title}>{title}</h3>
      {location && (
        <p className={styles.location}>
          <MapPin size={18} weight="fill" aria-hidden="true" />
          <span>{location}</span>
        </p>
      )}
    </div>

    <div className={styles.body}>
      {mapLink && (
        <Link
          {...getLinkProps(mapLink)}
          className={styles.mapLink}
          data-ignore-external="true"
        >
          <ArrowSquareOut size={16} aria-hidden="true" />
          <span>Localiser sur Google Maps</span>
        </Link>
      )}

      {description && <p className={styles.description}>{description}</p>}
    </div>

    {(reserveLink || secondaryLinks.length > 0) && (
      <div className={styles.footer}>
        {reserveLink && reserveText && (
          <Link
            {...getLinkProps(reserveLink)}
            className={`${styles.action} ${styles.primary}`}
            data-ignore-external="true"
          >
            <CalendarCheck size={18} aria-hidden="true" />
            <span>{reserveText}</span>
          </Link>
        )}

        {secondaryLinks.slice(0, 2).map(({ href, text }, index) => (
          <Link
            key={index}
            {...getLinkProps(href)}
            className={`${styles.action} ${styles.secondary}`}
            data-ignore-external="true"
          >
            {text}
          </Link>
        ))}
      </div>
    )}
  </article>
);

export default StudioCard;
