---
title: Réseau sans fil
description: Guide pour se connecter aux réseaux sans fil de l'Université de Montréal.
image: "/img/cover/reseau.webp"
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

L'Université de Montréal offre plusieurs réseaux Wi-Fi à travers ses campus pour répondre à vos besoins de connectivité.

---

## UdeM avec cryptage

Le réseau sans fil **UdeM avec cryptage** est à privilégier. En plus de bénéficier d'une sécurité accrue, il permet l'accès aux ressources électroniques des bibliothèques et l'impression. Vous pouvez y accéder grâce à votre code d'accès et votre mot de passe.

<Tabs groupId="os-wifi-udem">
  <TabItem value="macos" label="macOS">
    1. Sélectionner le réseau sans fil : **UdeM avec cryptage**.  
    2. Entrer les informations suivantes :  
       - **Identité** : Votre code d'accès ou courriel UdeM  
       - **Mot de passe** : Votre mot de passe
  </TabItem>

  <TabItem value="windows" label="Windows">
    1. Sélectionner le réseau sans fil : **UdeM avec cryptage**.  
    2. Entrer les informations suivantes :  
       - **Identité** : Votre code d'accès ou courriel UdeM  
       - **Mot de passe** : Votre mot de passe  
  </TabItem>

  <TabItem value="ios" label="iOS">
    1. Dans le menu des applications, sélectionner **Réglages**.  
    2. Sélectionner **Wi-Fi**.  
    3. Assurez-vous que l’interrupteur soit activé (de couleur verte).
    4. Sélectionner le réseau sans fil : **UdeM avec cryptage**.  
    5. Entrer vos informations d'authentification et appuyer sur **Rejoindre**.  
    6. À la fenêtre **Certificat**, appuyer sur **Se fier**.  
  </TabItem>

  <TabItem value="android" label="Android">
    <Tabs>
      <TabItem value="android10" label="Version 10 ou antérieur">
        | Champ                   | Information                            |
        |-------------------------|----------------------------------------|
        | Méthode EAP            | PEAP                                  |
        | Phase 2 authentification | MSCHAPV2                             |
        | Certificat CA          | (non spécifié) ou ne pas vérifier     |
        | Identité               | Votre code d'accès ou courriel UdeM   |
        | Anonyme                | Laisser vide                          |
        | Mot de passe           | Votre mot de passe                    |
      </TabItem>

      <TabItem value="android11" label="Version 11 ou ultérieur">
        | Champ                   | Information                            |
        |-------------------------|----------------------------------------|
        | Méthode EAP            | PEAP                                  |
        | Phase 2 authentification | MSCHAPV2                             |
        | Certificat CA          | Utiliser les certificats système       |
        | État du certificat en ligne                | Demander l'état du certificat                          |
        | Domaine                | umontreal.ca                          |
        | Identité               | Votre code d'accès ou courriel UdeM   |
        | Anonyme                | Laisser vide                          |
        | Mot de passe           | Votre mot de passe                    |
      </TabItem>
    </Tabs>
  </TabItem>
</Tabs>

---

## Eduroam

Le réseau sans fil **eduroam** est disponible pour les visiteurs d’un autre établissement participant et pour la communauté UdeM en visite ailleurs.

<Tabs groupId="eduroam-access">
  <TabItem value="visitors" label="Visiteurs à l'UdeM">
    | Université                | Code d'accès (exemple)    | Mot de passe (exemple)         |
    |---------------------------|---------------------------|---------------------------------|
    | HEC                      | prenom.nom@hec.ca        | Mot de passe courriel HEC      |
    | ETS                      | dtremblay@etsmtl.ca      | Mot de passe                   |
    | Polytechnique            | Code_Usager@polymtl.ca   | Mot de passe                   |
    |Université Laval |IDUL@ulaval.ca |Votre NIP|
        |UQAM Étudiants | CodeMS@ens.uqam.ca|ABC12345|
        |UQAM Employés | nom.prenom@uqam.ca|ABC12345|
        |University of Toronto | utorid@utoronto.ca  | UTORid password|
        |Concordia University |netname@concordia.ca |Password (same as MyConcordia portal)|
        |McGill Étudiants | first.last@mail.mcgill.ca|McGill Password
        |McGill Employés | first.last@mcgill.ca|McGill Password
        |Université de Sherbrooke | votreCIP@usherbrooke.ca |Mot de passe|
        |Université d’Ottawa Étudiants |adressedecourriel@uottawa.ca | Mot de passe uoAccès |
        | Université d’Ottawa Employés | adressedecourriel@uottawa.ca | Mot de passe Exchange |
  </TabItem>

  <TabItem value="udem-visiting" label="Communauté UdeM en visite ailleurs">
    1. Sélectionner le réseau sans fil **eduroam**.  
    2. S’authentifier avec votre adresse courriel UdeM (ex. **prenom.nom@umontreal.ca**) et votre mot de passe.
  </TabItem>
</Tabs>

---

## UdeM-Visiteurs

Le réseau sans fil **UdeM-Visiteurs** est destiné aux visiteurs de l'Université de Montréal. Il est accessible pour une durée de 24h et ne permet pas l'accès aux ressources électroniques des bibliothèques ou l'impression. Ce réseau n'est pas sécurisé.

 1. Sélectionner le réseau sans fil **UdeM-Visiteurs**.
 2. Ouvrir votre navigateur.
 *Remarque : Si la page d'authentification ne s'affiche pas, ouvrir votre navigateur et taper une adresse que vous n'avez pas l'habitude d'utiliser, exemple : www.google.cz*
 3. Cliquer **Ou faites ubne demande d'accèes en tant qu'invité**.
 4. Entrer vos informations ety cliquer **Enregistrer**.
 5. Lire et accepter les conditions générales.
 6. Cliquer **Accepter** et **Continiuer**. 

---

## UdeM non securise

:::caution
Il n'est pas recommandé d'utiliser le réseau **UdeM non securise**. Ce réseau ne permet pas un accès à nos ressources électroniques et n'offre aucune garantie de confidentialité et de sécurité.
:::

---

## Dépannage

En cas de problème avec le réseau sans fil, suivez les instructions ci-dessous pour oublier ou retirer un réseau et vous y reconnecter. Il est important de faire la procédure pour **oublier chacun des réseaux sans fil de l'UdeM :** UdeM avec cryptage, eduroam, UdeM non securise et UdeM-Visiteurs.

<Tabs groupId="os-troubleshoot">
  <TabItem value="macos" label="macOS">
    1. Aller dans **Préférences Réseau** → **Wi-Fi** → **Avancé**.  
    2. Sélectionner **UdeM avec cryptage** et cliquer sur le symbole **-** pour supprimer.  
    :::note
    Encore des problèmes ? Au besoin supprimer les informations de branchement du Trousseau d’accès
    **Finder** → inscrire Trousseau dans la barre de recherche → double-cliquer **Trousseau d’accès** → inscrire
    **umontreal** dans la boite de recherche → supprimer la ligne correspondante aux réseaux Wi-Fi de l'Université (**UdeM avec cryptage**, **eduroam**, **UdeM non securise** et **UdeM-Visiteurs**)
    :::
  </TabItem>

  <TabItem value="windows" label="Windows">
    1. Aller dans **Paramètres** → **Réseau et Internet** → **Wi-Fi**.  
    2. Sélectionner **Gérer les réseaux connus**.  
    3. Supprimer **UdeM avec cryptage**.
  </TabItem>

  <TabItem value="ios" label="iOS">
    1. Aller dans **Réglages** → **Wi-Fi**.  
    2. Appuyer l'icône "i" à côté de **UdeM avec cryptage** et choisir **Oublier ce réseau**.
  </TabItem>

  <TabItem value="android" label="Android">
    1. Aller dans **Paramètres** → **Wi-Fi**.  
    2. Appuyer longuement sur le réseau **UdeM avec cryptage** et sélectionner **Retirer le réseau**.
  </TabItem>

  <TabItem value="chromebook" label="Chromebook">
    1. Aller **Wi-Fi** (en bas à droite) →  bouton **Avancé**.
    2. Dans la section réseau, sélectionner **WiFi** → **UdeM avec cryptage** et **Retirer**.
  </TabItem>
</Tabs>

---

## Sites umontreal.ca non accessibles ?

Problème : L’usager est branché au réseau sans fil, tous les sites Web fonctionnent, sauf les sites de
l’Université de Montréal (Studium, umontreal.ca, etc.). Les paramètres DNS sont en cause, car l’usager ou
un programme essaie d’utiliser des paramètres DNS spécifiques non compatibles avec le réseau de l’UdeM.
Solution : Obtenir les DNS automatiquement.

<Tabs groupId="os-troubleshoot-2">
  <TabItem value="macos" label="macOS">
    1. Cliquer **Wi-Fi** (en haut èa droite de l'écran).   
    2. Cliquer **Réglages Wi-Fi** (ou Préférences réseau)
    3. Cliquer **Avancé** (ou Détails)
    4. Cliquer **DNS**
    5. Sélectionner chacune des adresses (ex. 8.8.8.8) et cliquer "**-**" afin de les supprimer
    6. Vous obtiendrez automatiquement deux adresses débutant par 10.
    7. Cliquer **OK**
    8. Cliquer **Appliquer**
  </TabItem>

  <TabItem value="windows" label="Windows">
  Windows 11
    1. Cliquer droit sur l'icône **WiFi** (en bas à droite).  
    2. Cliquer **Paramètres du réseau d'internet**.
    3. Cliquer **Wi-Fi**.
    4. Cliquer **Propriétés du matériel**.
    5. Cliquer **Propriétés**.
    6. Cliquer **Modifier** (à droite de Attribution du serveur DNS).
    7. Changer Manuel pour **Automatique (DHCP**)
    8. Cliquer **Enregistrer**
   
Windows 10
    1. Cliquer droit sur l'icône **WiFi** (en bas à droite).  
    2. Cliquer **Ouvrir les paramètres réseau et internet**.
    3. Cliquer **Centre Réseau et partage** (en bas de la page).
    4. Cliquer **Wi-Fi (UdeM avec cryptage)** (en haut èa droite).
    5. Cliquer **Propriétés**.
    6. Double-cliquer **Protocole internet version 4 (TCP/IPv4)**.
    7. Cocher **Obtenir les adresses des serveurs DNS automatiquement**.
    8. Cliquer **OK**
  </TabItem>

  <TabItem value="ios" label="iOS">
    1. Aller dans **Réglages** → **Wi-Fi**.  
    2. Appuyer l'icône "i" à côté de **UdeM avec cryptage**
    3. Défiler la page vers le bas jusqu'à **Configurer le DNS**.
    4. Sélectionner **Automatique**
  </TabItem>

  <TabItem value="android" label="Android">
    1. Aller dans **Paramètres** → **Wi-Fi**.  
    2. Appuyer **Réseau et internet** et **DNS Privé**.
    3. Sélectionner **Automatique**
    4. Appuyer **Enregistrer**
  </TabItem>

  <TabItem value="chromebook" label="Chromebook">
    1. S'assurer que le Chromebook est connecté à un Wi-Fi
    2. Dans l'angle inférieur droit, sélectionner **l'heure**
    3. Sélectionner le réseau sans fil **UdeM avec cryptage**.
    4. Dans le menu réroulant, sélectionner le réseau sans fil **UdeM avec cryptage**
    5. Sélectionner **Réseau**
    6. Dans la section "Serveurs de noms", sélectionner **Serveurs de noms automatiques**
    7. Fermer la fenêtre (Cliquer **X** en haut èa droite)
  </TabItem>
</Tabs>

---

## Réseau filaire en accès libre

En cas de difficultés avec le réseau sans fil, des prises réseau en accès libre sont disponibles dans les bibliothèques.

| Bibliothèque                             | Local                          |
|------------------------------------------|--------------------------------|
| Bibliothèque des lettres et sciences humaines (BLSH) | local 1000                     |
| Bibliothèque de la santé                 | local L-886, L-888, L-890     |

:::caution
Une connexion au serveur mandataire (*proxy*) est nécessaire pour accéder aux ressources électroniques des bibliothèques depuis une connexion filaire.
:::