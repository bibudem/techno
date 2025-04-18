// src/theme/DocItem/Content/index.js
import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import Heading from '@theme/Heading';
import MDXContent from '@theme/MDXContent';
import Retroaction from '@site/src/components/Retroaction/Retroaction';
// 1) Import de votre composant d’aide
import CardAide from '@site/src/components/CardAide';

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

  const showFeedback =
    frontMatter.retroaction !== false &&
    frontMatter.retroaction !== 'false' &&
    frontMatter.retroaction !== 'off';

  // 2) Récupération de la variante help du frontmatter ("info" ou "crea")
  const helpVariant = frontMatter.help;

  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
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