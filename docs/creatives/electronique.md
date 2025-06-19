---
id : electronique
title : Électronique
retroaction : false
image: "/img/cover/arduino.webp"
---

import CardGrid from "@site/src/components/CardGrid";
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

<img 
  src={useBaseUrl(frontMatter.image)} 
  alt=""
  style={{
    width: "100%",
    maxWidth: "1200px",
    display: "block",
    margin: "16px auto",
    borderRadius: "8px"
  }} 
/>

# Électronique

Cette section présente des technologies comme les Arduino, Raspberry Pi, Makey Makey et l’Internet des objets (IoT), que vous retrouverez dans nos ateliers de fabrication. Vous y trouverez aussi des informations utiles en lien avec les pièces disponibles sur place, pour mieux comprendre et utiliser ces outils dans vos projets.

---


<CardGrid
  items={[
      {
      title: "Trousses techno-créatives",
      description: `
      Emprunter une trousse techno-créative pour explorer l’électronique.`,
      link: "/creatives/electronique/trousses",
      icon: "BriefcaseMetal",
    },
    {
      title: "Arduino",
      description: `
      Arduino est une carte programmable avec un IDE pour créer facilement des projets électroniques interactifs.`,
      link: "/creatives/electronique/arduino",
      icon: "Circuitry",
    },
    {
      title: "Raspberry Pi",
      description: `Le Raspberry Pi est un mini-ordinateur abordable conçu pour l’apprentissage de l’informatique et de l’électronique.`,
      link: "/creatives/electronique/raspberrypi",
      icon: "DesktopTower",
    },
    {
      title: "Pièces électroniques",
      description: ` Découvrez la liste des pièces électroniques disponibles aux bibliothèques de l'UdeM.`,
      link: "/creatives/electronique/pieces",
      icon: "Circuitry",
    },
  ]}
/>

---

    <!-- 
        {
      title: "Multimètre",
      description: `
      Branchements et utilisation du multimètre. Permet de mesurer la tension, l'intensité et la resistance d'un circuit.`,
      link: "/creatives/electronique/multimetre",
      icon: "Gauge",
    },
    {
      title: "Internet des Objets",
      description: `
      L’Internet des objets (IdO) désigne un réseau d’objets physiques connectés qui communiquent entre eux.`,
      link: "/creatives/electronique/iot",
      icon: "WifiHigh",
    }, -->