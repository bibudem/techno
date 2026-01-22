---
id: studiosbaladoaudio
title: Studios balado audio
description : Balados, présentations et entretiens.
image: "/img/cover/baladoaudio.webp"
help : crea
---

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

Les studios balado audio des bibliothèques de l’UdeM offrent gratuitement des équipements de qualité pour enregistrer divers projets comme des balados, des présentations et des entretiens.

---

## Localisation et accès

Seuls les membres de la communauté UdeM peuvent réserver les studios audio et accéder aux services de consultation et de soutien technique, mais ils peuvent inviter des non-membres à participer aux enregistrements.


import React from 'react';
import StudioCard from '@site/src/components/StudioCard';

<div
  className="grid grid--3"
  style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}
>
  <!-- <StudioCard
    title="Bibliothèque des lettres et sciences humaines (BLSH)"
    location={
    <><strong>Pavillon Samuel-Bronfman, 2<sup>e</sup> étage, local 2076-2
    </strong></>
  }
    mapLink="https://maps.app.goo.gl/cXprvQUPjBzQ6c8L8"
    description={<> À votre arrivée, présentez-vous au bureau de référence du 2<sup>e</sup> étage afin que le personnel vous déverrouille le studio.</>
    }
    reserveLink="https://calendrier.bib.umontreal.ca/space/27462"
    reserveText="Réserver"
  /> -->
  <StudioCard
    title="Bibliothèque Hubert-Reeves"
    location="Campus MIL, Aile A, local A-1549"
    mapLink="https://maps.app.goo.gl/gfkfKFy2avjhq4BD7"
    description="À votre arrivée, présentez-vous au comptoir de la bibliothèque afin que le personnel vous déverrouille le studio."
    reserveLink="https://calendrier.bib.umontreal.ca/space/20179"
    reserveText="Réserver"
  />
  <StudioCard
    title="Bibliothèque de mathématiques et informatique"
    location="Pavillon André-Aisenstadt, local 2477"
    mapLink="https://maps.app.goo.gl/Jwg5Q34WrjR7vhGV8"
    description="À votre arrivée, présentez-vous au comptoir de la bibliothèque afin que le personnel vous déverrouille le studio."
    reserveLink="https://calendrier.bib.umontreal.ca/space/24357"
    reserveText="Réserver"
  />
</div>

---

## Documentation et soutien

Une documentation complète est à votre disposition pour vous familiariser avec le studio en toute autonomie.

Sur rendez vous, un membre de l’équipe des bibliothèques de l’UdeM vous accompagne lors d’une prise en main initiale de l’équipement. Ce service optionnel, réservé aux membres de la communauté UdeM, n’inclut toutefois pas une présence continue d’un technicien pendant vos séances d’enregistrement, que vous devez mener de façon autonome.

En plus des consultations, des formations sont offertes sur l’utilisation des studios. Pour les détails et les dates, consultez le [calendrier des formations des bibliothèques](https://calendrier.bib.umontreal.ca/).

<Link to="/medias/rodecaster" className="button button--secondary">
  Consulter la documentation
</Link>

<Link to="https://outlook.office.com/owa/calendar/studiobib@umontreal.ca/bookings/s/fknNeJFnzUq4A8HgjlXCXg2?ismsaljsauthenabled" className="button button--secondary">
  Obtenir du soutien
</Link>

:::warning Note
Pour obtenir du soutien en personne avec un membre de notre équipe, vous devez réserver vous-même le studio d’enregistrement pour l’heure de votre rendez-vous. 
:::

---

Pour toute question ou demande particulière, n'hésitez pas à nous écrire à studio@bib.umontreal.ca

:::danger Accès réservé à la communauté UdeM
Les studios sont **réservés à la communauté de l’Université de Montréal**.

Nous ne pouvons malheureusement pas accepter de réservations provenant de l’externe. Merci de votre compréhension!
:::


---

## Visite virtuelle

<Pano360
  image="/img/pano/studioaudiohr.webp"
  legende="Vue en 360° du Studio audio"
  title="Studio audio"
  alt="Vue en 360° du Studio audio"
/>