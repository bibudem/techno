---
id : bambu
title: BambuLab X1C
help : crea
---

:::info
Avant de faire votre première impression, lisez l'[introduction à l'impression 3D](./introduction.md)
:::

import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

## **1.** Télécharger et configurer le logiciel Bambu Studio 

- [Lien pour télécharger le logiciel](https://bambulab.com/en-ca/download/studio) (disponible pour Windows, macOS et Linux)

### Configuration de Bambu Lab Studio

•	Sélectionner la région adéquate (ici **Amérique du Nord**)

•	Sélectionner l’imprimante : par défaut elles sont toutes sélectionnées, dans le coin supérieur droit cliquer sur **Clear All** → sélectionner **BambuLab X1 Carbon** → **suivant**

![](/img/docs/configurer_bambu_studio_1.webp)

•	Sélectionner des filaments : **suivant** directement en laissant tout de base
•	Installer le **Bambu Network Plugin** → **Terminer**

## **2.** Trouver un modèle

Trouver [des logiciels pour concevoir vos propres créations](../impression3d/modeles3d.md#logiciels-de-modélisation-3d), ainsi qu'[une collection de ressources en ligne pour télécharger des modèles 3D](../impression3d/modeles3d.md#modèles-en-ligne) prêts à imprimer.

## **3.** Préparer son modèle avec Bambu Studio

### Importer les fichiers .stl

•	En haut à gauche cliquer sur **Préparer**

![](/img/docs/configurer_bambu_studio_2.webp)

•	Faire glisser le ou les fichiers .stl que l’on veut imprimer 

![](/img/docs/configurer_bambu_studio_4.webp)

Si vous glissez plusieurs fichiers (objets), le logiciel le reconnaît et demande si vous voulez charger ces fichiers comme un objet unique : sauf cas d'impressions multicouleurs, cliquer sur **non**

![](/img/docs/configurer_bambu_studio_5.webp)

•	Dans notre exemple il y aura 4 objets distincts (on peut voir dans le coin inférieur droit que 4 objets sont sélectionnés)

![](/img/docs/configurer_bambu_studio_6.webp)

### Agencer les objets

Lorsque les objets du plateau sont sélectionnés, cliquer sur **Agencer tous les objets**, sélectionner les propriétés comme ci-dessous et cliquer sur **Agencer** : les objets sont alors répartis sur le plateau.

![](/img/docs/configurer_bambu_studio_7.webp)

![](/img/docs/configurer_bambu_studio_9.webp)

### Bien positionner l'objet

Vérifier que pour chaque objet la surface la plus plate est en contact avec la plaque de support. Sinon, il faudra sélectionner l’objet. Cliquer sur **Positionner sur une face** et cliquer sur la face qui se retrouvera en contact avec la plaque. Dans notre exemple l’objet sélectionné est Top Base.

![](/img/docs/configurer_bambu_studio_14.webp)

![](/img/docs/configurer_bambu_studio_15.webp)

![](/img/docs/configurer_bambu_studio_16.webp)


### Vérifier les dimensions de l'objet

Vérifier que les dimensions de l'objet correspondent bien à la taille de l'objet souhaité. Sélectionner votre objet → Cliquer sur **Redimesionner** (1) → Vérifier sa taille (2)

![](/img/docs/bambulab_taille_objet.jpg)

### Supports

Si la surface de contact entre notre plaque et notre objet est insuffisante pour garantir notre impression, lorsqu’on clique sur **Trancher le plateau** un message d’erreur indique alors que l’objet semble avoir une partie dans le vide et qu’il faut le réorienter ou ajouter des supports.

![](/img/docs/configurer_bambu_studio_17.webp)

![](/img/docs/configurer_bambu_studio_18.webp)

#### Ajout de supports 

Cliquer sur l’onglet **Supports** → **Activer les supports** → **Trancher le plateau**. Les supports vont apparaître en vert.

![](/img/docs/configurer_bambu_studio_19.webp)

![](/img/docs/configurer_bambu_studio_20.webp)

![](/img/docs/configurer_bambu_studio_21.webp)

### Jupe

L'ajout d’une jupe autour de l’objet est parfois nécessaire pour assurer son adhérence au plateau. 
**Global** → **Autre** → **Boucle de jupe** x 1 → **Type de bordure extérieure uniquement** → **Trancher le plateau**. La jupe apparaît en bleu autour de l’objet.

![](/img/docs/configurer_bambu_studio_22.webp)

![](/img/docs/configurer_bambu_studio_23.webp)

## **4.** Connecter et paramétrer notre imprimante

### Connecter l’imprimante

:::warning
    Merci de toujours passer par la connexion Wi-Fi afin de lancer vos impressions. Il est interdit de retirer la carte micro SD présente dans l'imprimante.
:::

-	Connecter votre ordinateur au **Wi-Fi Bambu Lab**. Pas de mot de passe nécessaire pour cette étape.

![](/img/docs/configurer_bambu_studio_24.webp)

-	**Périphérique** → **Pas d’imprimantes** → **Sélectionner votre imprimante** (« Bambu Panda! » dans notre exemple).

![](/img/docs/configurer_bambu_studio_33.webp)

-	Saisir le code de l’imprimante.

![](/img/docs/bambu_LAN.webp)

-	Une fois connectée, les paramètres en direct de l’imprimante apparaissent dans l’onglet **État**.

![](/img/docs/configurer_bambu_studio_26.webp)

### Paramètres de notre impression

1.	Vérifier que la bonne imprimante est sélectionnée : cliquer sur l’icône en haut à gauche dans **Imprimante** → **Sélectionner la Bambu Lab X1 Carbon**

![](/img/docs/configurer_bambu_studio_32.webp)

2.	Synchroniser les filaments avec l’imprimante : dans la partie **Filament** du projet, cliquer sur l’icône **Synchroniser les filaments depuis l’AMS**, sélectionner **Surécriture** et **Synchroniser maintenant**.

![](/img/docs/configurer_bambu_studio_30.webp)

![](/img/docs/configurer_bambu_studio_31.webp)

3.	Vérifier que le plateau sélectionné correspond bien au plateau utilisé dans l’imprimante (texturé dans notre exemple).

![](/img/docs/configurer_bambu_studio_27.webp)

4.	L’épaisseur de la couche : en général on utilise le **0.2mm**.

![](/img/docs/configurer_bambu_studio_28.webp)

5.	Densité et motif de remplissage : Choisir une densité entre **10 et 15%** et un **remplissage en nid d’abeille** pour une meilleure solidité de l’objet.

![](/img/docs/configurer_bambu_studio_29.webp)

### Impression avec plusieurs couleurs

Il est possible de changer la couleur de certains objets en cliquant sur l’onglet **objet** dans la partie gauche de l’écran, puis sur un des objets, sur la case du filament et choisir une autre couleur. Dans notre exemple nous avons choisi de modifier la couleur du Ring Upper en rouge.

![](/img/docs/configurer_bambu_studio_11.webp)

![](/img/docs/configurer_bambu_studio_12.webp)

:::warning
    Dans le cas d’objets avec des couleurs différentes, il est obligatoire de sélectionner, dans **Paramètres de la plaque**, un mode d’impression non pas par couche mais par objet pour une impression plus rapide et moins de gaspillage. Nous nous réservons le droit de couper toute impression ne respectant pas cette procédure
:::


![](/img/docs/configurer_bambu_studio_13.webp)


### Modèles en ligne (Maker World)

En cas d'utilisation d'un modèle en ligne de Bambu Studio, assurez-vous de sélectionner le bon modèle d'imprimante avant de télécharger les fichiers (X1 Carbon)

![](/img/docs/configurer_bambu_studio_36.webp)

:::warning
    En général, les paramètres d'impression seront bien configurés, mais il faut tout de même les vérifier comme pour un objet classique avant de lancer l'impression.
:::

### Préparation du plateau

À l’aide d’un chiffon, nettoyer le plateau avec de l’alcool Isopropylique à 99% pour une surface texturée ou du Windex pour une surface lisse. On pulvérise le liquide sur un chiffon, puis on frotte délicatement le plateau.

## **5.** Changement de filament

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

Bloquer le bout du filament dans l'un des trous de la bobine pour éviter les noeuds ou que le filament se déroule. Ranger le tout dans son sac sous vide.

![Bloquer le bout du filament PLA-Trou de la bobine](/img/docs/filament-bambu4.webp)

![Ranger la bobine de filament PLA-Sac sous vide](/img/docs/filament-bambu5.webp)

### Installer la nouvelle bobine de filament

Sortir la nouvelle bobine de son sac et couper en diagonale l'extrémité du filament avec une pince coupante puis l'insérer dans l'emplacement de l'AMS.

Pousser délicatement le *feeder* vers l'arrière tout en insérant le filament dans le trou prévu à cet effet.

![remettre une bobine](/img/docs/filament-bambu6.webp)

L'imprimante va détecter le filament introduit au moment où la petite lumière blanche clignote et qu'un bruit se fait, le filament sera alors aspiré dans le tube de la machine pour finaliser le chargement.

![Bobine de filament PLA chargée](/img/docs/filament-bambu7.webp)

#### Cas d'une bobine Bambu Lab avec puce RFID

Si la bobine est compatible Bambu Lab et équipée d’une puce RFID, l’imprimante reconnaîtra automatiquement le filament inséré (matière, couleur, etc.) après le chargement.

#### Autre bobine avec support plastique sans RFID

Si la bobine compatible Bambu Lab n’est pas munie d’une puce RFID, il faut indiquer manuellement les caractéristiques du filament après son chargement.

Utiliser l’écran tactile de l’imprimante :
1.	Appuyer sur l’icône **bobine**
2.	Appuyer sur le logo **oeil** de la bobine que vous venez d’insérer
3.	Cliquer sur **Edit**
4.	Renseigner les champs suivants de renseignements de la bobine (marque, type, couleur, température...)

![](/img/docs/bambulab_change_filament_1.webp)

![](/img/docs/bambulab_change_filament_2.webp)

![](/img/docs/bambulab_change_filament_3.webp)

![](/img/docs/bambulab_change_filament_4.webp)


#### Autre bobine nécessitant un support

Certaines bobines sont munies d’un noyau en carton, qui n’est pas toujours compatible avec l’AMS (le carton pivote mal autour de l’axe).
Dans ce cas, il faut :
	1.	Placer la bobine en carton sur un support en plastique compatible.
	2.	Déposer l’ensemble dans l’emplacement prévu à l’intérieur de l’AMS.

Indiquer manuellement les caractéristiques du nouveau filament à l’aide de l’écran tactile :

	1. Appuyer sur l’icône bobine
	2. Appuyer sur le logo oeil de la bobine que vous venez d’insérer
	3. Cliquer sur Edit
	4. Renseigner les champs suivants de renseignements de la bobine (marque, type, couleur, température...)

:::info
Une [liste des filaments compatibles](https://docs.google.com/spreadsheets/d/1LGVjAbGjvIjvOFQsDi8lSK9-vy7GfGhgVP41sNffh6I/edit?pli=1&gid=1679778390#gid=1679778390) est maintenue par la communauté.
N’hésitez pas à la consulter pour vérifier la compatibilité avec l’AMS.
:::
