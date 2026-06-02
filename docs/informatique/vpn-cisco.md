---
title: Installer le VPN
description: Guide pour installer et utiliser le VPN pour accéder aux ressources électroniques des bibliothèques UdeM.
help: info
draft: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**TEMPORAIRE - VPN Cisco Secure Client - page non publiée** 
Le VPN permet d’accéder aux ressources de l’intranet universitaire ainsi qu'aux ressources électroniques des bibliothèques de l'UdeM. Pour l’utiliser, il faut être membre de la communauté UdeM et avoir en main ses informations d'authentification.

---

## Installation

<Tabs groupId="os">
  <TabItem value="macos" label="macOS">
    Prérequis : macOS 14 et ultérieur.
    **Utiliser le navigateur internet Safari.**

    1. Ouvrir [vpn-client.umontreal.ca](https://vpn-client.umontreal.ca).
    2. S’authentifier avec ses informations d'authentification.
    3. Cliquer **Télécharger pour MacOS**
    4. Ouvrir le fichier téléchargé et suivre les instructions à l'écran. Si demandé, entrer le mot de passe de votre ordinateur.
    5. Lorsque la fenêtre **AnyConnect VPN Service Not Enabled" s'affiche, cliquer **Open System Settings**
    6. ACTIVER **Cisco Secure Client - AnyConnect VPN Service**.
    7. ACTIVER **Cisco Secure Client - AnyConnect VPN Service.app**.
    8. Lorsque la fenêtre contextuelle **Cisco Secure Client - Socket Filter** s'affiche, cliquer **Ouvrir Réglages système**
    9. ACTIVER **Cisco Secure Client - Socket Filter.app**.
    10. Cliquer **Autoriser**
    11. Ouvrir **Cisco Secure Client** dans Finder->Application
    12. Inscrire **vpn-cisco.umontreal.ca** et cliquer **Connexion**
    13. S’authentifier
    14. Le premier branchement VPN est effectué.L’icône au coin supérieur droit de l’écran indique la connexion au VPN.
  </TabItem>

  <TabItem value="windows" label="Windows">
    **Utiliser le navigateur Chrome, Firefox ou Edge.**

    1. Ouvrir [vpn-client.umontreal.ca](https://vpn-client.umontreal.ca).
    2. S’authentifier avec ses informations d'authentification.
    3. Cliquer **Download for Windows**.
    4. Ouvrir le fichier téléchargé.
    5. Suivre les instructions à l'écran et cliquer **Oui** si demandé.
    6. Ouvrir Cisco Secure Client et inscrire le lien suivant **vpn-cisco.umontreal.ca**
    7. Cliquer **Se connecter**.
    8. S’authentifier à nouveau avec ses informations d'authentification.
    9. Le premier branchement VPN est effectué.L’icône Cisco Secure Client apparaît en bas à droite de l’écran pour indiquer la connexion au VPN.
  </TabItem>

  <TabItem value="ios" label="iOS">
    1. [Télécharger l'application Cisco Secure Client](https://apps.apple.com/us/app/cisco-secure-client/id1135064690) sur l'App Store.
    2. Lancer l'application et dans la case URL, entrer `vpn.umontreal.ca/campus` et appuyer sur **Connexion**.
    3. Dans Nom d'utilisateur, entrer son code d'accès et appuyer sur **Connexion**.
    4. Autoriser Secure Access à ajouter des configurations VPN en appuyant sur **Autoriser**, puis entrer le code de déverrouillage de l'appareil.
    5. Dans la fenêtre d'authentification UdeM, entrer ses informations d'authentification et appuyer sur **Se connecter**.
    6. Procéder à l'authentification à deux facteurs (A2F).
    7. La connexion au VPN est faite.
  </TabItem>

  <TabItem value="android" label="Android">
    1. [Télécharger l'application Ivanti Secure Access Client](https://play.google.com/store/apps/details?id=net.pulsesecure.pulsesecure) sur le Play Store.
    2. Appuyer sur **Ajouter une nouvelle connexion** et dans la case URL, entrer : `vpn.umontreal.ca/campus`.
    3. Appuyer sur la connexion `vpn.umontreal.ca/campus` et appuyer **Connecter**.
    4. S’authentifier avec ses informations d'authentification.
    5. Procéder à l'authentification à deux facteurs (A2F).
    6. L’icône Service VPN s’affiche en bas à droite à droite de l’écran, la connexion est faite.
  </TabItem>
</Tabs>

---

## Utilisation

<Tabs groupId="os">
  <TabItem value="macos" label="macOS">
    1. Lancer l'application **Cisco Secure Client** (coin supérieur droit).
    2. Sélectionner **UdeM Campus** → **Connexion**.
    3. S’authentifier avec ses informations d'authentification.
    4. Pour se déconnecter, cliquer l'icône **Cisco Secure Client** (coin supérieur droit) et sélectionner **Déconnecter**.
  </TabItem>

  <TabItem value="windows" label="Windows">
    1. Lancer l'application **Cisco Secure Client** (menu démarrer Windows).
    2. Sélectionner **UdeM Campus** → **Connexion**.
    3. S’authentifier avec ses informations d'authentification.
    4. Pour se déconnecter, cliquer l'icône Cisco Secure Client (en bas à droite) et sélectionner **Déconnecter**.
  </TabItem>
</Tabs>

---

## Dépannage {#depannage}

<Tabs groupId="os">
  <TabItem value="macos" label="macOS">
    **Nous devons réfléchir aux éléments à mettre dans cette sescion.**
    Si vous obtenez le message d’erreur `Impossible d’ouvrir le fichier PulseSecureAppLauncher.mpkg, car Apple ne peut pas vérifier s’il contient des logiciels malveillants.` :

    - 1re solution : Glisser l'icône `PulseSecureAppLauncher.mpkg` dans le dossier Bureau et lancer l'application.
    - 2e solution : Ouvrir **Préférences Système** → **Sécurité et confidentialité** → **Général** → **Ouvrir quand même**.
  </TabItem>

  <TabItem value="windows" label="Windows">
  **Nous devons réfléchir aux éléments à mettre dans cette sescion.**
    1. Lors de l'installation, si plus rien ne se passe, redémarrer votre ordinateur, relancer la page [vpn.umontreal.ca/campus](https://vpn.umontreal.ca/campus) et cliquer à nouveau sur le bouton **Démarrer**.
    2. Essayer dans un autre navigateur.
  </TabItem>
</Tabs>

---

## Désinstallation {#desinstallation}

<Tabs groupId="os">
  <TabItem value="macos" label="macOS">
    1. Cliquer l'icône **Cisco Secure Client** (en haut à droite) et quitter l'application.
    2. Aller à **Finder** → **Applications** → Clic droit sur **Cosco Secure Access Client** → Placer dans la corbeille.
    3. Cliquer **No** à **save configuration**.
    4. Vider la corbeille.
    5. **Redémarrer l'ordinateur**.
  </TabItem>

  <TabItem value="windows" label="Windows">
    1. Cliquer le bouton **Démarrer**, puis **Paramètres**.
    2. Cliquer **Applications**.
    3. Sélectionner les items **Cisco Secure Client - AnyConnect VPN** et **Cisco Secure Client - Diagnosis and reporting tool** puis **Désinstaller**.
    4. Cliquer **Oui** pour redémarrer si demandé.
    5. **Redémarrer l’ordinateur**.
  </TabItem>
</Tabs>
