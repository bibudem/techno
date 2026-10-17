---
title: Impression 3D
description: Donnez vie à vos idées en 3D avec les imprimantes 3D des bibliothèques de l'Université de Montréal.
image: "/img/cover/impression3d.webp"
---

import CardGrid from "@site/src/components/CardGrid";
import useBaseUrl from '@docusaurus/useBaseUrl';
import StudioCard from '@site/src/components/StudioCard';
import CarteImpression3D from '@site/src/components/CarteImpression3D';
import {bibliothequesImpression3D} from '@site/src/data/impression3d';

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

# Impression 3D

Les bibliothèques de l'Université de Montréal offrent à la communauté UdeM l'accès à plusieurs imprimantes 3D, idéales pour créer des prototypes, des modèles, des pièces uniques, et bien plus encore.

---

## Localisation

<CarteImpression3D lieux={bibliothequesImpression3D} />

<div className="impression3d-studiocard-grid">
  {bibliothequesImpression3D.map((lieu) => (
    <StudioCard
      key={lieu.title}
      title={lieu.title}
      titleLink={lieu.titleLink}
      location={lieu.location}
      mapLink={lieu.mapLink}
      mapText="Itinéraire Google Maps"
      tags={lieu.tags}
    />
  ))}
</div>
<!-- | **[Aménagement](https://bib.umontreal.ca/espaces/#amenagement)**         | [Voir sur la carte](https://g.co/kgs/dk98r6K) | BambuLab X1C AMS | -->

---

:::tip Revalorisation des filaments 3D - projet FilUM
Les bibliothèques participent au **projet FilUM**, une initiative du laboratoire de chimie [LabLaventure](https://www.laventurelab.com/project-1) de l’Université de Montréal, qui vise à revaloriser les matériaux résiduels de l’impression 3D en nouveaux filaments utilisables pour de futures impressions.

Cette collaboration permet de donner une seconde vie aux déchets de filament et de contribuer à une impression 3D plus durable et responsable.
:::

<div style={{ textAlign: 'center' }}>
  <iframe
    width="360"
    height="640"
    src="https://www.youtube-nocookie.com/embed/92DW3QDXqRw"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>

---

## Documentation

De la documentation est disponible pour vous aider à utiliser les imprimantes 3D :

<CardGrid headingLevel={3}
  items={[
    {
      title: "Introduction à l'impression 3D",
      description: "",
      link: "/creatives/impression3d/introduction",
      icon: "CubeFocus",
      petit : true,
    },
    {
      title: "Les modèles 3D",
      description: "",
      link: "/creatives/impression3d/modeles3d",
      icon: "Cube",
      petit : true,
    },
    {
      title: "BambuLab X1C",
      description: "",
      link: "/creatives/impression3d/bambu",
      icon: "",
      petit : true,
    },
    {
      title: "Prusa i3 Mk3s+",
      description: "",
      link: "/creatives/impression3d/prusa",
      icon: "",
      petit : true,
    },
    {
      title: "Ultimaker",
      description: "",
      link: "/creatives/impression3d/ultimaker",
      icon: "",
      petit : true,
    },
    {
      title: "Elegoo Saturn 3 Ultra 12K",
      description: "",
      link: "/creatives/impression3d/saturn",
      icon: "",
      petit : true,
    },
  ]}
/>


---

## Formations et soutien

Quel que soit votre niveau de connaissance, on est là pour vous aider à réaliser vos projets!

<CardGrid headingLevel={3}
  items={[
    {
      title: "Réservez une consultation",
      description: "Avant votre première visite, on vous invite à réserver une rencontre avec un membre de notre équipe. C’est l’occasion de poser vos questions et de bien planifier votre impression.",
      link: "https://outlook.office.com/owa/calendar/studiobib@umontreal.ca/bookings/s/_O-YOJr2SEOmzA-ozLoiJw2?ismsaljsauthenabled",
    },
    {
      title: "Participez à une formation",
      description: "On offre aussi des formations pratiques tout au long de l’année pour vous familiariser avec les imprimantes 3D.",
      link: "https://calendrier.bib.umontreal.ca/calendar?t=d&q=impression%203D&cid=7690&cal=7690&inc=0",
    },
  ]}
/>

---

## Informations complémentaires

- L'impression 3D est un service gratuit offert par les bibliothèques exclusivement aux membres de la communauté UdeM.
- Les imprimantes 3D ne sont pas réservables. L’accès se fait sur place, selon le principe du **premier arrivé, premier servi**, en fonction de la disponibilité des équipements.
- Pour connaître les règles d'utilisation des imprimantes 3D, consultez la section [Règles d'utilisation](../a-propos/politique.md).

---

<p style={{ fontSize: '0.8em' }}>Crédit photo : Gloria Obeid, étudiante au baccalauréat en architecture (2023)</p>
