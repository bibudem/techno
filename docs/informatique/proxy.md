---
title: Configurer le serveur mandataire (proxy)
description: Guide pour configurer le serveur mandataire (proxy) afin d'accéder aux ressources électroniques.

---

import React from 'react';
import OSDetection from '../../src/components/OSDetection';
import CopyToClipboardButton from '@site/src/components/CopyToClipboardButton';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Le serveur mandataire agit comme un canal facilitant l'accès aux ressources électroniques des bibliothèques UdeM, permettant ainsi la consultation de bases de données, de revues électroniques et de livres numériques, indépendamment du lieu de connexion.

<OSDetection />




<Tabs groupId="os-tabs">
  <TabItem value="macOS" label="macOS">
    <Tabs groupId="macOS">
      <TabItem value="macOS12" label="macOS 12 et antérieurs">
        
        :::warning
        Il est recommandé d'utiliser le navigateur Chrome ou Firefox.
        :::

        1. Cliquer l'icône Wi-Fi en haut à droite de l'écran.
        2. Cliquer **Préférences réseau**. Si un cadenas fermé s’affiche en bas à gauche, cliquer pour le débarrer avec le mot de passe du compte administrateur de votre ordinateur.
        3. Cliquer **Avancé**.
        4. Sélectionner l'onglet **Serveurs mandataires**.
        5. Activer **Configuration de serveur mandataire automatique**.
        6. Dans la case URL, taper au complet et sans espace <CopyToClipboardButton text="http://proxy.umontreal.ca"/> ![Fenêtre macOS pour activer le serveur mandataire](/img/docs/proxy-macos.png)
        7. Cliquer **OK** ensuite **Appliquer** (si demandé).

        Pour désinstaller le Proxy, refaire les étapes précédentes puis à l'étape 5, désactiver **Configuration de serveur mandataire automatique**, ensuite **OK** et **Appliquer**.
      </TabItem>

      <TabItem value="macOS13" label="macOS 13 et ultérieurs">
        
        :::warning
        Il est recommandé d'utiliser le navigateur Chrome ou Firefox.
        :::

        1. Cliquer l'icône Wi-Fi en haut à droite de l'écran.
        2. Cliquer **Réglages Wi-Fi**. Si un cadenas fermé s’affiche en bas à gauche, cliquer pour le débarrer avec le mot de passe du compte administrateur de votre ordinateur.
        3. Cliquer **Détails**.
        4. Sélectionner l'onglet **Serveurs mandataires**.
        5. Activer **Configuration de serveur mandataire automatique**.
        6. Dans la case URL, taper au complet et sans espace <CopyToClipboardButton text="http://proxy.umontreal.ca"/> ![Fenêtre macOS pour activer le serveur mandataire](/img/docs/proxy-macos.png)
        7. Cliquer **OK** ensuite **Appliquer** (si demandé).
      </TabItem>
    </Tabs>
  </TabItem>

  <TabItem value="Windows" label="Windows">
    <Tabs groupId="Windows">
      <TabItem value="Windows10" label="Windows 10">
        1. Cliquer sur le bouton **Démarrer**, puis sur **Paramètres**
        2. Cliquer sur **Réseau et internet**
        3. Cliquer sur **Proxy**
        4. Activer seulement **Utiliser un script d'installation** ![Fenêtre Windows 10 pour activer le serveur mandataire](/img/docs/proxy-win10-adresse.png) 
        5. Dans **Adresse du script**, taper sans espace <CopyToClipboardButton text="http://proxy.umontreal.ca"/>
        6. Cliquer sur **Enregistrer**
      </TabItem>
      
      <TabItem value="Windows11" label="Windows 11">
        1. Cliquer sur le bouton **Démarrer**, puis sur **Paramètres**
        2. Cliquer sur **Réseau & Internet**
        3. Cliquer sur **Proxy**
        4. Détecter automatiquement les paramètres doit être **désactivé**
        5. Dans **Utiliser un script d'installation**, cliquer **Configurer**
        6. Activer **Utiliser un script de configuration**
        7. Dans **Adresse du script**, taper sans espace <CopyToClipboardButton text="http://proxy.umontreal.ca"/>
        ![Fenêtre Windows 11 pour activer le serveur mandataire](/img/docs/proxy-w11-utiliser-script.jpg)
        8. Cliquer sur **Enregistrer**
      </TabItem>
    </Tabs>
  </TabItem>

  <TabItem value="iOS" label="iOS">
    :::warning
    La configuration du Proxy sur iOS est disponible pour les connexions Wi-Fi seulement, pas cellulaire.
    :::
    
    1. Sélectionner **Réglages** → **Wi-Fi** → cliquer sur le **i** à côté du réseau sans-fil.
    2. Dans la section du bas **Serveur mandataire HTTP**, sélectionner **Configurer le serveur mandataire**
    3. Sélectionner **Automatique** et entrer cet URL sans espace : <CopyToClipboardButton text="http://proxy.umontreal.ca"/>
    4. Appuyer sur **Enregistrer**
  </TabItem>

  <TabItem value="Android" label="Android">
    1. Glisser le doigt du haut vers le bas (2 fois) et toucher le nom du réseau Wi-Fi sur lequel vous êtes présentement connecté.
    2. Toucher **Plus de paramètres**
    3. Appuyer longuement sur le **nom de la connexion réseau** qui sera utilisé pour accéder au Proxy
    4. Toucher **Modifier le réseau**
    5. Toucher **Options avancées**
    6. Sous **serveur mandataire**, sélectionner **Config. auto du mandataire**
    7. Dans **URL config auto mand.**, taper sans espace <CopyToClipboardButton text="http://proxy.umontreal.ca"/>
    8. Appuyer **Enregistrer**
  </TabItem>
</Tabs>

---

## Tester la configuration

1. À l'aide d'un navigateur web, aller à l’adresse [testproxy.umontreal.ca](http://testproxy.umontreal.ca)
2. À la fenêtre d'authentification, entrer ses informations d'authentification (code d'accès et mot de passe).
3. Le message **Votre configuration Proxy est fonctionnelle** devrait s’afficher.

---

## Dépannage

<Tabs>
  <TabItem value="Tous navigateurs" label="Tous les navigateurs">
    - [Vérifier si une panne ou un arrêt de service est signalé par les TI](https://ti.umontreal.ca/etat-des-services/) (Technologies de l'information).
    - Si la fenêtre d'authentification au Proxy réapparaît de façon répétitive, valider les informations d'authentification en se branchant sur le portail à l'adresse [MonUdeM.umontreal.ca](https://MonUdeM.umontreal.ca).
    - Pour les navigateurs **Edge et Internet Explorer**, s'assurer d'inscrire `sim\` devant le code d'accès (exemple : `sim\ab12345` ou `sim\p1234567`).
    - Effacer la mémoire cache de votre navigateur Internet.

    Le temps de tester, désactiver s'il y a lieu :

    - Tout système de sécurité (Antivirus, Pare-feu).
    - Toute connexion telle **bureau à distance** ou **VPN**.
    - Tout logiciel gestionnaire de mot de passe (ex. : LastPass, 1Password, etc.).
    - Tout bloqueur de fenêtres ou publicités tel **AdBlock**.
    - **Utiliser un autre navigateur Internet**.
    - Tester la configuration à l'adresse [testproxy.umontreal.ca](http://testproxy.umontreal.ca).
  </TabItem>

  <TabItem value="Firefox" label="Firefox">
    1. En haut à droite de la fenêtre de Firefox, cliquer sur **Menu > Options > Général > Paramètres**.
    2. Cocher **Utiliser les paramètres proxy du système**.
    3. Tester la configuration à l'adresse [testproxy.umontreal.ca](http://testproxy.umontreal.ca).

    Si le problème persiste :

    4. Taper `about:config` dans la barre d’adresse de Firefox et faire **Enter**.
    5. Cliquer sur **Je prends le risque**.
    6. Entrer `ntlm` dans la boite **Rechercher** et faire **Enter**.
    7. Double-cliquer sur `network.automatic-ntlm-auth.allow-proxies` pour changer la valeur à `False`.
    8. Tester la configuration à l'adresse [testproxy.umontreal.ca](http://testproxy.umontreal.ca).
  </TabItem>

  <TabItem value="Edge" label="Edge">
    - Inscrire `sim\` lors de l’authentification devant le code d’accès (exemple : `sim\ab12345` ou `sim\p1234567`).
    - S'il n'est pas possible d'éditer le nom d'utilisateur, cliquer sur **Utiliser un autre compte** (ou **Changer de compte**).
    - Il peut être nécessaire de défiler la fenêtre d'authentification vers le bas pour voir cette option.
    
    :::warning Attention
    Attention au sens de la barre oblique.
    :::
  </TabItem>
</Tabs>

---

## Effacer la mémoire cache du navigateur {#effacer-cache}

Pour résoudre les problèmes d'accès ou d'affichage sur certains sites web, vous pouvez effacer la mémoire cache de votre navigateur. Voici comment faire selon votre navigateur :

<Tabs>
  <TabItem value="Chrome" label="Chrome">
    **PC, Mac et Chromebook** : Icône Menu (en haut à droite) → **Plus d’outils** → **Effacer les données de navigation** → **Période : Toutes les périodes** → Cocher seulement **Images et fichiers en cache** → **Effacer les données de navigation**. Redémarrer Chrome.

    **Android** : Menu → **Historique** → **Effacer les données de navigation** → **Intervalle de temps : Toutes les périodes** → Cocher seulement **Images et fichiers dans la mémoire cache** → **Effacer les données**. Redémarrer Chrome.
  </TabItem>

  <TabItem value="Edge" label="Edge">
    **PC** : Icône Menu → **Paramètres** → **Confidentialité, recherche et service** → **Choisir les éléments à effacer** → **Intervalle de temps : À tout moment** → Cocher seulement **Images et fichiers mis en cache** → **Effacer maintenant**. Redémarrer Edge.
  </TabItem>

  <TabItem value="Firefox" label="Firefox">
    **PC et Mac** : Icône Menu → **Options (PC) ou Préférences (Mac)** → **Vie privée et sécurité** → À la section **Cookies et données de sites**, cliquer **Effacer les données** → Cocher seulement **Contenu web en cache** → Bouton **Effacer** → Redémarrer Firefox.
  </TabItem>

  <TabItem value="Safari" label="Safari">
    **Mac** : Menu Safari → **Préférences (ou Réglages)** → **Avancées** → Cocher **Afficher le menu Développement** → Menu **Développement (en haut)** → **Vider les caches** → Redémarrer l’ordinateur.

    **iOS (iPhone et iPad)** : Réglages → **Safari** → **Effacer l’historique de navigation** → **Effacer l’historique/données**. Redémarrer l’appareil.
  </TabItem>
</Tabs>

Tester la configuration à l'adresse [testproxy.umontreal.ca](http://testproxy.umontreal.ca).
