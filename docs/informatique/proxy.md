---
title: Configurer le serveur mandataire (proxy)
description: Guide pour configurer le serveur mandataire (proxy) afin d'accéder aux ressources électroniques.
help: info
---

import React from 'react';
import CopyToClipboardButton from '@site/src/components/CopyToClipboardButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configurer le serveur mandataire (proxy)

## Étape 1 - Configurer selon votre système d'exploitation {#selectionner-votre-systeme-d-exploitation}

<Tabs groupId="os-tabs">

  <TabItem value="Windows" label="Windows">
    <Tabs groupId="Windows">
      <TabItem value="Windows11" label="Windows 11">
        1. **Démarrer → Paramètres → Réseau et Internet → Proxy** (*ou Mandataire*).  
        2. Désactiver **Détecter automatiquement les paramètres**.  
        3. Sous **Utiliser un script d’installation**, cliquer **Configurer**.  
        4. Activer **Utiliser un script de configuration**.  
        5. Saisir <CopyToClipboardButton text="http://proxy.umontreal.ca"/>.  
        6. Cliquer **Enregistrer**.

        **Tutoriel vidéo**  
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/IApth7W-yzw?si=WRf2kNG-3J2qbuQZ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </TabItem>
      
      <TabItem value="Windows10" label="Windows 10">
        1. **Démarrer → Paramètres → Réseau et Internet → Proxy**.  
        2. Activer **Utiliser un script d’installation**.  
        3. Saisir <CopyToClipboardButton text="http://proxy.umontreal.ca"/>.  
        4. Cliquer **Enregistrer**.

        **Tutoriel vidéo**  
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/dk1oUdLo84Y?si=Il8DKNZr3YV2ZAtv"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </TabItem>
    </Tabs>
  </TabItem>
    <TabItem value="macOS" label="macOS">
    <Tabs groupId="macOS">
    <TabItem value="13 et ultérieurs" label="13 et ultérieurs (récents)">
       
        1. Cliquer l'icône Wi‑Fi en haut à droite de l'écran.
        2. Cliquer **Réglages Wi‑Fi**. Si un cadenas fermé s’affiche, cliquer pour le débloquer.  
        3. Cliquer **Détails**.
        4. Sélectionner l'onglet **Serveurs mandataires** → activer **Configuration de serveur mandataire automatique**.
        5. Saisir <CopyToClipboardButton text="http://proxy.umontreal.ca"/>.
        6. Cliquer **OK**, puis **Appliquer**.

        **Tutoriel vidéo**  
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/D5VeqdvUNdM?si=ipPQXeShKmE16XVY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </TabItem>
  
      <TabItem value="12 et antérieurs" label="macOS 12 et antérieurs (anciens)">

        1. Cliquer l'icône Wi‑Fi en haut à droite de l'écran.  
        2. Cliquer **Préférences réseau**. Si un cadenas fermé s’affiche, cliquer pour le débloquer avec le mot de passe administrateur.  
        3. Cliquer **Avancé**.  
        4. Sélectionner l'onglet **Proxys** → activer **Configuration de serveur mandataire automatique**.  
        5. Saisir <CopyToClipboardButton text="http://proxy.umontreal.ca"/>.
        6. Cliquer **OK**, puis **Appliquer**.

        Pour désinstaller le proxy, refaire les mêmes étapes et désactiver **Configuration de serveur mandataire automatique** à l’étape 4.

        **Tutoriel vidéo**  
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/Qy5FlukamTM?si=ENXzfHv6WT5ycf_I"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </TabItem>
    </Tabs>
  </TabItem>

  <TabItem value="iOS" label="iOS">
    :::warning
    La configuration du proxy sur iOS est disponible pour les connexions Wi‑Fi seulement, pas cellulaires.
    :::

    1. **Réglages → Wi‑Fi → ⓘ** à côté du réseau sans‑fil.  
    2. Sous **Serveur mandataire HTTP**, sélectionner **Automatique**.  
    3. Saisir <CopyToClipboardButton text="http://proxy.umontreal.ca"/>.  
    4. **Enregistrer**.
  </TabItem>

  <TabItem value="Android" label="Android">
    1. Glisser le doigt du haut vers le bas (2 fois) et toucher le Wi‑Fi.  
    2. **Plus de paramètres → Modifier le réseau → Options avancées**.  
    3. Sous **Serveur mandataire**, sélectionner **Config. auto du mandataire**.  
    4. Saisir <CopyToClipboardButton text="http://proxy.umontreal.ca"/>.  
    5. **Enregistrer**.
  </TabItem>
  <TabItem value="Linux" label="Linux">
    1. Cliquer **WiFi** (en haut à droite)
    2. Cliquer **Paramètres**
    3. Cliquer **Réseau**
    4. Activer **Serveur mandataire** ou **Proxy**
    5. Cliquer **Automatique**
    6. Dans URL de configuration, taper sans espace <CopyToClipboardButton text="http://proxy.umontreal.ca"/>
    7. Fermer la fenêtre
  </TabItem>
</Tabs>

---

## Étape 2 - Tester la configuration {#tester-configuration}

1. Ouvrir [testproxy.umontreal.ca](http://testproxy.umontreal.ca).  
2. S'authentifier avec vos identifiants UdeM.  
3. Vérifier que vous voyez le message **« Votre configuration Proxy est fonctionnelle »**.

---

## Dépannage {#depannage}

<Tabs>
  <TabItem value="Tous navigateurs" label="Tous les navigateurs">
  - [Vérifier le statut des services TI](https://ti.umontreal.ca/etat-des-services/)  
  - Désactiver tout **VPN**
  - Désactiver tout **bloqueurs de publicités**
  - Vider la mémoire cache du navigateur et refaire le test (voir l’onglet suivant)
  - Tester la configuration dans un autre navigateur
  </TabItem>

<TabItem value="Edge" label="Edge"> 
  - Pour Edge, préfixer le code d’accès par `sim\ab12345` 
  - Attention au sens de la barre oblique.
  - S'il n'est pas possible d'éditer le nom d'utilisateur, cliquer sur l'option **"Utiliser un autre compte"** (ou **"Changer de compte"**). Il peut être nécessaire de défiler la fenêtre d'authentification vers le bas pour voir cette option.
  </TabItem>

<TabItem value="Firefox" label="Firefox"> 
  En haut à droite, cliquer **Menu ► Options ► Général ► Paramètres ►** Cocher **Utiliser les paramètres de Proxy du système**  
   - Tester la configuration à l'adresse : [testproxy.umontreal.ca](http://testproxy.umontreal.ca)

  Si le problème persiste :  
   - Taper `about:config` dans la barre d’adresse de Firefox et appuyer sur **Entrée**  
   - Cliquer sur **Je prends le risque**  
   - Entrer `ntlm` dans la boîte **Rechercher** et appuyer sur **Entrée**  
   - Double-cliquer sur `network.automatic-ntlm-auth.allow-proxies` pour changer la valeur à **False**  
   - Tester la configuration à l'adresse : [testproxy.umontreal.ca](http://testproxy.umontreal.ca)
  </TabItem>

  <TabItem value="ViderCache" label="Vider le cache">
    <Tabs>
      <TabItem value="Chrome" label="Chrome">
      **PC/Mac :** Menu → Plus d’outils → Effacer les données de navigation → Cocher **Images et fichiers en cache** → Effacer  
      **Android :** Historique → Effacer cache → Effacer
      </TabItem>
      <TabItem value="Firefox" label="Firefox">
      **PC et Mac** : Icône Menu → Paramètres (PC) ou Préférences (Mac) → **Vie privée et sécurité** → à la section **Cookies et données de sites**, cliquer **Effacer les données** → Intervalle **Tout** → cocher seulement **Fichiers et pages en cache temporaire** → bouton **Effacer** → **Redémarrer Firefox**.
      </TabItem>
      <TabItem value="Edge" label="Edge">
      Menu (⋯) → Paramètres → Confidentialité, recherche et services → Choisir les éléments à effacer  → Dans Intervalle de temps, choisir **À tout moment**  → Cocher uniquement **Images et fichiers mis en cache**  → **Effacer maintenant** → Redémarrer **Microsoft Edge**
      </TabItem>
      <TabItem value="Safari" label="Safari">
      **MAC** : Menu Safari → Préférences (ou Réglages) → Avancées → cocher **Afficher le menu Développement** → menu Développement (en haut) → **Vider les caches** → **redémarrer l’ordinateur**.
      **iOS** (iPhone, iPad, iPod) : Réglages → Safari → **Effacer l’historique de navigation** → **Effacer** → **Historique/données**. **Redémarrer l’appareil**.
      </TabItem>
    </Tabs>
  </TabItem>
</Tabs>

Tester la configuration à : [testproxy.umontreal.ca](http://testproxy.umontreal.ca).  

## Désinstaller {#desinstaller}

<Tabs groupId="os-tabs">

  <TabItem value="Windows" label="Windows">
    <Tabs groupId="Windows">
      <TabItem value="Windows11" label="Windows 11">
        1. **Démarrer → Paramètres → Réseau et Internet → Proxy** (*ou Mandataire*).
        2. Sous **Utiliser un script d’installation**, cliquer **Configurer**.  
        3. Désactiver **Utiliser un script de configuration**.
        4. Cliquer **Enregistrer**
        5. [Vider la mémoire cache de votre navigateur](http://localhost:3000/informatique/proxy#depannage).
        6. **Redémarrer l'ordinateur**.
      </TabItem>
      
      <TabItem value="Windows10" label="Windows 10">
        1. **Démarrer → Paramètres → Réseau et Internet → Proxy**.  
        2. Désactiver **Utiliser un script de configuration**.
        3. Cliquer **Enregistrer**
        4. [Vider la mémoire cache de votre navigateur](http://localhost:3000/informatique/proxy#depannage).
        5. **Redémarrer l'ordinateur**.
      </TabItem>
    </Tabs>
  </TabItem>
    <TabItem value="macOS" label="macOS">
    <Tabs groupId="macOS">
    <TabItem value="13 et ultérieurs" label="13 et ultérieurs (récents)">
       
        1. Cliquer l'icône Wi‑Fi en haut à droite de l'écran.
        2. Cliquer **Réglages Wi‑Fi**. Si un cadenas fermé s’affiche, cliquer pour le débloquer.  
        3. Cliquer **Détails**.
        4. Sélectionner l'onglet **Serveurs mandataires** → Désactiver **Configuration de serveur mandataire automatique**.
        5. Cliquer **Ok**.
        6. [Vider la mémoire cache de votre navigateur](http://localhost:3000/informatique/proxy#depannage).
        7. **Redémarrer l'ordinateur**.

      </TabItem>
  
      <TabItem value="12 et antérieurs" label="macOS 12 et antérieurs (anciens)">

        1. Cliquer l'icône Wi‑Fi en haut à droite de l'écran.  
        2. Cliquer **Préférences réseau**. Si un cadenas fermé s’affiche, cliquer pour le débloquer avec le mot de passe administrateur.  
        3. Cliquer **Avancé**.  
        4. Sélectionner l'onglet **Proxys** → Désactiver **Configuration de serveur mandataire automatique**.  
        5. Cliquer **Ok**.
        6. [Vider la mémoire cache de votre navigateur](http://localhost:3000/informatique/proxy#depannage).
        7. **Redémarrer l'apapreil**.
      </TabItem>
    </Tabs>
  </TabItem>

  <TabItem value="iOS" label="iOS">
        1. **Réglages → Wi‑Fi → ⓘ** à côté du réseau sans‑fil.  
        2. Sous **Serveur mandataire HTTP**, sélectionner **Non**.
        3. Cliquer **Enregistrer**
        4. [Vider la mémoire cache de votre navigateur](http://localhost:3000/informatique/proxy#depannage).
        5. **Redémarrer l'apapreil**.
  </TabItem>

  <TabItem value="Android" label="Android">
    1. Glisser le doigt du haut vers le bas (2 fois) et toucher le Wi‑Fi.  
    2. **Plus de paramètres → Modifier le réseau → Options avancées**.  
    3. Sous **Serveur mandataire**, sélectionner **Aucun**.  
    4. **Enregistrer**.
    5. [Vider la mémoire cache de votre navigateur](http://localhost:3000/informatique/proxy#depannage).
    6. **Redémarrer l'apapreil**.
  </TabItem>
  <TabItem value="Linux" label="Linux">
    1. Cliquer **WiFi** (en haut à droite)
    2. Cliquer **Paramètres**
    3. Cliquer **Réseau**
    4. Activer **Serveur mandataire** ou **Proxy**
    5. Cliquer **Désactiver**, Fermer la fenêtre
    6. [Vider la mémoire cache de votre navigateur](http://localhost:3000/informatique/proxy#depannage).
    7. **Redémarrer l'apapreil**.
  </TabItem>
</Tabs>
