---
id: visionnement
title: Salles de visionnement
description : Visionner des contenus médias.
image : "/img/cover/consultation.webp"
---


import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import CardGrid from "@site/src/components/CardGrid";

<img 
  src={useBaseUrl(frontMatter.image)} 
  alt={frontMatter.title} 
  style={{
    width: "100%",
    maxWidth: "1200px",
    display: "block",
    margin: "16px auto",
    borderRadius: "8px"
  }} 
/>


Les salles 2076 et 2076-1 de la Bibliothèque des lettres et sciences humaines sont dédiées au visionnement de contenus audiovisuels pour des travaux universitaires. La salle 2076‑1 permet le visionnement collaboratif pour des groupes allant jusqu’à six personnes. La salle 2076 offre quant à elle sept postes individuels équipés de téléviseurs 32 pouces et d’écouteurs, permettant la consultation de Blu‑ray, DVD et VHS dans un environnement confortable.

---

<CardGrid
  items={[
    {
      title: "Salle de visionnement en équipe",
      description: "Un espace confortable pour visionner des contenus multimédias en groupe.",
      link: "/espaces/salledevisio",
      icon: "CubeFocus",
      petit : true, 
    },
    {
      title: "Places individuelles pour le visionnement",
      description: "Espaces individuels pour le visionnement des contenus multimédias",
      link: "/espaces/placesdevisio",
      icon: "Cube",
      petit : true,
    },
  ]}
/>


---


