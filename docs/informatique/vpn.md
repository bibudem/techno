---
title: Installer le VPN
description: Guide pour installer et utiliser le VPN pour accéder aux ressources électroniques des bibliothèques UdeM.
pagination_next: null
pagination_prev: null
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installer le VPN

Le VPN permet d’accéder aux ressources de l’intranet universitaire ainsi qu'aux ressources électroniques des bibliothèques UdeM. Pour l’utiliser, il faut être membre de la communauté UdeM et avoir en main ses informations d'authentification.

---

## Installation

<Tabs groupId="os">
  <TabItem value="macos" label="macOS">
    **Utiliser le navigateur internet Safari.**

    1. Ouvrir [vpn.umontreal.ca/campus](https://vpn.umontreal.ca/campus).
    2. S’authentifier avec ses informations d'authentification.
    3. À droite, cliquer **Démarrer**.
    4. Si demandé, cliquer **Autoriser** et **Toujours**.
    5. Si demandé, entrer le mot de passe de votre ordinateur.
    6. Le premier branchement VPN est automatique. L’icône au coin supérieur droit de l’écran indique la connexion au VPN.
  </TabItem>

  <TabItem value="windows" label="Windows">
    **Utiliser le navigateur Chrome, Firefox ou Edge.**

    1. Ouvrir [vpn.umontreal.ca/campus](https://vpn.umontreal.ca/campus).
    2. S’authentifier avec ses informations d'authentification.
    3. À droite, cliquer **Démarrer**.
    4. Cliquer **Télécharger**.
    5. Ouvrir `PulseSecureAppLauncher.msi`.
    6. Sur la page web, cliquer sur **ICI** et sélectionner les options **Mémoriser** et **Toujours**.
    7. Cliquer **Ouvrir**.
    8. Accepter et installer toutes les composantes proposées par les fenêtres modales.
    9. Le premier branchement VPN est automatique. L’icône Pulse Secure apparaît en bas à droite de l’écran pour indiquer la connexion au VPN.
  </TabItem>

  <TabItem value="ios" label="iOS">
    1. [Télécharger l'application Ivanti Secure Access Client](https://apps.apple.com/fr/app/ivanti-secure-access-client/id945832041) sur l'App Store.
    2. Lancer l'application et dans la case URL, entrer `vpn.umontreal.ca/campus` et appuyer sur **Connexion**.
    3. Dans Nom d'utilisateur, entrer son code d'accès et appuyer sur **Connexion**.
    4. Autoriser Secure Access à ajouter des configurations VPN en appuyant sur **Autoriser**, puis entrer le code de déverrouillage de l'appareil.
    5. Dans la fenêtre d'authentification UdeM, entrer ses informations d'authentification et appuyer sur **Se connecter**.
    6. Procéder à l'authentification à deux facteurs (A2F).
    7. Vous êtes maintenant connecté au VPN.
  </TabItem>

  <TabItem value="android" label="Android">
    1. [Télécharger l'application Ivanti Secure Access Client](https://play.google.com/store/apps/details?id=net.pulsesecure.pulsesecure) sur le Play Store.
    2. Appuyer sur **Ajouter une nouvelle connexion** et dans la case URL, entrer : `vpn.umontreal.ca/campus`.
    3. Appuyer sur la connexion `vpn.umontreal.ca/campus` et appuyer **Connecter**.
    4. S’authentifier avec ses informations d'authentification.
    5. Procéder à l'authentification à deux facteurs (A2F).
    6. L’icône Service VPN s’affiche en bas à droite à droite de l’écran, vous êtes maintenant connecté.
  </TabItem>
</Tabs>

---

## Utilisation

<Tabs groupId="os">
  <TabItem value="macos" label="macOS">
    1. Lancer l'application Pulse Secure (coin supérieur droit).
    2. Sélectionner UdeM Campus → Connexion.
    3. S’authentifier avec ses informations d'authentification.
    4. Procéder à l'authentification à deux facteurs (A2F).
    5. Pour se déconnecter, cliquer sur l'icône Pulse Secure (coin supérieur droit) et sélectionner **Déconnexion**.
  </TabItem>

  <TabItem value="windows" label="Windows">
    1. Lancer l'application Pulse Secure (menu démarrer Windows).
    2. Sélectionner UdeM Campus → Connexion.
    3. S’authentifier avec ses informations d'authentification.
    4. Procéder à l'authentification à deux facteurs (A2F).
    5. Pour se déconnecter, cliquer sur l'icône Pulse Secure (en bas à droite) et sélectionner **Déconnexion**.
  </TabItem>
</Tabs>

---

## Dépannage

<Tabs groupId="os">
  <TabItem value="macos" label="macOS">
    Si vous obtenez le message d’erreur `Impossible d’ouvrir le fichier PulseSecureAppLauncher.mpkg, car Apple ne peut pas vérifier s’il contient des logiciels malveillants.` :

    - 1ère solution : Glisser l'icône `PulseSecureAppLauncher.mpkg` dans le dossier Bureau et lancer l'application.
    - 2ème solution : Ouvrir **Préférences Système** → **Sécurité et confidentialité** → **Général** → **Ouvrir quand même**.
  </TabItem>

  <TabItem value="windows" label="Windows">
    1. Lors de l'installation, si plus rien ne se passe, redémarrer votre ordinateur, relancer la page [vpn.umontreal.ca/campus](https://vpn.umontreal.ca/campus) et cliquer à nouveau sur le bouton **Démarrer**.
    2. Essayer dans un autre navigateur.
  </TabItem>
</Tabs>

---

## Désinstallation

<Tabs groupId="os">
  <TabItem value="macos" label="macOS">
    1. Cliquer sur l'icône Pulse Secure (en haut à droite) et quitter l'application.
    2. Aller à **Finder** → **Applications** → Clic droit sur **Pulse Secure** → Placer dans la corbeille.
    3. Cliquer **No** à **save configuration**.
    4. Vider la corbeille.
  </TabItem>

  <TabItem value="windows" label="Windows">
    1. Cliquer le bouton Démarrer, puis Paramètres.
    2. Cliquer Applications.
    3. Sélectionner tous les items Pulse Secure puis Désinstaller.
    4. Cliquer Oui pour redémarrer si demandé.
    5. Redémarrer l’ordinateur.
  </TabItem>
</Tabs>