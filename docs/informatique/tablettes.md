---
title : Tablettes iPad
image: "/img/cover/tablette.webp"
help: info
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import CardGrid from '@site/src/components/CardGrid';
import Disponibilite from '@site/src/components/Disponibilite';


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

## Disponible en ce moment

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1rem",
    marginTop: "1.5rem"
  }}
>
  <Disponibilite label="Campus Laval" oclc="1245965028" />
  <Disponibilite label="Droit" oclc="1245964868" />
  <Disponibilite label="Hubert-Reeves" oclc="1135290920" />
  <Disponibilite label="Lettres et sciences humaines" oclc="1135189358" />
  <Disponibilite label="Marguerite-d'Youville" oclc="1135265589" />
  <Disponibilite label="Mathématiques et informatique" oclc="1245966991" />
  <Disponibilite label="Santé" oclc="1240172331" />
  <Disponibilite label="Thérèse-Gouin-Décarie" oclc="1245965122" />
</div>



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
      link: "/informatique/reseau#udem-avec-cryptage",
    },
    {
      title: "Configuration du proxy sur iOS",
      description:
        "Configurez le serveur mandataire (proxy) sur votre appareil iOS avec ces instructions détaillées.",
      link: "/informatique/proxy",
    },
    {
      title: "Installation du VPN sur iOS",
      description:
        "Installez le VPN sur votre appareil iOS pour accéder aux ressources hors campus en toute sécurité.",
      link: "/informatique/vpn",
    },
  ]}
/>