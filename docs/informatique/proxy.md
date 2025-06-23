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

## Selectionner votre système d'exploitation

<Tabs groupId="os-tabs">
  <TabItem value="macOS" label="macOS">
    <Tabs groupId="macOS">
      <TabItem value="12 et antérieurs" label="macOS 12 et antérieurs">
        :::warning
        Il est recommandé d'utiliser le navigateur Chrome ou Firefox.
        :::

        1. Cliquer l'icône Wi‑Fi en haut à droite de l'écran.  
        2. Cliquer **Préférences réseau**. Si un cadenas fermé s’affiche, cliquer pour le débloquer avec le mot de passe administrateur.  
        3. Cliquer **Avancé**.  
        4. Sélectionner l'onglet **Serveurs mandataires** → activer **Automatique**.  
        5. Saisir <CopyToClipboardButton text="http://proxy.umontreal.ca"/>.
        6. Cliquer **OK**, puis **Appliquer**.

        Pour désinstaller le proxy, refaire les mêmes étapes et désactiver **Automatique** à l’étape 4.

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

      <TabItem value="13 et ultérieurs" label="macOS 13 et ultérieurs">
        :::warning
        Il est recommandé d'utiliser le navigateur Chrome ou Firefox.
        :::

        1. Cliquer l'icône Wi‑Fi en haut à droite de l'écran.  
        2. Cliquer **Réglages Wi‑Fi**. Si un cadenas fermé s’affiche, cliquer pour le débloquer.  
        3. Cliquer **Détails**.  
        4. Sélectionner l'onglet **Serveurs mandataires** → activer **Automatique**.  
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
    </Tabs>
  </TabItem>

  <TabItem value="Windows" label="Windows">
    <Tabs groupId="Windows">
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

      <TabItem value="Windows11" label="Windows 11">
        1. **Démarrer → Paramètres → Réseau & Internet → Proxy**.  
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
</Tabs>

---

## Tester la configuration

1. Ouvrir [testproxy.umontreal.ca](http://testproxy.umontreal.ca).  
2. S'authentifier avec vos identifiants UdeM.  
3. Vérifier que vous voyez le message **« Votre configuration Proxy est fonctionnelle »**.

---

## Dépannage

<Tabs>
  <TabItem value="Tous navigateurs" label="Tous les navigateurs">
  - [Vérifier le statut des services TI](https://ti.umontreal.ca/etat-des-services/)  
  - Pour Edge/IE, préfixer le code d’accès par `sim\ab12345`  
  - Désactiver antivirus, VPN ou bloqueurs de pub  
  - Vider le cache (voir l’onglet suivant)  
  </TabItem>

  <TabItem value="ViderCache" label="Vider le cache">
    <Tabs>
      <TabItem value="Chrome" label="Chrome">
      **PC/Mac :** Menu → Plus d’outils → Effacer les données de navigation → Cocher **Images et fichiers en cache** → Effacer  
      **Android :** Historique → Effacer cache → Effacer
      </TabItem>
      <TabItem value="Firefox" label="Firefox">
      **Options → Vie privée & sécurité** → Effacer Cookies & cache  
      </TabItem>
      <TabItem value="Safari" label="Safari">
      **Menu Développement → Vider les caches**  
      </TabItem>
    </Tabs>
  </TabItem>
</Tabs>

Tester la configuration à : [testproxy.umontreal.ca](http://testproxy.umontreal.ca).  