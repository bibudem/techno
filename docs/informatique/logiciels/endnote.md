---
title : EndNote
description : Guide pour l'installation et l'utilisation du logiciel de gestion de références bibliographiques EndNote.
help : info
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CopyToClipboardButton from '@site/src/components/CopyToClipboardButton';

L'Université de Montréal fournit gratuitement le logiciel de référence bibliographique EndNote à tous les membres de sa communauté. Le logiciel peut être installé sur les ordinateurs de la communauté UdeM.

## Préalables

- Avoir ses [informations d'authentification](../authentification).
- Avoir une version à jour de [Microsoft Office 365](office).
- Un système d’exploitation compatible (macOS 11+, Windows 10 ou 11)
- Important : **avoir redémarré votre ordinateur et s’assurer que Microsoft Word n’ait pas été ouvert**.
- S’assurer que les paramètres **d’heure, de date, de pays et de fuseau horaire correspondent à ceux de Montréal**
- Ne **pas** utiliser de VPN lors de l’installation (déconnecter votre VPN si vous en avez un).
- Ne pas changer le dossier d’installation par défaut.
- Utilisateurs macOS : utiliser le navigateur Safari.
- Si vous utilisez déjà EndNote sur votre ordinateur et que vous voulez installer une version plus récente, effectuez [une sauvegarde de vos bases de données](https://bib.umontreal.ca/citer/logiciels-bibliographiques/endnote/sauvegarder-partager) EndNote avant d’installer une autre version.

## Installation

<Tabs groupId="os-tabs">
      <TabItem value="windows" label="Windows">


# Étape 1 – Installer EndNote
1. **Redémarrer votre ordinateur et s’assurer que Microsoft Word n’ait pas été ouvert.**
2. Visiter [logitheque.ti.umontreal.ca](https://logitheque.ti.umontreal.ca) et s’authentifier avec son code d’accès ou courriel UdeM et mot de passe.
3. Lire la directive, cocher la case **J’accepte les termes de la directive** et cliquer **Valider**.
4. Sélectionner **EndNote 2025.2 (Windows)** dans La liste des logiciels autorisés.
5. Lire les informations à l’écran et cliquer **Valider** → **Suivant** → **Installation du logiciel**.
6. Ouvrir le fichier téléchargé, cliquer **Oui** et poursuivre l’installation.

:::note Si vous n'arrivez pas à ouvrir le fichier téléchargé
Ouvrir le dossier des téléchargements, localiser le fichier d’installation EndNote (débute par UdeM_), cliquer avec le bouton droit de la souris sur le fichier puis sélectionner **Exécuter en tant qu’administrateur**. Ne le renommez pas.

Si le document n'y est pas, aller dans les téléchargements du navigateur (en haut à droite), cliquer le document téléchargé et cliquer **Conserver**. Si le message **Vérifiez que vous faites confiance…** ou **Cette application risque d’endommager votre appareil** s’affiche :
    1. Cliquer **Afficher plus**,
    2. Cliquer **Conserver quand même**,
    3. Ouvrir le fichier.
:::

---

# Étape 2 – Créer un dossier et une bibliothèque EndNote

> ⚠️ **Attention**  
> Ne jamais utiliser une bibliothèque EndNote directement sur un service infonuagique (ex. : iCloud, OneDrive, Google Drive, Dropbox).  
> Choisir un emplacement local non synchronisé automatiquement (ex. : `C:\endnote`).

## Créer un dossier

- Ouvrir l’Explorateur Windows  
- Cliquer **Ce PC → Windows (C:)**  
- Faire un clic droit → **Nouveau → Dossier**  
- Nommer le dossier : `endnote`  

*Si vous avez déjà une bibliothèque, vous pouvez la déposer dans ce dossier (`fichier.enl` et dossier `.data`).*

## Créer une nouvelle bibliothèque

- Ouvrir **EndNote**  
- Cliquer **Fichier → Nouveau**  
- Nommer et enregistrer la bibliothèque dans le dossier créé à l’étape 7 (ex. : `C:\endnote`)
- Cette bibliothèque s’ouvrira et sera accessible.

## Comportement par défaut

Par défaut, EndNote ouvre la dernière bibliothèque utilisée.  

Pour modifier ce comportement :  
**Modifier → Préférences → Bibliothèques** et choisir l’option voulue  


---

# Étape 3 – Synchroniser votre bibliothèque avec EndNote Online (recommandé)

La synchronisation permet de stocker vos références sur les serveurs d’EndNote pour ensuite accéder à votre bibliothèque à partir de tout autre ordinateur, et permet le partage de votre bibliothèque.

**Attention:** Il n'est pas recommandé d'utiliser cette fonctionnalité si vous possédez plusieurs bibliothèques EndNote sur votre ordinateur. Veuillez alors effectuer la sauvegarde manuelle présentée à l’étape suivante.

1. Ouvrir **EndNote**  
2. Cliquer **Modifier → Préférences → Activer Sync**  
3. Suivre les instructions à l’écran  


---

# Étape 4 – Effectuer une copie de sauvegarde (recommandé)

Il est recommandé de faire régulièrement des copies de sauvegarde de votre bibliothèque.

Une bibliothèque EndNote est composée de :
- un fichier `.enl`  
- un dossier `.data`  

Il est possible de les compresser en un seul fichier `.enlx` pour ensuite le copier sur un nuage.

1. Dans EndNote, ouvrir la bibliothèque à compresser  
2. Cliquer **Fichier → Compresser la bibliothèque (.enlx)**  
3. Sélectionner :
   - **Créer**  
   - **Avec des pièces jointes**  
   - **Toutes les références de la bibliothèque**  
4. Cliquer **Suivant**  
5. Choisir l’emplacement d’enregistrement (idéalement dans un dossier synchronisé dans le nuage)  
6. Cliquer **Enregistrer**  

> 💡 Il est recommandé d’ajouter la date au début du nom du fichier.
</TabItem>

<TabItem value="macos" label="macOS">

1. **Redémarrer votre ordinateur et s’assurer que Microsoft Word n’ait pas été ouvert.**
2. Avec **Safari**, aller à [logitheque.ti.umontreal.ca](https://logitheque.ti.umontreal.ca) et s’authentifier avec son code d’accès ou courriel UdeM et mot de passe.
3. Lire la directive, cocher la case **J’accepte les termes de la directive** et cliquer **Valider**.
4. Sélectionner **EndNote 2025.2 (macOS)** dans La liste des logiciels autorisés.
5. Lire les informations à l’écran et cliquer **Valider** → **Suivant**.
6. À la page d’installation du logiciel, un avertissement indique que l’installation désinstallera automatiquement toutes les versions d'EndNote antérieures à EndNote 2025. Dans le cas d’une mise à jour de EndNote, il est toujours préférable de faire une sauvegarde de ses bases de données EndNote avant. Ensuite cliquer **Installation du logiciel**.
7. Ouvrir le fichier téléchargé et poursuivre l’installation en prenant soin de ne pas changer le dossier d’installation.

:::note IMPORTANT : Si un message d’erreur Impossible d’ouvrir sous macOS s’affiche 

Cliquer **menu Pomme** → **Réglages système** → **Confidentialité & sécurité** → **Ouvrir quand même**
:::

---

# Étape 2 – Créer un dossier et une bibliothèque EndNote

> ⚠️ **Attention**  
> Ne jamais utiliser une bibliothèque EndNote directement sur un service infonuagique (ex. : iCloud, OneDrive, Google Drive, Dropbox).  
> Choisir un emplacement local non synchronisé automatiquement (ex. : `C:\endnote`).

## Créer un dossier

- Ouvrir Finder  
- Cliquer **Finder → Aller → Départ**  
- Cliquer en haut → **Fichier → Nouveau Dossier**  
- Nommer le dossier : `endnote`  

*Si vous avez déjà une bibliothèque, vous pouvez la déposer dans ce dossier (`fichier.enl` et dossier `.data`).*

## Créer une nouvelle bibliothèque

- Ouvrir **EndNote**  
- Cliquer **Fichier → Nouveau**  
- Nommer et enregistrer la bibliothèque dans le dossier créé à l’étape 7 (ex. : `C:\endnote`)  
- Cette bibliothèque s’ouvrira et sera accessible.

## Comportement par défaut

Par défaut, EndNote ouvre la dernière bibliothèque utilisée.  

Pour modifier ce comportement :  
**Modifier → Préférences → Bibliothèques** et choisir l’option voulue  


---

# Étape 3 – Synchroniser votre bibliothèque avec EndNote Online (recommandé)

La synchronisation permet de stocker vos références sur les serveurs d’EndNote pour ensuite accéder à votre bibliothèque à partir de tout autre ordinateur, et permet le partage de votre bibliothèque.

**Attention:** Il n'est pas recommandé d'utiliser cette fonctionnalité si vous possédez plusieurs bibliothèques EndNote sur votre ordinateur. Veuillez alors effectuer la sauvegarde manuelle présentée à l’étape suivante.

1. Ouvrir **EndNote**  
2. Cliquer **Modifier → Préférences → Activer Sync**  
3. Suivre les instructions à l’écran  


---

# Étape 4 – Effectuer une copie de sauvegarde (recommandé)

Il est recommandé de faire régulièrement des copies de sauvegarde de votre bibliothèque.

Une bibliothèque EndNote est composée de :
- un fichier `.enl`  
- un dossier `.data`  

Il est possible de les compresser en un seul fichier `.enlx` pour ensuite le copier sur un nuage.

1. Dans EndNote, ouvrir la bibliothèque à compresser  
2. Cliquer **Fichier → Compresser la bibliothèque (.enlx)**  
3. Sélectionner :
   - **Créer**  
   - **Avec des pièces jointes**  
   - **Toutes les références de la bibliothèque**  
4. Cliquer **Suivant**  
5. Choisir l’emplacement d’enregistrement (idéalement dans un dossier synchronisé dans le nuage)  
6. Cliquer **Enregistrer**  

> 💡 Il est recommandé d’ajouter la date au début du nom du fichier.

</TabItem>
</Tabs>


## Si problème barre word

<Tabs groupId="os-tabs">
<TabItem value="windows" label="Windows">




</TabItem>
<TabItem value="macos" label="macOS">

Par défaut, EndNote ouvre la dernière base utilisée (recommandé).
Pour changer cela, cliquer ***EndNote2025*** → ***Réglages*** → ***Bibliothèques*** et choisir l’option voulue.

:::note Important
Microsoft Word doit ne pas avoir été ouvert depuis le redémarrage pour inclure Endnote 2025 dans la barre d’outils. Sinon, redémarrer l’ordinateur et continuer la configuration. Cliquer ***EndNote2025*** → ***Customizer*** → ***Cite While Your Write*** → ***Next*** → ***Done***.
:::

</TabItem>
</Tabs>

## Astuces

- [Procédure pour installer les styles bibliographiques modifiés pour les besoins de la communauté de l’UdeM (APA7th-fr-UdeM, Vancouver-fr-UdeM, etc.)](https://boite-outils.bib.umontreal.ca/c.php?g=730826&p=5339019)
- [Procédure en cas d'absence de la barre d’outils EndNote dans Word.](/pdf/ENL3-barre-outils-word.pdf)
- [Procédure en cas de fenêtre mauve sous macOS.](https://support.clarivate.com/Endnote/s/article/EndNote-Purple-window-on-a-Mac-OS?language=en_US)
- [Procédure en cas de message d'erreur ou résultats partiels avec la fonction **Find Full Text**, désinstaller le Proxy et utiliser le VPN UdeM Campus.](https://studio.bib.umontreal.ca/informatique/vpn)

## Pour aller plus loin

- [Débuter avec EndNote.](https://boite-outils.bib.umontreal.ca/c.php?g=730826&p=5246905)
- [F.A.Q EndNote.](https://boite-outils.bib.umontreal.ca/c.php?g=730826&p=5404154)
