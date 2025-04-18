// src/components/CardAide.jsx
import React from 'react';
import Link from '@docusaurus/Link';
import {
  Laptop,
  CubeFocus,
  ArrowRight,
} from '@phosphor-icons/react';
import styles from './CardAide.module.css';

const VARIANTS = {
  info: {
    icon: Laptop,
    title: 'Nous sommes là pour vous aider',
    text: 'Vous avez besoin d’une assistance informatique? Notre équipe est à votre disposition pour vous guider.',
    to: '/a-propos/soutien-informatique',
  },
  crea: {
    icon: CubeFocus,
    title: 'Nous sommes là pour vous aider',
    text: 'Vous avez un projet créatif ou souhaitez de l’aide? Notre équipe est là pour vous accompagner.',
    to: '/a-propos/soutien-creation',
  },
};

export default function CardAide({ variant = 'info', to }) {
  const { icon: Icon, title, text, to: defaultTo } =
    VARIANTS[variant] || VARIANTS.info;
  const href = to ?? defaultTo;

  return (
    <Link className={styles.cardAide} to={href}>
      <div className={styles.iconContainer}>
        <Icon size={100} className={styles.icon} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text} dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
      <div className={styles.arrowContainer}>
        <ArrowRight size={16} weight="bold" />
      </div>
    </Link>
  );
}