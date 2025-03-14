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
    component: ComponentCreator('/', '13f'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '4f2'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'd9c'),
            routes: [
              {
                path: '/a-propos/',
                component: ComponentCreator('/a-propos/', '708'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/a-propos/accessibilite',
                component: ComponentCreator('/a-propos/accessibilite', 'ff9'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/a-propos/contribuer',
                component: ComponentCreator('/a-propos/contribuer', '518'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/a-propos/equipe',
                component: ComponentCreator('/a-propos/equipe', '048'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/a-propos/mission',
                component: ComponentCreator('/a-propos/mission', '9fc'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/a-propos/politique',
                component: ComponentCreator('/a-propos/politique', '405'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/creatives/',
                component: ComponentCreator('/creatives/', '208'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/art-textile',
                component: ComponentCreator('/creatives/art-textile', 'd08'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/decoupeuse',
                component: ComponentCreator('/creatives/decoupeuse', 'd9c'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/decoupeuse/brother',
                component: ComponentCreator('/creatives/decoupeuse/brother', 'c25'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/decoupeuse/cameo',
                component: ComponentCreator('/creatives/decoupeuse/cameo', 'b8e'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/decoupeuse/cricut',
                component: ComponentCreator('/creatives/decoupeuse/cricut', '27e'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/electronique',
                component: ComponentCreator('/creatives/electronique', '264'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/electronique/arduino',
                component: ComponentCreator('/creatives/electronique/arduino', '77c'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/electronique/ido',
                component: ComponentCreator('/creatives/electronique/ido', '1d1'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/electronique/pieces',
                component: ComponentCreator('/creatives/electronique/pieces', '581'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/electronique/raspberrypi',
                component: ComponentCreator('/creatives/electronique/raspberrypi', '738'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/impression3d',
                component: ComponentCreator('/creatives/impression3d', '0fe'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/impression3d/imprimantes',
                component: ComponentCreator('/creatives/impression3d/imprimantes', '813'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/impression3d/modeles3d',
                component: ComponentCreator('/creatives/impression3d/modeles3d', '8fb'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/impression3d/techniques',
                component: ComponentCreator('/creatives/impression3d/techniques', 'cb2'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/programmation',
                component: ComponentCreator('/creatives/programmation', '06a'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/realisations',
                component: ComponentCreator('/creatives/realisations', 'f92'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/robots',
                component: ComponentCreator('/creatives/robots', 'a7c'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/vr',
                component: ComponentCreator('/creatives/vr', 'fea'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/vr/catalogue',
                component: ComponentCreator('/creatives/vr/catalogue', '6c6'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/vr/guide',
                component: ComponentCreator('/creatives/vr/guide', 'afc'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/espaces/',
                component: ComponentCreator('/espaces/', 'cd2'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/amphitheatre',
                component: ComponentCreator('/espaces/amphitheatre', '2db'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/ateliers',
                component: ComponentCreator('/espaces/ateliers', 'ce7'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/guide/amphitheatre',
                component: ComponentCreator('/espaces/guide/amphitheatre', 'a78'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/guide/visualisation',
                component: ComponentCreator('/espaces/guide/visualisation', '994'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/laboformation',
                component: ComponentCreator('/espaces/laboformation', '590'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/salledevisio',
                component: ComponentCreator('/espaces/salledevisio', '9ed'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/studioaudio',
                component: ComponentCreator('/espaces/studioaudio', '706'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/studiovideo',
                component: ComponentCreator('/espaces/studiovideo', '247'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/visualisation',
                component: ComponentCreator('/espaces/visualisation', 'ad8'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/informatique/',
                component: ComponentCreator('/informatique/', 'bc3'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/accessoires',
                component: ComponentCreator('/informatique/accessoires', '36f'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/authentification',
                component: ComponentCreator('/informatique/authentification', 'cbf'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/ava',
                component: ComponentCreator('/informatique/ava', 'f25'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/connexion-distance',
                component: ComponentCreator('/informatique/connexion-distance', 'c5a'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/consultation',
                component: ComponentCreator('/informatique/consultation', '72f'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/hors-campus',
                component: ComponentCreator('/informatique/hors-campus', '8e2'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/impression',
                component: ComponentCreator('/informatique/impression', '487'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/Logiciels',
                component: ComponentCreator('/informatique/Logiciels', '217'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/accessibilite',
                component: ComponentCreator('/informatique/logiciels/accessibilite', '1f1'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/acrobat',
                component: ComponentCreator('/informatique/logiciels/acrobat', '8a0'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/adobe',
                component: ComponentCreator('/informatique/logiciels/adobe', '785'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/anaconda',
                component: ComponentCreator('/informatique/logiciels/anaconda', 'a1a'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/antidote',
                component: ComponentCreator('/informatique/logiciels/antidote', 'd02'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/arcgis',
                component: ComponentCreator('/informatique/logiciels/arcgis', '6af'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/beyond2020',
                component: ComponentCreator('/informatique/logiciels/beyond2020', 'd5c'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/cariseasyview',
                component: ComponentCreator('/informatique/logiciels/cariseasyview', 'ea8'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/chemdraw',
                component: ComponentCreator('/informatique/logiciels/chemdraw', '709'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/cmaptools',
                component: ComponentCreator('/informatique/logiciels/cmaptools', 'a43'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/davinciresolve',
                component: ComponentCreator('/informatique/logiciels/davinciresolve', 'b12'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/endnote',
                component: ComponentCreator('/informatique/logiciels/endnote', '870'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/gaussian',
                component: ComponentCreator('/informatique/logiciels/gaussian', '50b'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/gimp',
                component: ComponentCreator('/informatique/logiciels/gimp', '787'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/hyperchem',
                component: ComponentCreator('/informatique/logiciels/hyperchem', '668'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/inkscape',
                component: ComponentCreator('/informatique/logiciels/inkscape', 'c96'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/jabref',
                component: ComponentCreator('/informatique/logiciels/jabref', '7e8'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/jaws',
                component: ComponentCreator('/informatique/logiciels/jaws', 'bd6'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/krita',
                component: ComponentCreator('/informatique/logiciels/krita', 'd8b'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/mathematica',
                component: ComponentCreator('/informatique/logiciels/mathematica', '0b9'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/meshroom',
                component: ComponentCreator('/informatique/logiciels/meshroom', 'b65'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/musescore',
                component: ComponentCreator('/informatique/logiciels/musescore', '51c'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/office',
                component: ComponentCreator('/informatique/logiciels/office', '83c'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/openrefine',
                component: ComponentCreator('/informatique/logiciels/openrefine', '28b'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/pymol',
                component: ComponentCreator('/informatique/logiciels/pymol', 'a80'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/qdaminor',
                component: ComponentCreator('/informatique/logiciels/qdaminor', '95f'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/qgis',
                component: ComponentCreator('/informatique/logiciels/qgis', '061'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/qtgrace',
                component: ComponentCreator('/informatique/logiciels/qtgrace', '99d'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/reaper',
                component: ComponentCreator('/informatique/logiciels/reaper', '6db'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/rstudio',
                component: ComponentCreator('/informatique/logiciels/rstudio', 'a61'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/sas',
                component: ComponentCreator('/informatique/logiciels/sas', 'ae1'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/spss',
                component: ComponentCreator('/informatique/logiciels/spss', '962'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/stata',
                component: ComponentCreator('/informatique/logiciels/stata', '594'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/texmaker',
                component: ComponentCreator('/informatique/logiciels/texmaker', '0f1'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/wordstat',
                component: ComponentCreator('/informatique/logiciels/wordstat', 'fb3'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/zoom',
                component: ComponentCreator('/informatique/logiciels/zoom', 'b30'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/zotero',
                component: ComponentCreator('/informatique/logiciels/zotero', 'e01'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/numerisation',
                component: ComponentCreator('/informatique/numerisation', '478'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/ordinateurs',
                component: ComponentCreator('/informatique/ordinateurs', '3f6'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/proxy',
                component: ComponentCreator('/informatique/proxy', 'bf7'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/reseau',
                component: ComponentCreator('/informatique/reseau', 'c0a'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/tablettes',
                component: ComponentCreator('/informatique/tablettes', '145'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/vinyle',
                component: ComponentCreator('/informatique/vinyle', '0cd'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/vpn',
                component: ComponentCreator('/informatique/vpn', '7a8'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/introduction-impression-3d',
                component: ComponentCreator('/introduction-impression-3d', 'cad'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/medias/',
                component: ComponentCreator('/medias/', 'cc7'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/audio',
                component: ComponentCreator('/medias/audio', '67f'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/edition',
                component: ComponentCreator('/medias/edition', '090'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/infographie',
                component: ComponentCreator('/medias/infographie', '6b5'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/postes-edition',
                component: ComponentCreator('/medias/postes-edition', '939'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/video',
                component: ComponentCreator('/medias/video', 'd5d'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/visualisation',
                component: ComponentCreator('/medias/visualisation', '0f3'),
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
