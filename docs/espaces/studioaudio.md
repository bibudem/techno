---
id: studioaudio
title: Studios audio
description : Balados, présentations et entretiens.
image: "/img/cover/studiolsh.webp"
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

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

Les studios d'enregistrement audio des bibliothèques UdeM offrent des équipements de qualité pour enregistrer divers projets comme des balados, présentations et entretiens. Ce service aide à développer les compétences en communication et médiation scientifique.

---

## Localisation et accès

Les studios d'enregistrement audio sont gratuits et réservés à la communauté UdeM. Seuls les membres peuvent les réserver et accéder aux services de consultation et de soutien technique, mais ils peuvent inviter des non-membres à participer aux enregistrements.


import React from 'react';
import StudioCard from '@site/src/components/StudioCard';

<div
  className="grid grid--3"
  style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}
>
  <StudioCard
    title="Bibliothèque des lettres et sciences humaines (BLSH)"
    location="Pavillon Samuel-Bronfman, 2e étage, local 2076-2"
    mapLink="https://maps.app.goo.gl/BwmR9ty8qfqYiKAK7"
    description="À votre arrivée, présentez-vous au bureau de référence du 2e étage afin que le personnel puisse vous déverrouiller le studio."
    reserveLink="https://calendrier.bib.umontreal.ca/space/21911"
    reserveText="Réserver"
  />
  <StudioCard
    title="Bibliothèque Hubert-Reeves"
    location="Campus MIL, Aile A, local A-1549"
    mapLink="https://maps.app.goo.gl/t8GE4RdMBEJiHJtd8"
    description="À votre arrivée, présentez-vous au comptoir de la bibliothèque afin que le personnel puisse vous déverrouiller le studio."
    reserveLink="https://calendrier.bib.umontreal.ca/space/21911"
    reserveText="Réserver"
  />
  <StudioCard
    title="Bibliothèque Mathématiques et informatique"
    location="Pavillon André-Aisenstadt, local 2477"
    mapLink="https://maps.app.goo.gl/jJ4E8nj2TeAJJc3C7"
    description="À votre arrivée, présentez-vous au comptoir de la bibliothèque afin que le personnel puisse vous déverrouiller le studio."
    reserveLink="https://calendrier.bib.umontreal.ca/space/24357"
    reserveText="Réserver"
  />
</div>

---

## Documentation et soutien

De la documentation est disponible pour vous aider à utiliser le studio en toute autonomie.

Sur rendez-vous, un service de soutien avec un membre de l'équipe des bibliothèques de l'UdeM est offert pour aider les utilisateurs à se familiariser avec l’équipement. Ce service de soutien, qui est optionnel, est réservé aux membres de la communauté UdeM.

En plus des consultations, des formations sont offertes aux studios. Pour les détails et les dates, consultez le [calendrier des formations des Bibliothèques](https://bib.umontreal.ca/formations/calendrier).

<Link to=".././medias/rodecaster" className="button button--secondary">
  Consulter la documentation
</Link>

<Link to="../a-propos/nous-joindre" className="button button--secondary">
  Obtenir du soutien
</Link>

:::warning Le studio d'enregistrement doit aussi être réservé à la même heure pour obtenir du soutien.
:::

---

Pour toute question ou demande particulière, n'hésitez pas à nous écrire à studio@bib.umontreal.ca

---

## Visite 360

### Bibliothèque des lettres et sciences humaines (BLSH)

<iframe src="https://bibumontreal.h5p.com/content/1292278507800175298/embed" aria-label="BLSH - Studio d'enregistrement audio" width="100%" height="637" frameborder="0" allowfullscreen="allowfullscreen"></iframe><script src="https://bibumontreal.h5p.com/js/h5p-resizer.js" charset="UTF-8"></script>
