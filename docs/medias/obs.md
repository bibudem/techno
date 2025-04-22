---
title : OBS
help : crea
---

## Introduction

OBS est un logiciel gratuit et libre pour enregistrer des vidéos et même diffuser sur les plateformes de diffusion en continu comme Twitch ou YouTube. Cet outil permet de mélanger différentes sources audio et vidéo et de les disposer comme bon nous semble dans un canevas. 

### Cas d’usages

- Capture de caméra, écran et audio.
- Événement en ligne.
- Création de vidéos pédagogiques.

### Quelques avantages

- Outil puissant et fiable pour la capture.
- Création de contenu avec plusieurs scènes différentes, sans perte de temps en post-production.

---

## Télécharger et installer le logiciel

OBS est gratuit, libre et compatible Windows, MacOS et Linux. [Télécharger la dernière version depuis le site officiel](https://obsproject.com/fr). 

---

## Première configuration

- Au lancement du logiciel la première fois, la fenêtre **Assistant de configuration automatique** apparait. Sélectionner **Optimiser pour l’enregistrement, je ne diffuse pas** et cliquer sur **Suivant.**
    
    ![](/img/docs/obs1.webp)
    
:::note
    Si la fenêtre ne s’affiche pas au démarrage, vous pouvez lancer l’assistant en cliquant dans le menu en haut sur **Outils → Assistant de configuration automatique.**
:::
    

- Dans **Paramètres vidéo**, choisir **Garder tel quel** et sélectionner **30** dans le **débit d’images (FPS)**. Cliquer sur **Suivant** puis **Appliquer les paramètres**.
    
    ![](/img/docs/obs2.webp)
    

- Au lancement de l’interface, cliquer sur **Paramètres** en bas à droite.
- Dans l’onglet **Avancé**, cocher la case **Convertir automatiquement en MP4** dans la section Enregistrement puis sur **OK** en bas de la fenêtre.
    
    ![](/img/docs/obs3.webp)
    
---

## Ajouter des sources

:::note
Pour des raisons pratiques, l’aperçu de la webcam a été remplacé par un personnage.
:::

- Dans **Sources**, appuyer sur le bouton **+** pour ajouter une source au canevas.
    
    ![](/img/docs/obs4.webp)
    

- Sélectionner **Périphériques de capture vidéo**
    
    ![](/img/docs/obs5.webp)
    
- Sélectionner **Créer/Sélectionner une source** et choisir un nom.
    
    ![](/img/docs/obs6.webp)
    
- Voici les paramètres à changer dans les propriétés :
    - **Périphériques** : Sélectionner votre caméra.
    - **Type de résolution/FPS** : Personnalisé.
    - **Résolution** : Choisir 1920x1080
    - **FPS** : identique à la sortie
        
        ![](/img/docs/obs7.webp)
        
- Une fois validé, voici à quoi ressemblerait l’interface :
    
    ![](/img/docs/obs8.webp)
    

---

## Ajouter une source sonore

Par défaut, OBS capture le micro du système, c’est à dire que si votre PC portable est équipé d’un micro interne, c’est le micro qui va être utilisé. 

Afin de changer cela, vous devez rajouter dans **Sources > Capture Audio (Entrée)** et sélectionner votre périphérique de capture sonore. 

![](/img/docs/obs9.webp)

Ne pas oublier de baisser le volume dans le **Mélangeur audio** de la source **Mic/Aux** et de **Caméra** à **0** afin de ne capturer que l’entrée que vous avez choisie. 

![](/img/docs/obs10.webp)

---

## Capturer l’écran

Toujours dans Sources, vous avez le choix de capturer tout l’écran (**Capture d’écran**) ou seulement la fenêtre d’une application (**Capture de fenêtre**).

---

## Modifier l’ordre et la disposition des sources

Dans l’onglet **Sources**, vous pouvez glisser/déposer les entrées afin de changer quelle source sera en arrière-plan ou en avant-plan, dans le même esprit que le principe des calques dans Photoshop. 

![](/img/docs/obs11.gif)

Vous pouvez aussi changer la taille des sources dans le canevas :

![](/img/docs/obs12.gif)

---

## Enregistrement et exportation

Pour commencer à enregistrer, cliquer sur le bouton **Démarrer l’enregistrement** dans l’onglet Commandes en bas à droite. Vous avez par la suite la possibilité de faire des pauses ou d’arrêter l’enregistrement. Par défaut, les vidéos vont être enregistrées dans le dossier **/*Username*/Vidéos.** Vous pouvez changer le chemin de destination dans **Paramètres > Sortie > Enregistrement > Chemin d’accès de l’enregistrement**. 

Vous remarquerez qu’il y a deux fichiers vidéos pour un seul enregistrement : l’un avec l’extension **.mkv**, l’autre en **.mp4**. La raison est que si jamais vous voulez faire des pauses en cours d’enregistrement, il risque d’y avoir moins d’erreur avec le conteneur **.mkv**. Par la suite, **OBS** convertit cet enregistrement en **.mp4** pour le montage. Vous pouvez donc effacer les **.mkv** pour libérer de l’espace et garder le **.mp4**.