---
title : Nous joindre
description : Joindre l'équipe studio·bib des bibliothèques de l'UdeM pour du soutien informatique ou du soutien en création et médias (studios, impression 3D, ateliers).
retroaction : false
image: "/img/cover/contact.webp"
---

import CardGrid from "@site/src/components/CardGrid";
import HideLastUpdated from '@site/src/components/HideLastUpdated';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

<HideLastUpdated/>

<img 
  src={useBaseUrl(frontMatter.image)} 
  alt="Photo par Gloria Obeid, étudiante au baccalauréat en architecture (2023)"
  style={{
    width: "100%",
    maxWidth: "1200px",
    display: "block",
    margin: "16px auto",
    borderRadius: "8px"
  }} 
/>

L'équipe studio·bib des bibliothèques de l'UdeM offre du soutien informatique ainsi que du soutien en création et médias.

## Vous avez besoin d'aide?

Besoin d’un coup de main? Que ce soit pour l’informatique ou la création, notre équipe est là pour vous soutenir.

<CardGrid headingLevel={3}
  items={[
    {
      title: "Soutien informatique",
      description: "Assistance technique pour utiliser les outils numériques et les logiciels.",
      link: "/a-propos/soutien-informatique",
      icon : "Desktop",
    },
    {
      title: "Soutien création et médias",
      description: "Aide pour réaliser des projets créatifs avec les studios, l'impression 3D et nos ateliers de création.",
      link: "/a-propos/soutien-creation",
      icon : "CubeFocus",
    },
    ]}
/>


