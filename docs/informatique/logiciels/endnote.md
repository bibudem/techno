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
- Important : avoir redémarré son ordinateur et s’assurer que Microsoft Word est fermé.
- S’assurer d’avoir la bonne heure, date et fuseau horaire.
- Ne **pas** utiliser de VPN lors de l’installation (déconnecter votre VPN si vous en avez un).
- Ne pas changer le dossier d’installation par défaut.
- Utilisateurs macOS : utiliser le navigateur Safari.
- Si vous utilisez déjà EndNote sur votre ordinateur et que vous voulez installer une version plus récente, effectuez [une sauvegarde de vos bases de données](https://bib.umontreal.ca/citer/logiciels-bibliographiques/endnote/sauvegarder-partager) EndNote avant d’installer une autre version.

## Installation

<Tabs groupId="os-tabs">
      <TabItem value="windows" label="Windows">

1. Visiter [logitheque.ti.umontreal.ca](https://logitheque.ti.umontreal.ca) et s’authentifier avec son code d’accès ou courriel UdeM et mot de passe.
2. Lire la directive, cocher la case **J’accepte les termes de la directive** et cliquer sur **Valider**.
3. Sélectionner **EndNote 2025 (Windows)** dans La liste des logiciels autorisés.
4. Lire les informations à l’écran et cliquer sur les boutons **Valider** → **Suivant** → **Installation du logiciel**.
5. Ouvrir le fichier téléchargé, cliquer **Oui** et poursuivre l’installation.

:::info Important : Si un message d’erreur s’affiche
Ouvrir le dossier des téléchargements, localiser le fichier
d’installation EndNote (débute par UdeM_ ), cliquer avec le bouton droit de la souris sur le fichier
puis sélectionner **Exécuter en tant qu’administrateur**. Ne le renommez pas.

   - Windows 10 seulement :
    Si le message **Windows a protégé votre ordinateur** s’affiche :
    1. Cliquer **Informations complémentaires**,
    2. Cliquer **Exécuter quand même**.

   - Windows 11 seulement :
Ouvrir la page des téléchargements et cliquer sur **Conserver**
Si le message **Vérifiez que vous faites confiance…** ou **Cette application risque d’endommager votre appareil** s’affiche :
    1. Cliquer **Afficher plus**,
    2. Cliquer **Conserver quand même**,
    3. Ouvrir le fichier.
:::

</TabItem>
<TabItem value="macos" label="macOS">

1. Avec Safari, aller à [logitheque.ti.umontreal.ca](https://logitheque.ti.umontreal.ca) et s’authentifier avec son code d’accès ou courriel UdeM et mot de passe.
2. Lire la directive, cocher la case **J’accepte les termes de la directive** et cliquer sur **Valider**.
3. Sélectionner EndNote 2025 (macOS) dans La liste des logiciels autorisés.
4. Lire les informations à l’écran et cliquer sur les boutons **Valider** → **Suivant**.
5. À la page d’installation du logiciel, un avertissement indique que l’installation désinstallera automatiquement toutes les versions d'EndNote antérieures à EndNote 2025. Dans le cas d’une mise à jour de EndNote, il est toujours préférable de faire une sauvegarde de ses bases de données EndNote avant. Cliquer ensuite sur **Installation du logiciel**.
6. Ouvrir le fichier téléchargé et poursuivre l’installation en prenant soin de ne pas changer le dossier d’installation.

:::info IMPORTANT : Si un message d’erreur s’affiche 

Message d’erreur Impossible d’ouvrir sous macOS :
Cliquer sur le **menu Pomme** → **Préférences Système** (ou **Réglages système**) → **Confidentialité & sécurité** → **Ouvrir quand même**
:::

7. Seulement si une une fenêtre s’ouvre ```Would you like to overwrite the EndNote X9 at /Applications/EndNote X9 ?```, Cocher ***Yes*** pour écraser la version antérieure.
8. Seulement si ce message s’affiche : ```This library was created using an earlier version of EndNote and needs to be converted for use with this version of EndNote…```, Cliquer sur ***Yes*** pour créer une version convertie de votre base de données EndNote (pour une première installation d’EndNote, cliquer aussi sur ***Yes*** pour générer une première base de données dans le bon format). La version originale sera conservée et pourra être utilisée avec EndNoteX9.2 et moins. La version convertie pourra être utilisée uniquement avec EndNote X9.3 et plus.
9. Seulement si vous avez eu les deux messages des points 7 et 8 : Renommer votre version convertie pour la distinguer de la version originale, par exemple : ```bd-convertie```. Votre base de données convertie s’ouvrira dans EndNote 20.
10.  Si le logiciel est installé pour la première fois, lors de la première ouverture du logiciel il sera alors nécessaire de créer une nouvelle librairie en cliquant : ***File*** → ***New*** → ***Save***.

</TabItem>
</Tabs>

## Mise à jour

<Tabs groupId="os-tabs">
<TabItem value="windows" label="Windows">


1. Ouvrir EndNote.
2. Si proposé, procéder au téléchargement et à l’installation des mises à jour.
3. Vérifier la présence d’autres mises à jour et les installer dans le **Menu EndNote 2025** → ***Check for Updates***
</TabItem>
<TabItem value="macos" label="macOS">

1. Ouvrir EndNote.
2. Si proposé, procéder au téléchargement et à l’installation des mises à jour.
3. Vérifier la présence d’autres mises à jour et les installer dans le **Menu *Help*** → ***Check for updates***
</TabItem>
</Tabs>

## Ouverture du logiciel

<Tabs groupId="os-tabs">
<TabItem value="windows" label="Windows">

Par défaut, EndNote ouvre la dernière base utilisée (recommandé).
Pour changer cela, cliquer sur ***Edit*** → ***Preferences*** → ***Libraries*** et choisir l’option voulue.
</TabItem>
<TabItem value="macos" label="macOS">

Par défaut, EndNote ouvre la dernière base utilisée (recommandé).
Pour changer cela, cliquer sur ***EndNote2025*** → ***Preferences*** → ***Libraries*** et choisir l’option voulue.

:::info Important
Microsoft Word doit ne pas avoir été ouvert depuis le redémarrage pour inclure Endnote 2025 dans la barre d’outils. Sinon, redémarrer l’ordinateur et continuer la configuration. Cliquer sur ***EndNote2025*** → ***Customizer*** → ***Cite While Your Write*** → ***Next*** → ***Done***.
:::

</TabItem>
</Tabs>

## Configuration initiale

<Tabs groupId="os-tabs">
<TabItem value="windows" label="Windows">

1. Sous ***Edit*** → ***Preferences*** → ***Find Full Text***, cocher ***OpenURL***
2. Dans ***OpenURL Path***, copier et coller le lien suivant : <CopyToClipboardButton text="https://umontreal.on.worldcat.org/atoztitles/link"/>
3. Cocher ***PubMed LinkOut (U.S. National Library of Medicine)***.
4. S'assurer que la case *Automatically invoke Find Full Text on newly-imported references* est **décochée**.
5. Sous ***Edit*** → ***Preferences*** → ***URLs & Links***, remplacer les informations présentes dans la boîte ***OpenURL Arguments***, en copiant la ligne de commande suivante : 
<CopyToClipboardButton text="?sid=endnote&aufirst=AUFIRST&aulast=AULAST&issn=ISSN&isbn=ISBN&atitle=ATITLE&title=TITLE&volume=VOLUME&issue=ISSUE&date=DATE&spage=SPAGE&epage=EPAGE" />
6. Cliquer sur **OK**.
</TabItem>

<TabItem value="macos" label="macOS">

1. Sous ***EndNote2025*** → ***Preferences*** → ***Find Full Text***, cocher ***OpenURL***
2. Dans ***OpenURL Path***, copier et coller le lien suivant : <CopyToClipboardButton text="https://umontreal.on.worldcat.org/atoztitles/link"/>
3. Cocher ***PubMed LinkOut (U.S. National Library of Medicine)***.
4. S'assurer que la case *Automatically invoke Find Full Text on newly-imported references* est **décochée**.
5. Sous ***EndNote2025*** → ***Preferences*** → ***URLs & Links***, remplacer les informations présentes dans la boîte ***OpenURL Arguments***, en copiant la ligne de commande suivante : 
<CopyToClipboardButton text="?sid=endnote&aufirst=AUFIRST&aulast=AULAST&issn=ISSN&isbn=ISBN&atitle=ATITLE&title=TITLE&volume=VOLUME&issue=ISSUE&date=DATE&spage=SPAGE&epage=EPAGE" />
6. Cliquer sur **OK**.

</TabItem>
</Tabs>

## Astuces

- [Procédure en cas d'absence de la barre d’outils EndNote dans Word.](https://studio.bib.umontreal.ca/informatique/static/pdf/ENL3-barre-outils-word.pdf)
:::
