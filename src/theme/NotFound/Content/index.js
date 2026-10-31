// Page 404 reprise de bibweb (src/pages/404.astro) : causes probables, recherche
// limitée à ce site et préremplie avec les mots de l'adresse, pages utiles.
import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useLocation} from '@docusaurus/router';
import {PageMetadata} from '@docusaurus/theme-common';
import {ArrowLeft, MagnifyingGlass} from '@phosphor-icons/react';
import styles from './styles.module.css';

const LIENS = [
  {libelle: 'Configurer le proxy', href: '/informatique/proxy'},
  {libelle: 'Connexion à distance aux logiciels', href: '/informatique/connexion-distance'},
  {libelle: 'Catalogue des logiciels', href: '/informatique/logiciels'},
  {libelle: 'Impression', href: '/informatique/impression'},
  {libelle: 'Impression 3D', href: '/creatives/impression3d'},
  {libelle: 'Studios balado', href: '/espaces/studiosbalado'},
  {libelle: 'Soutien informatique', href: '/a-propos/soutien-informatique'},
];

// /proxy-macos/ → « proxy macos ». Rien pour les extensions et les chiffres seuls.
function motsDeLAdresse(pathname) {
  let chemin = pathname;
  try {
    chemin = decodeURIComponent(chemin);
  } catch {
    // adresse mal encodée : on garde le texte brut
  }
  return chemin
    .replace(/\.[a-z0-9]+$/i, '')
    .split(/[/\-_.+]+/)
    .filter((mot) => mot && !/^\d+$/.test(mot))
    .join(' ');
}

export default function NotFoundContent({className}) {
  const {pathname} = useLocation();
  const [recherche, setRecherche] = useState('');
  const actionRecherche = useBaseUrl('/search');
  const image = useBaseUrl('/img/404.webp');

  useEffect(() => {
    setRecherche(motsDeLAdresse(pathname));
  }, [pathname]);

  return (
    <main className={clsx(styles.page, className)}>
      <PageMetadata title="Page non trouvée" />
      <img src={image} alt="Erreur 404" width="604" height="373" className={styles.illustration} />
      <div className={styles.contenu}>
      <h1 className={styles.titre}>Désolés... nous n'avons pas trouvé ce que vous demandez.</h1>
      <p className={styles.causes}>
        L'adresse est peut-être mal tapée, ou la page a été déplacée ou supprimée.
      </p>

      <form className={styles.recherche} action={actionRecherche} method="get" role="search" aria-label="Recherche">
        <label className={styles.etiquette} htmlFor="recherche-404">
          Rechercher dans studio·bib
        </label>
        <div className={styles.champ}>
          <input
            id="recherche-404"
            className={styles.saisie}
            type="search"
            name="q"
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            placeholder="Proxy, logiciels, impression 3D…"
            required
            autoComplete="off"
            enterKeyHint="search"
          />
          <button type="submit" className={styles.boutonRecherche} aria-label="Chercher">
            <MagnifyingGlass size={22} weight="bold" aria-hidden="true" />
          </button>
        </div>
      </form>

      <h2 className={styles.sousTitre}>Ces pages peuvent vous aider</h2>
      <ul className={styles.liens}>
        {LIENS.map(({libelle, href}) => (
          <li key={href}>
            <Link to={href}>{libelle}</Link>
          </li>
        ))}
      </ul>

      <p className={styles.signaler}>
        Ce lien brisé vient de notre site? <Link to="/a-propos/nous-joindre">Signalez-le-nous</Link>.
      </p>

      <Link to="/" className={clsx('button button--primary', styles.retour)}>
        <ArrowLeft size={20} aria-hidden="true" />
        Retour à la page d'accueil
      </Link>
      </div>
    </main>
  );
}
