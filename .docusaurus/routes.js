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
    component: ComponentCreator('/', '50f'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '689'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '1b6'),
            routes: [
              {
                path: '/a-propos/',
                component: ComponentCreator('/a-propos/', '0f5'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/a-propos/accessibilite',
                component: ComponentCreator('/a-propos/accessibilite', '701'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/a-propos/contribuer',
                component: ComponentCreator('/a-propos/contribuer', '174'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/a-propos/equipe',
                component: ComponentCreator('/a-propos/equipe', '5c0'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/a-propos/mission',
                component: ComponentCreator('/a-propos/mission', '7f6'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/a-propos/politique',
                component: ComponentCreator('/a-propos/politique', '98f'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/creatives/',
                component: ComponentCreator('/creatives/', '45f'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/art-textile',
                component: ComponentCreator('/creatives/art-textile', '346'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/decoupeuse',
                component: ComponentCreator('/creatives/decoupeuse', 'd59'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/decoupeuse/brother',
                component: ComponentCreator('/creatives/decoupeuse/brother', '7dc'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/decoupeuse/cameo',
                component: ComponentCreator('/creatives/decoupeuse/cameo', 'ce2'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/decoupeuse/cricut',
                component: ComponentCreator('/creatives/decoupeuse/cricut', '441'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/electronique',
                component: ComponentCreator('/creatives/electronique', '0cd'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/electronique/arduino',
                component: ComponentCreator('/creatives/electronique/arduino', '6c6'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/electronique/ido',
                component: ComponentCreator('/creatives/electronique/ido', '7c1'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/electronique/pieces',
                component: ComponentCreator('/creatives/electronique/pieces', 'aaf'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/electronique/raspberrypi',
                component: ComponentCreator('/creatives/electronique/raspberrypi', '007'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/impression3d',
                component: ComponentCreator('/creatives/impression3d', '548'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/impression3d/imprimantes',
                component: ComponentCreator('/creatives/impression3d/imprimantes', '3c0'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/impression3d/modeles3d',
                component: ComponentCreator('/creatives/impression3d/modeles3d', '570'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/impression3d/techniques',
                component: ComponentCreator('/creatives/impression3d/techniques', '4cf'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/programmation',
                component: ComponentCreator('/creatives/programmation', 'efd'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/realisations',
                component: ComponentCreator('/creatives/realisations', '492'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/robots',
                component: ComponentCreator('/creatives/robots', '633'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/vr',
                component: ComponentCreator('/creatives/vr', '954'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/vr/catalogue',
                component: ComponentCreator('/creatives/vr/catalogue', 'a5a'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/vr/guide',
                component: ComponentCreator('/creatives/vr/guide', '54a'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/espaces/',
                component: ComponentCreator('/espaces/', '832'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/amphitheatre',
                component: ComponentCreator('/espaces/amphitheatre', 'dfa'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/ateliers',
                component: ComponentCreator('/espaces/ateliers', '2b3'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/guide/amphitheatre',
                component: ComponentCreator('/espaces/guide/amphitheatre', 'fa1'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/guide/visualisation',
                component: ComponentCreator('/espaces/guide/visualisation', '08d'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/laboformation',
                component: ComponentCreator('/espaces/laboformation', '8dc'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/salledevisio',
                component: ComponentCreator('/espaces/salledevisio', '77f'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/studioaudio',
                component: ComponentCreator('/espaces/studioaudio', 'f45'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/studiovideo',
                component: ComponentCreator('/espaces/studiovideo', '3b1'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/visualisation',
                component: ComponentCreator('/espaces/visualisation', '436'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/informatique/',
                component: ComponentCreator('/informatique/', '1fc'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/accessoires',
                component: ComponentCreator('/informatique/accessoires', '630'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/authentification',
                component: ComponentCreator('/informatique/authentification', 'd9a'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/ava',
                component: ComponentCreator('/informatique/ava', '827'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/connexion-distance',
                component: ComponentCreator('/informatique/connexion-distance', 'd91'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/consultation',
                component: ComponentCreator('/informatique/consultation', '299'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/hors-campus',
                component: ComponentCreator('/informatique/hors-campus', 'a93'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/impression',
                component: ComponentCreator('/informatique/impression', 'f56'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/Logiciels',
                component: ComponentCreator('/informatique/Logiciels', 'bab'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/accessibilite',
                component: ComponentCreator('/informatique/logiciels/accessibilite', '7f4'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/acrobat',
                component: ComponentCreator('/informatique/logiciels/acrobat', 'a4f'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/adobe',
                component: ComponentCreator('/informatique/logiciels/adobe', 'aa6'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/anaconda',
                component: ComponentCreator('/informatique/logiciels/anaconda', '42f'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/antidote',
                component: ComponentCreator('/informatique/logiciels/antidote', 'f8a'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/arcgis',
                component: ComponentCreator('/informatique/logiciels/arcgis', 'a2b'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/beyond2020',
                component: ComponentCreator('/informatique/logiciels/beyond2020', '9f3'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/cariseasyview',
                component: ComponentCreator('/informatique/logiciels/cariseasyview', '0d3'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/chemdraw',
                component: ComponentCreator('/informatique/logiciels/chemdraw', 'cd0'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/cmaptools',
                component: ComponentCreator('/informatique/logiciels/cmaptools', '151'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/davinciresolve',
                component: ComponentCreator('/informatique/logiciels/davinciresolve', 'ed7'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/endnote',
                component: ComponentCreator('/informatique/logiciels/endnote', 'e89'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/gaussian',
                component: ComponentCreator('/informatique/logiciels/gaussian', '731'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/gimp',
                component: ComponentCreator('/informatique/logiciels/gimp', '34e'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/hyperchem',
                component: ComponentCreator('/informatique/logiciels/hyperchem', '22b'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/inkscape',
                component: ComponentCreator('/informatique/logiciels/inkscape', 'e64'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/jabref',
                component: ComponentCreator('/informatique/logiciels/jabref', 'ee2'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/jaws',
                component: ComponentCreator('/informatique/logiciels/jaws', '06c'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/krita',
                component: ComponentCreator('/informatique/logiciels/krita', 'c5b'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/mathematica',
                component: ComponentCreator('/informatique/logiciels/mathematica', '626'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/meshroom',
                component: ComponentCreator('/informatique/logiciels/meshroom', '25f'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/musescore',
                component: ComponentCreator('/informatique/logiciels/musescore', 'c3b'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/office',
                component: ComponentCreator('/informatique/logiciels/office', '2fe'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/openrefine',
                component: ComponentCreator('/informatique/logiciels/openrefine', 'f32'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/pymol',
                component: ComponentCreator('/informatique/logiciels/pymol', '037'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/qdaminor',
                component: ComponentCreator('/informatique/logiciels/qdaminor', '788'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/qgis',
                component: ComponentCreator('/informatique/logiciels/qgis', '377'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/qtgrace',
                component: ComponentCreator('/informatique/logiciels/qtgrace', '755'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/reaper',
                component: ComponentCreator('/informatique/logiciels/reaper', '007'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/rstudio',
                component: ComponentCreator('/informatique/logiciels/rstudio', '6e3'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/sas',
                component: ComponentCreator('/informatique/logiciels/sas', '96e'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/spss',
                component: ComponentCreator('/informatique/logiciels/spss', 'a14'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/stata',
                component: ComponentCreator('/informatique/logiciels/stata', 'ba4'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/texmaker',
                component: ComponentCreator('/informatique/logiciels/texmaker', 'af9'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/wordstat',
                component: ComponentCreator('/informatique/logiciels/wordstat', 'aed'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/zoom',
                component: ComponentCreator('/informatique/logiciels/zoom', 'f77'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/zotero',
                component: ComponentCreator('/informatique/logiciels/zotero', 'b0d'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/zotero1',
                component: ComponentCreator('/informatique/logiciels/zotero1', '054'),
                exact: true
              },
              {
                path: '/informatique/numerisation',
                component: ComponentCreator('/informatique/numerisation', 'd8f'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/ordinateurs',
                component: ComponentCreator('/informatique/ordinateurs', 'ac6'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/proxy',
                component: ComponentCreator('/informatique/proxy', '64a'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/reseau',
                component: ComponentCreator('/informatique/reseau', '1bb'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/tablettes',
                component: ComponentCreator('/informatique/tablettes', '081'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/vinyle',
                component: ComponentCreator('/informatique/vinyle', 'a8e'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/vpn',
                component: ComponentCreator('/informatique/vpn', '8ca'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/introduction-impression-3d',
                component: ComponentCreator('/introduction-impression-3d', 'e59'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/medias/',
                component: ComponentCreator('/medias/', '1c1'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/audio',
                component: ComponentCreator('/medias/audio', '6b3'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/edition',
                component: ComponentCreator('/medias/edition', '768'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/infographie',
                component: ComponentCreator('/medias/infographie', '0be'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/postes-edition',
                component: ComponentCreator('/medias/postes-edition', '3c2'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/video',
                component: ComponentCreator('/medias/video', '166'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/visualisation',
                component: ComponentCreator('/medias/visualisation', 'fe8'),
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
