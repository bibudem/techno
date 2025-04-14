---
title : Nous joindre
description : Contactez-nous pour toute question ou information supplémentaire.
retroaction : false
---

import CardGrid from "@site/src/components/CardGrid";
import { HoraireAujourdhui, HoraireSemaine } from '@site/src/components/HoraireSoutienInfo';



## Vous avez besoin d'aide?

Besoin d’un coup de main? Que ce soit pour l’informatique ou la création, notre équipe est là pour vous soutenir.

<CardGrid
  items={[
    {
      title: "Soutien informatique",
      description: "Assistance technique pour les outils numériques et les logiciels.",
      link: "#soutien-informatique",
      icon : "Desktop",
    },
    {
      title: "Soutien création et médias",
      description: "Aide pour les studios, l'impression 3D et les projets créatifs.",
      link: "#soutien-création-et-médias",
      icon : "CubeFocus",
    },
    ]}
/>

---

## Soutien informatique

Discutez avec un technicien en direct **par clavardage** ou **sur place** à la Bibliothèque des lettres et sciences humaines (BLSH).

### Exemples d’aide offerte
- Configuration du proxy ou du VPN pour accéder aux ressources UdeM  
- Installation de logiciels (Zotero, Office, etc.)  
- Aide Word (modèle de thèse), PowerPoint, etc.  
- Conversion de documents en PDF  
- Accès aux logiciels à distance  
- Questions sur les outils numériques UdeM

<HoraireSemaine codeBib="ss" />
Consultez la section [Ressources informatiques](../informatique/index.md)

---

## Soutien création et médias

Nous offrons aussi du soutien pour vos projets créatifs et vos productions multimédias. Notre équipe est là pour vous accompagner!

### Exemples d’aide offerte
- Soutien pour les studios
- Initiation à l'impression 3D, etc.
- Conseils techniques ou créatifs

<CardGrid
  items={[
    {
      title: "Par courriel",
      description: "studio@bib.umontreal.ca",
      link: "mailto:studio@bib.umontreal.ca",
      icon : "Desktop",
    },
    {
      title: "Sur rendez-vous",
      description: "Rencontrer un membre de l’équipe.",
      link: "#",
      icon : "CubeFocus",
    },
    ]}
/>



Consultez les sections [Technologies créatives](../creatives/index.md) et [Productions médias](../medias/index.md)