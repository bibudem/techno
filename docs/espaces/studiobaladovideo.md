---
id: studiobaladovideo
title: Studio balado vidéo
description : Balados, présentations et entretiens.
image: "/img/cover/studiobalado.webp"
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


Le studio balado vidéo de la [Bibliothèque des lettres et sciences humaines](https://bib.umontreal.ca/espaces/#lsh) est aménagé pour la captation vidéo de balados, dans un cadre simple, autonome et accessible. Il permet également l’enregistrement d’entrevues ou de présentations liées à ce type de format, sans nécessiter d’expertise technique préalable. Le studio peut accueillir jusqu’à 4 personnes.

:::danger Avis - Studio balado vidéo (BLSH)
En raison de travaux majeurs, le 2ème étage de la Bibliothèque des lettres et sciences humaines (BLSH) fera l’objet d’une **fermeture partielle du 9 mars au 6 avril inclusivement**.

Le **studio balado vidéo ne sera pas accessible** durant cette période.

Pour des besoins d’enregistrement audio, nous vous invitons à vous réorienter vers les [**Studios balado audio**](studiosbaladoaudio). 

Pour toute question ou pour discuter d’une solution alternative, écrivez-nous : **studio@bib.umontreal.ca**.
:::


<!-- :::danger Bruit lié aux travaux
En raison de travaux en cours à la Bibliothèque des lettres et sciences humaines, des perturbations sonores pourraient influencer la qualité des enregistrements au studio.
[Consultez la nouvelle à ce sujet](https://bib.umontreal.ca/nouvelles/2026/annonce-travaux-bibliotheque-LSH/).
::: -->


---

<Link to="#localisation-acces" className="button button--primary">
  Réserver le studio
</Link>
<Link to="/medias/guidebaladovideo" className="button button--secondary">
  Consulter la documentation
</Link>
<Link to="https://outlook.office.com/book/studiobib@umontreal.ca/s/O1Um8iUY1kGYJYWEupBIzQ2?ismsaljsauthenabled" className="button button--secondary">
  Obtenir du soutien
</Link>

---

## Présentation en vidéo

<div style={{ textAlign: 'center' }}>
  <iframe
    width="360"
    height="640"
    src="https://www.youtube-nocookie.com/embed/fN6ydg5KxaM?si=ZsMc8FLJYHe7kpG5"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>

---

## Un environnement repensé pour la captation {#environnement-repense}

Le studio est équipé d’un système intégré conçu pour faciliter la production d'un balado vidéo en quelques étapes simples :

- **Interface unique** pour contrôler micros, caméras et enregistrement.
- **Éclairage optimisé** pour une image nette et cohérente.
- **Caméras haute définition** installées en permanence, toujours prêtes à filmer.
- **Commutation automatique des caméras** : le système bascule automatiquement vers la caméra pointée sur la personne qui parle, pour un rendu fluide et dynamique, sans aucune intervention de votre part. Si vous préférez faire votre propre montage, les vidéos de chaque caméra sont aussi disponibles séparément.
- **Design ergonomique** pour un confort optimal pendant l’enregistrement.

---

## Connectez une personne à distance en un instant {#connectez-distance}

Le studio permet d’intégrer une personne à distance. Il suffit de brancher votre ordinateur au câble prévu, de démarrer votre application de visioconférence, et l’image apparaîtra à l’écran du studio. La système basculera automatiquement vers cette source lorsque la personne parlera.

---

## Localisation et accès {#localisation-acces}

Seuls les membres de la communauté UdeM peuvent réserver le studio balado vidéo et accéder aux services de consultation et de soutien technique. Ils peuvent toutefois inviter des non-membres à participer aux enregistrements.

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

## Visite virtuelle

<Pano360
  image="/img/pano/studiobalado.webp"
  legende="Vue en 360° du Studio balado"
  title="Studio balado"
  alt="Vue en 360° du Studio balado"
/>
