// src/theme/DocItem/Content/index.js
import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import Heading from '@theme/Heading';
import MDXContent from '@theme/MDXContent';
import Retroaction from '@site/src/components/Retroaction';
// 1) Import de votre composant d’aide
import CardAide from '@site/src/components/CardAide';
import JsonLd, {ORGANISATION_ID, SITE_ID, SITE_URL} from '@site/src/utils/jsonLd';

// Données structurées de la page (schema.org) :
// - HowTo pour les guides dont les sections sont numérotées (« 1. … », « 2. … ») ;
// - WebPage sinon. Les deux portent la date de dernière mise à jour.
function texteToc(valeur) {
  return valeur
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

function useDonneesStructurees() {
  const {metadata, toc} = useDoc();
  const url = `${SITE_URL}${metadata.permalink}`;
  const dateModified = metadata.lastUpdatedAt
    ? new Date(metadata.lastUpdatedAt).toISOString()
    : undefined;

  const etapes = (toc || [])
    .filter((entree) => entree.level === 2)
    .map((entree) => ({id: entree.id, nom: texteToc(entree.value)}))
    .filter((entree) => /^\d+\s*[.)–-]\s*\S/.test(entree.nom));

  const commun = {
    '@context': 'https://schema.org',
    name: metadata.title,
    description: metadata.description,
    url,
    inLanguage: 'fr-CA',
    dateModified,
    isPartOf: {'@id': SITE_ID},
    publisher: {'@id': ORGANISATION_ID},
  };

  if (etapes.length >= 2) {
    return {
      ...commun,
      '@type': 'HowTo',
      step: etapes.map((etape, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: etape.nom.replace(/^\d+\s*[.)–-]\s*/, ''),
        url: `${url}#${etape.id}`,
      })),
    };
  }
  return {...commun, '@type': 'WebPage'};
}


function useSyntheticTitle() {
  const {metadata, frontMatter, contentTitle} = useDoc();
  const shouldRender =
    !frontMatter.hide_title && typeof contentTitle === 'undefined';
  if (!shouldRender) {
    return null;
  }
  return metadata.title;
}

export default function DocItemContent({children}) {
  const {frontMatter} = useDoc();
  const syntheticTitle = useSyntheticTitle();
  const donnees = useDonneesStructurees();

  const showFeedback =
    frontMatter.retroaction !== false &&
    frontMatter.retroaction !== 'false' &&
    frontMatter.retroaction !== 'off';

  // 2) Récupération de la variante help du frontmatter ("info" ou "crea")
  const helpVariant = frontMatter.help;

  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
      <JsonLd data={donnees} />
      {syntheticTitle && (
        <header>
          <Heading as="h1">{syntheticTitle}</Heading>
        </header>
      )}

      <MDXContent>{children}</MDXContent>

      {/* 3) Injection automatique de la carte d’aide si frontMatter.help est défini */}
      {helpVariant && (
        <div className="margin-top--lg">
          <CardAide variant={helpVariant} />
        </div>
      )}

      {showFeedback && (
        <div className="margin-top--lg">
          <Retroaction />
        </div>
      )}
    </div>
  );
}