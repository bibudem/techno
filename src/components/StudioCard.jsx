import React from 'react';
import Link from '@docusaurus/Link';
import { ArrowSquareOut, CalendarCheck, MapPin } from '@phosphor-icons/react';
import { getLinkProps } from '@site/src/utils/links';
import styles from './StudioCard.module.css';

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
  beforeReserve,
}) => {
  return (
    <article className={styles.card}>
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

      {beforeReserve && <div className={styles.beforeReserve}>{beforeReserve}</div>}

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
