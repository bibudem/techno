---
title : Ressources informatiques
retroaction : false
---

import CardGrid from "@site/src/components/CardGrid";

import HideLastUpdated from '@site/src/components/HideLastUpdated';

<HideLastUpdated/>


<CardGrid
  items={[
    {
      title: "Authentification",
      description: "Accédez aux services numériques avec votre identifiant institutionnel.",
      link: "authentification",
      icon : "Password",
    },
    {
      title: "Réseau sans fil",
      description: "Connectez-vous au Wi-Fi sécurisé sur le campus.",
      link: "reseau",
      icon : "WifiHigh",
    },
    {
      title: "Accès hors campus",
      description: "Utilisez le proxy ou le VPN pour accéder aux ressources à distance.",
      link: "hors-campus",
      icon : "Network",
    },
    {
      title: "Impression",
      description: "Imprimez vos documents depuis les postes informatiques ou votre appareil.",
      link: "impression",
      icon : "Printer",
    },
    {
      title: "Numérisation",
      description: "Scannez vos documents et envoyez-les directement par courriel.",
      link: "numerisation",
      icon : "Scan",
    },
    {
      title: "Ordinateurs",
      description: "Utilisez les postes informatiques mis à disposition sur le campus.",
      link: "ordinateurs",
      icon : "Laptop",
    },
    {
      title: "Postes AVA",
      description: "Profitez d’écrans larges pour un confort de travail optimal avec votre appareil.",
      link: "ava",
      icon : "Monitor",
    },
    {
      title: "Tablettes iPad",
      description: "Empruntez une tablette pour vos travaux et recherches.",
      link: "tablettes",
      icon : "DeviceTablet",
    },
    {
      title: "Équipements de consultation",
      description: "Consultez microfilms, VHS et autres supports sur nos appareils dédiés.",
      link: "consultation",
      icon : "FilmStrip",
    },
    {
      title: "Logiciels",
      description: "Retrouvez les logiciels disponibles sur nos postes de travail.",
      link: "logiciels",
      icon : "AppWindow",
    },
    {
      title: "Accessoires",
      description: "Empruntez chargeurs, adaptateurs, casques et autres équipements.",
      link: "accessoires",
      icon : "Headphones",
    },
  ]}
/>