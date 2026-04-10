---
title: Guide d'utilisation du studio vidéo LSH
description: Guide pour la prise en main du studio vidéo de la Bibliothèque des lettres et sciences humaines.
slug: /medias/guidevideolsh
breadcrumbs: true
help : crea
---

## Avant l’enregistrement {#avant-enregistrement}
1. Brancher le disque dur au câble identifié **Enregistrement disque dur**.
2. Appuyer sur le bouton jaune au centre de la console.

![Le bouton jaune au milieu de la console](/img/docs/studio-interface-control-1.webp)

3. Les lumières et caméras s’allumeront automatiquement. Éteindre l’éclairage ambiant (néons au plafond). 
4. L’écran de retour indiquera si le disque est bien inséré en affichant l’espace libre disponible.

![L'écran de retour avec l'espace libre disponible](/img/docs/studio-interface-control-3.webp)

5. La mise au point des caméras se fait automatiquement au démarrage. Si nécessaire éteindre le système et le redémarrer pour effectuer de nouveau la mise au point.

6. Vérifier l’espace disque restant sur la console et l’écran. Si l’espace disponible est insuffisant pour la durée prévue de l'enregistrement, formater le disque dur avec votre ordinateur en **ExFAT** (voir la procédure en bas). 
7. Pour lancer l’enregistrement, appuyer sur le bouton **REC**.

![L'interface de la console pour contrôler le système]()

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

![L'interface de la console pour choisir les fonds](/img/docs/studio-interface-control-5.webp)

1. Le fond virtuel (A)

![Le fond virtuel](/img/guidevideolsh_fond_virtuel_A.png)

2. Le fond noir (B)

![Le fond noir](/img/guidevideolsh_fond_noir_B.png)

3. Le mode présentation (C)

Fonctionne en branchant votre ordinateur au câble HDMI identifier et vous êtes incrusté avec ce qu'affiche votre ordinateur

![Le mode presentation](/img/guidevideolsh_mode_presentation_C.png)

4. Le mode personnalisé (D)

Fonctionne en branchant votre ordinateur au câble HDMI identifier et vous êtes au premier plan avec ce qu'affiche votre ordinateur au second plan

![Le mode personnalisé](/img/guidevideolsh_mode_fond_ecran_D.png)

5. Le mode entretien (E)

Fonctionne en branchant votre ordinateur au câble HDMI identifier et vous apparaissez aux côtés de votre interlocuteur à distance

![Le mode entretien](/img/guidevideolsh_entretien_distance_E.png)

6. Le mode fond vert (Fond vert)

Permet une incrustation en post production durant le montage

![Le mode fond vert](/img/guidevideolsh_fond_vert.png)

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
Assurez-vous d’avoir suffisamment d’espace disponible selon la durée de l’enregistrement. Prévoir environ 30 Go par heure d’enregistrement si vous conservez tous les dossiers (audio, vidéo, montage). 
:::

---

## Structure des fichiers
- Dossier Audio : Contient toutes les pistes audio en .wav, incluant le fichier Live-Mix.wav (mix complet de toutes les pistes).
- Dossier Vidéo : Contient les enregistrements de chaque caméra séparément.
- Fichier Default_aaaa-mm-jj.mp4 : Montage final automatisé (audio + vidéo synchronisés).

### Conseils
- Si vous avez besoin seulement du son : le fichier Live-Mix.wav suffit.
- Si vous souhaitez récupérer la vidéo : copier le contenu du dossier Vidéo.

:::warning Recommandation
Faites une copie de sauvegarde dans votre espace infonuagique ou une 2ème copie dans un autre périphérique.
:::

## Fin de session
- Appuyer sur le bouton jaune **Fermer** pour éteindre les caméras et les lumières.
