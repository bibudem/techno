---
title: Guide d'utilisation du studio vidéo LSH
description: Guide pour la prise en main du studio vidéo de la Bibliothèque des lettres et sciences humaines.
slug: /medias/guidevideolsh
breadcrumbs: true
help : crea
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Avant l’enregistrement {#avant-enregistrement}
1. Brancher le disque dur au câble identifié **Enregistrement disque dur**.
2. Appuyer sur le bouton jaune au centre de la console.

![Le bouton jaune au milieu de la console](/img/docs/studio-interface-control-1.webp)

3. Les lumières et la caméra s’allumeront automatiquement. Éteindre l’éclairage ambiant (néons au plafond). 
4. L’écran de retour indiquera si le disque est bien inséré en affichant l’espace libre disponible.

![L'écran de retour avec l'espace libre disponible](/img/docs/studio-interface-control-3.webp)

5. La mise au point de la caméra se fait automatiquement au démarrage.

6. Vérifier l’espace disque restant sur la console et l’écran. Si l’espace disponible est insuffisant pour la durée prévue de l'enregistrement, formater le disque dur avec votre ordinateur en **ExFAT** (voir la procédure en bas). 
7. Pour lancer l’enregistrement, appuyer sur le bouton **REC**.

<!-- ![L'interface de la console pour contrôler le système]() -->

<details>
  <summary>**Comment formater le disque dur?**</summary>
  
Pour Windows :
1. Brancher le disque dur à votre ordinateur.
2. Localiser le disque dur dans l'explorateur de fichier.
3. Effectuer un clic droit dessus puis sélectionner **Formater**.
4. Dans **Système de fichiers**, choisir **ExFAT**.
5. Rebrancher le disque dur.

Pour macOS :
1. Brancher le disque dur à votre ordinateur.
2. Ouvrir l'application **Utilitaire de disque**.
3. Sélectionner le disque dur dans la liste à gauche.
4. Cliquer sur **Effacer** en haut de la fenêtre.
5. Dans **Système de fichiers**, choisir **ExFAT**.
6. Rebrancher le disque dur.

</details>

---

## Positionnement dans le studio

La caméra du studio est fixe et préréglée. **Merci de ne pas la déplacer, ni la manipuler physiquement**.

Recommandations pour un bon cadrage : 
- Utiliser l’écran de retour vidéo pour vérifier votre position à l’image;
- Ajuster votre siège ou vous repositionner pour ajuster votre position à l'écran, plutôt que de déplacer la caméra.

---

## Choisir un mode de présentation

Le studio propose différents modes de présentations. Vous pouvez en choisir en appuyant sur le bouton **Fonds** de la console de contrôle.
À noter que les modes **C**, **D** et **E** nécessitent de brancher votre ordinateur au câble HDMI identifié pour fonctionner correctement.

:::warning Attention
Il est recommandé de porter des vêtements de couleurs différentes du vert pour éviter les problèmes d’incrustation.
:::

<!-- ![L'interface de la console pour choisir les fonds](/img/docs/guidevideolsh_interface_mode.png) -->

<Tabs>

<TabItem value="A" label=" A - Fond virtuel">

### Le fond virtuel (A)

![Le fond virtuel](/img/docs/guidevideolsh_fond_virtuel_A.png)

</TabItem>

<TabItem value="B" label="B - Fond noir">

### Le fond noir (B)

![Le fond noir](/img/docs/guidevideolsh_fond_noir_B.png)

</TabItem>

<TabItem value="C" label="C - Présentation">

### Le mode présentation (C)

Fonctionne en branchant votre ordinateur au câble HDMI identifié : vous êtes alors incrusté à l’image, superposé au contenu affiché sur votre ordinateur.

![Le mode presentation](/img/docs/guidevideolsh_mode_presentation_C.png)

</TabItem>

<TabItem value="D" label="D - Personnalisé">

### Le mode personnalisé (D)

Fonctionne en branchant votre ordinateur au câble HDMI identifié : votre image est alors au premier plan, avec le contenu affiché à l’écran en arrière-plan.

![Le mode personnalisé](/img/docs/guidevideolsh_mode_fond_ecran_D.png)

</TabItem>

<TabItem value="E" label="E - Entretien">

### Le mode entretien (E)

Fonctionne en branchant votre ordinateur au câble HDMI identifié : vous apparaissez à l’écran aux côtés de votre interlocuteur à distance.

![Le mode entretien](/img/docs/guidevideolsh_entretien_distance_E.png)

</TabItem>

<TabItem value="fond-vert" label="Fond vert">

### Le mode fond vert

Permet une incrustation en post-production.

![Le mode fond vert](/img/docs/guidevideolsh_fond_vert.png)

</TabItem>

</Tabs>

---

## Entretien à distance - visioconférence {#entretien-distance}
Pour réaliser un entretien via un logiciel de visioconférence (ex. Zoom, Teams) :
1. Brancher le câble HDMI (identifié) à votre ordinateur.
2. Dans les paramètres audio de votre application, sélectionner RØDECaster ou RODE RCV comme entrée et sortie audio.
3. L’image de votre ordinateur s’affichera automatiquement à l’écran du studio.
4. Dès qu’un signal audio est détecté, la console bascule automatiquement sur l’entrée HDMI, ce qui permet à l’invité ou à l’invitée d’apparaître à l’écran et dans l’enregistrement.

---

## Terminer l'enregistrement {#terminer-enregistrement}
1. Appuyer sur le bouton **STOP** pour arrêter l’enregistrement.
2. Débrancher le disque dur et le brancher en utilisant le câble **transfert** sur votre ordinateur pour transférer les fichiers.

:::warning Attention 
Assurez-vous d’avoir suffisamment d’espace disponible selon la durée de l’enregistrement.
:::

---

## Structure des fichiers
- Dossier Audio : Contient la piste audio en .wav.
- Dossier Vidéo : Contient l'enregistrement de la caméra.

:::warning Recommandation
Faites une copie de sauvegarde dans votre espace infonuagique ou une 2ème copie dans un autre périphérique.
:::

## Fin de session
- Appuyer sur le bouton jaune **Fermer** pour éteindre le système.
