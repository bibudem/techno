---
title: Transformer une image complexe avec Inkscape
help : crea
---

import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

**InkScape** est un logiciel gratuit de dessin vectoriel, pouvant être utilisé pour de nombreux projets créatifs. Son extension **Inkstitch** permet de créer des objets et des fichiers de broderie.

Le logiciel et son extension sont installés sur chacun des postes informatiques de l’[Atelier de fabrication](../../espaces/ateliers.md) de [Thérèse-Gouin-Décarie](https://bib.umontreal.ca/espaces/#tgd). Vous pouvez aussi les télécharger depuis votre ordinateur personnel.

- [Logiciel Inkscape](https://inkscape.org/fr/)

- [Extension Inkstitch](https://inkstitch.org/docs/install/)

- [Tutoriel fourni par Project Inkscape](https://inkscape.org/fr/learn/tutorials/?switchlang=fr)

- [Tutoriel InkStitch](https://inkstitch.org/tutorials/resources/beginner-video-tutorials/)

## 1. Importer l'image en format PNG avec Inkscape

Nous utiliserons cette image colorée d’un dodo, l'animal emblématique de l’île Maurice!

![](/img/docs/transformer_une_image_complexe_avec_Inkscape_1.jpeg)

Pour importer l'image, ouvrir Inkscape puis ouvrir un **Nouveau Document**.

Aller dans le coin supérieur gauche → **Fichier** → **Importer**.

:::info Astuce
    Avec ce même chemin, vous verrez l’option **Importer une image du web**, vous pourrez y chercher différents modèles enregistrés par la communauté Inkscape.
    Choisir une image la plus propre possible, c’est a dire la moins pixélisée car cela affectera le rendu de votre broderie.
:::

## 2. Dimensionner selon vos besoins

Après la vectorisation, chaque élément sera séparé et donc plus difficilement redimensionnable,

- Penser à mettre le cadenas (verouillé) pour ne pas déformer votre travail

![](/img/docs/transformer_une_image_complexe_avec_Inkscape_2.jpeg)

- Passer au système métrique impérial (mm → in)

![](/img/docs/transformer_une_image_complexe_avec_Inkscape_3.jpeg)

- Nos différentes tailles de cadres de broderie :

    - Grand 13 1/4 x 6 po
    - Petit 8 1/2 x 6 po

## 3. Vectoriser

Pour permettre à la machine de broder votre image, celle-ci devra être vectorisée. L’image vectorielle est une image numérique qui peut être agrandie ou rétrécie à l’infini sans jamais perdre de sa qualité. Inkscape permet de vectoriser des images matricielles. Pour en faire un chemin `(élément <path>)`, inséré dans votre dessin :

- **Chemin** → **Vectoriser un objet matriciel**

![](/img/docs/transformer_une_image_complexe_avec_Inkscape_4.jpeg)

- Afin de faire apparaître les couleurs, cliquer sur l’onglet **Multicolor**, dans le menu déroulant **Détection** choisir l’option **Couleurs**. Sélectionner **niveau de gris** si votre image est en noir et blanc.

- Si les couleurs ne sont pas différenciées, baisser le seuil de luminosité.

![](/img/docs/transformer_une_image_complexe_avec_Inkscape_5.jpeg)

- Cliquer sur **Appliquer** dans le coin inférieur droit

L'image vectorisée est superposée à l'image originale. Glisser et déplacer l'image vectorisée.

## 4. Afficher les calques

**Inkscape** permet d'organiser un document en calques : différentes images superposées pour donner le produit final.

À coté de votre fenêtre de vectorisation, cliquer sur **Calque** puis **Calques et objets**.

Logo :

![](/img/docs/transformer_une_image_complexe_avec_Inkscape_6.jpeg)

Cette action vous permet d’afficher les `paths` (chemins de l’aiguille) qui créent les tracés de votre image. Ils sont superposés à l’image originale.

Selon votre image, plus vous avez de `paths`, plus votre image/dessin final aura de couleurs ou d'éléments différents à traiter

## 5. Visualiser une simulation de la broderie

- Menu déroulant **Extensions** → **Ink/Stitch** → **Paramètres**

![](/img/docs/transformer_une_image_complexe_avec_Inkscape_7.jpeg)

À l'aide de cette option, vous pourrez voir une simulation vidéo de la broderie.

![](/img/docs/transformer_une_image_complexe_avec_Inkscape_8.jpeg)

Parallèlement, un panneau d'options est disponible :

![](/img/docs/transformer_une_image_complexe_avec_Inkscape_9.jpeg)

Exemples des principales fonctions / paramètres de broderie :

- **Fill method** → choix du contour fil pour un effet satiné.

- **Spacing between rows** → réduction de la distance entre les rangées des points de couture, pour une meilleure définition à l'image.

## 6. Organisation et nettoyage des chemins de broderie

**Extensions** → **Ink/Sticth** → **Outils de remplissage** → **Briser des objets de remplissage**

**Briser des objets de remplissage** consiste à transformer les `paths` en points de broderie. Ainsi, chaque caractère est géré indépendamment. Très utile pour supprimer des éléments parasites à l’intérieur d’un même `path`.

Exemple :

*Path 139 Initial*

![](/img/docs/transformer_une_image_complexe_avec_Inkscape_10.jpeg)

*Path 139 Brisé*

![](/img/docs/transformer_une_image_complexe_avec_Inkscape_11.jpeg)

:::info Astuce
    À cette étape, vous pouvez organiser vous-même l’ordre des `paths`. Notamment pour éviter les sauts de fil entre les éléments lors de la broderie
:::

**Détails des paramètres choisis pour notre dodo**

![](/img/docs/transformer_une_image_complexe_avec_Inkscape_12.jpeg)

![](/img/docs/transformer_une_image_complexe_avec_Inkscape_13.jpeg)

![](/img/docs/transformer_une_image_complexe_avec_Inkscape_14.jpeg)

![](/img/docs/transformer_une_image_complexe_avec_Inkscape_15.jpeg)

![](/img/docs/transformer_une_image_complexe_avec_Inkscape_16.jpeg)

![](/img/docs/transformer_une_image_complexe_avec_Inkscape_17.jpeg)

![](/img/docs/transformer_une_image_complexe_avec_Inkscape_18.jpeg)
