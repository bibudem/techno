---
title: Accès hors campus
description: Accès aux ressources électroniques des bibliothèques UdeM via le proxy ou VPN.
hide_table_of_contents: false
image: "/img/cover/horscampus.webp"
---

import useBaseUrl from '@docusaurus/useBaseUrl';

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


# Accès hors campus aux ressources électroniques

La majorité des ressources électroniques (périodiques, bases de données et données numériques) offertes par les bibliothèques UdeM consistent en des abonnements payants régis par des contrats de licences et dont l'utilisation est réservée à la communauté UdeM.

L'accès à ces ressources est possible via un ordinateur du campus, vos appareils [par le réseau sans fil](reseau) **UdeM avec cryptage**, et à l'extérieur du campus à l'aide du serveur mandataire (*proxy*) et du **VPN** (*Virtual Private Network* ou Réseau Privé Virtuel).

## Préalables

- Être membre actif de la communauté UdeM.
- [Avoir ses informations d'authentification.](authentification)

import CardGrid from "@site/src/components/CardGrid";

<CardGrid
  items={[
    {
      title: "Configurer le serveur mandataire (proxy)",
      description: "Configurez votre accès au serveur mandataire pour accéder aux ressources électroniques.",
      link: "proxy",
    },
    {
      title: "Installer le VPN",
      description: "Installez le VPN pour une connexion sécurisée aux ressources électroniques.",
      link: "vpn",
    },
  ]}
/>

---

