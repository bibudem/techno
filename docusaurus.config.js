

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'techno·bib',
  tagline: 'Bibliothèque UdeM',
  favicon: 'img/favicon.ico',

  url: 'https://techno.bib.umontreal.ca',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  organizationName: 'bibudem', // Usually your GitHub org/user name.
  projectName: 'techno', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarCollapsible: true,
          sidebarPath: './sidebars.js',
            routeBasePath: '/', // Cela met les documents à la racine
            path: './docs', // Chemin local du répertoire docs


        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
  
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },

      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'techno·bib',
          src: 'img/logo-tb.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'espacesSidebar',
            position: 'left',
            label: 'Espaces',
          },
          {
            type: 'docSidebar',
            sidebarId: 'informatiqueSidebar',
            position: 'left',
            label: 'Ressources informatiques',
          },
          {
            type: 'docSidebar',
            sidebarId: 'creativesSidebar',
            position: 'left',
            label: 'Technologies créatives',
          },
          {
            type: 'docSidebar',
            sidebarId: 'mediasSidebar',
            position: 'left',
            label: 'Productions médias',
          },
          {
            type: 'docSidebar',
            sidebarId: 'aboutSidebar',
            position: 'left',
            label: 'À propos',
          },

        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Titre1',
            items: [
              {
                label: 'Lien1',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Titre2',
            items: [
              {
                label: 'Lien1',
                href: '#',
              },
              {
                label: 'Lien2',
                href: '#',
              },
              {
                label: 'Lien3',
                href: '#',
              },
            ],
          },
          {
            title: 'Titre3',
            items: [
              {
                label: 'Lien1',
                to: '/blog',
              },
              {
                label: 'Lien2',
                href: '#',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Les bibliothèques de l'Université de Montréal`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
