---
id : decoupeuse
title : Découpeuse
image: "/img/cover/vinyl.webp"
---

import CardGrid from '@site/src/components/CardGrid';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

<img 
  src={useBaseUrl(frontMatter.image)} 
  alt=""
  style={{
    width: "100%",
    maxWidth: "1200px",
    display: "block",
    margin: "16px auto",
    borderRadius: "8px"
  }} 
/>

# Découpeuse

Les découpeuses numériques permettent de créer des motifs 2D sur divers matériaux. Les utilisations les plus fréquentes sont la découpe de vinyle et de tissu. Il est également possible de graver du métal et de dessiner sur du papier ou du carton.

L’outil (lame, pointe de gravure, ou crayon) est fixé sur un axe. Le matériau à découper est, en règle générale, posé sur un support adhésif, appelé tapis de coupe. Ce dernier est entraîné par des rouleaux d’avant en arrière. La combinaison des déplacements de l’outil sur son axe et du tapis de coupe permettent de créer des motifs, comme des reproductions d’images, du texte, etc.


<CardGrid
  items={[
    {
      title: "Silhouette Cameo 4",
      description: "",
      link: "decoupeuse/cameo",
      icon: "Scissors",
    },
    {
      title: "Cricut Maker",
      description: "",
      link: "decoupeuse/cricut",
      icon: "Scissors",
    },
    {
      title: "Brother SDX225",
      description: "",
      link: "decoupeuse/brother",
      icon: "Scissors",
    },
  ]}
/>