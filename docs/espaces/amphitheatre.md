---
id : amphitheatre
title : Amphithéâtre
description : Salle de projection de films
image: "/img/cover/amphi.jpg"
---
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

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

L’amphithéâtre offre un espace moderne et équipé pour la projection de films, avec une capacité de 40 places, un projecteur 4K cinéma pour une qualité d’image optimale et une installation sonore en 7.1 pour une immersion audio complète. La salle est réservée à la communauté UdeM et son utilisation est gratuite.

---

## Localisation et accès

Les membres de la communauté UdeM peuvent inviter des non-membres à assister aux événements, mais seuls les membres peuvent réserver l'amphithéâtre et bénéficier des services de consultation et de soutien technique.

import StudioCard from "@site/src/components/StudioCard";

<StudioCard
    title="Bibliothèque des lettres et sciences humaines (BLSH)"
    location="Pavillon Samuel-Bronfman, 2e étage, local 2076-5"
    mapLink="https://maps.app.goo.gl/BwmR9ty8qfqYiKAK7"
    description="À votre arrivée, présentez-vous au bureau de référence du 2e étage afin que le personnel puisse vous déverrouiller l'amphithéâtre."
    reserveLink="https://calendrier.bib.umontreal.ca/space/21911"
    reserveText="Réserver"
/>

---

## Guide et soutien

<Link to="./guide/amphitheatre" className="button button--primary">
  Guide d'utilisation
</Link>

---

## Visite 360°

<iframe src="https://bibumontreal.h5p.com/content/1292277650474974088/embed" aria-label="BLSH - Amphithéâtre" width="100%" height="637" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe><script src="https://bibumontreal.h5p.com/js/h5p-resizer.js" charset="UTF-8"></script> 