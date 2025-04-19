---
title : Nous joindre
description : Contactez-nous pour toute question ou information supplémentaire.
retroaction : false
---

import CardGrid from "@site/src/components/CardGrid";
import { HoraireAujourdhui, HoraireSemaine } from '@site/src/components/HoraireSoutienInfo';
import HideLastUpdated from '@site/src/components/HideLastUpdated';

<HideLastUpdated/>


## Vous avez besoin d'aide?

Besoin d’un coup de main? Que ce soit pour l’informatique ou la création, notre équipe est là pour vous soutenir.

<CardGrid
  items={[
    {
      title: "Soutien informatique",
      description: "Assistance technique pour les outils numériques et les logiciels.",
      link: "./soutien-informatique",
      icon : "Desktop",
    },
    {
      title: "Soutien création et médias",
      description: "Aide pour les studios, l'impression 3D et les projets créatifs.",
      link: "./soutien-creation",
      icon : "CubeFocus",
    },
    ]}
/>

---