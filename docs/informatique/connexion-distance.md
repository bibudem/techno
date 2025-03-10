---
title : Connexion à distance
image: "/img/cover/distance.webp"
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


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import PostesDisponibles from '@site/src/components/PostesDisponibles';

# Connexion à distance aux logiciels 

Besoin d'accéder à un logiciel des bibliothèques comme Antidote, Stata ou ArcGIS depuis chez vous? Utilisez nos postes publics à distance.

Les bibliothèques offrent à la communauté étudiante de l'UdeM la possibilité de se connecter à distance à certains logiciels disponibles sur ses ordinateurs, à partir de votre propre appareil, comme si vous étiez en bibliothèque.

---

## Avant de commencer

- [Procédure à suivre avant la connexion](#procédure-de-connexion).
- Membre de la communauté étudiante avec un statut employé? [Suivre cette procédure](#étudiants-avec-statut-demployé).
- Inactivité : Votre session se ferme automatiquement après 15 minutes.
- Sauvegarde : Sauvegardez vos documents avant de quitter, ils seront supprimés après la session.
- Déconnexion : Déconnectez-vous dès que vous avez terminé pour libérer le poste.

---

## Postes actuellement disponibles

Tous ces postes sont équipés de la suite Microsoft Office et des logiciels Antidote, ArcGis et SPSS. Consultez [la liste complète des logiciels](logiciels) pour plus de détails.

<div className="grid-container">
  
  <div className="grid-item">
    <h3>Adobe Creative Cloud</h3>
    <PostesDisponibles zone="AdobeCreativeCloud" />
  </div>

  <div className="grid-item">
    <h3>Adobe Acrobat Pro</h3>
    <PostesDisponibles zone="AdobePro" />
  </div>

  <div className="grid-item">
    <h3>Mathematica, SAS, Stata et SPSS Amos</h3>
    <PostesDisponibles zone="Stata" />
  </div>

</div>

---

## Procédure de connexion

<Tabs>
  <TabItem value="windows" label="Windows">
  
  1. Installer le VPN.  
  2. Sélectionner un poste actuellement disponible.  
  3. Exécuter le fichier et cliquer sur **Connexion**.  
  4. S’authentifier de la façon suivante :  
     - **Nom** : `sim\votre code d’accès` (ex. `sim\p1234567`)  
     - **Mot de passe** : votre mot de passe  
    :::info Astuce
    Si on vous demande d’entrer uniquement votre mot de passe, cliquez sur **Plus d’options**, ensuite **Utiliser un autre compte**, puis authentifiez-vous.
    :::
  
  </TabItem>

  <TabItem value="macos" label="macOS">
  
  1. Installer le VPN.  
  2. Installer **Microsoft Remote Desktop** depuis l'App Store.  
  3. Sélectionner un poste actuellement disponible.  
  4. Exécuter le fichier et cliquer sur **Connexion**.  
  5. S’authentifier de la façon suivante :  
     - **Nom** : `sim\votre code d’accès` (ex. `sim\p1234567`)  
     - **Mot de passe** : votre mot de passe  

  </TabItem>

  <TabItem value="chromebook" label="Chromebook">
  
  1. Installer le VPN.  
  2. Installer **Microsoft Remote Desktop** depuis le Google Play Store.  
  3. Sélectionner un poste actuellement disponible.  
  4. Cliquer sur **Afficher le dossier**.  
  5. Clique droit sur le fichier téléchargé → **Ouvrir avec** → **RD Client**.  
  6. S’authentifier de la façon suivante :  
     - **Nom** : `sim\votre code d’accès` (ex. `sim\p1234567` ou `sim\ab12345`)  
     - **Mot de passe** : votre mot de passe  

  </TabItem>

  <TabItem value="linux" label="Linux">
  
  1. Installer le VPN.  
  2. Ouvrir **Remmina** (pré-installé dans la plupart des distributions Linux).  
  3. Entrer l'adresse complète du poste voulu dans la barre d’adresse de Remmina (ex. `ssp314-bib.fil.umontreal.ca`).  
  4. S’authentifier de la façon suivante :  
     - **Nom d’utilisateur** : `Votre code d’accès` (ex. `p1234567` ou `ab12345`)  
     - **Mot de passe** : votre mot de passe  
     - **Domaine** : `sim`  

  </TabItem>

  <TabItem value="ios" label="iOS">
  
  1. Installer le VPN.  
  2. Installer **Microsoft Remote Desktop** depuis l'App Store.  
  3. Sélectionner un poste actuellement disponible, télécharger le fichier associé et l'exécuter.  
  4. Exécuter le fichier et cliquer sur **Connexion**.  
  5. S’authentifier de la façon suivante :  
     - **Nom** : `sim\votre code d’accès` (ex. `sim\p1234567` ou `sim\ab12345`)  
     - **Mot de passe** : votre mot de passe  

  </TabItem>
</Tabs>

---

## Les fois suivantes

1. Se connecter au VPN UdeM Campus (ou UdeM SAM si vous avez un statut employé)
2. Cliquer sur un poste actuellement disponible.

:::warning Attention
Veuillez noter que votre session sera fermée automatiquement après 15 minutes d’inactivité.
:::

---

## Étudiants avec statut d’employé

1. Se déconnecter de **VPN UdeM Campus**.
2. Cliquer sur l’icône du VPN (en haut ou en bas de l’écran), ensuite **Ouvrir**.
3. Cliquer sur +.
4. Nom = VPN UdeM Etudiant
5. URL = vpn.umontreal.ca/etudiants
6. Cliquer **Ajouter**.
7. Cliquer **Connexion** pour démarrer la connexion.