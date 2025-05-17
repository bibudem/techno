---
title: Introduction
description: Tout apprendre sur l'impression 3D
slug: /creatives/introduction-impression-3d
---

# Introduction à l'impression 3D

## Qu’est-ce que l’impression 3D ?

L’impression 3D consiste à reproduire un objet à partir d’un modèle en 3D conçu par ordinateur. Cet objet tridimensionnel est créé par un dépôt successif de couches de matériaux. Différents matériaux peuvent être utilisés : du plastique, mais aussi du chocolat ou du béton. 

À partir d’un modèle numérique conçu en 3D, un logiciel appelé Slicer découpe le modèle en plusieurs couches selon un paramétrage choisi. L’extrudeur de l’imprimante chauffe le plastique et le dépose couche par couche en suivant les instructions établies par le Slicer. Un système de ventilation refroidit instantanément le plastique déposé pour le solidifier. C’est ce qu’on appelle la fabrication additive.

## Matériaux

### PLA (acide polylactique)

L’acide polylactique (PLA) est un thermoplastique fabriqué à partir de ressources renouvelables comme l’amidon de maïs, les racines de tapioca ou la canne à sucre. Contrairement à l’ABS (plastique dérivé du pétrole), le PLA est plus écologique mais aussi plus fragile et sensible à la chaleur. Il est très facile à imprimer et idéal pour le prototypage rapide.

:::note Note
    Le PLA n’est pas recommandé pour les objets en contact avec des aliments, car les bactéries peuvent s’infiltrer dans les interstices des couches d’impression.
:::

### PVA

L'alcool polyvinylique (PVA) est un polymère synthétique soluble dans l'eau, souvent utilisé pour imprimer des supports sur des modèles complexes. Il est très sensible à l'humidité.

### PETG
Le polyéthylène téréphtalate glycolisé (PETG) est un thermoplastique qui combine la facilité d'impression du PLA avec la résistance de l'ABS. Il est plus résistant à la chaleur et aux chocs que le PLA, mais il est également plus difficile à imprimer.

### Températures

Les températures recommandées sont inscrites sur les bobines de filament et sauvegardées dans le logiciel de découpe. En général :
- **PLA** : 190°C - 230°C
- **Plateau chauffant** : 50°C - 70°C pour optimiser l’adhésion.
Un logiciel appelé *Slicer* découpe le modèle 3D en plusieurs couches selon un paramétrage choisi. L’extrudeur de l’imprimante chauffe le plastique et le dépose couche par couche en suivant les instructions établies par le *Slicer*. Un système de ventilation refroidit instantanément le plastique déposé pour le solidifier. C’est ce qu’on appelle la fabrication additive.

## Entreposage des filaments

Le bon stockage des bobines de filament est important, puisqu’à l’air libre, le filament a tendance à absorber l’humidité ambiante, ce qui peut causer des problèmes d’impression.

- Bloquer le bout du filament dans un des trous de la bobine afin d’éviter de mêler les filaments entre eux.
- Couper en diagonale le bout du filament avec une pince coupante afin de faciliter l’insertion dans l’imprimante.
- Toujours mettre la bobine non utilisée dans un sac d'emballage hermétique avec un petit sac de gel de silice afin d’absorber l’humidité.
- Entreposer les bobines dans une boîte fermée pour éviter l’exposition prolongée à la lumière.

Pour vérifier si un filament est encore utilisable, prendre un bout d’environ 5 cm et essayer de le tordre. Il ne doit pas se casser facilement.

Lorsqu’un filament a absorbé trop d’humidité, un séchoir à filament peut restaurer ses propriétés.

## Les grandes étapes

### Modèles

La première étape consiste à trouver un modèle 3D ou à le concevoir soi-même.
- **Depuis Internet** : [Où trouver des modèles 3D ?](impression3d/modeles3d#modèles-en-ligne)
- **Modélisation** : Des logiciels comme Blender permettent de créer ses propres modèles 3D. Voir la section [Logiciels de modélisation](impression3d/modeles3d#logiciels-de-modélisation-3d).

### Découpe du modèle

Le Slicer transforme un modèle au format **.STL**, un fichier contenant les instructions pour l’imprimante.

Il existe plusieurs logiciels de découpe. La plupart sont libres et à code source ouvert. Les entreprises de fabrication d'imprimantes 3D proposent leurs propres logiciels de découpe afin d'offrir des fonctionnalités propres à leurs imprimantes. Certaines utilisent **.GCODE** comme extension du fichier de sortie, d'autres un format propriétaire. Voici quelques exemples de logiciels de découpe :

- **Cura** : imprimantes Ultimaker.
- **PrusaSlicer** : imprimantes Prusa.
- **BambuStudio** : imprimantes BambuLab.

### Utilisation des profils

Les profils sont un ensemble de paramètres prédéfinis dans le Slicer. Ils peuvent être modifiés à loisir. Des profils par défaut sont configurés, mais il faut toujours vérifier les paramètres et les mouvements de l’extrudeur avant d’enregistrer le fichier sur le périphérique de stockage de l'imprimante.

#### Épaisseur

<figure markdown>
  ![Une vue macro de trois impressions 3D](/img/docs/impression3d-difference.png)
  <figcaption>De gauche à droite : impression en 0,2mm et 0,1mm. </figcaption>
</figure>

L’épaisseur d’une couche est habituellement de 0,2mm. Il est possible de descendre jusqu’à 0,1mm si l’objet est très détaillé ou s’il subira des forces parallèles aux couches. Dans un tel cas, il est recommandé de revoir le sens d’impression pour que les forces soient exercées perpendiculairement aux couches d’impressions. Notez que la durée d’impression sera deux fois plus longue à 0,1mm qu’à 0,2mm.


#### Remplissage (résistance)

Le remplissage agit sur la solidité et, dans une moindre mesure, sur la vitesse d’impression et la souplesse d’un objet. Par exemple, le PLA n’est pas suffisamment flexible pour supporter la déformation. 

Le remplissage s’exprime en pourcentage. Une valeur typique se situe entre 5% et 20%. Il est possible d’imprimer sans remplissage (0%), ou entièrement plein (100%) selon les cas. Il existe aussi différents motifs de remplissage. Ils ont chacun leurs avantages.

<figure markdown>
  ![Différents remplissage d'une impression 3D](/img/docs/impression3d-remplissage.png)
  <figcaption>À gauche un remplissage à 40% avec le motif Grille (Grid) et à droite un remplissage à 20% avec le motif Nid d’abeille (Honeycomb)</figcaption>
</figure>

:::note Ressources en ligne
- [Tout ce que vous avez besoin de savoir sur les remplissages - Prusa Printers ](https://blog.prusaprinters.org/fr/tout-ce-que-vous-avez-besoin-de-savoir-sur-les-remplissages_43579/)
- [Optimisation du remplissage des impressions 3D - Makershop ](https://www.makershop.fr/blog/optimisation-remplissage-impressions-3d/)
- [Comment optimiser le remplissage de vos impressions 3D? ](https://5d-impression.com/blog/comment-optimiser-le-remplissage-de-vos-impressions-3d-b53.html)
:::

#### Support

Le support est utilisé pour imprimer les porte-à-faux. L’impression doit obligatoirement avoir une surface de contact pour se déposer : 

- Pour la première couche il s’agit du plateau.
- Pour les couches suivantes il s’agit de la couche précédente. 
- Si le matériau se dépose dans le vide, il faut créer un support. Le support peut également être utilisé pour augmenter la surface de contact de l’objet sur le plateau et éviter un décollement.

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
- Vérifier les paramètres du Slicer.
- Insérer le bon filament. Ne pas oublier d’entreposer le filament qui ne sera pas utilisé dans un sac d'emballage afin de le protéger de l’humidité.

### Pendant l’impression

Une fois l’impression lancée, il est important de surveiller les premières couches pour s’assurer que la pièce ne se décolle pas du plateau.

Si les premières couches se décollent du plateau, ou si la pièce se plie sur les côtés (*warping*), arrêter l’impression. 

Voici quelques pistes pour y remédier :

- Le plateau n’est pas bien nettoyé : la graisse et la poussière sont les premiers ennemis. Nettoyer le plateau.
- Peu de surface de contact : dans votre logiciel de découpage (Slicer), ajouter ou augmenter la taille de la bordure (*brim*) pour avoir plus de surface d’adhérence, surtout quand il s’agit de pièces de petite taille. Aussi possible d'ajouter un support pour éviter le *warping*.
- L’imprimante est sensible au moindre changement de la température ambiante. Éviter les courants d’air!
- Augmenter la température du plateau jusqu’à 70 degrés, soit sur le logiciel de découpe, soit directement depuis le menu de l’imprimante.
- Il est possible de changer les paramètres comme la température de la buse, du plateau ou la vitesse pendant l’impression. À faire avec précaution! Il est recommandé de paramétrer ceci avant l’impression lors de la découpe du modèle. Au besoin, faire appel à un membre de l’équipe.
- Éviter de faire bouger la table où se trouve l’imprimante. La moindre secousse peut causer une erreur d’impression.
- Ne pas déplacer l’imprimante pendant l’impression.
- Ne surtout pas toucher le plateau ou la buse, ou tout autre élément chauffant ou mobile.

### Après l’impression
Une fois l’impression terminée, le plateau commencera à refroidir petit à petit jusqu’à atteindre la température de la pièce. Il est bien plus facile d’enlever la pièce une fois le plateau froid. Ne pas utiliser d’objet en métal pour retirer votre impression du plateau. Éviter aussi de toucher au plateau afin de le laisser le plus propre possible.

### Post-traitement

Il existe plusieurs méthodes pour peaufiner votre impression. Le ponçage est la méthode la plus populaire. Après avoir poncé le matériel, un produit de lissage pourra couvrir les fissures. La meilleure option pour peindre du PLA, c’est d’utiliser la peinture acrylique.

## Ressources en ligne

## Livres disponibles

![The 3D Printing Handbook](#)
**Redwood, B., Schöffer Filemon, & Garret, B. (2017).**  
*The 3D Printing Handbook: Technologies, Design and Applications*  
[Voir dans le catalogue](#)

