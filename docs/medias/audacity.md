---
title : Audacity
help : crea
---

# Les bases du montage audio avec Audacity

Audacity est un logiciel libre de traitement audio. Il permet de réaliser des enregistrements, de les éditer, de les mixer, de les modifier, de les analyser, de les convertir et de les publier sur Internet. Il est disponible pour Windows, macOS et Linux.

## Installation

Télécharger la dernière version d'Audacity sur le site officiel : [https://www.audacityteam.org/download/](https://www.audacityteam.org/download/)

## Importer

Commencer par importer votre fichier audio. Si vous avez enregistré votre extrait dans un de nos studios d’enregistrement, c’est le fichier nommé Stereo Mix que vous allez importer (en format .wav).

L’importation se fait dans le menu **Fichier** → **Importer** → **Audio**.


<video controls width="100%">
  <source src="/videos/audacity1.mp4" type="video/mp4"/>
</video>


## Zoom avant et arrière

Utiliser l’outil de Zoom avant et arrière (les loupes avec un + et un -) pour avoir une vue d’ensemble ou au contraire, voir les détails d’une section.

<video controls width="100%">
  <source src="/videos/audacity2.mp4" type="video/mp4"/>
</video>

## Réduction du bruit

Audacity permet d’éliminer le bruit ambiant (par exemple, la ventilation) en quelques clics.

1. Sélectionner la partie vide afin de capturer l’ambiance de la pièce.
   ![](/img/docs/audacity1.webp)
2. Aller à Effets > Réduction de bruit. Une fenêtre s’ouvrira. Changer les valeurs comme ci-dessous :
   ![Fenêtre de la réduction de bruit](/img/docs/audacity1.webp)
3. Avant d’appliquer la réduction de bruit, le logiciel a besoin d’analyser le bruit ambiant seulement, d’où l’intérêt de sélectionner seulement la zone sans voix. Cliquer sur **Prendre le profil du bruit**.
4. Maintenant que le logiciel a un profil du bruit, sélectionner l’audio en entier avec le raccourci **Ctrl-A** et allez à **Effets → Répéter Réduction de bruit** ou **Ctrl-R** pour répéter le dernier effet.

Le bruit ambiant devrait disparaitre. Si le bruit persiste, vous pouvez répéter l’opération mais attention, vous risquez de détériorer la qualité du son.

<video controls width="100%">
  <source src="/videos/audacity3.mp4" type="video/mp4"/>
</video>

## Organiser

1. Commencer par (ré)écouter votre enregistrement.
2. Si souhaité, découper votre piste en différentes sections pour faciliter le repérage. Pour ce faire, utiliser l’outil de sélection, placer votre curseur à l’endroit sur la piste où vous voulez faire une séparation, puis faire un clic droit et sélectionner **Split Clip**. Donner un nom significatif aux sections en double cliquant sur leur titre.

![](/img/docs/audacity4.webp)

3. Déterminer quelles sections seront supprimées ou déplacées, ou si d’autres éléments seront insérés entre certaines parties.
4. Au besoin, créer une nouvelle piste temporaire où stocker les portions à déplacer. Pour ce faire, aller dans le menu **Pistes** → **Ajouter nouvelle** → **Piste stéréo**.

## Modifier les pistes

### Couper des parties 

- Pour supprimer une section, utiliser l’outil de sélection et sélectionner la portion à couper. Faire ensuite un clic droit et sélectionner **Couper et raccorder**. Cela aura pour effet de raccorder la portion qui précède et la portion qui suit la partie coupée.

<video controls width="100%">
  <source src="/videos/audacity4.mp4" type="video/mp4"/>
</video>

- Pour couper une portion sans la supprimer (par exemple, pour la placer ailleurs), sélectionner plutôt **Split Clip** lorsque en faisant votre clic droit sur la sélection. Si vous avez créé une piste provisoire, vous pouvez y glisser votre portion nouvellement obtenue en attendant de lui trouver le bon emplacement dans la piste principale.
- Une fois que le travail d’édition de votre piste principale est terminé, supprimer votre piste provisoire (si vous en aviez créé une), en cliquant sur le x en haut à gauche de la piste.

![](/img/docs/audacity3.webp)

### Ajouter des fondus

Pour ajouter un fondu, sélectionner la zone dont vous souhaitez progressivement baisser le niveau sonore. Avec l’outil de niveau, placer des points sur la piste, puis les rapprocher de la forme d’onde du signal sonore de façon à réduire progressivement son amplitude.

<video controls width="100%">
  <source src="/videos/audacity5.mp4" type="video/mp4"/>
</video>

## Ajouter des pistes (musique, effets sonores)

Une fois que votre piste principale éditée, il est possible d'ajouter des musiques d’ambiance et des effets sonores.

:::warning Attention
Libre de droits signifie que vous n’avez pas à payer de redevances, pas que vous n’avez pas à créditer les auteurs.
:::

<details>
  <summary>**Trouver des musiques libres de droits**</summary>
  - [Blue Dot Sessions](https://www.sessions.blue/) : Banque de musiques [sous licence CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/deed.fr) à condition de respecter certaines conditions. Autrement vous devez acheter une licence. [Voir les détails des licences proposées](https://www.sessions.blue/licensing/).
  - [ccMixter](https://ccmixter.org/) : Banque de musiques. La licence d’utilisation est spécifiée pour chaque fichier.
  - [Netlabels Collection de l’Internet Archive](https://archive.org/details/netlabels) : Banque de musiques organisées par collection. La licence d’utilisation est spécifiée pour chaque collection.
  - [Musopen](https://musopen.org/) : Banque spécialisée en musique classique. La licence d’utilisation est spécifiée pour chaque fichier.
  - [Audio Library de YouTube](https://www.youtube.com/audiolibrary/music) : Banque de musiques organisées par genre ou par ambiance (mood). Vous devez contacter les artistes pour utiliser les musiques en dehors de YouTube. Voir les détails des conditions d’utilisation.
</details>

<details>
  <summary>**Trouver des musiques libres de droits**</summary>
  - [La sonothèque](https://www.lasonotheque.org/) : Banque d’effets sonores sans aucune restriction d’utilisation (il est cependant toujours courtois de créditer l’auteur).
  - [Freesound](https://freesound.org/) : Banque d’effets sonores. La licence d’utilisation est spécifiée pour chaque fichier.
  - [BBC Sound Effects](https://sound-effects.bbcrewind.co.uk/) : Banque d’effets sonores. La licence d’utilisation est spécifiée pour chaque fichier.
  - [Zapsplat](https://www.zapsplat.com/) : Banque d’effets sonores. La licence d’utilisation est spécifiée pour chaque fichier.
  - [SoundGator](https://www.soundgator.com/) : Banque d’effets sonores sans aucune restriction d’utilisation.
  - [SoundBible](https://soundbible.com/) : Banque d’effets sonores sans aucune restriction d’utilisation.
</details>

1. Aller dans le menu **Fichier** → **Importer** → **Audio…**
2. Choisir le fichier audio à ajouter à votre projet. Une nouvelle piste s’ajoutera alors à votre projet en-dessous de la première.
3. Modifier cette nouvelle piste de la même façon que vous avez modifié la première (couper des portions, faire des fondus, etc.)

<video controls width="100%">
  <source src="/videos/audacity6.mp4" type="video/mp4"/>
</video>

## Références

- [https://www.audacityteam.org/](https://www.audacityteam.org/)
- [https://www.audacityteam.org/help/](https://www.audacityteam.org/help/)
- [https://www.audacityteam.org/help/documentation/](https://www.audacityteam.org/help/documentation/)


