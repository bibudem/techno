import React from 'react';
import Link from '@docusaurus/Link';
import { ArrowRight } from '@phosphor-icons/react';
import styles from './CardImage.module.css';

export default function CardImage({ to, title, description, image }) {
  const backgroundImage = `
    linear-gradient(
      to right,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1)
    ),
    url("${image}")
  `;
  return (
    <div
      className={styles.cardImage}
      style={{ backgroundImage }}
    >
      <Link
        to={to}
        className={styles.cardImageOverlay}
        aria-label={`Accéder à la page ${title}`}
      />
      <div>
        <h3 className={styles.cardImageTitle}>{title}</h3>
        <p
          className={styles.cardImageText}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <div className={styles.cardImageArrow}>
        <ArrowRight size={24} weight="light" color="#000" />
      </div>
    </div>
  );
}