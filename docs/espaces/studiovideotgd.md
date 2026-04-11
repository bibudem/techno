---
title: Studio vidéo TGD
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

Le studio vidéo de la [Bibliothèque Thérèse-Gouin-Décarie](https://bib.umontreal.ca/espaces/#tgd) propose à la communauté UdeM tout l’équipement pour concevoir des vidéos de qualité sous différents modes de présentation. Son environnement simplifié permet de produire des enregistrements sans se soucier des détails techniques. Le studio est conçu pour favoriser une utilisation en pleine autonomie : seule une clé USB est nécessaire pour activer les éclairages, la caméra, ainsi qu’un microphone. Le studio est optimisé pour une utilisation pour deux personnes.

---

<div
  className="grid grid--3"
  style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}
>
  <StudioCard
    title="Bibliothèque Thérèse-Gouin-Décarie (TGD)"
    location={
    <><strong>Pavillon Marie-Victorin, 2<sup>e</sup> étage, local G-305-12</strong></>
  }
    mapLink="https://maps.app.goo.gl/t8GE4RdMBEJiHJtd8"
    description={<> À votre arrivée, présentez-vous au bureau de référence du 2<sup>e</sup> étage afin que le personnel vous déverrouille le studio.</>
    }
    reserveLink="https://calendrier.bib.umontreal.ca/space/27038"
    reserveText="Réserver"
    secondaryLinks={[
      { href: "/medias/guidevideotgd", text: "Guide d'utilisation" },
      { href: "https://outlook.office.com/book/studiobib@umontreal.ca/s/O1Um8iUY1kGYJYWEupBIzQ2?ismsaljsauthenabled", text: "Obtenir du soutien" },
    ]}
  />
</div>

:::warning Note
Pour obtenir du soutien en personne avec un membre de notre équipe, vous devez réserver vous-même le studio d’enregistrement pour l’heure de votre rendez-vous. 
:::

## Accès {#acces}

Seuls les membres de la communauté UdeM peuvent réserver le studio balado vidéo et accéder aux services de consultation et de soutien technique. Ils peuvent toutefois inviter des non-membres à participer aux enregistrements.

---

## Post-production

Les bibliothèques offrent des postes de montage vidéo pour finaliser vos productions. Consultez la section [Postes d'édition](../medias/postes-edition.md) pour plus d'informations.

---

Pour toute question ou demande particulière, n'hésitez pas à nous écrire à studio@bib.umontreal.ca

---