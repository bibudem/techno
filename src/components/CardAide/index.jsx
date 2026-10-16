// src/components/CardAide.jsx
import React from 'react';
import useRevealOnScroll from '@site/src/utils/useRevealOnScroll';
import Link from '@docusaurus/Link';
import { HandWaving, ArrowRight } from '@phosphor-icons/react';
import styles from './CardAide.module.css';

const VARIANTS = {
  info: {
    title: 'Nous sommes là pour vous aider',
    text: 'Vous avez besoin d’une assistance informatique? Notre équipe est disponible pour vous guider à distance et en personne.',
    to: '/a-propos/soutien-informatique',
  },
  crea: {
    title: 'Nous sommes là pour vous aider',
    text: 'Vous avez un projet créatif ou souhaitez de l’aide? Notre équipe est là pour vous accompagner.',
    to: '/a-propos/soutien-creation',
  },
};

export default function CardAide({ variant = 'info', to }) {
  const { title, text, to: defaultTo } = VARIANTS[variant] || VARIANTS.info;
  const href = to ?? defaultTo;

  const iconRef = useRevealOnScroll(styles.animate);

  return (
    <Link className={styles.cardAide} to={href}>
      <div className={styles.iconContainer}>
        <HandWaving
          ref={iconRef}
          size={100}
          weight="duotone"
          className={styles.icon}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.arrowContainer}>
        <ArrowRight size={16} weight="bold" />
      </div>
    </Link>
  );
}