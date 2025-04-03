---
title: Introduction
description: Tout apprendre sur l'impression 3D
slug: /creatives/introduction-impression-3d
---

# Introduction à l'impression 3D

## Qu’est-ce que l’impression 3D ?

L’impression 3D consiste à reproduire un objet à partir d’un modèle en 3D conçu par ordinateur. Cet objet tridimensionnel est créé par un dépôt successif de couches de matériaux. Différents matériaux peuvent être utilisé, du plastique, mais aussi du chocolat ou du béton. 

Un logiciel appelé *Slicer* découpe le modèle 3D en plusieurs couches selon un paramétrage choisi. L’extrudeur de l’imprimante chauffe le plastique et le dépose couche par couche en suivant les instructions établies par le *Slicer*. Un système de ventilation refroidit instantanément le plastique déposé pour le solidifier. C’est ce qu’on appelle la fabrication additive.

## Entreposage des filaments

Le bon stockage des bobines de filament est important, puisqu’à l’air libre, le filament a tendance à absorber l’humidité ambiante, ce qui peut causer des problèmes d’impression.

- Bloquez le bout du filament dans un des trous de la bobine afin d’éviter de mêler les filaments entre eux.
- Coupez en diagonale le bout du filament avec une pince coupante afin de faciliter l’insertion dans l’imprimante.
- Toujours mettre la bobine non utilisée dans un sac d'emballage hermétique avec un petit sac de gel de silice afin d’absorber l’humidité.
- Entreposez les bobines dans une boîte fermée pour éviter l’exposition prolongée à la lumière.

Pour vérifier si un filament est encore utilisable, prenez un bout d’environ 5 cm et essayez de le tordre. Il ne doit pas se casser facilement.

Lorsqu’un filament a absorbé trop d’humidité, un séchoir à filament peut être utilisé pour restaurer ses propriétés.

## Les grandes étapes

### Modèles

La première étape consiste à trouver un modèle 3D ou à le concevoir soi-même.
- **Depuis Internet** : [Où trouver des modèles 3D ?](#)
- **Modélisation** : Des logiciels comme Blender permettent de créer ses propres modèles 3D. Voir la section [Logiciels de modélisation](#).

### Découpe du modèle

Le *Slicer* transforme un modèle au format **.STL** en un fichier **.GCODE** contenant les instructions pour l’imprimante.

Il existe plusieurs logiciels de découpe, la plupart sont libre et à code source ouvert. Les entreprises de fabrication d'imprimante 3D proposent leurs propres logiciels de découpe afin d'offrir des fonctionnalités propres à leurs imprimantes. Certaines utilisent **.GCODE** comme extension du fichier de sortie, d'autres dans un format propriétaire. Voici quelques exemples de logiciels de découpe :

- **Cura** : Pour les imprimantes Ultimaker.
- **PrusaSlicer** : Pour les imprimantes Prusa.
- **BambuStudio** : Pour les imprimantes BambuLab.

### Utilisation des profils

Les profils sont un ensemble de paramètres prédéfinis dans le *Slicer*. Ils peuvent être modifiés à loisir. Des profils par défaut sont configurés, mais il faut toujours vérifier les paramètres et les mouvements de l’extrudeur avant d’enregistrer le fichier sur le périphérique de stockage de l'imprimante.

#### Épaisseur

<figure markdown>
  ![Une vue macro de trois impressions 3D](#)
  <figcaption>de gauche à droite : 0.05mm, 0.20mm et 0.30mm. </figcaption> [Source ](https://www.hubs.com/knowledge-base/impact-layer-height-3d-print/)
</figure>

L’épaisseur d’une couche est habituellement de 0,2 mm. Il est possible de descendre jusqu’à 0,1 mm si l’objet est très détaillé ou s’il subira des forces parallèles aux couches. Si tel est le cas, il est recommandé de revoir le sens d’impression pour que les forces soient exercées perpendiculairement aux couches d’impressions. Notez que la durée d’impression sera deux fois plus longue à 0,1 mm qu’à 0,2 mm.

<figure markdown>
  ![Hauteur de la couche](#)
  <figcaption>Hauteur de la couche</figcaption>
</figure>


#### Remplissage (résistance)

Le remplissage agit sur la solidité et, dans une moindre mesure, sur la vitesse d’impression et la souplesse d’un objet. En effet, le PLA n’est pas suffisamment flexible pour supporter la déformation. Le remplissage s’exprime en pourcentage. Une valeur typique se situe entre 5% et 20%. Il est possible d’imprimer sans remplissage (0%), ou entièrement plein (100%) selon les cas. Il existe aussi différents motifs de remplissage. Ils ont chacun leurs avantages.

<figure markdown>
  ![Différents remplissage d'une impression 3D](#)
  <figcaption>À gauche un remplissage à 40% avec le motif Grille (Grid) et à droite un remplissage à 20% avec le motif Nid d’abeille (Honeycomb)</figcaption>
</figure>

:::note Ressources en ligne
- [Tout ce que vous avez besoin de savoir sur les remplissages - Prusa Printers ](https://blog.prusaprinters.org/fr/tout-ce-que-vous-avez-besoin-de-savoir-sur-les-remplissages_43579/)
- [Optimisation du remplissage des impressions 3D - Makershop ](https://www.makershop.fr/blog/optimisation-remplissage-impressions-3d/)
- [Comment optimiser le remplissage de vos impressions 3D ? ](https://5d-impression.com/blog/comment-optimiser-le-remplissage-de-vos-impressions-3d-b53.html)
:::

#### Support

Le support est utilisé pour imprimer les porte-à-faux. L’impression doit obligatoirement avoir une surface de contact pour se déposer. Pour la première couche il s’agit du plateau, pour les couches suivantes il s’agit de la couche précédente. Si le matériau se dépose dans le vide, il faut créer un support. Le support peut également être utilisé pour augmenter la surface de contact de l’objet sur le plateau et éviter un décollement.

<figure markdown>
  ![Des pièces imprimées en 3D avec et sans support](#)
  <figcaption>À gauche, une pièce sans support. À droite, une pièce avec du support (en jaune)</figcaption>
</figure>

:::warning Bon à savoir
- Rajouter du support augmente la durée de l'impression.
- Il est possible d'imprimer avec du support soluble dans l'eau (le PVA).
- Il faut prévoir un post-traitement pour retirer le support et nettoyer la pièce imprimée.
:::

:::note Ressources en ligne
- [Peindre du support - Prusa 3D ](#)
:::

#### Adhérence

Si le plastique n’adhère pas au plateau, l’impression va échouer et en plus de gaspiller du matériau, cela risque d’abîmer l’imprimante. Pour que le filament reste fixé au plateau durant l’impression, une bordure de quelques millimètres de largeur, le *brim*, permet de maximiser la surface de contact, et donc améliore l’adhérence de la matière sur le plateau. Il s’agit d’une couche qui est facilement détachable une fois l’impression terminée. 

<figure markdown>
  ![Pièce dans le logiciel de découpe avec un brim](#)
  <figcaption>En vert, le *brim* et en jaune, la pièce à imprimer.</figcaption>
</figure>

## Avant, pendant et après l’impression

### Avant l’impression
- Nettoyer le plateau pour garantir une bonne adhésion.
- Vérifier les paramètres du *Slicer*.
- Insérer le bon filament. N’oubliez pas d’entreposer le filament que vous n’allez pas utiliser dans un sac d'emballage afin de le protéger de l’humidité.

### Pendant l’impression

Une fois l’impression lancée, il est important de surveiller les premières couches pour s’assurer que la pièce ne se décolle pas du plateau.

Si vous remarquez que les premières couches se décollent du plateau, ou que la pièce se plie sur les côtés (*warping*), arrêter l’impression. Voici quelques pistes pour y remédier :

- Le plateau n’est pas bien nettoyé : la graisse et la poussière sont les premiers ennemis. Nettoyez le plateau.
- Peu de surface de contact : dans votre logiciel de découpage (*slicer*), ajoutez ou augmentez la taille de la bordure (*brim*) pour avoir plus de surface d’adhérence, surtout quand il s’agit de pièces de petite taille. Vous pouvez également ajouter un support pour éviter le *warping*.
- L’imprimante est sensible au moindre changement de la température ambiante. Évitez les courants d’air!
- Augmentez la température du plateau jusqu’à 70 degrés, soit sur le logiciel de découpe, soit directement depuis le menu de l’imprimante.
- Il est possible de changer les paramètres comme la température de la buse, du plateau ou la vitesse pendant l’impression. Faites-le avec précaution, il est recommandé de paramétrer ceci avant l’impression lors de la découpe du modèle. Au besoin, faites appel à un membre de l’équipe si vous avez besoin d’aide.
- Évitez de faire bouger la table où se trouve l’imprimante. La moindre secousse peut causer une erreur d’impression.
- Ne pas déplacer l’imprimante pendant l’impression.
- Ne surtout pas toucher le plateau ou la buse ou tout autre élément chauffant ou mobile.

### Après l’impression
Une fois l’impression terminée, le plateau commencera à refroidir petit à petit jusqu’à atteindre la température de la pièce. Il est bien plus facile d’enlever la pièce une fois le plateau froid. N’utilisez pas d’objet en métal pour retirer votre impression du plateau. Évitez aussi de toucher au plateau afin de le laisser le plus propre possible.

### Post-traitement

Il existe plusieurs méthodes pour peaufiner votre impression. Le ponçage est la méthode la plus populaire. Après avoir poncé le matériel, vous pouvez utiliser un produit de lissage pour couvrir les fissure. La meilleure option pour peindre du PLA, c’est d’utiliser la peinture acrylique.

## Ressources en ligne

## Livres disponibles

![The 3D Printing Handbook](#)
**Redwood, B., Schöffer Filemon, & Garret, B. (2017).**  
*The 3D Printing Handbook: Technologies, Design and Applications*  
[Voir dans le catalogue](#)

