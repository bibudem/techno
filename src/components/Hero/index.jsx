import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {BellRinging, HandWaving} from '@phosphor-icons/react';
import useRevealOnScroll from '@site/src/utils/useRevealOnScroll';
import styles from './Hero.module.css';

// Bandeau d'appel à l'action : icône animée, titre, texte et bouton.
// - variante "centree" : pleine largeur, centrée (page d'accueil) ;
// - variante "ligne" : encadré, icône à gauche (pages de documentation).
// Contenus prêts à l'emploi : <Hero preset="aide" />, <Hero preset="droitAuteur" />.
// Chaque prop peut aussi être passée directement (et remplace celle du préréglage).

const PRESETS = {
  aide: {
    variante: 'centree',
    icone: HandWaving,
    couleurIcone: 'var(--jaune)',
    animation: 'vague',
    titre: 'Nous sommes là pour vous aider',
    texte: (
      <>
        Besoin d’un coup de main? Que ce soit pour l’informatique ou la création,
        <br />
        notre équipe est là pour vous soutenir.
      </>
    ),
    lien: {to: '/a-propos/nous-joindre', label: 'Nous joindre'},
  },
  droitAuteur: {
    variante: 'ligne',
    icone: BellRinging,
    couleurIcone: 'var(--rouge-orange-500)',
    animation: 'cloche',
    titre: 'Droit d’auteur et création',
    texte: 'Protégez vos créations et respectez celles des autres.',
    lien: {
      to: 'https://boite-outils.bib.umontreal.ca/c.php?g=740213&p=5341650',
      label: 'Consulter le guide',
    },
  },
};

const ANIMATIONS = {vague: styles.vague, cloche: styles.cloche};

export default function Hero({preset, headingLevel = 2, ...props}) {
  const {
    variante = 'ligne',
    icone: Icone,
    couleurIcone = 'var(--bleu-500)',
    animation,
    titre,
    texte,
    lien,
  } = {...PRESETS[preset], ...props};
  const Titre = `h${headingLevel}`;
  const iconRef = useRevealOnScroll(ANIMATIONS[animation]);

  return (
    <section className={clsx(styles.hero, styles[variante])}>
      {Icone && (
        <div className={styles.iconWrapper}>
          <Icone
            ref={iconRef}
            size={128}
            color={couleurIcone}
            weight="duotone"
            className={clsx(styles.icon, animation === 'cloche' && styles.iconCloche)}
            aria-hidden="true"
          />
        </div>
      )}
      <div className={styles.content}>
        <Titre className={styles.title}>{titre}</Titre>
        {texte && <p className={styles.text}>{texte}</p>}
        {lien && (
          <Link className="button button--primary" to={lien.to}>
            {lien.label}
          </Link>
        )}
      </div>
    </section>
  );
}
