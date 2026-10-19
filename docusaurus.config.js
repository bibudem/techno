import fs from 'node:fs'
import path from 'node:path'
import { themes as prismThemes } from 'prism-react-renderer'

const DESCRIPTION_SITE =
  "studio·bib : les services technologiques et créatifs des bibliothèques de l'Université de Montréal. Studios balado et vidéo, impression 3D, ateliers de fabrication, réalité virtuelle, postes d'édition, logiciels, accès à distance et soutien informatique pour la communauté UdeM."

// Pages exclues de llms.txt : brouillons (le plugin les ignore déjà) et pages
// « unlisted » (en préparation), repérées dans leur frontmatter.
function pagesNonListees(dossier = 'docs') {
  const resultat = []
  for (const entree of fs.readdirSync(dossier, { withFileTypes: true })) {
    const chemin = path.join(dossier, entree.name)
    if (entree.isDirectory()) {
      resultat.push(...pagesNonListees(chemin))
    } else if (/\.mdx?$/.test(entree.name)) {
      const debut = fs.readFileSync(chemin, 'utf8').slice(0, 1000)
      if (/^unlisted\s*:\s*true\b/m.test(debut)) resultat.push(path.relative('docs', chemin))
    }
  }
  return resultat
}

/** @type {import('@docusaurus/types').Config} */
const config = {

  title: 'studio·bib',
  tagline: DESCRIPTION_SITE,
  favicon: 'img/favicon.svg',


  url: 'https://studio.bib.umontreal.ca',
  baseUrl: '/',

  organizationName: 'bibudem',
  projectName: 'techno',

  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },
  
  // Build plus rapide : Rspack, SWC et Lightning CSS (paquet @docusaurus/faster).
  // v4 n'est pas activé en bloc : il renommerait les clés du localStorage (thème
  // des visiteurs, outil d'accessibilité). Seule l'option exigée par la génération
  // parallèle des pages est activée (aucun plugin du site n'utilise ce `head`).
  future: {
    faster: true,
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
    },
  },

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: false,
        language: ['fr'],
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        indexDocs: true,
        indexBlog: false,
        searchBarShortcut: false,
        docsPluginIdForPreferredVersion: 'default',
      },
    ],
  ],
  plugins: [
    // Fichiers pour les assistants d'IA (https://llmstxt.org) : /llms.txt (sommaire),
    // /llms-full.txt (tout le contenu) et une version Markdown de chaque page.
    [
      'docusaurus-plugin-llms',
      {
        title: 'studio·bib — Bibliothèques de l’Université de Montréal',
        description: DESCRIPTION_SITE,
        rootContent: [
          'Site officiel des services technologiques et créatifs des bibliothèques de l’Université de Montréal (UdeM).',
          'Les services s’adressent à la communauté UdeM (étudiants, personnel). Réservations et soutien : studio@bib.umontreal.ca.',
          'Chaque page existe aussi en Markdown : ajouter .md à son adresse.',
        ].join('\n\n'),
        generateMarkdownFiles: true,
        excludeImports: true,
        removeDuplicateHeadings: true,
        rewriteImageUrls: true,
        ignoreFiles: pagesNonListees(),
        includeOrder: [
          'index.md',
          'espaces/**',
          'informatique/**',
          'creatives/**',
          'medias/**',
          'a-propos/**',
        ],
        logLevel: 'quiet',
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: ['/espaces/studiovideo'],
            to: '/espaces/studiosvideo',
          },
          {
            from: ['/espaces/studioaudio'],
            to: '/espaces/studiosbalado',
          },
          {
            from: ['/creatives/impression3d/imprimantes3d'],
            to: '/creatives/impression3d',
          },
          {
            // Logiciels sans guide : pages retirées, le catalogue indique où les trouver
            from: [
              '/informatique/logiciels/accessibilite',
              '/informatique/logiciels/anaconda',
              '/informatique/logiciels/beyond2020',
              '/informatique/logiciels/cariseasyview',
              '/informatique/logiciels/gaussian',
              '/informatique/logiciels/gimp',
              '/informatique/logiciels/hyperchem',
              '/informatique/logiciels/inkscape',
              '/informatique/logiciels/jabref',
              '/informatique/logiciels/jaws',
              '/informatique/logiciels/krita',
              '/informatique/logiciels/mathematica',
              '/informatique/logiciels/meshroom',
              '/informatique/logiciels/musescore',
              '/informatique/logiciels/openrefine',
              '/informatique/logiciels/pymol',
              '/informatique/logiciels/qgis',
              '/informatique/logiciels/qtgrace',
              '/informatique/logiciels/reaper',
              '/informatique/logiciels/sas',
              '/informatique/logiciels/stata',
              '/informatique/logiciels/texmaker',
              '/informatique/logiciels/wordstat',
              '/informatique/logiciels/zoom',
            ],
            to: '/informatique/logiciels',
          },
        ],
      },
    ],
  ],
  clientModules: [
    // require.resolve('./src/clientModules/udemConsent.js'), 
    require.resolve('./src/clientModules/klaroLoader.js'),
    require.resolve('./src/clientModules/klaroContextualMedia.js'),
    require.resolve('./src/clientModules/accessibilitePersist.js'),
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          id: 'default',
          sidebarCollapsible: true,
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          path: './docs',
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/palette.css"),
            
          ],
        },
      }),
    ],
  ],
  // Données structurées communes à tout le site (schema.org) : qui publie le site,
  // à quelle institution il appartient, et comment y chercher.
  headTags: [
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': 'https://studio.bib.umontreal.ca/#organisation',
            name: 'studio·bib',
            alternateName: 'Services technologiques et créatifs des bibliothèques de l’Université de Montréal',
            url: 'https://studio.bib.umontreal.ca/',
            logo: 'https://studio.bib.umontreal.ca/img/logo-studiobib.svg',
            email: 'studio@bib.umontreal.ca',
            description: DESCRIPTION_SITE,
            parentOrganization: {
              '@type': 'Library',
              name: 'Bibliothèques de l’Université de Montréal',
              url: 'https://bib.umontreal.ca/',
              parentOrganization: {
                '@type': 'CollegeOrUniversity',
                name: 'Université de Montréal',
                url: 'https://www.umontreal.ca/',
              },
            },
            areaServed: { '@type': 'City', name: 'Montréal' },
          },
          {
            '@type': 'WebSite',
            '@id': 'https://studio.bib.umontreal.ca/#site',
            url: 'https://studio.bib.umontreal.ca/',
            name: 'studio·bib',
            description: DESCRIPTION_SITE,
            inLanguage: 'fr-CA',
            publisher: { '@id': 'https://studio.bib.umontreal.ca/#organisation' },
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://studio.bib.umontreal.ca/search?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          },
        ],
      }),
    },
  ],
  stylesheets: [
    '/accessibilite/widget.css',
  ],

  scripts: [
    {
      src: 'https://corvee.bib.umontreal.ca/loader.js',
      defer: true,
      type: 'module'
    },
    {
      src: '/accessibilite/widget.js',
      defer: true,
    }
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    
    ({

      announcementBar: {
      id: 'nouveau-studio-video',
      content:
      '🎥 Nouveau : découvrez le studio vidéo - incrustation en temps réel, prompteur et qualité professionnelle. <a href="/espaces/studiovideolsh">En savoir plus</a>.',
      backgroundColor: '#fff4e5',
      textColor: '#663c00',
      isCloseable: true,
    },

      metadata: [
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      sidebar: {
        autoCollapseCategories: true,
      },
      image: 'img/miniature.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'studio·bib',
          src: 'img/logo-tb.svg',
        },
        items: [
          { type: 'docSidebar', sidebarId: 'espacesSidebar', position: 'left', label: 'Espaces' },
          { type: 'docSidebar', sidebarId: 'informatiqueSidebar', position: 'left', label: 'Ressources informatiques' },
          { type: 'docSidebar', sidebarId: 'creativesSidebar', position: 'left', label: 'Technologies créatives' },
          { type: 'docSidebar', sidebarId: 'mediasSidebar', position: 'left', label: 'Productions médias' },
          { type: 'docSidebar', sidebarId: 'aboutSidebar', position: 'left', label: 'À propos' },
          // {
          //   to: 'https://bib.umontreal.ca',
          //   label: 'bib.umontreal.ca',
          //   position: 'right',
          //   className: 'external-highlight-link',
          //   external : false,
          // },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
}

export default config
