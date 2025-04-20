import React from 'react';
import Link from '@docusaurus/Link';
import { ArrowRight } from '@phosphor-icons/react';
import styles from './CardMedia.module.css';

/**
 * CardMedia component without icon, just arrow
 * @param {{
 *   title: string,
 *   text: string,
 *   to: string,
 *   imageUrl: string
 * }} props
 */
export default function CardMedia({ title, text, to, imageUrl }) {
  return (
    <Link
      to={to}
      className={styles.cardMedia}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${imageUrl})`,
      }}
    >
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.arrowContainer}>
        <ArrowRight size={24} weight="light" />
      </div>
    </Link>
  );
}