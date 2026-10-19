---
title: Transformer une image complexe avec Inkscape
help : crea
description: "Tutoriel pour transformer une image PNG complexe en fichier de broderie avec Inkscape et l'extension Ink/Stitch, installés à l'Atelier de fabrication de Thérèse-Gouin-Décarie."
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

![Illustration colorée d'un dodo bleu au bec rouge, image PNG utilisée comme exemple](/img/docs/transformer_une_image_complexe_avec_Inkscape_1.webp)

Pour importer l'image, ouvrir Inkscape puis ouvrir un **Nouveau Document**.

Aller dans le coin supérieur gauche → **Fichier** → **Importer**.

:::note Astuce
    Avec ce même chemin, vous verrez l’option **Importer une image du web**, vous pourrez y chercher différents modèles enregistrés par la communauté Inkscape.
    Choisir une image la plus propre possible, c’est a dire la moins pixélisée car cela affectera le rendu de votre broderie.
:::

## 2. Dimensionner selon vos besoins

Après la vectorisation, chaque élément sera séparé et donc plus difficilement redimensionnable,

- Penser à mettre le cadenas (verouillé) pour ne pas déformer votre travail

![Barre d'outils d'Inkscape avec les champs X, Y, L, H et le cadenas de verrouillage des proportions](/img/docs/transformer_une_image_complexe_avec_Inkscape_2.webp)

- Passer au système métrique impérial (mm → in)

![Menu déroulant des unités dans Inkscape avec l'option in (pouces) encadrée en jaune](/img/docs/transformer_une_image_complexe_avec_Inkscape_3.webp)

- Nos différentes tailles de cadres de broderie :

    - Grand 13 1/4 x 6 po
    - Petit 8 1/2 x 6 po

## 3. Vectoriser

Pour permettre à la machine de broder votre image, celle-ci devra être vectorisée. L’image vectorielle est une image numérique qui peut être agrandie ou rétrécie à l’infini sans jamais perdre de sa qualité. Inkscape permet de vectoriser des images matricielles. Pour en faire un chemin `(élément <path>)`, inséré dans votre dessin :

- **Chemin** → **Vectoriser un objet matriciel**

![Menu Chemin d'Inkscape avec l'option Vectoriser un objet matriciel sélectionnée](/img/docs/transformer_une_image_complexe_avec_Inkscape_4.webp)

- Afin de faire apparaître les couleurs, cliquer sur l’onglet **Multicolor**, dans le menu déroulant **Détection** choisir l’option **Couleurs**. Sélectionner **niveau de gris** si votre image est en noir et blanc.

- Si les couleurs ne sont pas différenciées, baisser le seuil de luminosité.

![Panneau Vectoriser un objet matriciel, onglet Multicolor, avec la détection réglée sur Couleurs](/img/docs/transformer_une_image_complexe_avec_Inkscape_5.webp)

- Cliquer sur **Appliquer** dans le coin inférieur droit

L'image vectorisée est superposée à l'image originale. Glisser et déplacer l'image vectorisée.

## 4. Afficher les calques

**Inkscape** permet d'organiser un document en calques : différentes images superposées pour donner le produit final.

À coté de votre fenêtre de vectorisation, cliquer sur **Calque** puis **Calques et objets**.

Logo :

![Icône du panneau Calques et objets d'Inkscape](/img/docs/transformer_une_image_complexe_avec_Inkscape_6.webp)

Cette action vous permet d’afficher les `paths` (chemins de l’aiguille) qui créent les tracés de votre image. Ils sont superposés à l’image originale.

Selon votre image, plus vous avez de `paths`, plus votre image/dessin final aura de couleurs ou d'éléments différents à traiter

## 5. Visualiser une simulation de la broderie

- Menu déroulant **Extensions** → **Ink/Stitch** → **Paramètres**

![Menu Extensions d'Inkscape, sous-menu Ink/Stitch, avec l'option Paramètres sélectionnée](/img/docs/transformer_une_image_complexe_avec_Inkscape_7.webp)

À l'aide de cette option, vous pourrez voir une simulation vidéo de la broderie.

![Fenêtre Embroidery Params d'Ink/Stitch à côté de l'aperçu simulé des points de broderie](/img/docs/transformer_une_image_complexe_avec_Inkscape_8.webp)

Parallèlement, un panneau d'options est disponible :

![Panneau Embroidery Params d'Ink/Stitch, onglet FillStitch, avec les paramètres de remplissage](/img/docs/transformer_une_image_complexe_avec_Inkscape_9.webp)

Exemples des principales fonctions / paramètres de broderie :

- **Fill method** → choix du contour fil pour un effet satiné.

- **Spacing between rows** → réduction de la distance entre les rangées des points de couture, pour une meilleure définition à l'image.

## 6. Organisation et nettoyage des chemins de broderie

**Extensions** → **Ink/Stitch** → **Outils de remplissage** → **Briser des objets de remplissage**

**Briser des objets de remplissage** consiste à transformer les `paths` en points de broderie. Ainsi, chaque caractère est géré indépendamment. Très utile pour supprimer des éléments parasites à l’intérieur d’un même `path`.

Exemple :

*Path 139 Initial*

![Dodo vectorisé avec le path139 sélectionné dans le panneau des calques, avant le bris](/img/docs/transformer_une_image_complexe_avec_Inkscape_10.webp)

*Path 139 Brisé*

![Panneau des calques après le bris : path139 divisé en path139_1 à path139_4](/img/docs/transformer_une_image_complexe_avec_Inkscape_11.webp)

:::note Astuce
    À cette étape, vous pouvez organiser vous-même l’ordre des `paths`. Notamment pour éviter les sauts de fil entre les éléments lors de la broderie
:::

**Détails des paramètres choisis pour notre dodo**

![Broderie terminée du dodo coloré sur un tissu blanc à motif d'étoiles](/img/docs/transformer_une_image_complexe_avec_Inkscape_12.webp)

![Simulation du remplissage de l'aile du dodo avec un espacement entre les rangées de 0,1 mm](/img/docs/transformer_une_image_complexe_avec_Inkscape_13.webp)

![Simulation du remplissage jaune de la tête du dodo en Auto Fill avec un angle de 45 degrés](/img/docs/transformer_une_image_complexe_avec_Inkscape_14.webp)

![Simulation du remplissage du cou du dodo en Auto Fill avec un espacement entre les rangées de 1 mm](/img/docs/transformer_une_image_complexe_avec_Inkscape_15.webp)

![Simulation du bec rouge du dodo en Contour Fill avec un espacement entre les rangées de 0,24 mm](/img/docs/transformer_une_image_complexe_avec_Inkscape_16.webp)

![Simulation des pattes du dodo en Contour Fill avec un espacement entre les rangées de 0,12 mm](/img/docs/transformer_une_image_complexe_avec_Inkscape_17.webp)

![Simulation du corps bleu du dodo en Auto Fill avec un espacement entre les rangées de 0,24 mm](/img/docs/transformer_une_image_complexe_avec_Inkscape_18.webp)
