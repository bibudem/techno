import {themes as prismThemes} from 'prism-react-renderer';
import remarkInsertHelp from './src/utils/remark-insert-help.js';
import webpPlugin from './plugins/docusaurus-plugin-webp/index.js';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'studio·bib',
  tagline: '',
  favicon: 'img/favicon.svg',

  url: 'https://techno.bib.umontreal.ca',
  baseUrl: '/',

  organizationName: 'bibudem',
  projectName: 'techno',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  clientModules: [
    require.resolve('./src/css/palette.css'),
    require.resolve('./src/clientModules/udemCookieConsent.js'),
    require.resolve('./src/clientModules/trackerLoader.js'),
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarCollapsible: true,
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          path: './docs',
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
          remarkPlugins: [remarkInsertHelp],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      './plugins/docusaurus-plugin-webp',
      { quality: 70, max: 1030, min: 640, steps: 2, disableInDev: true },
    ],
    [webpPlugin,
      {
        id: 'webp-local',  
      },],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      sidebar: {
        autoCollapseCategories: true,
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'techno·bib',
          src: 'img/logo-tb.svg',
        },
        items: [
          { type: 'docSidebar', sidebarId: 'espacesSidebar', position: 'left', label: 'Espaces' },
          { type: 'docSidebar', sidebarId: 'informatiqueSidebar', position: 'left', label: 'Ressources informatiques' },
          { type: 'docSidebar', sidebarId: 'creativesSidebar', position: 'left', label: 'Technologies créatives' },
          { type: 'docSidebar', sidebarId: 'mediasSidebar', position: 'left', label: 'Productions médias' },
          { type: 'docSidebar', sidebarId: 'aboutSidebar', position: 'left', label: 'À propos' },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;