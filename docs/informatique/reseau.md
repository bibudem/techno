---
title: Réseau sans fil
description: Guide pour se connecter aux réseaux sans fil de l'Université de Montréal.
pagination_next: null
pagination_prev: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

L'Université de Montréal offre plusieurs réseaux Wi-Fi à travers ses campus pour répondre à vos besoins de connectivité.

:::caution
Il n'est pas recommandé d'utiliser le réseau **UdeM non sécurisé**. Ce réseau ne permet pas un accès à nos ressources électroniques et n'offre aucune garantie de confidentialité et de sécurité.
:::

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
    4. Entrer vos informations d'authentification et appuyer sur **Rejoindre**.  
    5. À la fenêtre **Certificat**, appuyer sur **Se fier**.  
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
    1. Se brancher au réseau sans fil **eduroam**.  
    2. S’authentifier avec votre adresse courriel UdeM (ex. **prenom.nom@umontreal.ca**) et votre mot de passe.
  </TabItem>
</Tabs>

---

## Dépannage

En cas de problème avec le réseau sans fil, suivez les instructions ci-dessous pour oublier ou retirer un réseau et vous y reconnecter.

<Tabs groupId="os-troubleshoot">
  <TabItem value="macos" label="macOS">
    1. Aller dans **Préférences Réseau** → **Wi-Fi** → **Avancé**.  
    2. Sélectionner **UdeM avec cryptage** et cliquer sur le symbole **-** pour supprimer.  
    3. Ouvrir **Trousseau d'accès** et supprimer les informations liées à `umontreal`.
  </TabItem>

  <TabItem value="windows" label="Windows">
    1. Aller dans **Paramètres** → **Réseau et Internet** → **Wi-Fi**.  
    2. Sélectionner **Gérer les réseaux connus**.  
    3. Supprimer **UdeM avec cryptage**.
  </TabItem>

  <TabItem value="ios" label="iOS">
    1. Aller dans **Réglages** → **Wi-Fi**.  
    2. Appuyer sur l'icône "i" à côté de **UdeM avec cryptage** et choisir **Oublier ce réseau**.
  </TabItem>

  <TabItem value="android" label="Android">
    1. Aller dans **Paramètres** → **Wi-Fi**.  
    2. Appuyer longuement sur le réseau **UdeM avec cryptage** et sélectionner **Retirer le réseau**.
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