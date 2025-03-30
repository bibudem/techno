---
title: BambuLab X1C
---


:::info
Avant de faire votre première impression, lisez l'[introduction à l'impression 3D](./introduction.md)
:::

## 1 - Présentation

![Prusa i3 Mk3s+ à la Bibliothèque Hubert-Reeves](/img/docs/prusa-photo.webp)

| Prusa i3 Mk3s+ | |
|-----|-----|
| Volume d'impression | 25×21×21cm (9.84"×8.3"×8.3") |
| Buses disponibles | 0.4mm |
| Hauteur des couches | 0.05 - 0.30 mm |
| Diamètre du filament | 1.75 mm |
| Matériaux supportés | PLA, PETG, ASA, ABS, PC, CPE, PVA/BVOH, PVB, HIPS, PP, Flex, nGen, Nylon, Carbon filled, Woodfill et autres. |
| Surface d'impression | Feuille d'acier magnétique amovible(*) avec différentes finitions de surface |
| Impression multi-filament | Possible en modifiant le gcode, ou en ajoutant le module MMU2S |
| Logiciel de découpe (*slicer*) | PrusaSlicer |

Chaque imprimante a été montée par l'équipe des bibliothèques et quelques unes par la communauté étudiante. Toutes les parties en plastique ont été fabriquées par des imprimantes 3D, de sorte que ces pièces peuvent facilement être remplacées. Ce principe est appelé RepRap.

Le bloc d’extrusion est monté sur deux axes (X et Z), le plateau est monté sur l’axe Y. Le plateau d’impression est une feuille magnétique amovible qui se nettoie à l'alcool isopropylique.

Le *feeder* se trouve directement sur le dessus du bloc d’extrusion.

:::info
Ressources en ligne
[Original Prusa i3 MK3S+ | Original Prusa 3D printers directly from Josef Prusa](https://www.prusa3d.com/fr/categorie/original-prusa-i3-mk3s/){target="_blank"}
:::

## 2 - Changement de filament

:::warning
Diamètre des filaments de la Prusa i3 MK3S+ : **1.75mm**
:::

### **Retrait d’une bobine**

1. Dans le menu de la Prusa, sélectionnez **Unload filament**.
    
![Menu de la Prusa](/img/docs/prusa-filament-1.webp)

2. Sélectionnez **PLA 215/60**. La buse va chauffer afin que le filament se retire facilement.
    
![Menu de la Prusa](/img/docs/prusa-filament-2.webp)

3. Au signal sonore, appuyez sur le bouton du menu, puis **tirez délicatement** le filament vers le haut.
4. Coupez le bout du filament avec une pince coupante en angle, mettez le bout dans un des trous de la bobine et rangez la bobine dans un sac hermétique. Suivez les consignes pour l’entreposage des filaments.

### **Installer une nouvelle bobine**

1. Coupez le bout du filament de la nouvelle bobine avec une pince coupante en angle.
2. Installez la nouvelle bobine sur le support tout en veillant à ce que le bout passe d’en haut.
3. La fonction **Autoload filament** est activée par défaut, l’imprimante détectera automatiquement s’il y a présence d’un filament. Mettez le filament dans le trou sans forcer, vous allez sentir le filament tirer vers le bas doucement. L’écran indiquera **Loading filament** (chargement du filament).
    
![Menu de la Prusa](/img/docs/prusa-filament-3.webp)

4. Au bout de quelques secondes, vous devriez voir apparaître la couleur précédente sortir de l’extrudeur, suivie de la nouvelle couleur. L’imprimante vous demandera si le filament est extrudé et avec la bonne couleur (*Filament extruding & with correct color?*). Confirmez en sélectionnant **Yes**, sinon, sélectionnez **No**, l’imprimante continuera à extruder jusqu’à l’apparition du filament.
    
![Menu de la Prusa](/img/docs/prusa-filament-4.webp)
![Menu de la Prusa](/img/docs/prusa-filament-5.webp)

:::warning
Attention
En aucun cas, vous ne devriez forcer, au risque d’endommager l’imprimante. Dans le doute, demandez de l’aide.
:::

:::info
Ressources en ligne
[Prusa Printer: Changing Filament](https://youtu.be/12bYIGgkqIQ){target="_blank"}
:::

## 3 - Configuration PrusaSlicer

💡 Le logiciel est installé dans les postes informatiques des **Ateliers de fabrication numérique** avec la bonne configuration. Vous pouvez utiliser ces postes pour préparer votre fichier. Si vous préférez le faire avec votre ordinateur personnel, suivez les instructions ci-dessous.

### Logiciel de découpe PrusaSlicer

Lien vers le téléchargement : [https://www.prusa3d.com/page/prusaslicer_424](https://www.prusa3d.com/page/prusaslicer_424/)

Version utilisée dans ce tutoriel : **2.8**

Compatible avec : Windows, MacOS et Linux.

### Assistant configuration

1. Installez le logiciel PrusaSlicer sur votre machine.
2. Au démarrage du logiciel, un assistant de configuration s’affichera, cliquez sur suivant.
3. À l’étape **Prusa Research**, cochez uniquement la case **0.4 mm buse** au dessous de **Original Prusa i3 MK3s & MK3s+**, sous **Famille MK3**.
4. Cliquez sur **Fin**.

![Assistant configuration PrusaSlicer](/img/docs/prusa-installation.webp)

## 4 - Première impression

À l’ouverture du logiciel de découpe PrusaSlicer, il faut s’assurer qu’on a la bonne configuration. Il doit y avoir une inscription sur le plateau mentionnant le modèle de l’appareil (**ORIGINAL PRUSA i3 MK3**). Si ce n’est pas le cas, changez le modèle de l’imprimante dans **Imprimante** (ou **Printer***)* à droite de l’écran (au dessous de **Filament**)

![Interface du logiciel PrusaSlicer](/img/docs/prusa-impression-1.webp)

### Ajouter un modèle 3D

![Interface du logiciel PrusaSlicer](/img/docs/prusa-impression-2.webp)

Pour ajouter un modèle .STL, cliquez sur le bouton **Add** (cube avec le bouton + en haut), ou allez dans **File > Import > Import STL/OBJ/AMF/3MF***...* ou encore avec le raccourci clavier ++ctrl+i++ (ou ++"cmd"+i++ pour MacOS).

### Navigation

Utilisez la souris ainsi que la molette pour tourner autour de l’objet et zoomer.

- Clic gauche = rotation du plateau
- Clic droit = translation de la caméra

![video](require('../../assets/videos/prusa-navigation.mp4)

### Échelle et taille

<iframe src="https://www.loom.com/embed/29067cbd8b81407e8654aa351f4e1bae?sid=4e94255e-4769-4d11-8cb3-324126842408" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>

Redimensionnez la pièce en utilisant la fonction **Redimensionner** (menu de droite). Vous pouvez aussi changer les valeurs de l’échelle et de la taille à droite de l’écran. 

### Réglages

![Interface du logiciel PrusaSlicer](/img/docs/prusa-impression-3.webp)

- **Réglages d’impression** : Sélectionnez la hauteur de la couche. 0.10mm pour une impression de précision, 0,20mm pour une impression normale et 0,30mm pour des tests ou des pièces qui n’ont pas besoin d’être de qualité.
- **Filament** : Sélectionnez **Generic PLA***.* Cette configuration contient les valeurs de température de l’extrudeur et du plateau (par défaut : 215c pour l’extrudeur, 60c pour le plateau).
- **Imprimante** : Assurez-vous que le bon modèle est sélectionné.
- **Supports** : Si une partie de votre modèle commence dans les airs et n'est supportée par aucun élément en dessous, vous devez ajouter une structure de support pour réussir une impression. Plusieurs options s’offrent à vous. Si votre modèle n’a pas besoin de support, sélectionnez **Aucun**. Si un support est nécessaire, sélectionnez **Support sur le plateau uniquement**, qui va créer des supports qui ont leur base au niveau du plateau.
- **Remplissage** : Indiquez le pourcentage de remplissage. Il n’est pas nécessaire de faire un remplissage au-delà de 30%.
- **Bordure** : en l’activant, on augmente la surface d’adhésion de la première couche afin d’augmenter l’adhérence au plateau.

### Découpage

Cliquez sur **Découper maintenant** (en anglais : **Slice now**, **CTRL-R** sur Windows et Linux, **CMD-R** sur MacOS). 

![Interface du logiciel PrusaSlicer](/img/docs/prusa-impression-4.webp)

Le logiciel passe en mode aperçu. Vous pouvez basculer entre ce mode et celui de Vue d’éditeur 3D en appuyant sur la touche **Tab**.

Vous pouvez visualiser couche par couche votre impression ainsi que le déplacement de la tête d’impression.

<iframe src="https://www.loom.com/embed/ab9b7c819ce14d368849dd36c28d04c9?sid=1af70922-02c7-4f59-afd9-2af3720c1ec6" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>

Si jamais vous changez un réglage, la pièce disparait de l’écran. Vous devez soit revenir à la vue d’édition 3D ou découper la pièce à nouveau. 

Si vous êtes satisfait de l’aperçu, appuyez sur **Exporter le G-code** en bas à droite et déplacez le fichier dans la carte SD. Si la carte SD est déjà insérée dans votre ordinateur, appuyez sur le bouton à côté représentant une clé USB et une carte SD.

### Préparation de l’imprimante

Avant de lancer l’impression ou de changer le filament, vous devez nettoyer le plateau. Pour la Prusa, il faut imbiber une lingette de nettoyant à vitres et nettoyer le plateau avec, en évitant de faire bouger le plateau.  

### Lancement de l’impression

1. Introduisez la carte SD derrière l’écran LCD de l’imprimante.
2. L’imprimante chargera les fichiers. Naviguez vers le nom de votre fichier et appuyez sur le bouton.
3. L’imprimante prendra quelques minutes pour se chauffer. Une calibration sur 9 points sera faite, ensuite l’impression commencera.
4. Il est important de surveiller les premières couches de l’impression afin de s’assurer que le modèle adhère au plateau.

:::info
Ressources en ligne
[Première impression avec PrusaSlicer](https://help.prusa3d.com/fr/article/premiere-impression-avec-prusaslicer_1753){target="_blank"}
[Prusa Knowledge Base](https://help.prusa3d.com/fr/article/supports_1698){target="_blank"}
[Menu LCD i3 (pré firmware 3.9.0) | Prusa Knowledge Base](https://help.prusa3d.com/fr/article/menu-lcd-i3-pre-firmware-3-9-0_1876){target="_blank"}
:::

## 5 - Modifier la buse

![Outil spécial pour modifier la buse.](/img/docs/prusa-buse-1.webp)

1. Monter l’axe Z le plus haut possible. Attention à ne pas aller trop vite pour ne pas briser les moteurs!
2. Retirer le filament et la bobine du porte bobine.
3. Chauffer la buse à 280° C.
4. Dévisser la buse avec l’outil spécial. Attention aux fils, ne pas les pincer, ni les tordre, ni les arracher. Évitez que les parties en plastique ne touchent les parties chauffantes.
5. Retirer la buse de l’outil avec une pince (la buse est très chaude!) et poser la sur une surface qui ne craint pas la chaleur.
6. Visser la nouvelle buse pendant que le bloc est encore chaud (280° C). Assurez-vous qu’il y ait environ 0,5 mm entre la buse et le bloc de chauffe, comme sur l’image suivante. Visser suffisamment la buse, mais sans exercer une force excessive.

![Visuel](/img/docs/prusa-buse-2.webp)

7. Attendre que ça refroidisse à environ 180° C.
8. Charger un filament.
9. Dans PrusaSlicer, relancer le Configuration Wizard, et cocher la nouvelle buse utilisée afin que les paramètres soient par défaut.
10. Calibrer la première couche (*First layer calibration*). 

:::info
Ressources en ligne
[Calibration de la première couche (i3) | Prusa Knowledge Base](https://help.prusa3d.com/fr/article/calibration-de-la-premiere-couche-i3_112364){target="_blank"}
[Changing or replacing the nozzle](https://help.prusa3d.com/en/article/changing-or-replacing-the-nozzle-mk2-5s-mk3s-mk3s_2069){target="_blank"}
:::

## 6 - Paramètres avancés PrusaSlicer

Dans cette section, vous trouverez la marche à suivre pour paramétrer différents réglages d’impressions (hauteur de couche, remplissage, etc.) sur un objet dans le logiciel PrusaSlicer.

### Première façon de procéder

1. Se mettre en vue **Avancé** ou **Expert**.
2. Cliquer sur l’icône **Édition** de l’objet à paramétrer.

![1etape.PNG](/img/docs/prusa-avance-1.webp)

Parmi la liste des paramètres d’édition accessible.

3. Cliquer sur **Modificateur de plage de hauteur**.

![1etape.PNG](/img/docs/prusa-avance-2.webp)

4. Choisir la hauteur (en mm) entre lesquelles les modifications doivent s’appliquer.

Vous pouvez ici choisir une hauteur de couche qui s’appliquera uniquement dans la zone. Notez que le maximum est 0.25mm. Ceci permet d’avoir 2 hauteurs de couche différentes sur un même objet.

![1etape.PNG](/img/docs/prusa-avance-3.webp)

5. Cliquer sur l’icône à côté de **Zone**, et choisir le type de réglage à modifier.

Exemple avec le remplissage (100% de 0 à 3,2mm, puis 15% pour le reste).

![1etape.PNG](/img/docs/prusa-avance-4.webp)

Le but du remplissage à 100% est de solidifier la partie de la poignée sur laquelle la vis va appuyer.

![1etape.PNG](/img/docs/prusa-avance-5.webp)
![1etape.PNG](/img/docs/prusa-avance-6.webp)
![1etape.PNG](/img/docs/prusa-avance-7.webp)

### Deuxième façon de procéder

Parmi la liste des paramètres d’édition accessible :

1. Cliquer sur **Ajouter un modificateur** puis choisissez la forme adaptée à votre situation.

![1etape.PNG](/img/docs/prusa-avance-8.webp)

2. Ajuster la forme selon où vous souhaitez modifier les réglages.

![1etape.PNG](/img/docs/prusa-avance-9.webp)

3. Cliquer sur l’icône à côté de **Générique-*Nom de forme***, et choisir le type de réglage à modifier.

Exemple avec le remplissage à 100% dans les boîtes :

![1etape.PNG](/img/docs/prusa-avance-10.webp)
