---
title: Impression 3D
description: Donnez vie à vos idées en 3D avec les imprimantes 3D des bibliothèques de l'Université de Montréal.
image: "/img/cover/impression3d.jpg"
---

import CardGrid from "@site/src/components/CardGrid";
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

<img 
  src={useBaseUrl(frontMatter.image)} 
  alt="Photo par Gloria Obeid, étudiante au baccalauréat en architecture (2023)"
  style={{
    width: "100%",
    maxWidth: "1200px",
    display: "block",
    margin: "16px auto",
    borderRadius: "8px"
  }} 
/>

# Impression 3D

Les bibliothèques de l'Université de Montréal offrent à la communauté UdeM l'accès à plusieurs imprimantes 3D, idéales pour créer des prototypes, des modèles, des pièces uniques, et bien plus encore.

---

## Localisation

| **Bibliothèque**                        | **Localisation** | **Modèles disponibles** |
|-----------------------------------------|-----------------|-------------------------|
| **Mathématiques et informatique** | [Atelier de fabrication](../espaces/ateliers.md), local 2432. [Voir sur la carte](https://maps.app.goo.gl/FHefa6pkavN4qBug6) | Prusa i3 MK3s+, Ultimaker S3 |
| **Hubert-Reeves**        | [Atelier de fabrication](../espaces/ateliers.md), local A-x. [Voir sur la carte](https://maps.app.goo.gl/6HsLMAxoBWpQZgcD8) | Prusa i3 MK3s+, Ultimaker S3 |
| **Thérèse-Gouin-Décarie** | [Atelier de fabrication](../espaces/ateliers.md), local A-x. [Voir sur la carte](https://maps.app.goo.gl/6HsLMAxoBWpQZgcD8) | Prusa i3 MK3s+, Ultimaker 2 & S3, Elegoo Saturn 3 Ultra |
| **Santé**         | 7ème étage, en face du comptoir de référence. [Voir sur la carte](https://maps.app.goo.gl/6HsLMAxoBWpQZgcD8) | Ultimaker S3 |
| **Marguerite d'Youville**         | [Voir sur la carte](https://maps.app.goo.gl/6HsLMAxoBWpQZgcD8) | BambuLab X1C |
| **Aménagement**         | [Voir sur la carte](https://maps.app.goo.gl/6HsLMAxoBWpQZgcD8) | BambuLab X1C |

---

## Documentation

De la documentation est disponible pour vous aider à utiliser les imprimantes 3D :

<div
  className="grid grid--4"
  style={{
    display: "grid",
    gap: "1rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  }}
>
<a
    href="/creatives/impression3d/introduction"
    className="card card--clickable"
    style={{
      backgroundColor: "#0B113A",
      color: "#fff",
      borderRadius: "8px",
      padding: "1rem",
      textDecoration: "none",
      transition: "transform 0.2s, box-shadow 0.2s, background-color 0.2s",
    }}
  >
    <div className="card__header">
      <h3>Introduction à l'impression 3D</h3>
    </div>
    <div className="card__body">
      
    </div>
  </a>

  <a
    href="/creatives/impression3d/modeles3d"
    className="card card--clickable"
    style={{
      backgroundColor: "#0B113A",
      color: "#fff",
      borderRadius: "8px",
      padding: "1rem",
      textDecoration: "none",
      transition: "transform 0.2s, box-shadow 0.2s, background-color 0.2s",
    }}
  >
    <div className="card__header">
      <h3>Les modèles 3D</h3>
    </div>
    <div className="card__body">
      
    </div>
  </a>


  <a
    href="/creatives/impression3d/prusa"
    className="card card--clickable"
    style={{
      backgroundColor: "#0057ac",
      color: "#fff",
      borderRadius: "8px",
      padding: "1rem",
      textDecoration: "none",
      transition: "transform 0.2s, box-shadow 0.2s, background-color 0.2s",
    }}
  >
    <div className="card__header">
      <h3>Prusa i3 Mk3s+</h3>
    </div>
    <div className="card__body">
      
    </div>
  </a>

  <a
    href="/creatives/impression3d/ultimaker"
    className="card card--clickable"
    style={{
      backgroundColor: "#0057ac",
      color: "#fff",
      borderRadius: "8px",
      padding: "1rem",
      textDecoration: "none",
      transition: "transform 0.2s, box-shadow 0.2s, background-color 0.2s",
    }}
  >
    <div className="card__header">
      <h3>Ultimaker</h3>
    </div>
    <div className="card__body">
      
    </div>
  </a>

<a
    href="/creatives/impression3d/bambu"
      className="card card--clickable"
      style={{
        backgroundColor: "#0057ac",
        color: "#fff",
        borderRadius: "8px",
        padding: "1rem",
        textDecoration: "none",
        transition: "transform 0.2s, box-shadow 0.2s, background-color 0.2s",
      }}
    >
      <div className="card__header">
        <h3>BambuLab X1C</h3>
      </div>
      <div className="card__body">
    </div>
    </a>

<a
    href="/creatives/impression3d/saturn"
      className="card card--clickable"
      style={{
        backgroundColor: "#0057ac",
        color: "#fff",
        borderRadius: "8px",
        padding: "1rem",
        textDecoration: "none",
        transition: "transform 0.2s, box-shadow 0.2s, background-color 0.2s",
      }}
    >
      <div className="card__header">
        <h3>Elegoo Saturn 3 Ultra 12K</h3>
      </div>
      <div className="card__body">
    </div>
    </a>

  </div>


---

## Formations et soutien

Que vous soyez débutant.e ou expert.e, vous pouvez profiter de :

<CardGrid
  items={[
    {
      title: "Réservez une consultation",
      description: "Avant votre première visite, on vous invite à réserver une rencontre avec un membre de notre équipe. C’est l’occasion de poser vos questions et de bien planifier votre impression. Ce service est offert à la communauté UdeM.",
      link: "#",
    },
    {
      title: "Participez à une formation",
      description: "Des formations pratiques sont aussi offertes tout au long de l’année pour vous familiariser avec les imprimantes 3D. Ces formations sont accessibles gratuitement pour la communauté UdeM.",
      link: "#",
    },
  ]}
/>

---

## Informations complémentaires

- L'impression 3D est un service gratuit offert par les bibliothèques uniquement pour les membres de la communauté UdeM.
- Pour connaître les règles d'utilisation des imprimantes 3D, consultez la section [Règles d'utilisation](../a-propos/politique.md).

---

<p style={{ fontSize: '0.8em' }}>
  Crédit photo : Gloria Obeid, étudiante au baccalauréat en architecture (2023)
</p>