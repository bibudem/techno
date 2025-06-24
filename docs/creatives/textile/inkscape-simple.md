---
help : crea
---

import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Transformer une image simple avec Inkscape

![](/img/docs/inkscape_simple_1.webp)



**Inkscape** est un logiciel gratuit de dessin vectoriel, pouvant être utilisé pour de nombreux projets créatifs. Son extension **Inkstitch** permet de créer des objets et des fichiers de broderie.

- [Logiciel de travail](https://inkscape.org/fr/)
- [Extension pour travailler avec la brodeuse](https://inkstitch.org/docs/install/)
- [Tutoriel fourni par Project Inkscape](https://inkscape.org/fr/learn/tutorials/?switchlang=fr)
- [InkStitch Tutoriel](https://inkstitch.org/tutorials/resources/beginner-video-tutorials/)

## Importer l'image en format PNG dans Inkscape

Nous utiliserons le logo des bibliothèques de l’UdeM comme exemple.

![](/img/docs/inkscape_simple_2.webp)

1. Ouvrir Inkscape puis ouvrir un **Nouveau Document**.
2. Importer l'image : **Fichier → Importer**

::: tips
Avec ce même chemin vous verrez l’option **Importer une image du web**, Vous trouverez différents modèles enregistrés par la communauté Inkscape.
Choisir une image la moins pixélisée, car cela affectera le rendu de votre broderie. 
::: 

## Dimensionner selon vos besoins

C'est une étape essentielle car après la vectorisation, chaque élément sera séparé et donc plus difficilement redimensionnable.

- Penser à mettre verrouiller le cadenas pour ne pas déformer votre travail.

![](/img/docs/inkscape_simple_3.webp)

- Passer du système métrique au système impérial (mm>in)

![](/img/docs/inkscape_simple_4.webp)

- Nos différentes tailles de cadres de broderie :
    - Grand : 13 1/4 x 6 po
    - Petit : 8 1/2 X 6 po

## Vectoriser 

Pour permettre à la machine de broder votre image, celle-ci devra être vectorisée. 

L’image vectorielle est une image numérique qui peut être agrandie ou rétrécie à l’infini sans jamais perdre de sa qualité.
Inkscape permet de vectoriser des images matricielles, pour en faire un chemin (élément **path**) inséré dans votre dessin.

### Vectoriser un objet matriciel

![](/img/docs/inkscape_simple_5.webp)

- Cliquer sur l’onglet **Multicolor** pour faire apparaître les couleurs.
- Dans le menu déroulant **Détection**, choisir l’option **Couleurs**. 
- Sélectionner **Niveau de gris** si votre image est en noir et blanc.

![](/img/docs/inkscape_simple_6.webp)

- Cliquer sur **Appliquer** en bas à droite
- L’image vectorisée est superposée à l’image originale. Glisser et déplacer l’image vectorisée.

![](/img/docs/inkscape_simple_7.webp)

### Afficher les calques

**Inkscape** permet d'organiser un document en calques et avoir différentes images superposées pour donner le produit final.

À coté de votre fenêtre de vectorisation, cliquer sur **Calque** puis **Calques et objets**.

![](/img/docs/inkscape_simple_8.webp)

![](/img/docs/inkscape_simple_9.webp)

Cette action vous permet d’afficher les *paths* = chemins de l’aiguille qui créent les tracés de votre image. Ils sont superposés à l’image originale.

Selon votre image, plus vous avez de *paths*, plus votre image/dessin final aura de couleurs ou d’éléments différents à traiter.

:::tip
Il est important de vérifier vos *paths* et de vous poser différentes questions :

- Est-ce que j’ai besoin de toutes ces couleurs ou éléments?
- Est-ce que le résultat me convient?
- Est-ce que mon fichier original est d’assez bonne qualité?
  
À l’aide du petit œil, afficher ou masquer les différents *paths*. Déterminer ceux à conserver ou à supprimer (sans aucun apport à votre image).
Sachez que les *paths* conservés seront brodés par la machine (vous pourrez encore nettoyer votre fichier dans une étape suivante).

Dans l’exemple du logo de l’UdeM nous avons : 

- Dossier g6313 comporte 8 *paths* qui correspondent à 8 passages pour la brodeuse.
- À cette étape, on va nettoyer le dossier g6313 et conserver les couleurs/éléments à broder.
- Image 6309 : image originale : ce format ne sera pas traité par la brodeuse donc il sera possible de la cacher avec l’œil si vous devez encore travailler avec votre modèle, ou la supprimer si vous n’en avez plus besoin.

Exemple :

- Le path 6319 correspond au logo de l’UdeM, nous le conservons.
- Le path 6323 correspond à des éléments parasites, superflus donc à supprimer.

![](/img/docs/inkscape_simple_10.webp)
:::

## Organisation des chemins de broderie

- **Extensions** → **Ink/Stitch** → **Outils : remplissage** → **Briser des objets de remplissage**

**Briser des objets de remplissage** consiste à transformer les *paths* en points de broderie. Ainsi, chaque caractère est géré indépendamment. 

:::tip
Vous pouvez organiser manuellement l’ordre des *paths*, notamment pour éviter les sauts de fil entre les éléments lors de la broderie. Très utile quand il s’agit de lettres ou pour supprimer des éléments parasites à l’intérieur d’un même *path*.
:::

![](/img/docs/inkscape_simple_11.webp)

## Exporter le fichier broderie

- PES - Format pour la brodeuse
- SVG - Pour Inkscape

![](/img/docs/inkscape_simple_12.webp)