import { themes as prismThemes } from 'prism-react-renderer'
import remarkInsertHelp from './src/utils/remark-insert-help.js'

function disableIncompatibleWebpackbar() {
  return {
    name: 'disable-incompatible-webpackbar',
    configureWebpack(config, isServer, { currentBundler }) {
      if (currentBundler.name !== 'webpack') {
        return {}
      }

      const plugins = (config.plugins ?? []).filter(
        (plugin) => plugin?.constructor?.name !== 'WebpackBarPlugin',
      )

      return {
        mergeStrategy: { plugins: 'replace' },
        plugins,
      }
    },
  }
}


/** @type {import('@docusaurus/types').Config} */
const config = {

  title: 'studio·bib',
  tagline: '',
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
    disableIncompatibleWebpackbar,
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: ['/espaces/studiovideo'],
            to: '/espaces/studiosvideo',
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
          remarkPlugins: [remarkInsertHelp],
          breadcrumbs: true,
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/palette.css"),
            
          ],
        },
      }),
    ],
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
        { name: 'twitter:image', content: '/img/miniature.jpg' },
        { property: 'og:image', content: '/img/miniature.jpg' },
      ],
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      sidebar: {
        autoCollapseCategories: true,
      },
      image: 'img/docusaurus-social-card.jpg',
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
          // { type: 'docSidebar', sidebarId: 'aboutSidebar', position: 'left', label: 'À propos' },
          {
            to: '/a-propos/nous-joindre',
            label: 'Nous joindre',
            position: 'left'
          },
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
