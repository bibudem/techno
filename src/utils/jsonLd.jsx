import React from 'react';
import Head from '@docusaurus/Head';

// Données structurées schema.org (JSON-LD) : elles décrivent le contenu de façon
// non ambiguë pour les moteurs de recherche et les assistants d'IA.

export const SITE_URL = 'https://studio.bib.umontreal.ca';
export const ORGANISATION_ID = `${SITE_URL}/#organisation`;
export const SITE_ID = `${SITE_URL}/#site`;

// Texte brut d'un contenu React (chaîne, nombre, élément JSX, tableau…),
// pour les champs comme l'emplacement, souvent écrits en JSX dans les pages.
export function texteDe(noeud) {
  if (noeud == null || typeof noeud === 'boolean') return '';
  if (typeof noeud === 'string' || typeof noeud === 'number') return String(noeud);
  if (Array.isArray(noeud)) return noeud.map(texteDe).join('');
  if (React.isValidElement(noeud)) return texteDe(noeud.props.children);
  return '';
}

export function nettoyer(texte) {
  return texte.replace(/\s+/g, ' ').trim();
}

// URL absolue à partir d'un lien interne (/espaces/…) ou externe
export function urlAbsolue(lien) {
  if (!lien) return undefined;
  if (/^[a-z][a-z\d+\-.]*:/i.test(lien)) return lien;
  return `${SITE_URL}${lien.startsWith('/') ? '' : '/'}${lien}`;
}

// Retire les clés vides pour garder un JSON-LD propre
function compact(objet) {
  if (Array.isArray(objet)) return objet.map(compact);
  if (objet && typeof objet === 'object') {
    return Object.fromEntries(
      Object.entries(objet)
        .filter(([, v]) => v !== undefined && v !== null && v !== '' && !(Array.isArray(v) && !v.length))
        .map(([k, v]) => [k, compact(v)]),
    );
  }
  return objet;
}

export default function JsonLd({data}) {
  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(compact(data))}</script>
    </Head>
  );
}
