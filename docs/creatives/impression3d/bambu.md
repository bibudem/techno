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

- [Lien pour télécharger le logiciel](https://bambulab.com/en-ca/download/studio) (disponible pour Windows, Mac et Linux)

### Configuration de Bambu Lab Studio

•	Sélectionner la région adéquate (ici **Amérique du Nord**)
•	Sélectionner l’imprimante : par défaut elles sont toutes sélectionnées, dans le coin supérieur droit cliquer sur **Clear All** → sélectionner **Bambu Lab X1 Carbon** → **suivant**

![](/img/docs/configurer_bambu_studio_1.jpg)

•	Sélectionner des filaments : **suivant** directement en laissant tout de base
•	Installer le **Bambu Network Plugin** → **Terminer**

## **2.** Trouver un modèle

Trouver [des logiciels pour concevoir vos propres créations](../impression3d/modeles3d.md#logiciels-de-modélisation-3d), ainsi qu'[une collection de ressources en ligne pour télécharger des modèles 3D](../impression3d/modeles3d.md#modèles-en-ligne) prêts à imprimer.

## **3.** Préparer son modèle avec Bambu Studio

### Importer les fichiers .stl

•	En haut à gauche cliquer sur **Préparer**

![](/img/docs/configurer_bambu_studio_2.jpg)

•	Faire glisser le ou les fichiers .stl que l’on veut imprimer 

![](/img/docs/configurer_bambu_studio_4.jpg)

Si vous glissez plusieurs fichiers (objets), le logiciel le reconnaît et demande si vous voulez charger ces fichiers comme un objet unique : sauf cas d'impressions multicouleurs, cliquer sur **non**

![](/img/docs/configurer_bambu_studio_5.jpg)

•	Dans notre exemple il y aura 4 objets distincts (on peut voir dans le coin inférieur droit que 4 objets sont sélectionnés)

![](/img/docs/configurer_bambu_studio_6.jpg)

### Agencer les objets

Lorsque les objets du plateau sont sélectionnés, cliquer sur **Agencer tous les objets**, sélectionner les propriétés comme ci-dessous et cliquer sur **Agencer** : les objets sont alors répartis sur le plateau.

![](/img/docs/configurer_bambu_studio_7.jpg)

![](/img/docs/configurer_bambu_studio_9.jpg)

### Bien positionner l'objet

Vérifier que pour chaque objet la surface la plus plate est en contact avec la plaque de support. Sinon, il faudra sélectionner l’objet. Cliquer sur **Positionner sur une face** et cliquer sur la face qui se retrouvera en contact avec la plaque. Dans notre exemple l’objet sélectionné est Top Base.

![](/img/docs/configurer_bambu_studio_14.jpg)

![](/img/docs/configurer_bambu_studio_15.jpg)

![](/img/docs/configurer_bambu_studio_16.jpg)

### Supports

Si la surface de contact entre notre plaque et notre objet est insuffisante pour garantir notre impression, lorsqu’on clique sur **Trancher le plateau** un message d’erreur indique alors que l’objet semble avoir une partie dans le vide et qu’il faut le réorienter ou ajouter des supports.

![](/img/docs/configurer_bambu_studio_17.jpg)

![](/img/docs/configurer_bambu_studio_18.jpg)

#### Ajout de supports 

Cliquer sur l’onglet **Supports** → **Activer les supports** → **Trancher le plateau**. Les supports vont apparaître en vert.

![](/img/docs/configurer_bambu_studio_19.jpg)

![](/img/docs/configurer_bambu_studio_20.jpg)

![](/img/docs/configurer_bambu_studio_21.jpg)

### Jupe

L'ajout d’une jupe autour de l’objet est parfois nécessaire pour assurer son adhérence au plateau. 
**Global** → **Autre** → **Boucle de jupe** x 1 → **Type de bordure extérieure uniquement** → **Trancher le plateau**. La jupe apparaît en bleu autour de l’objet.

![](/img/docs/configurer_bambu_studio_22.jpg)

![](/img/docs/configurer_bambu_studio_23.jpg)

## **4.** Connecter et paramétrer notre imprimante

### Connecter l’imprimante

-	Connecter votre ordinateur au **Wi-Fi Bambu Lab**. Pas de mot de passe nécessaire pour cette étape.

![](/img/docs/configurer_bambu_studio_24.jpg)

-	**Périphérique** → **Pas d’imprimantes** → **Sélectionner votre imprimante** (« Bambu Panda! » dans notre exemple).

![](/img/docs/configurer_bambu_studio_33.jpg)

-	Saisir le code de l’imprimante.

![](/img/docs/configurer_bambu_studio_34.jpg)

-	Une fois connectée, les paramètres en direct de l’imprimante apparaissent dans l’onglet **État**.

![](/img/docs/configurer_bambu_studio_26.jpg)

### Paramètres de notre impression

1.	Vérifier que la bonne imprimante est sélectionnée : cliquer sur l’icône en haut à gauche dans **Imprimante** → **Sélectionner la Bambu Lab X1 Carbon**

![](/img/docs/configurer_bambu_studio_32.jpg)

2.	Synchroniser les filaments avec l’imprimante : dans la partie **Filament** du projet, cliquer sur l’icône **Synchroniser les filaments depuis l’AMS**, sélectionner **Surécriture** et **Synchroniser maintenant**.

![](/img/docs/configurer_bambu_studio_30.jpg)

![](/img/docs/configurer_bambu_studio_31.jpg)

3.	Vérifier que le plateau sélectionné correspond bien au plateau utilisé dans l’imprimante (texturé dans notre exemple).

![](/img/docs/configurer_bambu_studio_27.jpg)

4.	L’épaisseur de la couche : en général on utilise le **0.2mm**.

![](/img/docs/configurer_bambu_studio_28.jpg)

5.	Densité et motif de remplissage : Choisir une densité entre **10 et 15%** et un **remplissage en nid d’abeille** pour une meilleure solidité de l’objet.

![](/img/docs/configurer_bambu_studio_29.jpg)

### Impression avec plusieurs couleurs

#### Des objets de couleurs différentes

Il est possible de changer la couleur de certains objets en cliquant sur l’onglet **objet** dans la partie gauche de l’écran, puis sur un des objets, sur la case du filament et choisir une autre couleur. Dans notre exemple nous avons choisi de modifier la couleur du Ring Upper en rouge.

![](/img/docs/configurer_bambu_studio_11.jpg)

![](/img/docs/configurer_bambu_studio_12.jpg)

:::warning
    Dans le cas d’objets avec des couleurs différentes, il est préférable de sélectionner, dans **Paramètres de la plaque**, un mode d’impression non pas par couche mais par objet pour une impression plus rapide.
:::


![](/img/docs/configurer_bambu_studio_13.jpg)



#### Un objet de plusieurs couleurs

Si vous glissez un objet de plusieurs couleurs, Le logiciel vous demandera si vous voulez charger ces fichiers comme un objet unique, cliquer sur **Oui**.

![](/img/docs/configurer_bambu_studio_35.jpg)

:::warning
    Dans le cas d’un objets avec des couleurs différentes, il faudra penser à bien assigner la bonne couleur de filament disponible dans l'AMS à la couleur désirée.
:::

### Modèles en ligne (Maker World)

En cas d'utilisation d'un modèle en ligne de Bambu Studio, assurez-vous de sélectionner le bon modèle d'imprimante avant de télécharger les fichiers (X1 Carbon)

![](/img/docs/configurer_bambu_studio_36.jpg)

:::warning
    En général, les paramètres d'impression seront bien configurés, mais il faut tout de même les vérifier comme pour un objet classique avant de lancer l'impression.
:::

### Préparation du plateau

À l’aide d’un chiffon, nettoyer le plateau avec de l’alcool Isopropylique à 99% pour une surface texturée ou du Windex pour une surface lisse. On pulvérise le liquide sur un chiffon, puis on frotte délicatement le plateau.
