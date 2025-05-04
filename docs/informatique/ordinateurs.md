---
title: Ordinateurs
description: Informations sur les ordinateurs en libre-service et les portables en prêt dans les bibliothèques UdeM.
hide_table_of_contents: false
image: "/img/cover/ordinateurs1.webp"
help: info
---

import useBaseUrl from '@docusaurus/useBaseUrl';
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


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';
import Link from '@docusaurus/Link';

# Ordinateurs

## Libre-service

Des ordinateurs en libre-service sont à la disposition de tous les utilisateurs et utilisatrices. L’accès se fait via un code d’accès et un mot de passe.

<Link to="logiciels" className="button button--primary">
  Consulter la liste des logiciels offerts
</Link>

---

:::info Le saviez-vous?
Vous cherchez un ordinateur puissant pour vos travaux vidéos ou graphiques? Consultez la page [Postes d'édition](../medias/postes-edition.md).
:::

---

## Portables en prêt

Des ordinateurs portables sont disponibles pour la communauté étudiante de l'UdeM. Ces ordinateurs portables ont une configuration similaire aux ordinateurs en libre-service des bibliothèques, sauf quelques exceptions.

<Tabs groupId="pret-portable">
  <TabItem value="pret-6h" label="Prêt 6 heures">
    - **Aucune réservation**
    - **Un renouvellement** est possible via votre dossier Sofia.
    - Disponible en ce moment :
  
<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1rem",
    marginTop: "1.5rem"
  }}
>
  <Disponibilite label="Aménagement" oclc="1194592312" />
  <Disponibilite label="Droit" oclc="1287017409" />
  <Disponibilite label="Campus Laval" oclc="1287017250" />
  <Disponibilite label="Hubert-Reeves" oclc="1240170705" />
  <Disponibilite label="Lettres et sciences humaines" oclc="1287018067" />
  <Disponibilite label="Thérèse-Gouin-Décarie" oclc="1287023040" />
</div>

    Adressez-vous au comptoir de prêt des bibliothèques concernées.

    :::note Surface Book 2
    La Bibliothèque d'aménagement offre le prêt d'ordinateurs Surface Book 2 qui allient la polyvalence d’un ordinateur portable, d’une tablette et d’un studio portable. Ils sont équipés d’un stylet et ont une licence Adobe Creative Cloud. Ces ordinateurs doivent être utilisés à l'intérieur de la Bibliothèque d'aménagement.
    :::
  </TabItem>

  <TabItem value="pret-7j" label="Prêt 7 jours">
    :::warning
    **Uniquement à la Bibliothèque de médecine vétérinaire.**
    :::

    - Réservés aux étudiantes et étudiants de la Faculté de médecine vétérinaire.  
    - **Réservation obligatoire**.  
    - Durée du prêt : **7 jours**.  
    - Le renouvellement est automatique, sauf si l'ordinateur est réservé par une autre personne. Si tel est le cas, des frais de **5$ par jour de retard** s'appliqueront.
    - Disponible en ce moment :
  <Disponibilite label="Bibliothèque de médecine vétérinaire" oclc="1230477391" />

    **Pour réserver un portable :**
    1. Accéder à la notice [Portables de la Faculté de médecine vétérinaire](https://umontreal.on.worldcat.org/oclc/1230477391).  
    2. Cliquer sur le bouton **Obtenir**.
    3. Préciser dans le formulaire : « J'ai besoin de n’importe quel exemplaire ».  
    4. Un courriel sera envoyé lorsque le portable sera disponible pour l’emprunt.
  </TabItem>

  <TabItem value="pret-30j" label="Prêt 30 jours">
    :::warning
    **Uniquement à la Bibliothèque des lettres et sciences humaines.**
    :::

    - **Réservation obligatoire**.  
    - Le renouvellement est automatique, sauf si l'ordinateur est réservé par une autre personne.  
    - Si le portable est réservé par une autre personne, des frais de **5$ par jour de retard** s'appliqueront.
    - Disponible en ce moment :
  <Disponibilite label="Bibliothèque des lettres et sciences humaines" oclc="1135196766" />

    **Pour réserver un portable :**
    1. Accéder à la notice [Portables des bibliothèques UdeM](https://umontreal.on.worldcat.org/oclc/1135196766?_gl=1*my8gyu*_ga*NDkwNjAwMjE2LjE2OTY5MDQ4NTM.*_ga_V8J6YFFD4F*MTcwOTE4NTYyMi40MS4xLjE3MDkxODg5ODUuMC4wLjA.).  
    2. Cliquer sur le bouton **Obtenir**.
    3. Préciser dans le formulaire : « J'ai besoin de n’importe quel exemplaire ».  
    4. Un courriel sera envoyé lorsque le portable sera disponible pour l’emprunt.
  </TabItem>
</Tabs>

---
