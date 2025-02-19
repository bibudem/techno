import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '70d'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'dd3'),
        routes: [
          {
            path: '/tags',
            component: ComponentCreator('/tags', 'ce1'),
            exact: true
          },
          {
            path: '/tags/acces-hors-campus',
            component: ComponentCreator('/tags/acces-hors-campus', 'f7c'),
            exact: true
          },
          {
            path: '/tags/authentification',
            component: ComponentCreator('/tags/authentification', '366'),
            exact: true
          },
          {
            path: '/tags/proxy',
            component: ComponentCreator('/tags/proxy', 'd73'),
            exact: true
          },
          {
            path: '/tags/ressources-electroniques',
            component: ComponentCreator('/tags/ressources-electroniques', '17d'),
            exact: true
          },
          {
            path: '/tags/vpn',
            component: ComponentCreator('/tags/vpn', 'de2'),
            exact: true
          },
          {
            path: '/',
            component: ComponentCreator('/', '44f'),
            routes: [
              {
                path: '/a-propos/',
                component: ComponentCreator('/a-propos/', 'a04'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/a-propos/accessibilite',
                component: ComponentCreator('/a-propos/accessibilite', 'aa3'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/a-propos/contribuer',
                component: ComponentCreator('/a-propos/contribuer', '615'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/a-propos/equipe',
                component: ComponentCreator('/a-propos/equipe', 'ad6'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/a-propos/mission',
                component: ComponentCreator('/a-propos/mission', 'd1a'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/a-propos/reglements',
                component: ComponentCreator('/a-propos/reglements', '956'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/creatives/',
                component: ComponentCreator('/creatives/', '6f8'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/art-textile',
                component: ComponentCreator('/creatives/art-textile', '23e'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/decoupeuse',
                component: ComponentCreator('/creatives/decoupeuse', '217'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/decoupeuse/brother',
                component: ComponentCreator('/creatives/decoupeuse/brother', 'ee5'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/decoupeuse/cameo',
                component: ComponentCreator('/creatives/decoupeuse/cameo', 'f2b'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/decoupeuse/cricut',
                component: ComponentCreator('/creatives/decoupeuse/cricut', '1e7'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/electronique',
                component: ComponentCreator('/creatives/electronique', 'ea2'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/electronique/arduino',
                component: ComponentCreator('/creatives/electronique/arduino', 'b9d'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/electronique/ido',
                component: ComponentCreator('/creatives/electronique/ido', '828'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/electronique/pieces',
                component: ComponentCreator('/creatives/electronique/pieces', 'c2a'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/electronique/raspberrypi',
                component: ComponentCreator('/creatives/electronique/raspberrypi', '175'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/impression3d',
                component: ComponentCreator('/creatives/impression3d', '5e9'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/impression3d/imprimantes',
                component: ComponentCreator('/creatives/impression3d/imprimantes', 'ad3'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/impression3d/modeles3d',
                component: ComponentCreator('/creatives/impression3d/modeles3d', 'b20'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/impression3d/techniques',
                component: ComponentCreator('/creatives/impression3d/techniques', '9f6'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/programmation',
                component: ComponentCreator('/creatives/programmation', '1af'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/realisations',
                component: ComponentCreator('/creatives/realisations', 'd41'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/robots',
                component: ComponentCreator('/creatives/robots', 'b36'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/vr',
                component: ComponentCreator('/creatives/vr', '88d'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/vr/catalogue',
                component: ComponentCreator('/creatives/vr/catalogue', '7c6'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/vr/metaquest3',
                component: ComponentCreator('/creatives/vr/metaquest3', '6f4'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/espaces/',
                component: ComponentCreator('/espaces/', '9a0'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/amphitheatre',
                component: ComponentCreator('/espaces/amphitheatre', '807'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/ateliers',
                component: ComponentCreator('/espaces/ateliers', '1f4'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/laboformation',
                component: ComponentCreator('/espaces/laboformation', '376'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/salledevisio',
                component: ComponentCreator('/espaces/salledevisio', 'fb3'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/studioaudio',
                component: ComponentCreator('/espaces/studioaudio', '2e3'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/studiovideo',
                component: ComponentCreator('/espaces/studiovideo', 'f7c'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/visualisation',
                component: ComponentCreator('/espaces/visualisation', '3c9'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/informatique/',
                component: ComponentCreator('/informatique/', '86c'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/accessoires',
                component: ComponentCreator('/informatique/accessoires', '304'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/authentification',
                component: ComponentCreator('/informatique/authentification', '32d'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/ava',
                component: ComponentCreator('/informatique/ava', 'ce0'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/consultation',
                component: ComponentCreator('/informatique/consultation', 'cbb'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/hors-campus',
                component: ComponentCreator('/informatique/hors-campus', '4e1'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/impression',
                component: ComponentCreator('/informatique/impression', '883'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels',
                component: ComponentCreator('/informatique/logiciels', '331'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels-distance',
                component: ComponentCreator('/informatique/logiciels-distance', 'be0'),
                exact: true
              },
              {
                path: '/informatique/numerisation',
                component: ComponentCreator('/informatique/numerisation', '14f'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/ordinateurs',
                component: ComponentCreator('/informatique/ordinateurs', 'ea1'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/proxy',
                component: ComponentCreator('/informatique/proxy', 'd69'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/proxy/macos-13-et-plus',
                component: ComponentCreator('/informatique/proxy/macos-13-et-plus', '814'),
                exact: true
              },
              {
                path: '/informatique/reseau',
                component: ComponentCreator('/informatique/reseau', '9b2'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/tablettes',
                component: ComponentCreator('/informatique/tablettes', 'bd3'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/vinyle',
                component: ComponentCreator('/informatique/vinyle', '899'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/vpn',
                component: ComponentCreator('/informatique/vpn', 'e57'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/introduction-impression-3d',
                component: ComponentCreator('/introduction-impression-3d', '252'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/medias/',
                component: ComponentCreator('/medias/', '720'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/audio',
                component: ComponentCreator('/medias/audio', '5f0'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/edition',
                component: ComponentCreator('/medias/edition', '90f'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/infographie',
                component: ComponentCreator('/medias/infographie', 'fdf'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/postes-edition',
                component: ComponentCreator('/medias/postes-edition', 'ec8'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/video',
                component: ComponentCreator('/medias/video', 'f8f'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/visualisation',
                component: ComponentCreator('/medias/visualisation', '138'),
                exact: true,
                sidebar: "mediasSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
