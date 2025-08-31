---
id: studiobalado
title: Studio balado
description : Balados, présentations et entretiens.
image: "/img/cover/studiobalado.jpg"
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

Le studio balado de la [Bibliothèque des lettres et sciences humaines](https://bib.umontreal.ca/espaces/#lsh) a été entièrement réaménagé pour offrir une expérience de création simple, professionnelle et autonome. Que vous souhaitiez enregistrer un balado, une entrevue ou une présentation, cet espace vous permet de produire du contenu de qualité, sans expertise technique préalable.

<Link to="#localisation-et-accès" className="button button--primary">
  Réserver le studio
</Link>
<Link to="#documentation-et-soutien" className="button button--secondary">
  Consulter la documentation
</Link>

---

## Un environnement repensé pour la captation {#environnement-repense}

Le studio est équipé d’un système intégré conçu pour faciliter la production d'un balado vidéo en quelques étapes simples :

- **Interface unique** pour contrôler micros, caméras et enregistrement.
- **Éclairage optimisé** pour une image nette et cohérente.
- **Caméras haute définition** installées en permanence, toujours prêtes à filmer.
- **Commutation automatique des caméras** : le système bascule automatiquement vers la caméra pointée sur la personne qui parle, pour un rendu fluide et dynamique, sans aucune intervention de votre part. Si vous préférez faire votre propre montage, les vidéos de chaque caméra sont aussi disponibles séparément.
- **Design ergonomique** pour un confort optimal pendant l’enregistrement.

## Connectez une personne à distance en un instant {#connectez-distance}

Le studio permet d’intégrer une personne à distance. Il suffit de brancher votre ordinateur au câble prévu, de démarrer votre application de visioconférence, et l’image apparaîtra à l’écran du studio. La système basculera automatiquement vers cette source lorsque la personne parlera.

---

## Documentation et soutien

Une documentation complète est à votre disposition pour vous familiariser avec le studio en toute autonomie.

Sur rendez-vous, un membre de l’équipe vous accompagne lors d’une prise en main initiale de l’équipement. N’hésitez pas à poser vos questions ou à demander une démonstration. Ce service optionnel n’inclut toutefois pas la présence d’un technicien pendant vos séances d’enregistrement, que vous devez mener de façon autonome.

<Link to="/espaces/guide/studiob" className="button button--primary">
  Consulter la documentation
</Link>

<Link to="https://outlook.office.com/book/studiobib@umontreal.ca/s/O1Um8iUY1kGYJYWEupBIzQ2?ismsaljsauthenabled" className="button button--secondary">
  Obtenir du soutien
</Link>

:::warning Note
Pour obtenir du soutien en personne avec un membre de notre équipe, vous devez réserver vous-même le studio pour l’heure de votre rendez-vous. 
:::

---

## Localisation et accès {#localisation-acces}

Seuls les membres de la communauté UdeM peuvent réserver le studio balado et accéder aux services de consultation et de soutien technique. Ils peuvent toutefois inviter des non-membres à participer aux enregistrements.

import React from 'react';
import StudioCard from '@site/src/components/StudioCard';

<div
  className="grid grid--3"
  style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}
>
  <StudioCard
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
  />
</div>

---

Pour toute question ou demande particulière, n'hésitez pas à nous écrire à studio@bib.umontreal.ca

---

## Visite virtuelle

<Pano360
  image="/img/pano/studiobalado.webp"
  legende="Vue en 360° du Studio balado"
  title="Studio balado"
  alt="Vue en 360° du Studio balado"
/>
