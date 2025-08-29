---
title: RODECaster Pro II
help : crea
---
import Link from '@docusaurus/Link';

Ce guide vous permet une première prise en main de la console d’enregistrement **RODECaster Pro II**.

:::tip Vous débutez en baladodiffusion?
 Consultez aussi notre [guide d’introduction à la baladodiffusion](/medias/balado) pour bien planifier votre enregistrement avant d'utiliser le RØDECaster Pro II.
:::

:::warning Attention
    Veuillez ne pas modifier la configuration depuis le menu de la console de mixage.
:::

## 1. Mise en marche

Allumer la console avec le bouton rouge qui se trouve derrière.
![Studio audio](/img/docs/rode2-1.webp)

## 2. Niveau d’enregistrement et volume des casques d’écoute {#niveau-enregistrement-volume-casques} 

1 - Ajuster le niveau d’enregistrement selon les micros utilisés environ à la mi-course de la glissière (les micros sont identifiés ainsi : MIC #1, MIC #2, etc.)
    ![Studio audio](/img/docs/rode2-2.webp)
2 - Ajuster le volume des casques d’écoute de chaque personne (Les casques sont identifiés ainsi : Casque #1, Casque #2, etc.)
    ![Studio audio](/img/docs/rode2-3.webp)
3 - Parler face au micro et observer le niveau sonore qui s’affiche à l’écran. Ajuster légèrement le niveau d’enregistrement jusqu’à avoir des pics autour de -15db. Le micro doit être à une distance d’au plus 10 cm.
    ![Studio audio](/img/docs/rode2-4.webp)
4 - Régler maintenant le volume des casques d’écoute selon le confort de chaque personne.

:::warning "Attention"
    Nul besoin de monter le niveau d’enregistrement au maximum, car cela augmente la sensibilité du micro. Il captera alors davantage les bruits ambiants, ce qui est à éviter. Si vous sentez que le niveau est bas, parlez plus fort ou approchez-vous du micro.
:::

## 3. L’espace disque restant {#espace-disque-restant}

L’enregistrement se fait directement sur la console, pas besoin de la brancher sur un PC ou un Mac, puisque la console possède une mémoire interne. Il est important de vérifier l’espace disque restant avant d’entamer un enregistrement, sinon, votre travail risque de couper en plein milieu par manque d’espace. 

Le nombre d’heures d’enregistrement disponible est indiqué en haut de l’écran. Si l’espace n’est pas suffisant, formater la mémoire en appuyant sur l’icône de la carte SD en haut de l’écran.

    ![Studio audio](/img/docs/rode2-5.webp)
    ![Studio audio](/img/docs/rode2-6.webp)

## 4. Connecter un périphérique Bluetooth ou USB {#connecter-peripherique-bluetooth-usb}

Vous pouvez connecter votre téléphone intelligent ou votre PC/Mac via Bluetooth ou USB afin de pouvoir enregistrer des interventions via des logiciels de visioconférence (Teams, Zoom ou autres) ou via le réseau cellulaire.

### Bluetooth

Sur l’écran tactile, appuyer sur l’icône des paramètres > **Systèmes > Bluetooth** pour associer votre périphérique.

### USB

Brancher le câble USB à votre ordinateur. Lors de votre appel en visioconférence (sur Zoom, Teams ou autres), sélectionner depuis le logiciel le micro et la sortie audio l'option RODECaster Pro. Vous pouvez contrôler le volume d’enregistrement avec l'atténuateur ou *fader* assigné.

## 5. Environnement sonore et confort lors de l’enregistrement {#environnement-sonore-confort-enregistrement}

- S’assurer que les téléphones et autres appareils soient en mode silencieux (désactiver aussi le mode vibreur).
  
- Faire attention aux bruits qui vous entourent : une chaise qui bouge, feuille qu'on déplace, etc.
  
- Pensez à apporter de l’eau pour chaque personne.

## 6. Lancer l’enregistrement {#lancer-enregistrement}
![Studio audio](/img/docs/rode2-7.webp)
Pour lancer ou arrêter l’enregistrement, appuyer sur le bouton REC. Il n’est pas nécessaire d’arrêter l’enregistrement si vous voulez reprendre une partie, il vaut mieux avoir un seul fichier à traiter par la suite que plusieurs.

## 7. Transfert des enregistrements

:::warning "Attention" 
Faire l’exportation immédiatement après l’enregistrement. Les bibliothèques ne peuvent êtres tenues responsables de données perdues.
:::

### Étape 1 : Télécharger et installer le logiciel {#telecharger-installer}

    - RODE Central pour [Windows](https://update.rode.com/central/RODE_Central_WIN.zip)
    - RODE Central pour [macOS](https://update.rode.com/central/RODE_Central_MACOS.zip).

### Étape 2 : Connecter votre ordinateur à la console {#connecter-ordinateur-console}

- La connexion se fait par câble USB.
  
- S’assurer que la console est allumée.


    1. Au lancement du logiciel, cliquer sur **Transfer Recordings**. La console va passer en mode transfert. Cliquer sur **Continue**.
![Studio audio](/img/docs/rode2-8-1.webp)
        
    2. Sélectionner l’enregistrement à transférer et suivre ces paramètres :
        - Custom
        - Format : **WAV**
        - Sample Rate : **48 kHz**
        - Bit Depth : **24 bits PCM**
        - Loudness : **-16 LuFs**
![Studio audio](/img/docs/rode2-8-2.webp)


--------------

Patience, l'exportation prend du temps!

Si vous avez plusieurs fichiers à exporter, répéter les étapes pour chaque enregistrement.
Le temps d'exportation est plus long, car les paramètres sélectionnés garantissent une qualité sonore optimale.

Une fois l'exportation terminée, vous trouverez plusieurs fichiers WAV dans le dossier de destination :

- Chaque source est enregistrée séparément.
- Un fichier **Stereo Mix.wav** contient toutes les pistes mixées ensemble. C'est ce fichier que vous utiliserez pour la suite.

N'oubliez pas d'éteindre la console après utilisation.

:::warning Attention
    - Si vous voulez écouter les fichiers sur votre ordinateur, débrancher le câble USB qui a servi pour le transfert, sinon, le son risque de ne pas se faire entendre.
    - Si votre ordinateur passe en veille, le transfert risque d’être interrompu. 
    - On vous recommande fortement de faire aussi une copie de vos fichiers dans un espace infonuagique (par exemple OneDrive).
:::
