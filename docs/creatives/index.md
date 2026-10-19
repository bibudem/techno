---
title : Technologies créatives
retroaction : false
description: "Technologies créatives des bibliothèques de l'Université de Montréal : impression 3D, réalité virtuelle, électronique, découpeuse, art textile, robots et projets."
---

import CardGrid from "@site/src/components/CardGrid";
import HideLastUpdated from '@site/src/components/HideLastUpdated';

<HideLastUpdated/>

Les bibliothèques de l'Université de Montréal offrent à la communauté UdeM des équipements et du soutien en technologies créatives : impression 3D, réalité virtuelle, électronique, découpeuse, art textile et robots. Vous y trouverez aussi un répertoire de projets réalisés dans nos espaces.

<CardGrid
  items={[
    {
      title: "Impression 3D",
      description: "Créez des objets en trois dimensions à partir de modèles numériques.",
      link: "/creatives/impression3d",
      icon: "Cube",
      image: "/img/cover/impression3d.webp",
    },
    {
      title: "Réalité virtuelle",
      description: "Explorez des mondes virtuels et des expériences immersives.",
      link: "/creatives/vr",
      icon: "VirtualReality",
      image: "/img/cover/vr.webp",
    },
    {
      title: "Électronique",
      description: "Apprenez à concevoir et à fabriquer des circuits électroniques.",
      link: "/creatives/electronique",
      icon : "Circuitry",
      image: "/img/cover/arduino.webp",
    },
    {
      title: "Découpeuse",
      description: "Découpez des matériaux pour vos projets de création.",
      link: "/creatives/decoupeuse",
      icon : "Nut",
      image: "/img/cover/vinyl.webp",
    },
    {
      title: "Art textile",
      description: "Créez des œuvres textiles avec nos équipements spécialisés.",
      link: "/creatives/art-textile",
      icon : "Scissors",
      image: "/img/cover/ateliers.webp",
    },
    {
      title: "Robots",
      description: "Empruntez ces accessoires didactiques.",
      link: "/creatives/robots",
      icon : "Robot",
      image: "/img/cover/robots.webp",
    },
    {
      title: "Projets",
      description: "Découvrez les projets créatifs de la communauté UdeM",
      link: "/creatives/projets",
      icon : "Slideshow",
      image: "/img/projets.webp",
    },
    
  ]}
/>



    
