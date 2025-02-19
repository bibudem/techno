// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  // Sidebar pour Espaces
  espacesSidebar: [
    {
      type: 'category',
      label: 'Espaces',
      link: { type: 'doc', id: 'espaces/index' }, 
      items: [
        'espaces/amphitheatre',
        'espaces/ateliers',
        'espaces/laboformation',
        'espaces/visualisation',
        'espaces/salledevisio',
        'espaces/studioaudio',
        'espaces/studiovideo',
        
      ],
    },
  ],

  // Sidebar pour Informatique
  informatiqueSidebar: [
    {
      type: 'category',
      label: 'Ressources informatiques',
      link: { type: 'doc', id: 'informatique/index' }, 
      items: [
        'informatique/authentification',
        'informatique/reseau',
        {
          type: "category",
          label: "Accès hors campus",
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
          link: { type: 'doc', id: 'informatique/numerisation' }, 
          collapsed: true,
          items: [
            "informatique/vinyle",
          ],
        },
        'informatique/ordinateurs',
        'informatique/ava',
        'informatique/tablettes',
        'informatique/consultation',
        'informatique/logiciels',
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
            "creatives/impression3d/imprimantes",
            "creatives/impression3d/modeles3d",
            "creatives/impression3d/techniques",
          ],
        },
        {
          type: "category",
          label: "Réalité virtuelle",
          collapsed: true,
          link: { type: 'doc', id: 'creatives/vr' }, 
          items: [
            "creatives/vr/metaquest3",
            "creatives/vr/catalogue",
          ],
        },
        {
          type: "category",
          label: "Électronique",
          collapsed: true,
          link: { type: 'doc', id: 'creatives/electronique' }, 
          items: [
            "creatives/electronique/arduino",
            "creatives/electronique/raspberrypi",
            "creatives/electronique/ido",
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
        'creatives/art-textile',
        'creatives/programmation',
        'creatives/robots',
        'creatives/realisations',
      ],
    },
  ],

  mediasSidebar: [
    {
      type: 'category',
      label: 'Productions médias',
      link: { type: 'doc', id: 'medias/index' }, 
      items: [
        'medias/postes-edition',
        'medias/audio',
        'medias/video',
        'medias/edition',
        'medias/infographie',
        'medias/visualisation',
      ],
    },
  ],

  aboutSidebar: [
    {
      type: 'category',
      label: 'À propos',
      link: { type: 'doc', id: 'a-propos/index' }, 
      items: [
        'a-propos/mission',
        'a-propos/equipe',
        'a-propos/contribuer',
        'a-propos/accessibilite',
        'a-propos/reglements',
      ],
    },
  ],

};

export default sidebars;