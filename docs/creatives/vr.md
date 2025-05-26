---
id : vr
title : Réalité virtuelle
image: "/img/cover/vr.webp"
help : crea
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import CardGrid from "@site/src/components/CardGrid";
import Disponibilite from '@site/src/components/Disponibilite';

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
Les bibliothèques de l’Université de Montréal mettent à la disposition de la communauté UdeM 20 casques de réalité virtuelle Meta Quest 3, répartis dans 9 bibliothèques. Ces équipements ont pour but d'aider à la découverte de la réalité virtuelle à travers une sélection variée d’expériences déjà téléchargées : animation, applications en lien avec les sciences ou la détente, documentaires et jeux.

Le tout a été réalisé grâce au Fonds d'amélioration de la vie étudiante (FAVE) et des Frais d'amélioration des services technologiques et informatiques et des collections des bibliothèques (STIC).

---

## Disponibilité

Présentez-vous au comptoir des bibliothèques suivantes pour emprunter un casque.
Vous pouvez aussi réserver un casque à l'avance en cliquant sur les liens ci-dessous.
Le prêt, réservé à la communauté UdeM, est de 7 jours, renouvelable automatiquement.

Disponibles en ce moment : 

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1rem",
    marginTop: "1.5rem"
  }}
>
  <Disponibilite label="Aménagement" oclc="1472198755" /> 
  <Disponibilite label="Hubert-Reeves" oclc="1246168952" />
  <Disponibilite label="Lettres et sciences humaines" oclc="1472212538" />
  <Disponibilite label="Marguerite d’Youville" oclc="1135196039" />
  <Disponibilite label="Médecine vétérinaire" oclc="1472214011" />
  <Disponibilite label="Mathématiques et informatique" oclc="1472141341" />
  <Disponibilite label="Musique" oclc="1135201148" />
  <Disponibilite label="Santé" oclc="1472198745" />
  <Disponibilite label="Thérèse-Gouin-Décarie" oclc="1246168559" />
</div>

---

<CardGrid
  items={[

    {
      title: "Catalogue d'expériences",
      description: "Découvrez les expériences disponibles sur les casques de réalité virtuelle Meta Quest 3",
      link: "vr/catalogue",
    }
  ]}
/>

---

    <!-- {
      title: "Guide d'utilisation",
      description: "Découvrez comment utiliser les casques de réalité virtuelle Meta Quest 3",
      link: "vr/guide",
    }, -->