---
id: ateliers
title: Ateliers de fabrication
description : Impression 3D, électronique et plus encore!
image: "/img/cover/ateliers.webp"

---

import useBaseUrl from '@docusaurus/useBaseUrl';
import StudioCard from '@site/src/components/StudioCard';
import Link from '@docusaurus/Link';
import CardGrid from "@site/src/components/CardGrid";
import Pano360 from '@site/src/components/Pano360';


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

Les ateliers de fabrication offrent à la communauté la possibilité de développer de nouvelles compétences, de comprendre et de s’approprier des technologies émergentes dans un environnement rassembleur.

Ce sont des espaces d’expérimentation et de partage qui rassemblent une communauté de pratique. On y trouve notamment les technologies liées à :

- L'impression 3D;
- L'électronique comme les Raspberry Pi, Arduino et l’Internet des Objets;
- La couture, avec une machine à coudre et une brodeuse numérique;
- La découpe vinyle;
- Et bien plus encore!

---

## Localisation et accès

Les ateliers de fabrication sont accessibles à toute la communauté UdeM.

<div
  className="grid grid--3"
  style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}
>
  <StudioCard
    title="Bibliothèque Hubert Reeves"
    location="Campus MIL, Aile A, local A-0724.4"
    mapLink="https://maps.app.goo.gl/T6E9TaKNk6dDgrds9"
    description=""
    reserveLink=""
    reserveText=""
  />
  <StudioCard
    title="Bibliothèque Thérèse-Gouin-Décarie"
    location="2ème étage, local G-305-10"
    mapLink="https://maps.app.goo.gl/t8GE4RdMBEJiHJtd8"
    description=""
    reserveLink=""
    reserveText=""
  />
  <StudioCard
    title="Bibliothèque Mathématiques et informatique"
    location="Pavillon André-Aisenstadt, local 2432"
    mapLink="https://maps.app.goo.gl/Jwg5Q34WrjR7vhGV8"
    description=""
    reserveLink=""
    reserveText=""
  />
</div>
---

:::tip Vous chercher une imprimante 3D?
Des imprimantes 3D sont disponibles dans nos ateliers, mais aussi dans plusieurs autres bibliothèques UdeM!
Pour trouver celle qui vous convient, consultez la page [Impression 3D](/creatives/impression3d).
:::

---

## Documentation

De la documentation est disponible pour vous aider à utiliser les équipements des ateliers :

<Link to="/creatives" className="button button--primary">
  Consultez la section Technologies Créatives
</Link>

---

## Formations et soutien

Envie de créer, tester, apprendre? On vous ouvre la porte!
Réservez une rencontre avec notre équipe ou plongez dans une formation pratique. On est là pour vous guider, pas à pas.

<CardGrid
  items={[
    {
      title: "Réservez une consultation",
      description: "Avant votre première visite, on vous invite à réserver une rencontre avec un membre de notre équipe. C’est l’occasion de poser vos questions et de bien planifier votre projet. Ce service est offert à la communauté UdeM.",
      link: "https://outlook.office.com/owa/calendar/studiobib@umontreal.ca/bookings/?ismsaljsauthenabled",
    },
    {
      title: "Participez à une formation",
      description: "Des formations pratiques sont aussi offertes tout au long de l’année pour vous familiariser avec les équipements et logiciels disponibles dans nos espaces. Ces formations sont accessibles gratuitement pour la communauté UdeM.",
      link: "#",
    },
  ]}
/>

## Visite virtuelle

### Bibliothèque Thérèse-Gouin-Décarie

<Pano360
  image="/img/pano/ateliertgd.webp"
  legende="Vue en 360° de l'atelier de fabrication"
  title="Atelier de fabrication"
  alt="Vue en 360° de l'atelier de fabrication"
/>

