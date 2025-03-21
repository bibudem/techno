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
    component: ComponentCreator('/', 'b6e'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '056'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '78f'),
            routes: [
              {
                path: '/a-propos/',
                component: ComponentCreator('/a-propos/', 'b08'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/a-propos/accessibilite',
                component: ComponentCreator('/a-propos/accessibilite', '7bd'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/a-propos/contribuer',
                component: ComponentCreator('/a-propos/contribuer', '04a'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/a-propos/equipe',
                component: ComponentCreator('/a-propos/equipe', '508'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/a-propos/mission',
                component: ComponentCreator('/a-propos/mission', 'a92'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/a-propos/politique',
                component: ComponentCreator('/a-propos/politique', 'bd4'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/creatives/',
                component: ComponentCreator('/creatives/', '667'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/art-textile',
                component: ComponentCreator('/creatives/art-textile', 'dc7'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/decoupeuse',
                component: ComponentCreator('/creatives/decoupeuse', 'c9b'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/decoupeuse/brother',
                component: ComponentCreator('/creatives/decoupeuse/brother', '478'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/decoupeuse/cameo',
                component: ComponentCreator('/creatives/decoupeuse/cameo', 'c5d'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/decoupeuse/cricut',
                component: ComponentCreator('/creatives/decoupeuse/cricut', 'e12'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/electronique',
                component: ComponentCreator('/creatives/electronique', 'bdb'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/electronique/arduino',
                component: ComponentCreator('/creatives/electronique/arduino', 'bfc'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/electronique/ido',
                component: ComponentCreator('/creatives/electronique/ido', '3f8'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/electronique/pieces',
                component: ComponentCreator('/creatives/electronique/pieces', '44f'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/electronique/raspberrypi',
                component: ComponentCreator('/creatives/electronique/raspberrypi', '7f3'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/impression3d',
                component: ComponentCreator('/creatives/impression3d', '70c'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/impression3d/imprimantes',
                component: ComponentCreator('/creatives/impression3d/imprimantes', '8d4'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/impression3d/modeles3d',
                component: ComponentCreator('/creatives/impression3d/modeles3d', '0ee'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/impression3d/techniques',
                component: ComponentCreator('/creatives/impression3d/techniques', '0a4'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/programmation',
                component: ComponentCreator('/creatives/programmation', 'bc0'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/realisations',
                component: ComponentCreator('/creatives/realisations', 'd0b'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/robots',
                component: ComponentCreator('/creatives/robots', 'e7b'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/vr',
                component: ComponentCreator('/creatives/vr', 'b43'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/vr/catalogue',
                component: ComponentCreator('/creatives/vr/catalogue', '428'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/creatives/vr/guide',
                component: ComponentCreator('/creatives/vr/guide', '48a'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/espaces/',
                component: ComponentCreator('/espaces/', '75e'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/amphitheatre',
                component: ComponentCreator('/espaces/amphitheatre', '64c'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/ateliers',
                component: ComponentCreator('/espaces/ateliers', '8a3'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/guide/amphitheatre',
                component: ComponentCreator('/espaces/guide/amphitheatre', '17c'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/guide/visualisation',
                component: ComponentCreator('/espaces/guide/visualisation', '983'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/laboformation',
                component: ComponentCreator('/espaces/laboformation', '440'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/salledevisio',
                component: ComponentCreator('/espaces/salledevisio', '260'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/studioaudio',
                component: ComponentCreator('/espaces/studioaudio', '192'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/studiovideo',
                component: ComponentCreator('/espaces/studiovideo', '31c'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/espaces/visualisation',
                component: ComponentCreator('/espaces/visualisation', 'e17'),
                exact: true,
                sidebar: "espacesSidebar"
              },
              {
                path: '/informatique/',
                component: ComponentCreator('/informatique/', '00c'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/accessoires',
                component: ComponentCreator('/informatique/accessoires', 'b14'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/authentification',
                component: ComponentCreator('/informatique/authentification', 'd53'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/ava',
                component: ComponentCreator('/informatique/ava', 'c59'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/connexion-distance',
                component: ComponentCreator('/informatique/connexion-distance', '06d'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/consultation',
                component: ComponentCreator('/informatique/consultation', '9ca'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/hors-campus',
                component: ComponentCreator('/informatique/hors-campus', '954'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/impression',
                component: ComponentCreator('/informatique/impression', 'e6a'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/Logiciels',
                component: ComponentCreator('/informatique/Logiciels', '9d6'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/accessibilite',
                component: ComponentCreator('/informatique/logiciels/accessibilite', '3a5'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/acrobat',
                component: ComponentCreator('/informatique/logiciels/acrobat', 'af3'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/adobe',
                component: ComponentCreator('/informatique/logiciels/adobe', '0a9'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/anaconda',
                component: ComponentCreator('/informatique/logiciels/anaconda', '8c9'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/antidote',
                component: ComponentCreator('/informatique/logiciels/antidote', '1eb'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/arcgis',
                component: ComponentCreator('/informatique/logiciels/arcgis', '1c9'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/beyond2020',
                component: ComponentCreator('/informatique/logiciels/beyond2020', '7b3'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/cariseasyview',
                component: ComponentCreator('/informatique/logiciels/cariseasyview', 'c0d'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/chemdraw',
                component: ComponentCreator('/informatique/logiciels/chemdraw', '40e'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/cmaptools',
                component: ComponentCreator('/informatique/logiciels/cmaptools', 'ad2'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/davinciresolve',
                component: ComponentCreator('/informatique/logiciels/davinciresolve', 'fd2'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/endnote',
                component: ComponentCreator('/informatique/logiciels/endnote', '3fb'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/gaussian',
                component: ComponentCreator('/informatique/logiciels/gaussian', '04a'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/gimp',
                component: ComponentCreator('/informatique/logiciels/gimp', '2a2'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/hyperchem',
                component: ComponentCreator('/informatique/logiciels/hyperchem', 'fd8'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/inkscape',
                component: ComponentCreator('/informatique/logiciels/inkscape', '438'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/jabref',
                component: ComponentCreator('/informatique/logiciels/jabref', '280'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/jaws',
                component: ComponentCreator('/informatique/logiciels/jaws', '363'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/krita',
                component: ComponentCreator('/informatique/logiciels/krita', 'c52'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/mathematica',
                component: ComponentCreator('/informatique/logiciels/mathematica', '68e'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/meshroom',
                component: ComponentCreator('/informatique/logiciels/meshroom', '85d'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/musescore',
                component: ComponentCreator('/informatique/logiciels/musescore', '85c'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/office',
                component: ComponentCreator('/informatique/logiciels/office', '9c6'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/openrefine',
                component: ComponentCreator('/informatique/logiciels/openrefine', '191'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/pymol',
                component: ComponentCreator('/informatique/logiciels/pymol', '609'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/qdaminor',
                component: ComponentCreator('/informatique/logiciels/qdaminor', '32f'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/qgis',
                component: ComponentCreator('/informatique/logiciels/qgis', '402'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/qtgrace',
                component: ComponentCreator('/informatique/logiciels/qtgrace', '3f1'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/reaper',
                component: ComponentCreator('/informatique/logiciels/reaper', '022'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/rstudio',
                component: ComponentCreator('/informatique/logiciels/rstudio', 'db4'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/sas',
                component: ComponentCreator('/informatique/logiciels/sas', '8bb'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/spss',
                component: ComponentCreator('/informatique/logiciels/spss', '37a'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/stata',
                component: ComponentCreator('/informatique/logiciels/stata', 'b18'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/texmaker',
                component: ComponentCreator('/informatique/logiciels/texmaker', 'ee2'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/wordstat',
                component: ComponentCreator('/informatique/logiciels/wordstat', '393'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/zoom',
                component: ComponentCreator('/informatique/logiciels/zoom', 'ea7'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/zotero',
                component: ComponentCreator('/informatique/logiciels/zotero', '537'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/logiciels/zotero1',
                component: ComponentCreator('/informatique/logiciels/zotero1', '106'),
                exact: true
              },
              {
                path: '/informatique/numerisation',
                component: ComponentCreator('/informatique/numerisation', '0f9'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/ordinateurs',
                component: ComponentCreator('/informatique/ordinateurs', '40d'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/proxy',
                component: ComponentCreator('/informatique/proxy', 'd03'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/reseau',
                component: ComponentCreator('/informatique/reseau', 'ad5'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/tablettes',
                component: ComponentCreator('/informatique/tablettes', '8a9'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/vinyle',
                component: ComponentCreator('/informatique/vinyle', '5e7'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/informatique/vpn',
                component: ComponentCreator('/informatique/vpn', '32b'),
                exact: true,
                sidebar: "informatiqueSidebar"
              },
              {
                path: '/introduction-impression-3d',
                component: ComponentCreator('/introduction-impression-3d', 'b84'),
                exact: true,
                sidebar: "creativesSidebar"
              },
              {
                path: '/medias/',
                component: ComponentCreator('/medias/', '13c'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/audio',
                component: ComponentCreator('/medias/audio', 'e29'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/edition',
                component: ComponentCreator('/medias/edition', '887'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/infographie',
                component: ComponentCreator('/medias/infographie', 'b23'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/postes-edition',
                component: ComponentCreator('/medias/postes-edition', 'f47'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/video',
                component: ComponentCreator('/medias/video', '7c8'),
                exact: true,
                sidebar: "mediasSidebar"
              },
              {
                path: '/medias/visualisation',
                component: ComponentCreator('/medias/visualisation', '452'),
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
