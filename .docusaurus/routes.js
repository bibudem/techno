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
    component: ComponentCreator('/', '537'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'c4d'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '98e'),
            routes: [
              {
                path: '/a-propos/',
                component: ComponentCreator('/a-propos/', '775'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/a-propos/accessibilite',
                component: ComponentCreator('/a-propos/accessibilite', '8ef'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/a-propos/contribuer',
                component: ComponentCreator('/a-propos/contribuer', '69c'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/a-propos/equipe',
                component: ComponentCreator('/a-propos/equipe', '898'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/a-propos/mission',
                component: ComponentCreator('/a-propos/mission', '3ca'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/a-propos/politique',
                component: ComponentCreator('/a-propos/politique', '4d3'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/creatives/',
                component: ComponentCreator('/creatives/', 'b4b'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/art-textile',
                component: ComponentCreator('/creatives/art-textile', '15c'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/decoupeuse',
                component: ComponentCreator('/creatives/decoupeuse', '81c'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/decoupeuse/brother',
                component: ComponentCreator('/creatives/decoupeuse/brother', 'f18'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/decoupeuse/cameo',
                component: ComponentCreator('/creatives/decoupeuse/cameo', '256'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/decoupeuse/cricut',
                component: ComponentCreator('/creatives/decoupeuse/cricut', 'e33'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/electronique',
                component: ComponentCreator('/creatives/electronique', '8fc'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/electronique/arduino',
                component: ComponentCreator('/creatives/electronique/arduino', 'a59'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/electronique/ido',
                component: ComponentCreator('/creatives/electronique/ido', '251'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/electronique/pieces',
                component: ComponentCreator('/creatives/electronique/pieces', '8cf'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/electronique/raspberrypi',
                component: ComponentCreator('/creatives/electronique/raspberrypi', '0e6'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/impression3d',
                component: ComponentCreator('/creatives/impression3d', '331'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/impression3d/imprimantes',
                component: ComponentCreator('/creatives/impression3d/imprimantes', '140'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/impression3d/modeles3d',
                component: ComponentCreator('/creatives/impression3d/modeles3d', 'a28'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/impression3d/techniques',
                component: ComponentCreator('/creatives/impression3d/techniques', '999'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/programmation',
                component: ComponentCreator('/creatives/programmation', 'a1e'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/realisations',
                component: ComponentCreator('/creatives/realisations', '07f'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/robots',
                component: ComponentCreator('/creatives/robots', '85f'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/vr',
                component: ComponentCreator('/creatives/vr', '21a'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/vr/catalogue',
                component: ComponentCreator('/creatives/vr/catalogue', 'bb4'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/vr/guide',
                component: ComponentCreator('/creatives/vr/guide', '6d6'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/espaces/',
                component: ComponentCreator('/espaces/', 'f50'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/amphitheatre',
                component: ComponentCreator('/espaces/amphitheatre', '25f'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/ateliers',
                component: ComponentCreator('/espaces/ateliers', 'af6'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/guide/amphitheatre',
                component: ComponentCreator('/espaces/guide/amphitheatre', '574'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/guide/visualisation',
                component: ComponentCreator('/espaces/guide/visualisation', 'c4a'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/laboformation',
                component: ComponentCreator('/espaces/laboformation', 'e38'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/salledevisio',
                component: ComponentCreator('/espaces/salledevisio', '648'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/studioaudio',
                component: ComponentCreator('/espaces/studioaudio', 'e0d'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/studiovideo',
                component: ComponentCreator('/espaces/studiovideo', '76b'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/visualisation',
                component: ComponentCreator('/espaces/visualisation', '64b'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/informatique/',
                component: ComponentCreator('/informatique/', '09d'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/accessoires',
                component: ComponentCreator('/informatique/accessoires', '3ad'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/authentification',
                component: ComponentCreator('/informatique/authentification', '357'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/ava',
                component: ComponentCreator('/informatique/ava', 'ea1'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/connexion-distance',
                component: ComponentCreator('/informatique/connexion-distance', '50c'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/consultation',
                component: ComponentCreator('/informatique/consultation', 'c02'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/hors-campus',
                component: ComponentCreator('/informatique/hors-campus', 'c1c'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/impression',
                component: ComponentCreator('/informatique/impression', 'e83'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/Logiciels',
                component: ComponentCreator('/informatique/Logiciels', 'ec8'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/accessibilite',
                component: ComponentCreator('/informatique/logiciels/accessibilite', '464'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/acrobat',
                component: ComponentCreator('/informatique/logiciels/acrobat', '5ae'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/adobe',
                component: ComponentCreator('/informatique/logiciels/adobe', 'd0b'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/anaconda',
                component: ComponentCreator('/informatique/logiciels/anaconda', '2a7'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/antidote',
                component: ComponentCreator('/informatique/logiciels/antidote', '443'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/arcgis',
                component: ComponentCreator('/informatique/logiciels/arcgis', '0f8'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/beyond2020',
                component: ComponentCreator('/informatique/logiciels/beyond2020', '795'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/cariseasyview',
                component: ComponentCreator('/informatique/logiciels/cariseasyview', '413'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/chemdraw',
                component: ComponentCreator('/informatique/logiciels/chemdraw', 'd0e'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/cmaptools',
                component: ComponentCreator('/informatique/logiciels/cmaptools', '765'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/davinciresolve',
                component: ComponentCreator('/informatique/logiciels/davinciresolve', '1f4'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/endnote',
                component: ComponentCreator('/informatique/logiciels/endnote', '8a8'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/gaussian',
                component: ComponentCreator('/informatique/logiciels/gaussian', '22b'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/gimp',
                component: ComponentCreator('/informatique/logiciels/gimp', 'ad0'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/hyperchem',
                component: ComponentCreator('/informatique/logiciels/hyperchem', 'bb0'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/inkscape',
                component: ComponentCreator('/informatique/logiciels/inkscape', '025'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/jabref',
                component: ComponentCreator('/informatique/logiciels/jabref', '26d'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/jaws',
                component: ComponentCreator('/informatique/logiciels/jaws', 'db4'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/krita',
                component: ComponentCreator('/informatique/logiciels/krita', 'c0a'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/mathematica',
                component: ComponentCreator('/informatique/logiciels/mathematica', '8fa'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/meshroom',
                component: ComponentCreator('/informatique/logiciels/meshroom', '559'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/musescore',
                component: ComponentCreator('/informatique/logiciels/musescore', '3b5'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/office',
                component: ComponentCreator('/informatique/logiciels/office', '798'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/openrefine',
                component: ComponentCreator('/informatique/logiciels/openrefine', '34d'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/pymol',
                component: ComponentCreator('/informatique/logiciels/pymol', 'd7b'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/qdaminor',
                component: ComponentCreator('/informatique/logiciels/qdaminor', 'b5a'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/qgis',
                component: ComponentCreator('/informatique/logiciels/qgis', 'd2b'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/qtgrace',
                component: ComponentCreator('/informatique/logiciels/qtgrace', 'd6a'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/reaper',
                component: ComponentCreator('/informatique/logiciels/reaper', 'd36'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/rstudio',
                component: ComponentCreator('/informatique/logiciels/rstudio', '714'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/sas',
                component: ComponentCreator('/informatique/logiciels/sas', '9c8'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/spss',
                component: ComponentCreator('/informatique/logiciels/spss', '637'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/stata',
                component: ComponentCreator('/informatique/logiciels/stata', '6da'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/texmaker',
                component: ComponentCreator('/informatique/logiciels/texmaker', 'fc1'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/wordstat',
                component: ComponentCreator('/informatique/logiciels/wordstat', '91d'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/zoom',
                component: ComponentCreator('/informatique/logiciels/zoom', '4a3'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/zotero',
                component: ComponentCreator('/informatique/logiciels/zotero', '1eb'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/numerisation',
                component: ComponentCreator('/informatique/numerisation', '114'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/ordinateurs',
                component: ComponentCreator('/informatique/ordinateurs', '40f'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/proxy',
                component: ComponentCreator('/informatique/proxy', '1cb'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/reseau',
                component: ComponentCreator('/informatique/reseau', '079'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/tablettes',
                component: ComponentCreator('/informatique/tablettes', '4be'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/vinyle',
                component: ComponentCreator('/informatique/vinyle', '457'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/vpn',
                component: ComponentCreator('/informatique/vpn', '132'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/introduction-impression-3d',
                component: ComponentCreator('/introduction-impression-3d', '55f'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/medias/',
                component: ComponentCreator('/medias/', '1ba'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/audio',
                component: ComponentCreator('/medias/audio', 'c09'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/edition',
                component: ComponentCreator('/medias/edition', '06e'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/infographie',
                component: ComponentCreator('/medias/infographie', '31d'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/postes-edition',
                component: ComponentCreator('/medias/postes-edition', 'b45'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/video',
                component: ComponentCreator('/medias/video', '461'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/visualisation',
                component: ComponentCreator('/medias/visualisation', '5c6'),
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
