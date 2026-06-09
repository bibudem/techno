---
title: Installer le VPN
description: Guide pour installer et utiliser le VPN pour accéder aux ressources électroniques des bibliothèques UdeM.
help: info
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import React from 'react';
import CopyToClipboardButton from '@site/src/components/CopyToClipboardButton';

Le VPN permet d’accéder aux ressources de l’intranet universitaire ainsi qu'aux ressources électroniques des bibliothèques de l'UdeM. Pour l’utiliser, il faut être membre de la communauté UdeM et avoir en main ses informations d'authentification.

:::note Nouveau VPN Cisco Secure Client
Le client VPN Cisco Secure Client remplacere Ivanti Secure Access. L'application Ivanti Pulse Secure demeurera accessible jusqu’au 13 juin. Après cette date, seule l’application Cisco Secure Client pourra être utilisée pour se connecter au VPN. [Consulter le communiqué des Technologies de l'information](https://ti.umontreal.ca/fileadmin/ti/documents/Actualites_communiques_pdf/Remplacement_service_VPN_2026-06-01.pdf).
:::

---

## Installation

<Tabs groupId="os">
  <TabItem value="macos" label="macOS">
    Prérequis : macOS 13 et ultérieur.
    **Utiliser le navigateur internet Safari.**

    1. Ouvrir [vpn-client.umontreal.ca](https://vpn-client.umontreal.ca).
    2. S’authentifier avec ses informations d'authentification.
    3. Cliquer **Télécharger pour MacOS**
    4. Ouvrir le fichier téléchargé et suivre les instructions à l'écran. Si demandé, entrer le mot de passe de votre ordinateur.
    5. Lorsque la fenêtre **AnyConnect VPN Service Not Enabled** s'affiche, cliquer **Open System Settings**
    6. ACTIVER **Cisco Secure Client - AnyConnect VPN Service**.
    7. ACTIVER **Cisco Secure Client - AnyConnect VPN Service.app**.
    8. Lorsque la fenêtre contextuelle **Cisco Secure Client - Socket Filter** s'affiche, cliquer **Ouvrir Réglages système**
    9. ACTIVER **Cisco Secure Client - Socket Filter.app**.
    10. Cliquer **Autoriser**
    11. Ouvrir **Cisco Secure Client** dans **Finder->Application**
    12. Inscrire <CopyToClipboardButton text="vpn-cisco.umontreal.ca"/> et cliquer **Connexion**
    13. S’authentifier
    14. Le premier branchement VPN est effectué. L’icône au coin supérieur droit de l’écran indique la connexion au VPN.

    Lien vers la procédure détaillée des [Technologies de l'information.](https://wiki.umontreal.ca/download/attachments/127184779/VPN%20Anyconnect%20pour%20MAC.pdf?version=5&modificationDate=1780515269000&api=v2)
  </TabItem>

  <TabItem value="windows" label="Windows">
    Prérequis : Windows 10 et 11.
    **Utiliser le navigateur Chrome, Firefox ou Edge.**

    1. Ouvrir [vpn-client.umontreal.ca](https://vpn-client.umontreal.ca).
    2. S’authentifier avec ses informations d'authentification.
    3. Cliquer **Download for Windows**.
    4. Ouvrir le fichier téléchargé.
    5. Suivre les instructions à l'écran et cliquer **Oui** si demandé.
    6. Ouvrir Cisco Secure Client et inscrire <CopyToClipboardButton text="vpn-cisco.umontreal.ca"/>
    7. Cliquer **Se connecter**.
    8. S’authentifier à nouveau avec ses informations d'authentification.
    9. Le premier branchement VPN est effectué.L’icône Cisco Secure Client apparaît en bas à droite de l’écran pour indiquer la connexion au VPN.

    Lien vers la procédure détaillée des [Technologies de l'information.](https://wiki.umontreal.ca/spaces/SIE/pages/127184779/FAQ+VPN#expand-CommentinstallerlapplicationVPNsurunordinateurWindows)
  </TabItem>

  <TabItem value="ios" label="iOS">
    Prérequis : iOS et iPadOS version 13 et ultérieur.

    1. [Télécharger l'application Cisco Secure Client](https://apps.apple.com/us/app/cisco-secure-client/id1135064690) sur l'App Store.
    2. Ouvrir l'app **Cissco Secure Client**
    3. Appuyer **Connexions**
    4. Cliquer **Ajouter une connexion VPN..**
    5. Dans la case Adresse du serveur, inscrire <CopyToClipboardButton text="vpn-cisco.umontreal.ca"/> et appuyer **Enregistrer**.
    6. Appuyer **Autoriser**
    7. Activer le bouton **VPN AnyConnect**
    8. Dans la fenêtre d'authentification UdeM, entrer ses informations d'authentification et appuyer **Se connecter**.
    9.  Procéder à l'authentification à deux facteurs (A2F).
    10. La connexion au VPN est faite.

    Lien vers la procédure détaillée des [Technologies de l'information.](https://wiki.umontreal.ca/download/attachments/127184779/Procedure_AnyConnect_Iphone_UdeM_UdeM%20C.pdf?version=1&modificationDate=1779735926000&api=v2)
  </TabItem>

  <TabItem value="android" label="Android">
    1. [Télécharger et installer l'application Cisco Secure Client-AnyConnect](https://play.google.com/store/apps/details?id=com.cisco.anyconnect.vpn.android.avf) sur le Play Store.
    2. Ouvrir l'application et accepter les conditions.
    3. Cliquer **Autoriser**.
    4. Appuyer **Connexions**.
    5. Appuyer le bouton **"+"** (en bas à droite).
    6. Dans la case **Adresse du serveur**, inscrire <CopyToClipboardButton text="vpn-cisco.umontreal.ca"/> et appuyer **Terminer**.
    7. Cliquer la flèche retour pour revenir à l'écran précédent.
    8. Appuyer **Connexions**
    9. Sélectionner **UdeM Campus**.
    10. Activer le bouton **VPN AnyConnect**.
    11. Dans la fenêtre d'authentification UdeM, entrer ses informations d'authentification et appuyer **Se connecter**.
    12. Procéder à l'authentification à deux facteurs (A2F).
    13. La connexion au VPN est établie.
  
    Lien vers la procédure détaillée des [Technologies de l'information.](https://wiki.umontreal.ca/download/attachments/127184779/Procedure_AnyConnect_Android_UdeM.pdf?version=5&modificationDate=1779739032000&api=v2)

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

  <TabItem value="iOS" label="iOS">
    1. Ouvrir l'app **Cissco Secure Client**.
    2. Activer le bouton **VPN AnyConnect**.
    3. Dans la fenêtre d'authentification UdeM, entrer ses informations d'authentification et appuyer sur **Se connecter**.
    4.  Procéder à l'authentification à deux facteurs (A2F).
    5. La connexion au VPN est faite.
    6. Pour se déconnecter, **fermer le bouton VPN Anyconnect* dans Cisco Secure Client.
  </TabItem>
  <TabItem value="android" label="Android">
    1. Ouvrir l'application
    2. Activer le bouton **VPN AnyConnect**.
    3. Dans la fenêtre d'authentification UdeM, entrer ses informations d'authentification et appuyer **Se connecter**.
    4. Procéder à l'authentification à deux facteurs (A2F).
    5. La connexion au VPN est établie.
    6. Pour se séconnecter désactiver le bouton **VPN AnyConnect**.
  </TabItem>
</Tabs>

---

## Dépannage {#depannage}

<Tabs groupId="os">
  <TabItem value="macos" label="macOS">
    Si vous obtenez le message d’erreur **VPN AnyConnect** : « La capacité de connexion n'est pas disponible », vérifiez que vous n'avez pas déjà une connexion VPN active. Déconnectez tout autre VPN avant de tenter une nouvelle connexion.
  </TabItem>

  <TabItem value="windows" label="Windows">
    Si vous obtenez le message d’erreur **VPN AnyConnect** : « La capacité de connexion n'est pas disponible », vérifiez que vous n'avez pas déjà une connexion VPN active. Déconnectez tout autre VPN avant de tenter une nouvelle connexion.
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

---

## Désinstallation Ivanti Pulse Secure{#desinstallation-ivanti}

<Tabs groupId="os">
  <TabItem value="macos" label="macOS">
    1. Cliquer sur l'icône **Ivanti Secure Access Client** (en haut à droite) et quitter l'application.
    2. Aller à **Finder** → **Applications** → Clic droit sur **Ivanti Secure Access Client** → Placer dans la corbeille.
    3. Cliquer **No** à **save configuration**.
    4. Vider la corbeille.
  </TabItem>

  <TabItem value="windows" label="Windows">
    1. Cliquer le bouton **Démarrer**, puis **Paramètres**.
    2. Cliquer **Applications**.
    3. Sélectionner tous les items **Pulse Secure** et **Ivanti Secure Access Client** puis **Désinstaller**.
    4. Cliquer **Oui** pour redémarrer si demandé.
    5. Redémarrer l’ordinateur.
  </TabItem>
</Tabs>