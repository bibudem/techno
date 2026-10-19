---
id : bambu
title: Bambu Lab X1C et X2D
description: "Guide d'utilisation des imprimantes 3D Bambu Lab X1C et X2D des bibliothèques de l'UdeM : préparation dans Bambu Studio, connexion, impression multicouleur et changement de filament."
help : crea
---

import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::note
Avant de faire votre première impression, lisez l'[introduction à l'impression 3D](./introduction.md)
:::

Ce guide s'applique aux deux imprimantes Bambu Lab des bibliothèques : la **X1 Carbon (X1C)** et la **X2D**. Les étapes sont les mêmes, sauf aux endroits où des onglets vous permettent de choisir votre imprimante. Le choix fait dans un onglet s'applique à toute la page.

<Tabs groupId="imprimante" queryString>
  <TabItem value="x1c" label="X1 Carbon" default>

La **Bambu Lab X1 Carbon** est équipée d'un AMS de quatre bobines.

  </TabItem>
  <TabItem value="x2d" label="X2D">

La **Bambu Lab X2D** est équipée d'un AMS et d'une bobine externe.

![L'imprimante Bambu Lab X2D](/img/docs/Bambu_X2D.jpeg)

  </TabItem>
</Tabs>

## **1.** Télécharger et configurer le logiciel Bambu Studio 

- [Lien pour télécharger le logiciel](https://bambulab.com/en-ca/download/studio) (disponible pour Windows, macOS et Linux)

### Configuration de Bambu Lab Studio

•	Sélectionner la région adéquate (ici **Amérique du Nord**)

•	Sélectionner l’imprimante : par défaut elles sont toutes sélectionnées, dans le coin supérieur droit cliquer sur **Clear All** → sélectionner votre imprimante → **suivant**

<Tabs groupId="imprimante" queryString>
  <TabItem value="x1c" label="X1 Carbon" default>

Sélectionner **Bambu Lab X1 Carbon**.

  </TabItem>
  <TabItem value="x2d" label="X2D">

Sélectionner **Bambu Lab X2D**.

  </TabItem>
</Tabs>

![Assistant de configuration de Bambu Studio : sélection de l'imprimante, Bambu Lab X1 Carbon cochée](/img/docs/configurer_bambu_studio_1.webp)

•	Sélectionner des filaments : **suivant** directement en laissant tout de base
•	Installer le **Bambu Network Plugin** → **Terminer**

## **2.** Trouver un modèle

Trouver [des logiciels pour concevoir vos propres créations](../impression3d/modeles3d.md#logiciels-de-modélisation-3d), ainsi qu'[une collection de ressources en ligne pour télécharger des modèles 3D](../impression3d/modeles3d.md#modèles-en-ligne) prêts à imprimer.

## **3.** Préparer son modèle avec Bambu Studio

### Importer les fichiers .stl

•	En haut à gauche cliquer sur **Préparer**

![Accueil de Bambu Studio : onglet Préparer encadré en rouge dans la barre du haut](/img/docs/configurer_bambu_studio_2.webp)

•	Faire glisser le ou les fichiers .stl que l’on veut imprimer 

![Glisser-déposer de quatre fichiers .stl depuis l'explorateur Windows vers Bambu Studio](/img/docs/configurer_bambu_studio_4.webp)

Si vous glissez plusieurs fichiers (objets), le logiciel le reconnaît et demande si vous voulez charger ces fichiers comme un objet unique : sauf cas d'impressions multicouleurs, cliquer sur **non**

![Bambu Studio : boîte de dialogue « Un objet en plusieurs parties a été détecté » avec boutons Oui et Non](/img/docs/configurer_bambu_studio_5.webp)

•	Dans notre exemple il y aura 4 objets distincts (on peut voir dans le coin inférieur droit que 4 objets sont sélectionnés)

![Bambu Studio : objets importés sur le plateau, notification « Nombre d'objets sélectionnés : 4 »](/img/docs/configurer_bambu_studio_6.webp)

### Agencer les objets

Lorsque les objets du plateau sont sélectionnés, cliquer sur **Agencer tous les objets**, sélectionner les propriétés comme ci-dessous et cliquer sur **Agencer** : les objets sont alors répartis sur le plateau.

![Bambu Studio : bouton Agencer tous les objets (1) et options d'agencement avec bouton Agencer (2)](/img/docs/configurer_bambu_studio_7.webp)

![Plateau de Bambu Studio : les quatre objets répartis après l'agencement](/img/docs/configurer_bambu_studio_9.webp)

### Bien positionner l'objet

Vérifier que pour chaque objet la surface la plus plate est en contact avec la plaque de support. Sinon, il faudra sélectionner l’objet. Cliquer sur **Positionner sur une face** et cliquer sur la face qui se retrouvera en contact avec la plaque. Dans notre exemple l’objet sélectionné est Top Base.

![Bambu Studio : objet Top Base sélectionné dans la liste et sur le plateau, avec sa taille affichée](/img/docs/configurer_bambu_studio_14.webp)

![Bambu Studio : outil Positionner sur une face (1) et face de Top Base à poser sur la plaque (2)](/img/docs/configurer_bambu_studio_15.webp)

![Plateau de Bambu Studio : Top Base reposé à plat sur sa face la plus large](/img/docs/configurer_bambu_studio_16.webp)


### Vérifier les dimensions de l'objet

Vérifier que les dimensions de l'objet correspondent bien à la taille de l'objet souhaité. Sélectionner votre objet → Cliquer sur **Redimesionner** (1) → Vérifier sa taille (2)

![Bambu Studio : outil Redimensionner (1) et dimensions X, Y, Z de l'objet en mm (2)](/img/docs/bambulab_taille_objet.webp)

### Supports

Si la surface de contact entre notre plaque et notre objet est insuffisante pour garantir notre impression, lorsqu’on clique sur **Trancher le plateau** un message d’erreur indique alors que l’objet semble avoir une partie dans le vide et qu’il faut le réorienter ou ajouter des supports.

![Bambu Studio : bouton Trancher le plateau encadré en rouge](/img/docs/configurer_bambu_studio_17.webp)

![Avertissement de Bambu Studio : objets avec surplomb flottant, réorienter ou activer les supports](/img/docs/configurer_bambu_studio_18.webp)

#### Ajout de supports 

Cliquer sur l’onglet **Supports** → **Activer les supports** → **Trancher le plateau**. Les supports vont apparaître en vert.

![Bambu Studio : mode Global (1) et onglet Supports (2) dans le panneau Traiter](/img/docs/configurer_bambu_studio_19.webp)

![Bambu Studio : onglet Supports, case Activer les supports cochée](/img/docs/configurer_bambu_studio_20.webp)

![Aperçu du tranchage : objets en rouge avec les supports générés en vert](/img/docs/configurer_bambu_studio_21.webp)

### Jupe

L'ajout d’une jupe autour de l’objet est parfois nécessaire pour assurer son adhérence au plateau. 
**Global** → **Autre** → **Boucle de jupe** x 1 → **Type de bordure extérieure uniquement** → **Trancher le plateau**. La jupe apparaît en bleu autour de l’objet.

![Bambu Studio : onglet Autre (1), section Adhérence au lit avec Boucles de jupe à 1 (2)](/img/docs/configurer_bambu_studio_22.webp)

![Aperçu du tranchage : jupe en bleu autour des objets sur le plateau](/img/docs/configurer_bambu_studio_23.webp)

## **4.** Connecter et paramétrer notre imprimante

### Connecter l’imprimante

:::warning
    Merci de toujours passer par la connexion Wi-Fi afin de lancer vos impressions. Il est interdit de retirer la carte micro SD présente dans l'imprimante. Si la connexion ne fonctionne pas après plusieurs tentatives, essayer de déconnecter votre profil Bambu Studio et retenter la connexion
:::

-	Connecter votre ordinateur au **Wi-Fi Bambu Lab**. Pas de mot de passe nécessaire pour cette étape.

![Paramètres Wi-Fi de Windows : connexion au réseau ouvert Bambu Lab](/img/docs/configurer_bambu_studio_24.webp)

-	**Périphérique** → **Pas d’imprimantes** → **Sélectionner votre imprimante** (« Bambu Panda! » dans notre exemple).

![Bambu Studio : onglet Périphérique (1), menu Pas d'imprimante (2) et imprimante Bambu Panda! (3)](/img/docs/configurer_bambu_studio_33.webp)

-	Saisir le code de l’imprimante.

![Écran tactile de l'imprimante : menu LAN uniquement affichant l'adresse IP et le code d'accès](/img/docs/bambu_LAN.webp)

-	Une fois connectée, les paramètres en direct de l’imprimante apparaissent dans l’onglet **État**.

![Bambu Studio : onglet État de l'imprimante connectée, avec contrôles, AMS et progression de l'impression](/img/docs/configurer_bambu_studio_26.webp)

### Paramètres de notre impression

**1.** Vérifier que la bonne imprimante est sélectionnée : cliquer sur l’icône en haut à gauche dans **Imprimante**, puis :

<Tabs groupId="imprimante" queryString>
  <TabItem value="x1c" label="X1 Carbon" default>

**Sélectionner la Bambu Lab X1 Carbon**

![Bambu Studio : menu Imprimante avec Bambu Lab X1 Carbon sélectionnée](/img/docs/configurer_bambu_studio_32.webp)

  </TabItem>
  <TabItem value="x2d" label="X2D">

**Sélectionner la Bambu Lab X2D**

![Bambu Studio : menu Imprimante avec Bambu Lab X2D sélectionnée](/img/docs/bambu_X2D_2.png)

  </TabItem>
</Tabs>

2.	Synchroniser les filaments avec l’imprimante : dans la partie **Filament** du projet, cliquer sur l’icône **Synchroniser les filaments depuis l’AMS**, sélectionner **Surécriture** et **Synchroniser maintenant**.

![Bambu Studio : icône Synchroniser les filaments depuis l'AMS dans Filaments de projet](/img/docs/configurer_bambu_studio_30.webp)

![Fenêtre de synchronisation des filaments AMS : option Surécriture (1) et bouton Synchroniser maintenant (2)](/img/docs/configurer_bambu_studio_31.webp)

3.	Vérifier que le plateau sélectionné correspond bien au plateau utilisé dans l’imprimante (texturé dans notre exemple mais existe aussi en version Smooth PEI dans le réseau).

![Bambu Studio : menu du type de plateau avec Textured PEI Plate sélectionné](/img/docs/configurer_bambu_studio_27.webp)

4.	L’épaisseur de la couche : en général on utilise le **0.2mm**.

![Bambu Studio : profil de hauteur de couche 0.20mm Standard encadré](/img/docs/configurer_bambu_studio_28.webp)

5.	Densité et motif de remplissage : Choisir une densité entre **10 et 15%** et un **remplissage en nid d’abeille** pour une meilleure solidité de l’objet.

![Bambu Studio : onglet Résistance (1), densité de remplissage 15 % et motif Nid d'abeille (2)](/img/docs/configurer_bambu_studio_29.webp)

### Impression avec plusieurs couleurs

Il est possible de changer la couleur de certains objets en cliquant sur l’onglet **objet** dans la partie gauche de l’écran, puis sur un des objets, sur la case du filament et choisir une autre couleur.

<Tabs groupId="imprimante" queryString>
  <TabItem value="x1c" label="X1 Carbon" default>

Dans notre exemple nous avons choisi de modifier la couleur du Ring Upper en rouge. Nous vous invitons à ne pas mélanger les couleurs dans un même objet.

![Bambu Studio : mode Objets, choix du filament 2 (rouge) pour l'objet Ring Upper](/img/docs/configurer_bambu_studio_11.webp)

![Plateau de Bambu Studio : objet Ring Upper affiché en rouge, les autres en blanc](/img/docs/configurer_bambu_studio_12.webp)

:::warning
    Dans le cas d’objets avec des couleurs différentes, il est **obligatoire** de sélectionner, dans **Paramètres de la plaque**, un mode d’impression non pas par couche mais **par objet** pour une impression plus rapide et moins de gaspillage. Nous nous réservons le droit de couper toute impression ne respectant pas cette procédure
:::

  </TabItem>
  <TabItem value="x2d" label="X2D">

Dans notre exemple nous avons choisi une partie des objets en blanc et l'autre en gris.

![Bambu Studio, mode Objets : deux objets associés aux filaments 1 et 5](/img/docs/bambu_X2D_1.png)

:::warning
    Pour une impression en plusieurs couleurs avec la X2D, merci de choisir au maximum 2 couleurs et de s'assurer que la première couleur choisie se trouve dans l'AMS et la seconde la bobine externe.
:::

  </TabItem>
</Tabs>

![Bambu Studio : Paramètres de la plaque, menu Séquence d'impression avec options Par couche et Par objet](/img/docs/configurer_bambu_studio_13.webp)


### Modèles en ligne (Maker World)

En cas d'utilisation d'un modèle en ligne de Bambu Studio, assurez-vous de sélectionner le bon modèle d'imprimante avant de télécharger les fichiers (X1 Carbon ou X2D, selon l'imprimante utilisée).

![Maker World dans Bambu Studio : profil d'impression X1 Carbon sélectionné et bouton Téléchargez et Ouvrez](/img/docs/configurer_bambu_studio_36.webp)

:::warning
    En général, les paramètres d'impression seront bien configurés, mais il faut tout de même les vérifier comme pour un objet classique avant de lancer l'impression.
:::

### Préparation du plateau

À l’aide d’un chiffon, nettoyer le plateau avec de l’alcool Isopropylique à 99% pour une surface texturée ou du Windex pour une surface lisse. On pulvérise le liquide sur un chiffon, puis on frotte délicatement le plateau.

## **5.** Changement de filament

:::warning
    Utilisez uniquement les bobines Bambu Lab déjà montées sur leur support, disponibles dans nos ateliers. Pour préparer une nouvelle bobine sur son support, demandez l’aide d’un membre du personnel.

    N’utilisez jamais de bobine d’une autre marque dans les imprimantes Bambu Lab, et assurez-vous que le filament est bien sec avant de l’utiliser.
:::

### Bobine Bambu Lab avec puce RFID

La bobine de chez Bambu Lab et équipée d’une puce RFID, l’imprimante reconnaîtra automatiquement le filament inséré (matière, couleur, etc.) après le chargement dans l'AMS.

### Retirer un filament

S’il n’y a pas de filament à retirer, passez directement à l’étape 2.

#### Ouvrir l'AMS et retirer le filament

Faire pivoter vers l'intérieur les deux boucles localisées à chaque extrémité puis lever le couvercle AMS.

![Les boucles scellant le couvercle de l'AMS](/img/docs/filament-bambu1.webp)

![Les boucles baissées vers l'intérieur](/img/docs/filament-bambu2.webp)

Pousser délicatement le *feeder* vers l'arrière tout en tirant doucement vers le haut sur notre filament. 
Retirer la bobine de filament de l'un des quatres compartiments.

![Changer une bobine ](/img/docs/filament-bambu3.webp)

#### Ranger la bobine de filament

:::note X2D
Pour changer la bobine située hors de l'AMS, merci de demander à nos équipes sur place.
:::

Bloquer le bout du filament dans l'un des trous de la bobine pour éviter les noeuds ou que le filament se déroule. Ranger le tout dans son sac sous vide.

![Bloquer le bout du filament PLA-Trou de la bobine](/img/docs/filament-bambu4.webp)

![Ranger la bobine de filament PLA-Sac sous vide](/img/docs/filament-bambu5.webp)

### Installer la nouvelle bobine de filament

Sortir la nouvelle bobine de son sac et couper en diagonale l'extrémité du filament avec une pince coupante puis l'insérer dans l'emplacement de l'AMS.

Pousser délicatement le *feeder* vers l'arrière tout en insérant le filament dans le trou prévu à cet effet.

![remettre une bobine](/img/docs/filament-bambu6.webp)

L'imprimante va détecter le filament introduit au moment où la petite lumière blanche clignote et qu'un bruit se fait, le filament sera alors aspiré dans le tube de la machine pour finaliser le chargement.

![Bobine de filament PLA chargée](/img/docs/filament-bambu7.webp)



