---
title : Amphithéâtre
description : Salle de projection de films
image: "/img/cover/amphi.webp"
---
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
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

L’amphithéâtre offre un espace moderne équipé pour la projection de films :
- capacité de 40 places;
- un projecteur 4K cinéma pour une qualité d'image optimale;
- une installation sonore en 7.1 pour une immersion audio complète.


Seuls les membres de la communauté UdeM peuvent réserver l’amphithéâtre, mais ils peuvent inviter des non-membres à assister aux événements. La réservation et l’utilisation de la salle sont gratuites.

---

import StudioCard from "@site/src/components/StudioCard";

<StudioCard
    title="Bibliothèque des lettres et sciences humaines (BLSH)"
    location={
    <>
      Pavillon Samuel-Bronfman, 2<sup>e</sup> étage, local 2078
    </>
  }
    mapLink="https://maps.app.goo.gl/7LA5xUwwGKmAbZ6H6"
    description="Pour vérifier la disponibilité et pour réserver, contacter Ann Mary Sotomayor (ann.mary.sotomayor@umontreal.ca), technicienne en coordination de travail de bureau."
    secondaryLinks={[
    { href: "./guide/amphitheatre", text: "Guide d'utilisation" },
  ]}
/>

---

## Visite virtuelle

<Pano360
  image="/img/pano/amphi.webp"
  legende="Vue en 360° de l'amphithéâtre"
  title="Amphithéâtre"
  alt="vue en 360° de l'amphithéâtre"
/>