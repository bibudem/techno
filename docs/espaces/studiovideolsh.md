---
title: Studio vidéo LSH
description : Enregistrer des vidéos de qualité professionnelle.
image: "/img/cover/studiovideolsh.webp"
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

Le studio vidéo de la [Bibliothèque des lettres et sciences humaines](https://bib.umontreal.ca/espaces/#lsh) est conçu pour la captation vidéo individuelle, avec incrustation en temps réel, dans un environnement simple, autonome et accessible. Il permet de produire des présentations ou des interventions à l’image avec une qualité visuelle exceptionnelle, et intègre un prompteur facilitant une lecture fluide et naturelle à l’écran, sans nécessiter d’expertise technique préalable. Le studio est optimisé pour une utilisation par une seule personne.

---

<div
  className="grid grid--3"
  style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}
>
  <StudioCard
    title="Bibliothèque des lettres et sciences humaines (BLSH)"
    location={
    <><strong>Pavillon Samuel-Bronfman, 2<sup>e</sup> étage, local 2076-5
    </strong></>
  }
    mapLink="https://maps.app.goo.gl/cXprvQUPjBzQ6c8L8"
    description={<> À votre arrivée, présentez-vous au bureau de référence du 2<sup>e</sup> étage afin que le personnel vous déverrouille le studio.</>
    }
    reserveLink="https://calendrier.bib.umontreal.ca/space/21911"
    reserveText="Réserver"
    secondaryLinks={[
      { href: "/medias/guidevideolsh", text: "Guide d'utilisation" },
      { href: "https://outlook.office.com/book/studiobib@umontreal.ca/s/O1Um8iUY1kGYJYWEupBIzQ2?ismsaljsauthenabled", text: "Obtenir du soutien" },
    ]}
  />
</div>

:::warning Note
Pour obtenir du soutien en personne avec un membre de notre équipe, vous devez réserver vous-même le studio d’enregistrement pour l’heure de votre rendez-vous. 
:::

---

## Un studio clé en main pour vos enregistrements vidéo

Le studio est équipé d’un système intégré conçu pour faciliter la production de vidéos professionnelles en quelques étapes simples :

- **Interface unique** pour contrôler la caméra, l’incrustation et l’enregistrement.
- **Incrustation d’images en temps réel** en branchant simplement votre ordinateur au câble HDMI identifié.
- **Caméra haute définition** offrant une image nette, stable et de qualité professionnelle.
- **Prompteur intégré** permettant une lecture fluide et naturelle, tout en maintenant un contact visuel avec la caméra.
- **Éclairage optimisé** pour un rendu homogène et valorisant à l’écran.
- **Configuration pensée pour une utilisation autonome**, sans expertise technique préalable.

![Le prompteur en action](/img/docs/studiovideolsh1.webp)

---

## Accès {#acces}

Seuls les membres de la communauté UdeM peuvent réserver le studio vidéo et accéder aux services de consultation et de soutien technique.

---

## Post-production

Les bibliothèques offrent des postes de montage vidéo pour finaliser vos productions. Consultez la section [Postes d'édition](../medias/postes-edition.md) pour plus d'informations.

---

Pour toute question ou demande particulière, n'hésitez pas à nous écrire à studio@bib.umontreal.ca

---
