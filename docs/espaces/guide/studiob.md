---
title: Guide d'utilisation du studio balado vidéo
description: Guide pour la prise en main du studio balado vidéo de la Bibliothèque des lettres et sciences humaines.
slug: /espaces/guide/studiob
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

5.  Activer ou désactiver les micros au besoin en appuyant sur le bouton correspondant. Un micro est désactivé lorsque le bouton est rouge.
6.  Les micros 3 et 4 fonctionnent de pair : si le bouton est rouge les deux sont éteints et inversement.

7. La mise au point des caméras se fait automatiquement au démarrage. Si nécessaire éteindre le système et le redémarrer pour effectuer de nouveau la mise au point.

8. Vérifier l’espace disque restant sur la console et l’écran. Si l’espace disponible est insuffisant pour la durée prévue de l'enregistrement, formater le disque dur avec votre ordinateur en **ExFAT** (voir la procédure en bas). 
9. Pour lancer l’enregistrement, appuyer sur le bouton **REC**.

![L'interface de la console pour contrôler le système](/img/docs/studio-interface-control-2.webp)

10. Ajuster le niveau des casques d'écoute si nécessaire. Le volume des casques est contrôlé par les boutons situés en haut de la console de contrôle.

![L'interface de contrôle du niveau des casques d'écoute](/img/docs/studio-interface-control-4.webp)

:::warning Option
Il est possible d'éteindre les caméras pour utiliser le studio en mode audio uniquement. 
Appuyer sur le bouton **Éteindre les caméras** pour les éteindre. 
Vous pouvez les rallumer à tout moment en appuyant à nouveau sur le bouton.
:::

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

Les caméras du studio sont fixes et préréglées. **Merci de ne pas les déplacer, ni les manipuler physiquement**.

Recommandations pour un bon cadrage : 
- La flèche blanche indique la position idéale pour vous installer. Utiliser l’écran de retour vidéo pour vérifier votre position à l’image;
- Ajuster votre siège ou vous repositionner pour ajuster votre position à l'écran, plutôt que de déplacer la caméra.

---

## Choisir une ambiance

Le studio propose différentes ambiances d'éclairage. Vous pouvez en choisir en appuyant sur le bouton **Ambiance** de la console de contrôle.

![L'interface de la console pour choisir l'ambiance](/img/docs/studio-interface-control-5.webp)

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
- Si vous souhaitez récupérer les caméras séparément : copier le contenu du dossier Vidéo.
- Pour un montage automatisé complet : copier le fichier Default_... .mp4 à la racine du disque.

:::warning Recommandation
Faites une copie de sauvegarde dans votre espace infonuagique (ex. OneDrive institutionnel) ou une 2e copie dans un autre périphérique.
:::

## Fin de session
- Appuyer sur le bouton jaune **Fermer** pour éteindre les caméras et les lumières.
