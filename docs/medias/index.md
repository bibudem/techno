---
title : Productions médias
retroaction : false
---

import CardGrid from "@site/src/components/CardGrid";

import HideLastUpdated from '@site/src/components/HideLastUpdated';

<HideLastUpdated/>

## Production audio

<CardGrid
  items={[
    {
      title: "Guide baladodiffusion",
      description: "Étapes et outils pour créer un balado de l'enregistrement jusqu'à la diffusion.",
      link: "/medias/balado",
      icon: "BookOpenText",
    },
    {
      title: "Guide balado vidéo",
      description: "Guide d'utilisation du studio de balado vidéo",
      link: "/espaces/guide/studiob",
      icon: "Waveform",
    },
    {
      title: "RODECaster Pro II",
      description: "Guide d'utilisation de la console audio RØDECaster pour l'enregistrement.",
      link: "/medias/rodecaster",
      icon: "Waveform",
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

## Édition 

<CardGrid
  items={[
    {
      title: "Postes d'édition",
      description: "Ordinateurs équipés pour le montage audio, vidéo et l'infographie. Accessibles avec ou sans réservation.",
      link: "/medias/postes-edition",
      icon: "DesktopTower",
      petit : true,
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
