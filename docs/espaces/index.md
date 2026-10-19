---
title: Espaces
retroaction : false
description: "Espaces technologiques des bibliothèques de l'UdeM : amphithéâtre, ateliers de fabrication, atelier de zines, laboratoire de visualisation, salles de visionnement et studios."
---

import HideLastUpdated from '@site/src/components/HideLastUpdated';

<HideLastUpdated/>

# Espaces

Les bibliothèques de l'UdeM offrent à leur communauté des espaces équipés pour la projection, la fabrication, la création de zines, la visualisation de données, le visionnement et l'enregistrement de balados et de vidéos.

import CardGrid from "@site/src/components/CardGrid";

<CardGrid
  items={[
    {
      title: "Amphithéâtre",
      description: "Espace de projection équipé pour des visionnements de films, des conférences et des présentations.",
      link: "amphitheatre",
      icon : "FilmReel",
      image: "/img/cover/amphi.webp",
    },
    {
      title: "Ateliers de fabrication",
      description: "Un espace pour s'initier à l'impression 3D, à l’électronique et à la fabrication numérique.",
      link: "ateliers",
      icon : "Cube",
      image: "/img/cover/ateliers.webp",
    },
    {
      title: "Atelier de zines",
      description: "Un lieu idéal pour concevoir ou finaliser un zine.",
      link: "zines",
      icon : "Cube",
      image: "/img/cover/zines.webp",
    },
            {
      title: "Laboratoire de visualisation",
      description: "Un environnement pour interagir avec des données visuelles sur grand écran.",
      link: "visualisation",
      icon : "TreeStructure",
      image: "/img/cover/labvisu.webp",
    },
    {
      title: "Salles de visionnement",
      description: "Un espace confortable pour visionner des contenus multimédias.",
      link: "visionnement",
      icon : "MonitorPlay",
      image: "/img/cover/consultation.webp",
    },
    {
      title: "Studios balado",
      description: "Des espaces pour l’enregistrement de balado",
      link: "studiosbalado",
      icon : "Microphone",
      image: "/img/cover/baladocover.webp",
    },
    {
      title: "Studios vidéo",
      description: "des espaces équipés pour filmer des vidéos facilement.",
      link: "studiosvideo",
      icon : "VideoCamera",
      image: "/img/cover/studiovideo.webp",
    },

  ]}
/>

