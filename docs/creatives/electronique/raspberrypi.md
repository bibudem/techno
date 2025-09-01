---
help : crea
---

import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Raspberry Pi

## Qu’est-ce que Raspberry Pi?

Le Raspberry Pi est un nano-ordinateur monocarte à processeur ARM de la taille d'une carte de crédit, il doit sa conception aux professeurs du département informatique de l'Université de Cambridge. L'objectif étant de rendre l'informatique abordable et accessible à tous, tout en encourageant l'apprentissage de la programmation informatique et ses différents langages.

<!-- ![Une carte Raspberry Pi](../../../assets/images/creatives/raspberrypi.webp) -->

Pour démarrer, il vous faut :

- Une carte électronique Raspberry Pi
- Une carte Micro SD
- Un câble alimentation
- Un ordinateur (Mac, Linux ou Windows)
- Le logiciel Raspberry Pi Imager
- Clavier
- Souris
- Câble Ethernet (au besoin)
- Écran ou télévision avec port HDMI + câble HDMI

:::tip Vous cherchez une trousse complète Raspberry Pi?
Des trousses sont disponibles dans plusieurs bibliothèques de l'UdeM!
Pour trouver celle qui vous convient, consultez la page [Trousses techno-créatives](/creatives/electronique/trousses.md).
:::

## Téléchargement du logiciel

Télécharger et installer [la dernière version du logiciel Raspberry Pi Imager](https://www.raspberrypi.com/software/) pour Windows, macOS ou Linux.
Ce logiciel permet de préparer la carte SD pour le Raspberry Pi en y installant un système d'exploitation.

## Utilisation

- [Démarrer avec Raspberry Pi](https://www.raspberrypi.com/documentation/computers/getting-started.html) : Tutoriel démontrant les différentes étapes pour commencer à utiliser  le Raspberry Pi. Télécharger l'installeur, installer le système d'exploitation, premier démarrage... 

### Commandes utiles

Comme le Raspberry Pi s’opère aussi via les lignes de commandes, voici une liste non-exhaustive des commandes les plus utilisées :

- **sudo** : utilisé comme préfixe, il permet d’exécuter la commande avec des privilèges élevés.
- **apt-get update** : synchronise la liste des paquets du système. À faire avant d’effectuer une mise à jour.
- **apt-get upgrade** : met à jour les paquets présents dans le système.
- **apt-get dist-upgrade** : fait une mise à jour complète du système Raspbian.
- **apt-get install nomdupaquet** : installe un paquet en spécifiant son nom. Exemple : apt-get install vlc
- **apt-get remove nomdupaquet** : désinstalle un paquet.
- **clear** : efface le contenu texte du terminal.
- **date** : affiche la date actuelle.
- **find / -name exemple.txt** : cherche le fichier exemple.txt dans tout le système.
- **nano exemple.txt** : ouvre le fichier exemple.txt avec l’éditeur nano.
- **poweroff** : arrête le système immédiatement.
- **raspi-config** : ouvre le menu de configuration de Raspbian.
- **reboot** : redémarre le système.
- **shutdown -h now** : arrête le système.
- **shutdown -h 10:02** : arrête le système à une heure précise.
- **startx** : ouvre l’interface graphique de Raspbian.
- **flèche du haut** : revient vers la commande précédente.

#### Commandes pour les fichiers et dossiers

- **cat exemple.txt** : affiche le contenu du fichier exemple.txt.
- **cd /test** : accède au dossier nommé test.
- **cd …** : revient en arrière.
- **cp exemple.txt /home/pi/test** : copie le fichier exemple.txt vers le dossier spécifié.
- **ls -l** : liste les fichiers présents dans le dossier avec la taille, la date de modification et les permissions.
- **mkdir test** : crée un nouveau dossier test.
- **mv exemple.txt /home/pi/test** : déplace le fichier exemple.txt vers le dossier test.
- **mv exemple.txt exemple1.txt** : renomme le fichier.
- **rm exemple.txt** : efface le fichier.
- **rmdir test** : efface le dossier (uniquement s’il est vide).
- **touch exemple.txt** : crée un nouveau fichier exemple.txt vide.

#### Commandes réseaux et internet

- **Ifconfig** : vérifie le statut de la connectivité.
- **Iwconfig** : le nom du réseau wifi branché.
- **iwlist wlan0 scan** : affiche une liste des réseaux wifi disponibles.
- **nmap** : scan le réseau et liste les périphériques connectés, le nombre des ports, les protocoles, adresses MAC., etc.
- **ping bib.umontreal.ca** : teste la connectivité. Envoie un paquet à l’adresse et attend une réponse.
- **wget bib.umontreal.ca/test.txt** : télécharge le fichier test.txt depuis Internet et le sauvegarde dans le dossier courant.

#### Commandes information système

- **ps aux** : liste des processus qui tournent.
- **kill pid** : termine le processus. Exemple : kill terminal.
- **cat /proc/meminfo** : affiche les détails sur la mémoire.
- **cat /proc/partitions** : affiche la taille et le nombre de partitions de la carte SD ou disque dur.
- **cat /proc/version** : affiche la version du Raspberry Pi utilisée.
- **df -h** : affiche des informations concernant les disques.
- **df /** : affiche combien d’espace libre il reste de disponible.
- **free** : affiche combien de mémoire vive il reste de disponible.
- **hostname -I** : l’adresse IP du Raspberry Pi.
- **lsusb** : affiche la liste des périphériques USB connectés au Raspberry Pi.
- **vcgencmd measure_temp** : affiche la température du CPU.

---

<Link to="https://studiobib.notion.site/20e3598e9e2881a1887eff3b4228fa3d?v=20e3598e9e2881f9906e000c62612636&source=copy_link" className="button button--primary">
  Consulter le répertoire des projets électroniques
</Link>

## Ressources externes

- [Site officiel Rapsberry Pi](https://www.raspberrypi.com/) : Documentation, aide de la communauté, produits... le site officiel de Raspberry Pi
- [7 choses à ne pas faire](https://raspberrytips.fr/7-choses-jamais-faire/) : Liste de 7 manipulations pouvant endommager le Raspberry Pi
- [Guide en français](https://www.raspberrypi-france.fr/guide/) : Guide complet en français
- [Tutoriel en français](https://share.polymtl.ca/alfresco/service/api/path/content;cm:content/workspace/SpacesStore/Company%20Home/Sites/bibliopoly/documentLibrary/libguides_francais/Techno-pr%C3%AAt/201809%20-%20Installation%20de%20RASPBIAN%20sur%20Raspberry%20Pi.pdf?a=true&guest=true) : Guide produit par Polytechnique Montreal
