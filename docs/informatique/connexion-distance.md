---
title : Connexion à distance aux logiciels 
image: "/img/cover/distance.webp"
help: info
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


Besoin d'accéder à un logiciel des bibliothèques comme Antidote, Stata ou ArcGIS de chez vous? Utilisez nos postes publics à distance.

Les bibliothèques offrent à la **communauté étudiante de l'UdeM** la possibilité de se connecter à distance à certains logiciels disponibles sur ses ordinateurs, à partir de votre propre appareil, comme si vous étiez en bibliothèque — incluant Antidote ! 

---

## Avant de commencer

- [Procédure à suivre avant la connexion](#procedure-de-connexion).
- Membre de la communauté étudiante avec un statut employé? [Suivre cette procédure](#étudiants-et-étudiantes-avec-statut-demployé).
- Inactivité : Votre session se ferme automatiquement après 15 minutes.
- Sauvegarde : À la fin de votre session, assurez-vous de sauvegarder vos documents dans votre espace de stockage infonuagique OneDrive ou vous les expédier par courriel, car **les fichiers oubliés seront supprimés automatiquement après 24h** du dernier branchement.
- Déconnexion : Déconnectez-vous dès que vous avez terminé pour libérer le poste.

---

## Postes actuellement disponibles

Tous ces postes sont équipés de la suite Microsoft Office et des logiciels Antidote, ArcGis et SPSS. Consultez [la liste complète des logiciels](/informatique/logiciels) pour plus de détails.

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

## Procédure de connexion {#procedure-de-connexion}

<Tabs>
  <TabItem value="windows" label="Windows">
  
  1. Installer le **[VPN UdeM Campus](../informatique/vpn.md)**.
  2. Sélectionner un poste actuellement disponible.  
  3. Ouvrir le fichier téléchargé et cliquer **Connexion**.  
  4. S’authentifier de la façon suivante :  
       - **Nom** : `sim\votre code d’accès` (ex. `sim\ab12345` ou `sim\p1234567`)  
       - **Mot de passe** : votre mot de passe
  5. Dans la fenêtre qui s'ouvre, cliquer **Oui**
    
    :::info Astuce
    Si on vous demande d’entrer uniquement votre mot de passe, cliquez sur **Plus d’options** → **Utiliser un autre compte**, puis authentifiez-vous.
    :::
  
  </TabItem>

  <TabItem value="macos" label="macOS">
  **Prérequis : macOS 13 et ultérieur.**

  1. Installer le **[VPN UdeM Campus](../informatique/vpn.md)**.  
  2. Installer **Windows App** depuis [l'App Store](https://apps.apple.com/ca/app/microsoft-remote-desktop-10/id1295203466?mt=12).  
  3. Sélectionner un poste actuellement disponible.  
  4. Ouvrir le fichier téléchargé et cliquer **Connexion**.  
  5. S’authentifier de la façon suivante :  
     - **Nom** : `sim\votre code d’accès` (ex. `sim\ab12345` ou `sim\p1234567`)   
     - **Mot de passe** : votre mot de passe
  6. Cliquer **Continuer**
  </TabItem>

  <TabItem value="chromebook" label="Chromebook">
  
  1. Installer le **[VPN UdeM Campus](../informatique/vpn.md)**.  
  2. Installer **Windows App** depuis le [Google Play Store](https://play.google.com/store/apps/details?id=com.microsoft.rdc.androidx)
  3. Sélectionner un poste actuellement disponible.  
  4. Cliquer **Afficher le dossier**.  
  5. Cliquer droit sur le fichier téléchargé → **Ouvrir avec** → **Windows App**.  
  6. S’authentifier de la façon suivante :  
     - **Nom** : `sim\votre code d’accès` (ex. `sim\ab12345` ou `sim\p1234567`)  
     - **Mot de passe** : votre mot de passe
  7. Cliquer **CONNECT**.
  </TabItem>

  <TabItem value="linux" label="Linux">
  
  1. Installer le **[VPN UdeM Campus](../informatique/vpn.md)**.  
  2. Ouvrir **Remmina** (pré-installé dans la plupart des distributions Linux).  
  3. Entrer l'adresse complète du poste voulu dans la barre d’adresse de Remmina (ex. `ssp314-bib.fil.umontreal.ca`) et taper la touche **Entrée**.
  4. S’authentifier de la façon suivante :  
     - **Nom d’utilisateur** : `Votre code d’accès` (ex. `sim\ab12345` ou `sim\p1234567`)  
     - **Mot de passe** : votre mot de passe
     - **Domaine** : `sim`  
  5. Cliquer **Ok**.
  </TabItem>

  <TabItem value="ios" label="iOS">
  
  1. Installer le **[VPN UdeM Campus](../informatique/vpn.md)**.  
  2. Installer **Windows App Mobile** depuis [l'App Store](https://apps.apple.com/ca/app/windows-app-mobile/id714464092?l=fr-CA)  
  3. Sélectionner un poste actuellement disponible, télécharger le fichier associé.
      *Si une fenêtre intitulée Ignorer s'affiche, répéter l'étape 3.*
  4. Toucher le cercle en haut à droite dans Safari pour **Ouvrir le fichier téléchargé**.  
  5. S’authentifier de la façon suivante :  
     - **Nom** : `sim\votre code d’accès` (ex. `sim\ab12345` ou `sim\p1234567`) 
     - **Mot de passe** : votre mot de passe

  </TabItem>
</Tabs>

---

## Les fois suivantes

1. Se connecter au **VPN UdeM Campus** (ou UdeM SAM si vous avez un statut d'étudiant et employé)
2. Cliquer sur un poste actuellement disponible.

:::warning Attention
Veuillez noter que votre session sera fermée automatiquement après 15 minutes d’inactivité.

Sauvegarde : À la fin de votre session, assurez-vous de sauvegarder vos documents dans votre espace de stockage infonuagique OneDrive ou vous les expédier par courriel, car **les fichiers oubliés seront supprimés automatiquement après 24h** du dernier branchement.
:::

---

## Étudiants et étudiantes avec statut d’employé {#etudiants-statut-employe}

1. Se déconnecter de **VPN UdeM Campus**.
2. Cliquer l’icône du VPN (en haut ou en bas de l’écran), ensuite **Ouvrir**.
3. Cliquer **+**.
4. Nom = **VPN UdeM Etudiant**.
5. URL = **vpn.umontreal.ca/etudiants**.
6. Cliquer **Ajouter**.
7. Cliquer **Connexion** pour démarrer la connexion.
   
## Les fois suivantes

1. Se connecter au **VPN UdeM Etudiant**.
2.  Cliquer sur un poste actuellement disponible.

:::warning Attention
Il est actuellement impossible pour les personnes utilisant macOS de se connecter à distance aux postes publics des bibliothèques à partir du réseau du personnel. Cela inclut les postes des membres du personnel sur le campus et les accès par VPN avec un compte employé. Les étudiants et étudiantes avec statut d’employé doivent se déconnecter de VPN UdeM Campus et plutôt ajouter une connexion. Voir la procédure « Étudiants avec statut d’employé » en dernière page de la marche à suivre.
:::
