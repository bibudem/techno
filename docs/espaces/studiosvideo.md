---
id: studiosvideo
title: Studios vidéo
description : Enregistrer des vidéos de qualité professionnelle.
image: "/img/cover/studiovideo.webp"
help : crea
---

import React from 'react';
import StudioCard from '@site/src/components/StudioCard';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import Pano360 from '@site/src/components/Pano360';
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

Les studios vidéo proposent à la communauté de l’UdeM tout l’équipement nécessaire pour concevoir des vidéos de qualité, selon différents modes de présentation. Leur environnement simplifié permet de réaliser des enregistrements sans avoir à se soucier des aspects techniques. Les studios sont conçus pour favoriser une utilisation en toute autonomie.

---

<CardGrid
  items={[
    {
      title: "Studio vidéo LSH",
      description: "Un studio moderne avec incrustation fond vert en temps réel et un prompteur.",
      link: "/espaces/studiovideolsh",
      icon: "CubeFocus",
      petit : true, 
    },
    {
      title: "Studio vidéo TGD",
      description: "Différents modes de présentation ainsi qu'un tableau lumineux.",
      link: "/espaces/studiovideotgd",
      icon: "Cube",
      petit : true,
    },
  ]}
/>


---

## Post-production

Les bibliothèques offrent des postes de montage vidéo pour finaliser vos productions. Consultez la section [Postes d'édition](../medias/postes-edition.md) pour plus d'informations.

---

Pour toute question ou demande particulière, n'hésitez pas à nous écrire à studio@bib.umontreal.ca

---
