---
title: Impression 3D
description: Donnez vie à vos idées en 3D avec les imprimantes 3D des bibliothèques de l'Université de Montréal.
image: "/img/cover/impression3d.webp"
---

import CardGrid from "@site/src/components/CardGrid";
import useBaseUrl from '@docusaurus/useBaseUrl';
import StudioCard from '@site/src/components/StudioCard';

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

<div
  className="impression3d-studiocard-grid"
>
  <StudioCard
    title="Aménagement"
    titleLink="https://bib.umontreal.ca/espaces/#amenagement"
    location="À côté du comptoir."
    mapLink="https://maps.app.goo.gl/irzr8ofQRdBNMFd86"
    mapText="Voir sur la carte"
    tags={[
      { label: "BambuLab X1C AMS", href: "/creatives/impression3d/bambu" },
    ]}
  />

  <StudioCard
    title="Mathématiques et informatique"
    titleLink="https://bib.umontreal.ca/espaces/#math-info"
    location={<> <a href="../espaces/ateliers.md">Atelier de fabrication</a>, local 2432. </>}
    mapLink="https://maps.app.goo.gl/Jwg5Q34WrjR7vhGV8"
    mapText="Voir sur la carte"
    tags={[
      { label: "BambuLab X1C AMS", href: "/creatives/impression3d/bambu" },
      { label: "Prusa i3 MK3s+", href: "/creatives/impression3d/prusa" },
    ]}
  />

  <StudioCard
    title="Hubert-Reeves"
    titleLink="https://bib.umontreal.ca/espaces/#Hubert-reeves"
    location={<> <a href="../espaces/ateliers.md">Atelier de fabrication</a>, local A-0724.4. </>}
    mapLink="https://maps.app.goo.gl/T6E9TaKNk6dDgrds9"
    mapText="Voir sur la carte"
    tags={[
      { label: "BambuLab X1C AMS", href: "/creatives/impression3d/bambu" },
      { label: "Prusa i3 MK3s+", href: "/creatives/impression3d/prusa" },
    ]}
  />

  <StudioCard
    title="Thérèse-Gouin-Décarie"
    titleLink="https://bib.umontreal.ca/espaces/#tgd"
    location={<> <a href="../espaces/ateliers.md">Atelier de fabrication</a>, local D-280-1. </>}
    mapLink="https://maps.app.goo.gl/t8GE4RdMBEJiHJtd8"
    mapText="Voir sur la carte"
    tags={[
      { label: "Elegoo Saturn 3 Ultra", href: "/creatives/impression3d/saturn" },
      { label: "BambuLab X1C AMS", href: "/creatives/impression3d/bambu" },
      { label: "Prusa i3 MK3s+", href: "/creatives/impression3d/prusa" },
    ]}
  />

  <StudioCard
    title="Santé"
    titleLink="https://bib.umontreal.ca/espaces/#sante"
    location={<>8<sup>e</sup> étage, en face du comptoir de référence.</>}
    mapLink="https://maps.app.goo.gl/KVE9w3JN2BKp278q8"
    mapText="Voir sur la carte"
    tags={[
      { label: "Ultimaker S3", href: "/creatives/impression3d/ultimaker" },
      { label: "Ultimaker 2", href: "/creatives/impression3d/ultimaker" },
    ]}
  />

  <StudioCard
    title="Marguerite d'Youville"
    titleLink="https://bib.umontreal.ca/espaces/#marguerite-d-youville"
    mapLink="https://g.co/kgs/q8wfQY2"
    mapText="Voir sur la carte"
    tags={[
      { label: "BambuLab X1C AMS", href: "/creatives/impression3d/bambu" },
    ]}
  />
</div>
<!-- | **[Aménagement](https://bib.umontreal.ca/espaces/#amenagement)**         | [Voir sur la carte](https://g.co/kgs/dk98r6K) | BambuLab X1C AMS | -->

---

:::tip Revalorisation des filaments 3D - projet FilUM
Les bibliothèques participent au **projet FilUM**, une initiative du laboratoire de chimie [LabLaventure](https://www.laventurelab.com/) de l’Université de Montréal, qui vise à revaloriser les matériaux résiduels de l’impression 3D en nouveaux filaments utilisables pour de futures impressions.

Cette collaboration permet de donner une seconde vie aux déchets de filament et de contribuer à une impression 3D plus durable et responsable.
:::

---

## Documentation

De la documentation est disponible pour vous aider à utiliser les imprimantes 3D :

<CardGrid
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

<CardGrid
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

<p style={{ fontSize: '0.8em' }}>
  Crédit photo : Gloria Obeid, étudiante au baccalauréat en architecture (2023)
</p>
