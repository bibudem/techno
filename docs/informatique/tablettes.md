---
title : Tablettes iPad
image: "/img/cover/tablette.webp"
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import CardGrid from '@site/src/components/CardGrid';


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

Nous offrons un service de prêt de tablettes iPad pour la communauté UdeM. Vous avez également la possibilité d'ajouter vos propres applications en utilisant votre identifiant Apple ID.

## Modalités

Le prêt est d'une durée de **7 jours**. Le renouvellement est automatique à moins que la tablette ait été réservée par une autre personne. Les tablettes sont prêtées avec étui, mallette, fil USB et chargeur.

<details>
  <summary>**Localisation des tablettes iPad**</summary>
  - Campus Laval
  - Droit
  - Lettres et sciences humaines
  - Marguerite-d'Youville
  - Mathématiques et informatique
  - Santé
  - Hubert-Reeves
  - Thérèse-Gouin-Décarie
</details>


## Aide

<CardGrid
  items={[
    {
      title: "Guide d'utilisation de l'iPad",
      description:
        "Découvrez toutes les fonctionnalités de l'iPad grâce au guide officiel d'Apple.",
      link: "https://support.apple.com/fr-ca/guide/ipad/welcome/ipados",
    },
    {
      title: "Accès sans fil pour iOS",
      description:
        "Configurez votre connexion Wi‑Fi sur votre appareil iOS pour accéder aux services UdeM.",
      link: "/docs/sans-fil",
    },
    {
      title: "Configuration du proxy sur iOS",
      description:
        "Instructions détaillées pour configurer le serveur mandataire (proxy) sur votre appareil iOS.",
      link: "/docs/acces-hors-campus/proxy",
    },
    {
      title: "Installation du VPN sur iOS",
      description:
        "Installez le VPN sur votre appareil iOS pour accéder aux ressources hors campus en toute sécurité.",
      link: "/docs/acces-hors-campus/vpn",
    },
  ]}
/>