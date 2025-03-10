---
id : vr
title : Réalité virtuelle
image: "/img/cover/vr.webp"

---
import useBaseUrl from '@docusaurus/useBaseUrl';
import CardGrid from "@site/src/components/CardGrid";

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
Les bibliothèques de l’Université de Montréal mettent à la disposition de la communauté UdeM 20 casques de réalité virtuelle Meta Quest 3, répartis dans 9 bibliothèques. Ces équipements ont pour but d'aider à la découverte de la réalité virtuelle à travers une sélection variée d’expériences déjà téléchargées : détente, animations, applications en lien avec les sciences, documentaires et jeux.

Le tout a été réalisé grâce au Fonds d'amélioration de la vie étudiante (FAVE) et des Frais d'amélioration des services technologiques et informatiques et des collections des bibliothèques (STIC).

## Localisation

Présentez-vous au comptoir des bibliothèques suivante pour emprunter un casque:

- Aménagement : 2
- Hubert-Reeves : 2
- Lettres et sciences humaines : 4
- Marguerite d’Youville : 2
- Mathématiques et informatique : 2
- Médecine vétérinaire : 2
- Musique : 2
- Santé : 2
- Thérèse-Gouin-Décarie : 2 

Le prêt, réservé à la communauté UdeM, est de 7 jours et renouvelable automatiquement.

[La réservation est possible par Sofia](https://umontreal.on.worldcat.org/search?lang=fr&_gl=1*1ucja2n*_ga*MTAxODY1ODI3MS4xNzM2OTU2ODMz*_ga_V8J6YFFD4F*MTc0MTIwNTQyNC44Ni4xLjE3NDEyMDY0OTkuMC4wLjA.&queryString=casque%20r%C3%A9alit%C3%A9%20virtuelle&clusterResults=true&groupVariantRecords=false&bookReviews=off&format=Object&changedFacet=format).


<CardGrid
  items={[
    {
      title: "Guide d'utilisation",
      description: "Découvrez comment utiliser les casques de réalité virtuelle Meta Quest 3",
      link: "vr/guide",
    },
    {
      title: "Catalogue d'expériences",
      description: "Découvrez les expériences disponibles sur les casques de réalité virtuelle Meta Quest 3",
      link: "vr/catalogue",
    }
  ]}
/>

