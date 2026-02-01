// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  // Sidebar pour Espaces
  espacesSidebar: [
    {
      type: 'category',
      label: 'Espaces',
      collapsed: true, 
      collapsible: true,
      link: { type: 'doc', id: 'espaces/index' }, 
      items: [
        {
          type: 'category',
          label: 'Amphithéâtre',
          link: { type: 'doc', id: 'espaces/amphitheatre' },
          collapsible: false, // Empêche la catégorie de s’ouvrir, donc plus de flèche
          items: [
            {
              type: 'doc',
              id: 'espaces/guide/amphitheatre',
              className: 'hidden', // Garde la page d’aide cachée
            },
          ],
        },
        'espaces/ateliers',
        // 'espaces/zines',
        // 'espaces/laboformation',
        {
          type: 'category',
          label: 'Laboratoire de visualisation',
          link: { type: 'doc', id: 'espaces/visualisation' },
          collapsible: false, // Empêche la catégorie de s’ouvrir, donc plus de flèche
          items: [
            {
              type: 'doc',
              id: 'espaces/guide/visualisation',
              className: 'hidden', // Garde la page d’aide cachée
            },
          ],
        },
        
        {
          type: "category",
          label: "Salles de visionnement",
          collapsed: true, 
          collapsible: true,
          link: { type: 'doc', id: 'espaces/visionnement' }, 

          items: [
            "espaces/salledevisio",
            "espaces/placesdevisio",
          ],
        },
  



        {
          type: "category",
          label: "Studios balado",
          collapsed: true, 
          collapsible: true,
          link: { type: 'doc', id: 'espaces/studiosbalado' }, 

          items: [
            "espaces/studiosbaladoaudio",
            "espaces/studiobaladovideo",
          ],
        },



        'espaces/studiovideo',
        
      ],
    },
  ],

  // Sidebar pour Informatique
  informatiqueSidebar: [
    {
      type: 'category',
      label: 'Ressources informatiques',
      collapsed: true, 
      collapsible: true,
      link: { type: 'doc', id: 'informatique/index' }, 
      items: [
        'informatique/authentification',
        'informatique/reseau',
        {
          type: "category",
          label: "Accès hors campus",
          collapsible: true,
          link: { type: 'doc', id: 'informatique/hors-campus' }, 
          collapsed: true, 
          items: [
            "informatique/proxy",
            "informatique/vpn",
          ],
        },
        'informatique/impression',
        {
          type: "category",
          label: "Numérisation",
          collapsed: true, 
          collapsible: true,
          link: { type: 'doc', id: 'informatique/numerisation' }, 

          items: [
            "informatique/vinyle",
            "informatique/czur",
            "informatique/microdocuments",
            "informatique/ocr",
            "informatique/numerisation-pdf-acrobat",
            
          ],
        },
        'informatique/ordinateurs',
        'informatique/ava',
        'informatique/connexion-ecrans',
        'informatique/tablettes',
        // 'informatique/consultation',
        {
          type: "category",
          label: "Logiciels",
          collapsed: true, 
          collapsible: true,
          link: { type: 'doc', id: 'informatique/logiciels' }, 
          items: [
            "informatique/connexion-distance",
            {
              type: 'doc',
              id: 'informatique/logiciels/acrobat',
              className: 'hidden',
            },
            
            {
              type: 'doc',
              id: 'informatique/logiciels/office',
              className: 'hidden',
            },
            {
              type: 'doc',
              id: 'informatique/logiciels/arcgis',
              className: 'hidden',
            },
            {
              type: 'doc',
              id: 'informatique/logiciels/anaconda',
              className: 'hidden',
            },
            {
              type: 'doc',
              id: 'informatique/logiciels/antidote',
              className: 'hidden',
            },
           
            {
              type: 'doc',
              id: 'informatique/logiciels/spss',
              className: 'hidden',
            },
            {
              type: 'doc',
              id: 'informatique/logiciels/adobe',
              className: 'hidden',
            },
            {
              type: 'doc',
              id: 'informatique/logiciels/accessibilite',
              className: 'hidden',
            },
            {
              type: 'doc',
              id: 'informatique/logiciels/beyond2020',
              className: 'hidden',
            },
            {
              type: 'doc',
              id: 'informatique/logiciels/cariseasyview',
              className: 'hidden',
            },
            {
              type: 'doc',
              id: 'informatique/logiciels/chemdraw',
              className: 'hidden',
            },
            {
              type: 'doc',
              id: 'informatique/logiciels/cmaptools',
              className: 'hidden',
            },
            {
              type: 'doc',
              id: 'informatique/logiciels/davinciresolve',
              className: 'hidden',
            },
            {
              type: 'doc',
              id: 'informatique/logiciels/endnote',
              className: 'hidden',
            },
            {
              type: 'doc',
              id: 'informatique/logiciels/gaussian',
              className: 'hidden',
            },
            {
              type: 'doc',
              id: 'informatique/logiciels/gimp',
              className: 'hidden',
            },
            {
              type: 'doc',
              id: 'informatique/logiciels/hyperchem',
              className: 'hidden',
            },
            {
              type: 'doc',
              id: 'informatique/logiciels/inkscape',
              className: 'hidden',
            },
            {
              type: 'doc',
              id: 'informatique/logiciels/jabref',
              className: 'hidden',
            },
            {
              type: 'doc',
              id: 'informatique/logiciels/jaws',
              className: 'hidden',
            },
            {
              type: 'doc',
              id: 'informatique/logiciels/krita',
              className: 'hidden',
            },
            {
              type: 'doc',
              id: 'informatique/logiciels/mathematica',
              className: 'hidden',
            },
            {
              type: 'doc',
              id: 'informatique/logiciels/meshroom',
              className: 'hidden',
            },
            {
              type: 'doc',
              id: 'informatique/logiciels/musescore',
              className: 'hidden',
            },
            {
              type: 'doc',
              id: 'informatique/logiciels/openrefine',
              className: 'hidden',
            },
                        {
              type: 'doc',
              id: 'informatique/logiciels/onedrive',
              className: 'hidden',
            },
            {
              type: 'doc',
              id: 'informatique/logiciels/pymol',
              className: 'hidden',
            },
            {
              type: 'doc',
              id: 'informatique/logiciels/qtgrace',
              className: 'hidden',
            },
            {
              type: 'doc',
              id: 'informatique/logiciels/qdaminer',
              className: 'hidden',
            },
            {
              type: 'doc',
              id: 'informatique/logiciels/qgis',
              className: 'hidden',
            },
            {
              type: 'doc',
              id: 'informatique/logiciels/rstudio',
              className: 'hidden',
            },
            {
              type: 'doc',
              id: 'informatique/logiciels/reaper',
              className: 'hidden',
            },
            {
              type: 'doc',
              id: 'informatique/logiciels/sas',
              className: 'hidden',
            },
            {
              type: 'doc',
              id: 'informatique/logiciels/stata',
              className: 'hidden',
            },
            {
              type: 'doc',
              id: 'informatique/logiciels/texmaker',
              className: 'hidden',
            },
            {
              type: 'doc',
              id: 'informatique/logiciels/wordstat',
              className: 'hidden',
            },
            {
              type: 'doc',
              id: 'informatique/logiciels/zotero',
              className: 'hidden',
            },
            {
              type: 'doc',
              id: 'informatique/logiciels/zoom',
              className: 'hidden',
            },
                        {
              type: 'doc',
              id: 'informatique/logiciels/ableton',
              className: 'hidden',
            },
          ],

        },
        'informatique/accessoires',
      ],
    },
  ],

  creativesSidebar: [
    {
      type: 'category',
      label: 'Technologies créatives',
      link: { type: 'doc', id: 'creatives/index' }, 
      items: [
        {
          type: "category",
          label: "Impression 3D",
          collapsed: true,
          link: { type: 'doc', id: 'creatives/impression3d' }, 
          items: [
                "creatives/impression3d/introduction",
                "creatives/impression3d/modeles3d",
                "creatives/impression3d/bambu",
                "creatives/impression3d/prusa",
                "creatives/impression3d/ultimaker",
                "creatives/impression3d/saturn",
                // "creatives/impression3d/techniques",
              ]
            

        },
        {
          type: "category",
          label: "Réalité virtuelle",
          collapsed: true,
          link: { type: 'doc', id: 'creatives/vr' }, 
          items: [
             "creatives/vr/guide",
            "creatives/vr/catalogue",
            "creatives/vr/mise-en-garde",
          ],
        },
        {
          type: "category",
          label: "Électronique",
          collapsed: true,
          link: { type: 'doc', id: 'creatives/electronique' }, 
          items: [
            "creatives/electronique/trousses",
            "creatives/electronique/arduino",
            "creatives/electronique/raspberrypi",
            // "creatives/electronique/ido",
            "creatives/electronique/pieces",
            
          ],
        },
        {
          type: "category",
          label: "Découpeuse",
          collapsed: true,
          link: { type: 'doc', id: 'creatives/decoupeuse' }, 
          items: [
            "creatives/decoupeuse/cameo",
            "creatives/decoupeuse/cricut",
            "creatives/decoupeuse/brother",
          ],
        },
        {
          type: "category",
          label: "Art textile",
          collapsed: true,
          link: { type: 'doc', id: 'creatives/art-textile' },
          items: [
            "creatives/textile/guidebrodeuse",
            "creatives/textile/modeles",
            "creatives/textile/inkscape-simple",
            "creatives/textile/inkscape-complexe",
            "creatives/textile/fils",
            "creatives/textile/faq",
          ],
        },
        // 'creatives/programmation',
        'creatives/robots',
        'creatives/projets',
      ],
    },
  ],

  mediasSidebar: [
  {
    type: "category",
    label: "Productions médias",
    link: { type: "doc", id: "medias/index" },
    items: [
      // 1) Espaces 
      {
        type: "category",
        label: "Espaces",
        collapsed: true,
        // link: undefined,
items: [
    { type: "link", label: "Studios balado", href: "/espaces/studiosbalado" },
    { type: "link", label: "Studio vidéo", href: "/espaces/studiovideo" },
  ],
      },

      // 2) Édition 
      "medias/postes-edition",

      // 3) Production audio 
      {
        type: "category",
        label: "Production audio",
        collapsed: true,
        // link: undefined,
        items: [
          "medias/balado",
          "medias/guidebaladovideo", 
          "medias/rodecaster",
          "medias/audacity",
        ],
      },

      // 4) Production vidéo 
      {
        type: "category",
        label: "Production vidéo",
        collapsed: true,
        // link: undefined,
        items: [
          "medias/studiovideo",
          "medias/adoberush",
          "medias/obs",
        ],
      },

      // 5) Infographie 
      {
        type: "category",
        label: "Infographie",
        collapsed: true,
        // link: undefined,
        items: [
          "medias/tabgraphique",
        ],
      },
    ],
  },
],

  aboutSidebar: [
    {
      type: 'category',
      label: 'À propos',
      link: { type: 'doc', id: 'a-propos/index' }, 
      items: [
        {
          type: 'category',
          label: 'Nous joindre',
          link: { type: 'doc', id: 'a-propos/nous-joindre' },
          collapsible: false,
          items: [
            {
              type: 'doc',
              id: 'a-propos/soutien-informatique',
              className: 'hidden', // Garde la page d’aide cachée
            },
            {
              type: 'doc',
              id: 'a-propos/soutien-creation',
              className: 'hidden', // Garde la page d’aide cachée
            },
          ],
        },
        
        // 'a-propos/mission',
        // 'a-propos/equipe',
        'a-propos/contribuer',
        'a-propos/accessibilite',
        'a-propos/politique',
      ],
    },
  ],

};

export default sidebars;
