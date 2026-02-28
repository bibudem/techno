---
title : Productions médias
retroaction : false
---

import CardGrid from "@site/src/components/CardGrid";

import HideLastUpdated from '@site/src/components/HideLastUpdated';

<HideLastUpdated/>

## Espaces

<CardGrid
  items={[
    {
      title: "Studios balado",
      description: "Espaces équipés pour l’enregistrement de balados audio et vidéo.",
      link: "/espaces/studiosbalado",
      icon: "Microphone",
      image: "/img/cover/baladoaudio.webp",
    },
    {
      title: "Studio vidéo",
      description: "Espace équipé pour la captation vidéo de projets audiovisuels.",
      link: "/espaces/studiovideo",
      icon: "VideoCamera",
      image: "/img/cover/studiovideo.webp",
    },
  ]}
/>

## Édition 

<CardGrid
  items={[
    {
      title: "Postes d'édition",
      description: "Ordinateurs équipés pour le montage audio, vidéo et l'infographie. Accessibles avec ou sans réservation.",
      link: "/medias/postes-edition",
      icon: "DesktopTower",
      image: "/img/cover/edition.webp",
    },
  ]}
/>

## Production audio

<CardGrid
  items={[
    {
      title: "Guide baladodiffusion",
      description: "Étapes et outils pour créer un balado de l'enregistrement jusqu'à la diffusion.",
      link: "/medias/balado",
      icon: "BookOpenText",
      image: "/img/cover/studiolsh.webp",
    },
    {
      title: "Guide balado vidéo",
      description: "Guide d'utilisation du studio de balado vidéo",
      link: "/medias/guidebaladovideo",
      icon: "Waveform",
      image: "/img/cover/baladovideo.webp",
    },
    {
      title: "RODECaster Pro II",
      description: "Guide d'utilisation de la console audio RØDECaster pour l'enregistrement.",
      link: "/medias/rodecaster",
      icon: "Waveform",
      image: "/img/cover/baladocover.webp",
    },
    {
      title: "Audacity",
      description: "Introduction à l'enregistrement et au montage audio avec le logiciel libre Audacity.",
      link: "/medias/audacity",
      icon: "FileAudio",
    },
  ]}
/>

## Production vidéo {#production-video}

<CardGrid
  items={[
    {
      title: "Guide du studio vidéo",
      description: "Guide d'utilisation du studio vidéo pour vos projets audiovisuels.",
      link: "/medias/studiovideo",
      icon: "BookOpenText",
    },
    {
      title: "Adobe Premiere Rush",
      description: "Logiciel pour monter rapidement vos vidéos avec l'interface intuitive de Premiere Rush.",
      link: "/medias/adoberush",
      icon: "FileVideo",
    },
    {
      title: "OBS",
      description: "Utiliser OBS Studio pour enregistrer, streamer ou capter du contenu vidéo.",
      link: "/medias/obs",
      icon: "Record",
    },
  ]}
/>



## Infographie

<CardGrid
  items={[
    {
      title: "Guide d'utilisation de la tablette graphique Kamvas 13",
      description: "Connexion, installation et premiers pas avec la tablette Huion Kamvas 13.",
      link: "/medias/tabgraphique",
      icon: "PencilSimpleLine",
      petit : true,
    },
  ]}
/>
