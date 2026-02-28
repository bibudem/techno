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
  titleLink,
  location,
  description,
  mapLink,
  mapText = 'Localiser sur Google Maps',
  tags = [],
  tagsLabel = 'Modèles disponibles',
  reserveLink,
  reserveText,
  secondaryLinks = [],
}) => {
  const hasTags = tags.length > 0;

  return (
    <article className={`${styles.card} ${hasTags ? styles.cardWithTags : ''}`}>
      <div className={styles.topBar} aria-hidden="true" />

      <div className={styles.header}>
        <h3 className={styles.title}>
          {titleLink ? (
            <Link
              {...getLinkProps(titleLink)}
              className={styles.titleLink}
              data-ignore-external="true"
            >
              {title}
            </Link>
          ) : (
            title
          )}
        </h3>
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
            <span>{mapText}</span>
          </Link>
        )}

        {description && <p className={styles.description}>{description}</p>}

        {tags.length > 0 && (
          <div className={styles.tagsBlock}>
            <p className={styles.tagsLabel}>{tagsLabel}</p>
            <ul className={styles.tagsList}>
              {tags.map((tag, index) => {
                const tagData =
                  typeof tag === 'string' ? {label: tag, href: null} : tag;

                if (!tagData?.label) return null;

                return (
                  <li key={`${tagData.label}-${index}`} className={styles.tagItem}>
                    {tagData.href ? (
                      <Link
                        {...getLinkProps(tagData.href)}
                        className={styles.tagLink}
                        data-ignore-external="true"
                      >
                        {tagData.label}
                      </Link>
                    ) : (
                      <span className={styles.tagText}>{tagData.label}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
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
};

export default StudioCard;
