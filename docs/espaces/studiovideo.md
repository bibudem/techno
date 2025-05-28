---
id: studiovideo
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

Le studio d’enregistrement vidéo propose à la communauté UdeM tout l’équipement pour concevoir des vidéos de qualité sous 5 différents modes de présentation. Son environnement simplifié permet de produire des enregistrements sans se soucier des détails techniques. Le studio est conçu pour favoriser une utilisation en pleine autonomie : seule une clé USB est nécessaire pour activer les éclairages, la caméra, ainsi qu’un microphone!

---

## Localisation et accès

<div
  className="grid grid--2"
  style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}
>
  <StudioCard
    title="Bibliothèque des lettres et sciences humaines (BLSH)"
    location={
    <><strong>Pavillon Samuel-Bronfman, 2<sup>e</sup> étage, local 2076-5</strong></>
  }
    mapLink="https://maps.app.goo.gl/6HsLMAxoBWpQZgcD8"
    reserveLink="https://calendrier.bib.umontreal.ca/space/21911"
    reserveText="Réserver"
  />
  <StudioCard
    title="Bibliothèque Thérèse-Gouin-Décarie (TGD)"
    location={
    <><strong>Pavillon Marie-Victorin, 2<sup>e</sup> étage, local G-305-12</strong></>
  }
    mapLink="https://maps.app.goo.gl/t8GE4RdMBEJiHJtd8"
    reserveLink="https://calendrier.bib.umontreal.ca/space/27038"
    reserveText="Réserver"
  />
</div>

---

## Documentation et soutien

De la documentation est disponible pour vous aider à utiliser le studio en toute autonomie.

Sur rendez-vous, un service de soutien avec un membre de l'équipe des bibliothèques de l'UdeM est offert pour aider les utilisateurs à se familiariser avec l’équipement.

<Link to=".././medias/studiovideo" className="button button--secondary">
  Consulter la documentation
</Link>

<Link to="https://outlook.office.com/owa/calendar/studiobib@umontreal.ca/bookings/s/O1Um8iUY1kGYJYWEupBIzQ2?ismsaljsauthenabled" className="button button--secondary">
  Obtenir du soutien
</Link>

:::warning Note
Pour obtenir du soutien en personne avec un membre de notre équipe, vous devez réserver vous-même le studio d’enregistrement pour l’heure de votre rendez-vous. 
:::

---

## Post-production

Les bibliothèques offrent des postes de montage vidéo pour finaliser vos productions. Consultez la section [Postes d'édition](../medias/postes-edition.md) pour plus d'informations.

---

Pour toute question ou demande particulière, n'hésitez pas à nous écrire à studio@bib.umontreal.ca

---

## Visite virtuelle

### Bibliothèque des lettres et sciences humaines (BLSH)

<Pano360
  image="/img/pano/studiovideolsh.webp"
  legende="Vue en 360° du Studio vidéo"
  title="Studio vidéo"
  alt="Vue en 360° du Studio vidéo"
/>

### Bibliothèque Thérèse-Gouin-Décarie (TGD)

<Pano360
  image="/img/pano/studiovideotgd.webp"
  legende="Vue en 360° du Studio vidéo"
  title="Studio vidéo"
  alt="Vue en 360° du Studio vidéo"
/>