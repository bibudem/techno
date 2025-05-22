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

La majorité des ressources électroniques (périodiques, bases de données et données numériques) offertes par les bibliothèques de l'UdeM consistent en des abonnements payants régis par des contrats de licences et dont l'utilisation est réservée à la communauté UdeM.

L'accès à ces ressources est possible avec un ordinateur du campus, avec vos appareils [par le réseau sans fil](reseau) **UdeM avec cryptage**, et à l'extérieur du campus à l'aide du serveur mandataire (*proxy*) ou du **VPN** (*Virtual Private Network* ou Réseau privé virtuel).

## Préalables

- Être membre actif de la communauté UdeM (étudiant ou employé)
- [Avoir ses informations d'authentification.](authentification)

:::info Préalables
Avant toute démarche, il est recommandé de consulter [les règles en vigueur concernant l’inactivation des services informatiques](https://wiki.umontreal.ca/spaces/SIE/pages/150507251/R%C3%A8gles+d+inactivation+des+services) de l’Université de Montréal, incluant les délais de retrait automatique.
:::

import CardGrid from "@site/src/components/CardGrid";

<CardGrid
  items={[
    {
      title: "Configurer le serveur mandataire (proxy)",
      description: "Configurez votre accès au serveur mandataire pour accéder aux ressources électroniques.",
      link: "/informatique/proxy",
    },
    {
      title: "Installer le VPN",
      description: "Installez le VPN pour une connexion sécurisée aux ressources électroniques.",
      link: "/informatique/vpn",
    },
  ]}
/>

---

