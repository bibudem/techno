---
title: À propos
retroaction: false
---

import HideLastUpdated from '@site/src/components/HideLastUpdated';
import CardGrid from '@site/src/components/CardGrid';

<HideLastUpdated/>

# À propos

<CardGrid
  items={[
    {
      title: 'Nous joindre',
      description: 'Contactez notre équipe pour toute question ou assistance.',
      link: '/a-propos/nous-joindre',
      icon: 'Desktop',
    },
    {
      title: 'Contribuer',
      description: 'Participez à l’amélioration de notre documentation et partagez vos connaissances.',
      link: '/a-propos/contribuer',
      icon: 'PencilSimpleLine',
    },
    {
      title: 'Accessibilité',
      description: 'Consultez nos engagements et ressources pour un site accessible.',
      link: '/a-propos/accessibilite',
      icon: 'MonitorPlay',
    },
    {
      title: 'Politique d’utilisation des équipements',
      description: 'Découvrez les règles d’utilisation des équipements et des espaces studio·bib.',
      link: '/a-propos/politique',
      icon: 'BookOpenText',
    },
  ]}
/>
