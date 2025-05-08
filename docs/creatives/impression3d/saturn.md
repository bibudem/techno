---

---

# Elegoo Saturn 3 Ultra 12K

## Présentation

| Elegoo Saturn 3 Ultra 12K||
|-----|-----|
|Écran LCD|	LCD Mono 12K de 10 pouces|
|Logiciel de découpe| CHITUBOX & Voxeldance Tango|
|Technologie| Stéréolithographie MSLA|
|Épaisseur de couche| 0,01 - 0,2 mm|
|Vitesse d'impression| MAX 150 mm/h|
|Surface d'impression| Removable magnetic steel sheets with different surface finishes|
|Volume de construction| 218,88 mm (L) * 122,88 mm (l) * 260 mm (H)|
|Dimensions de l'imprimante| 305,9 mm (L) * 273 mm (l) * 562,5 mm (H)|

### Localisation

Bibliothèque Thérèse-Gouin-Décarie, Atelier de fabrication, 2<sup>e</sup> étage.

## Découpe avec Chitubox

CHITUBOX Basic est un logiciel gratuit d'impression 3D conçu pour simplifier le processus de préparation des modèles avant l'impression. Il vous permet de découper et de convertir facilement des fichiers 3D en fichiers imprimables.

### Ajout de l'imprimante

Si ce n’est pas déjà fait, vous devriez ajouter l'imprimante. Cliquez sur le bouton ajouter sur la barre de gestion de la machine, et sélectionnez ELEGOO Saturn Ultra dans la liste.

![](/img/docs/chitubox-1.webp)

### Importation du modèle

Vous pouvez facilement importer des fichiers existants dans CHITUBOX en utilisant la fenêtre de dialogue ou la fonction de glisser-déposer. 

1. Cliquez sur le bouton de menu situé dans le coin supérieur gauche de la fenêtre principale.
2. Choisissez l'option **Projet ouvert** si vous souhaitez charger un projet existant. Si vous préférez ouvrir un fichier maillé 3D, sélectionnez **Ouvert...**.
3. Parcourez vos fichiers pour trouver le fichier 3D que vous souhaitez importer.

Pour connaître les types de fichiers 3D pris en charge, [consultez ce lien](https://manual.chitubox.com/en-US/docs/chitubox-basic/latest/introduction#supported-file-formats).

### Ajout de supports

Les supports sont des structures temporaires qui aident à maintenir les parties du modèle en place pendant l'impression.
Il est peu probable que le modèle puisse être imprimé avec succès sans l'ajout de supports. Dans notre exemple, il ne présente qu'un seul point de contact sur la plaque de construction, ce qui le rend instable, étant donné que son centre de gravité se situe au-dessus de ce point. Pour remédier à cette situation, vous pouvez cliquer sur l'icône de support située en haut à droite de la fenêtre principale afin d'accéder à la fenêtre de gestion des supports. 

![](/img/docs/chitubox-2.webp)

Pour plus de simplicité, vous pouvez choisir de générer du support automatiquement. Cliquer sur le bouton **Soutien automatique** (*Auto support*).

![](/img/docs/chitubox-3.webp)

### Découpe du modèle

Pour retourner à la fenêtre principale, Cliquer sur le bouton de configuration du fichier situé dans le coin supérieur droit.

![](/img/docs/chitubox-4.webp)

Appuyez ensuite sur le bouton **Trancher** situé dans le coin inférieur droit pour découper le modèle. Cette opération prendra un certain temps en fonction de la taille et de la complexité du modèle, ainsi que des supports. Elle permet de convertir le fichier 3D en un fichier imprimable compatible avec l'imprimante.

### Prévisualisation de la découpe

Après avoir découpé le modèle, vous pouvez visualiser celui-ci dans la fenêtre de prévisualisation. Cette fenêtre se compose de deux parties : à gauche, vous avez un aperçu du modèle, tandis qu'à droite, vous pouvez voir les différentes couches.

En bas de la fenêtre de prévisualisation, vous trouverez le panneau des paramètres d'impression, qui affiche les réglages actuels pour l'impression du modèle. Vous avez la possibilité d'ajuster ces paramètres avant de sauvegarder le modèle tranché.

Dans le coin supérieur droit de la fenêtre de prévisualisation, vous trouverez des informations relatives à l'impression, telles que le type de machine, la résine utilisée, le volume, le poids, le coût et le temps d'impression.

### Sauvegarde du modèle tranché

Finalisez en cliquant sur le bouton **Enregistrer** situé dans le coin inférieur droit pour ouvrir la fenêtre de sauvegarde.

!!! Warning "Il est fortement recommandé d'enregistrer le modèle tranché sur l'ordinateur avant de le transférer sur une clé USB."

## Première impression

### Avant de commencer

- N'oubliez pas de porter des gants et un masque lorsque vous manipulez la résine.
- Nettoyez l'imprimante régulièrement pour garantir son bon fonctionnement.
- Consultez le manuel d'utilisation ou un membre du personnel des bibliothèques pour obtenir des instructions plus détaillées.
- Préparez votre espace de travail :
    - Assurez-vous qu'il y a suffisamment d'espace autour de l'imprimante pour la ventilation et l'accès.
    - La température ambiante optimale se situe entre 20°C et 30°C.

### Préparation de l'impression

1. Choisissez votre résine:
    - Utiliser la résine Elegoo résine 8K, mais d'autres résines compatibles peuvent également être utilisées si besoin.
    - Consultez un membre du personnel TGD pour accéder aux bouteilles de résine dans l’armoire, si jamais il n’en reste plus.
    - Il faut bien secouer et mélanger la résine dans la bouteille avant de l’utiliser.
2. Versez la résine dans le bac:
    - Versez la résine délicatement dans le bac jusqu’à la hauteur maximal indiquer dans le bac.
3. Préparez votre fichier d'impression:
    - Utilisez un logiciel de modélisation 3D pour créer votre modèle 3D ou importer votre modèle sur votre ordinateur.
    - Exportez votre modèle au format STL ou Chitubox.
    - Téléchargez et installez Chitubox sur votre ordinateur, ou utilisez le logiciel Chitubox déjà installé sur nos postes, pour trancher votre modèle et générer les fichiers d'impression.

### Transférez les fichiers d'impression à l'imprimante

- Connectez la clé USB jaune Saturn à l’ordinateur et copiez les fichiers d'impression dessus.
- Insérez la clé USB dans le port USB de l'imprimante.

### Début de l'impression

1. Allumez l'imprimante et sélectionnez l'option d'impression à partir du menu.
2. Choisissez le fichier d'impression que vous souhaitez lancer.
3. Confirmez les paramètres d'impression, tels que la résolution, la vitesse d'impression et le nombre de couches. Normalement c’est déjà configuré par défaut.
4. Appuyez sur le bouton "Démarrer" pour lancer l'impression.

### Suivi de l'impression

- Vous pouvez surveiller l'état de l'impression à partir de l'écran LCD de l'imprimante.
- Vous pouvez également utiliser l'application Elegoo pour surveiller l'impression à distance. (À venir)

### Fin de l'impression

1. Lorsque l'impression est terminée, l'imprimante émet un signal sonore.
2. Retirez le plateau d'impression de l'imprimante.
3. Retirez délicatement l'objet imprimé du plateau.
4. Nettoyez le plateau d'impression et le bac à résine.