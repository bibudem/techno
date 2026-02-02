---
id: studiosbalado
title: Studios balado
description : Balados, présentations et entretiens.
help : crea
image : "/img/cover/baladocover.webp"
---


import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import CardGrid from "@site/src/components/CardGrid";
import PhotoCarousel from '@site/src/components/Carousel';
import { studiosbaladoSlides } from '@site/src/data/studiosbaladoSlides';

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


Les bibliothèques de l’UdeM mettent à la disposition de la communauté universitaire trois studios de balado : deux studios balado audio et un studio balado vidéo. Ces espaces offrent des équipements de qualité pour enregistrer différents types de projets, notamment des balados, des présentations et des entretiens, dans un cadre autonome et accessible. Les studios peuvent accueillir jusqu'à 4 personnes.

---

<CardGrid
  items={[
    {
      title: "Studios balado audio",
      description: "Des espaces pour l’enregistrement de balado sans captation vidéo",
      link: "/espaces/studiosbaladoaudio",
      icon: "CubeFocus",
      petit : true, 
    },
    {
      title: "Studio balado vidéo",
      description: "Un espace pour l’enregistrement de balado avec captation vidéo",
      link: "/espaces/studiobaladovideo",
      icon: "Cube",
      petit : true,
    },
  ]}
/>

---

## Balados réalisés dans nos studios

<PhotoCarousel slides={studiosbaladoSlides} slidesToScroll={2} />

---

Pour toute question ou demande particulière, n'hésitez pas à nous écrire à studio@bib.umontreal.ca

:::danger Accès réservé à la communauté UdeM
Les studios sont **réservés à la communauté de l’Université de Montréal**.

Nous ne pouvons malheureusement pas accepter de réservations provenant de l’externe. Merci de votre compréhension!
:::


---


