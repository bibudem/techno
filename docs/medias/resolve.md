---
draft: true
---

# Documentation DaVinci Resolve


---

## Introduction à DaVinci Resolve

DaVinci Resolve est un logiciel de **montage, mixage audio, composition et étalonnage** développé par Blackmagic Design.  
Originellement conçu pour l’étalonnage, il s’est diversifié depuis 2014 pour inclure toutes les étapes de production.

Deux versions existent :  
- **Studio (payante)** avec plus de fonctionnalités.  
- **Gratuite** (installée au LaM et recommandée à la communauté UdeM).

**Configuration minimale recommandée** : 16 Go RAM et 2 Go VRAM.  
Même si Resolve fonctionne en dessous, cela ralentit le rendu et l’exportation.

Téléchargement : [Blackmagic Design - DaVinci Resolve](https://www.blackmagicdesign.com/products/davinciresolve/)

Le logiciel est installé sur les [postes d'édition](postes-edition) des bibliothèques UdeM et au [Laboratoire multimédia](https://fas.umontreal.ca/laboratoires/lam/) (LaM) au pavillon Marie-Victorin.

La version complète **DaVinci Resolve Studio** est disponible uniquement à la Bibliothèque des lettres et sciences humaines (BLSH).

---

## Avant-propos

- Installez la version **française** de Resolve pour suivre plus facilement cette documentation, même si celle-ci contient quelques passages non traduits.
- Le changement de langue se fait dans **Barre de menus** → **DaVinci Resolve** → **Préférences** → **Utilisateur** → **Interface** → **Langue**

:::caution
Un **redémarrage** est nécessaire après changement de langue.
:::

Cette documentation est complémentaire aux formations. Les chapitres peuvent être lus indépendamment.

---

## Chapitre 1. Préparer vos périphériques de sauvegarde

Avec le phénomène de la numérisation des contenus, les corps de métiers dans le traitement de contenus audiovisuel sont maintenant en grande partie effectués sur des logiciels informatiques. Il n’est donc plus nécessaire de réfléchir à l’entreposage de bobines de pellicule ou de Betamax, mais vous devez tout de même être rigoureux dans la gestion de vos médias numériques. Le numérique peut donner un faux sentiment d’immuabilité à nos médias, mais c’est tout le contraire : le numérique est l’une des rares matières qui peuvent disparaître sans laisser de trace! À l’ère du numérique, il est facile d’égarer un son, supprimer une musique ou écraser une vidéo avec une mauvaise gestion de ses sauvegardes. Que ce soit sur un disque dur externe, interne, une clé USB ou une carte SD, vous devez prendre soin d’organiser vos médias et vos projets pour éviter de perdre plusieurs heures de tournage!

Les médias audiovisuels étant habituellement de grande taille, ce chapitre couvre exclusivement les disques durs. Les informations peuvent s’appliquer pour les autres types de support, comme les clés USB, mais elles sont généralement trop petites pour être utiles sur le long terme dans la gestion de projets audiovisuel. Un disque dur d’une bonne taille vous permettra de travailler de longue année sur vos projets.


### Disque dur personnel
Dépendant de l’utilisation qu’on en fait, les disques durs peuvent être classés dans deux groupes :
- **Disque dur de travail** : SSD recommandé (500 Go à 1 To). Rapide, robuste, mobile.  
- **Disques de sauvegarde** : plus volumineux (2–4 To), moins chers, pour archiver vos projets.


### Disque dur des postes offerts
- Toujours transférer votre projet sur **votre disque de travail** après usage dans un des postes d'édition de l'Université.  
- Les fichiers laissés sur un poste peuvent disparaître lors d’une maintenance.
- Alternative : un espace infonuagique comme Dropbox/Google Drive, mais cette manipulation peut être longue.

### Format du disque dur
- Pour une meilleure compatibilité Mac/Windows : **exFAT** recommandé.
- **Mac** : Utilitaire de disque → Sélectionner le disque branché → Effacer.
- **Windows** : Explorateur → Ce PC → Sélectionner le disque branché → Clic droit → Formater.

:::caution
Le formatage supprime **toutes les données**. Sauvegardez avant!
:::

### La règle des trois

En règle générale, on conseille d’enregistrer ses données numériques à trois endroits distincts, d’où le nom de la règle. Par exemple, vous pourriez avoir une copie de vos données sur votre ordinateur de bureau, sur votre ordinateur portable et sur un disque dur externe. La sauvegarde sur des plateformes en ligne, comme Dropbox, Google Drive ou OneDrive, est également intéressante en octroyant l’accès de vos données à n’importe quelle station de travail.

Toujours conserver **3 copies** :  
- Exemple : poste fixe + portable + disque externe.  
- Ou : poste fixe + disque externe + Espace infonuagique.

## Chapitre 2. L’interface de DaVinci Resolve

DaVinci Resolve est divisé en deux fenêtres distinctes : 
- Le gestionnaire de projet, qui s’ouvre au lancement du logiciel. Permet de visualiser vos différents projets et d’administrer vos bases de données.
- Les espaces de travail, qui se lancent après qu’un projet ait été ouvert. Permet d’importer des médias, de les monter, de les éditer, puis de les exporter en un produit final.   

### Le gestionnaire de projet
Le gestionnaire de projet permet de visualiser tous vos projets menés dans Davinci Resolve à un seul endroit, même s’ils sont sauvegardés à des emplacements différents. Par défaut, le projet « Untitled Projet » s’affiche et la fenêtre se ferme après l’ouverture d’un projet. La fenêtre du gestionnaire de projet se divise en deux panneaux :

1. Le panneau base de données permet de visualiser l’emplacement où sont enregistrées vos bases de données. Si le panneau n’est pas visible, c’est sans doute qu’il est désactivé. Pour l’afficher, vous devez cliquer sur
l’icône à gauche de « Projets ».
2. Le panneau projets permet de visualiser chacun des projets sauvegardés dans une base de données spécifique. Celui-ci n’affiche que les projets de la base de données sélectionnées :

Vous pouvez en tout temps localiser l’emplacement d’une base de donnée en effectuant un [clic droit > Afficher dans le Finder] sur celle-ci.
Pour lancer un nouveau projet, cliquer sur le bouton [nouveau projet], ou lancer le projet « untitled projet ». Une fois un projet lancé, la fenêtre du gestionnaire de projet se ferme automatiquement et celle des espaces de travail s’ouvre. Il est toujours possible de rouvrir le gestionnaire de projet en cliquant sur l’icône de la petite maison, complètement en bas à droite de la fenêtre des espaces de travail :


:::caution
Un fichier projet (.drp) est très léger car il **ne contient pas les médias**.  
Si vos fichiers ont changé d’emplacement, Resolve affichera vos médias **hors ligne**.
Il est impératif que les médias ne changent pas de place en relation avec l’emplacement du fichier projet.
:::

### La fenêtre des espaces de travail
Une fois un projet ouvert, Resolve ferme automatiquement le gestionnaire de projet et ouvre l’espace de travail « cut », qui permet d’éditer rapidement des médias et qui ne sera pas abordé ici. L’interface de chacun des espaces de travail peut sembler imposante, mais la construction de chaque page suit une même logique : deux barres de navigation communes à toutes les pages, des panneaux principaux qui s’affichent à l’ouverture, puis des panneaux secondaires qui peuvent être ouverts ou cachés selon les besoins.

#### Les barres de navigation
Les deux barres de navigation sont toujours visibles, qu’importe dans quel espace de travail vous vous trouvez. Elles permettent d’accéder aux paramètres généraux et spécifiques du projet, de naviguer entre les espaces de travail et d’en moduler les fonctionnalités :
1. Barre des panneaux secondaires : la barre des panneaux secondaires affiche les différents panneaux qui peuvent être ouverts ou masqués selon les besoins du montage.
2. Barre des espaces de travail : complètement en bas de la fenêtre, la barre horizontale des pages permet de transitionner d’un plan de travail à l’autre.
3. L’icône d’engrenage permet d’accéder aux paramètres du projet et l’icône de petite maison au gestionnaire de projet.

💡 **Astuce**  
Avec deux écrans, activez le mode **double écran** :  
`Espace de travail > Double écran > On`  
Cela permet de déporter certains panneaux secondaires sur le second écran.

### Les espaces de travail disponibles
1. **Média** : importer sons, images, vidéos.  
2. **Cut** : montage rapide.  
3. **Montage** : édition principale.  
4. **Fusion** : composition d’image.  
5. **Étalonnage** : correction colorimétrique.  
6. **Fairlight** : traitement audio avancé.  
7. **Exportation** : rendu final.

:::tip
Si vous avez deux écrans (à la maison ou dans nos salles de montage), vous pouvez activer le mode double écran dans Espace de travail > Double écran > On.
Cela libère de l’espace sur l’écran principal en déplaçant certains panneaux sur le second. Si vous venez de brancher l’écran, il peut être nécessaire de redémarrer le logiciel.
:::

## Chapitre 3. Gérer vos données personnelles

Resolve stocke les projets dans des **bases de données**.  
Deux types existent :  
- **Locale** : par défaut, installée sur l’ordinateur du LaM.  
- **Externe** : recommandée, placée sur votre disque dur mobile.

:::caution
Ne laissez jamais vos projets uniquement sur les ordinateurs du LaM.  
Les profils utilisateurs sont régulièrement effacés.
:::

### Créer une base de données externe
1. Sur votre disque dur, créez un dossier nommé `resolve_nomdedisque`.  
2. Dans Resolve → **Gestionnaire de projet** → **Nouvelle base de données**.  
3. Sélectionnez le dossier et validez.  
4. La base apparaît maintenant dans la liste des bases connectées.

:::caution
Les projets exportés (.drp) sont légers car ils **ne contiennent pas les médias**.  
Vous devez toujours conserver vos fichiers originaux.
:::

### Connecter une base de données externe
1. Dans le **Gestionnaire de projet**, cliquez sur **Connecter une base de données**.  
2. Sélectionnez le dossier contenant la base.  
3. Donnez-lui un nom.  
4. Elle sera ajoutée et accessible comme une base locale.

### Exporter / importer un projet (.drp)
- **Exporter** : clic droit sur un projet → **Exporter le projet**.  
- **Importer** : clic droit dans l’espace projets → **Importer un projet**.

💡 **Astuce**  
Utilisez l’export en .drp comme sauvegarde rapide (clé USB, cloud).  
Mais pensez toujours à garder vos **médias liés**.

## Chapitre 4. Créer un nouveau projet

### Démarrer un nouveau projet
1. Dans le **Gestionnaire de projet** : clic droit → **Nouveau projet**.  
2. Donnez un nom clair (par exemple : le sigle du cours ou le sujet du projet).  
3. Par défaut, la page **Cut** (montage rapide) s’ouvre automatiquement.

### Définir les paramètres du projet
- Menu : `Fichier > Paramètres du projet…`.  
- Les réglages importants sont :  
  - **Résolution de la timeline** (ex. : 1920×1080).  
  - **Fréquence d’images** (24, 25 ou 30 fps selon vos sources).  

:::caution
Choisissez la bonne fréquence d’images **avant d’importer vos médias**.  
Un mauvais réglage peut entraîner des problèmes de fluidité.
:::

### Enregistrer un préréglage
- Une fois vos paramètres définis, enregistrez-les comme **préréglage**.  
- Vous pourrez ainsi les réutiliser dans vos futurs projets sans tout reconfigurer.

### Gérer les espaces caches
- Par défaut, Resolve crée ses fichiers **caches** et **optimisés** sur l’ordinateur local.  
- Pour améliorer la fluidité et garder vos projets portables :  
  - Redirigez ces caches vers votre disque de travail externe (préférable).  
  - Vérifiez ce paramètre dans les **Préférences système**.

## Chapitre 5. La gestion des médias

L’étape de gestion des médias est cruciale : vos fichiers vidéo, audio et images doivent être importés et organisés correctement pour un projet fluide et stable.

### Importer vos médias
- Depuis la **page Média**, ou directement via la **Bibliothèque de médias**.  
- Les panneaux disponibles :  
  - **Moniteur source** : aperçu des fichiers.  
  - **Bibliothèque** : organisation de vos chutiers.  
  - **Stockage** : dossiers accessibles depuis l’ordinateur.  
  - **Audio** : gestion des pistes sonores.  
  - **Métadonnées** : informations détaillées sur chaque fichier.

### Ajouter des dossiers
1. Clic droit → **Ajouter un nouvel emplacement**.  
2. Sélectionnez votre dossier (et ses sous-dossiers).  
3. Resolve peut demander d’ajuster automatiquement les paramètres du projet.  
4. Créez de nouveaux **chutiers** (`⇧⌘N`) pour classer vos fichiers par catégories (ex. : *vidéo*, *audio*, *images*).

### Médias hors ligne
- Si un fichier est déplacé, Resolve le perd et il devient **hors ligne**.  
- Icône signalée par un **maillon rouge** dans la timeline.  
- Pour le relier :  
  - `Menu > Recherche > Sélectionner dossier racine`.  

💡 **Astuce**  
Si le média a changé de nom ou de format : clic droit sur le plan → **Remplacer le plan sélectionné**.

### Organisation recommandée
- Préparez vos dossiers avant d’importer :  
  - `Projet > Vidéos brutes`  
  - `Projet > Audio`  
  - `Projet > Images`  
- Gardez la même arborescence sur disque et dans Resolve pour éviter la confusion.

:::tip
Une bonne organisation au départ vous évitera des dizaines d’heures perdues plus tard.  
Nommez clairement vos fichiers et vos chutiers !
:::


## Chapitre 6. Le montage

Le montage est au cœur de DaVinci Resolve. C’est ici que vous assemblez vos plans, audio et images pour créer un récit fluide.

### Les outils de navigation
- **Barre de défilement** : permet d’avancer ou reculer dans la timeline.  
- **Raccourcis utiles** :  
  - `Espace` : lecture / pause.  
  - `I` : point d’entrée.  
  - `O` : point de sortie.  
  - `Maj + Z` : ajuster le zoom de la timeline.  
- **Zoom** : utilisez la molette ou la barre en bas de la timeline pour ajuster la vue.

### Les pistes
- **Vidéo (V1, V2, …)** : superposer vos plans.  
- **Audio (A1, A2, …)** : voix, musiques, bruitages.  
- Vous pouvez verrouiller (`icône cadenas`) ou rendre muet une piste.

### Montage de base
- **Glisser-déposer** vos fichiers depuis le chutier vers la timeline.  
- **Couper** :  
  - `B` pour activer la lame de rasoir.  
  - Cliquez pour couper un plan.  
  - `A` pour revenir à l’outil de sélection.  
- **Supprimer une portion** : sélectionnez et appuyez sur `Suppr`.

### Les types de montage
- **Insertion** : insère un plan à l’endroit du curseur.  
- **Écrasement** : remplace un plan déjà présent.  
- **Montage par glisser** : déplace un plan sans casser la continuité.

### Travailler avec le magnétisme
- Le bouton **Aimant** active/désactive l’alignement automatique des clips.  
- Très utile pour éviter des espaces vides.

💡 **Astuce**  
Pensez à utiliser les **chutiers** pour organiser vos plans avant de les déposer sur la timeline.

### Raccourcis essentiels pour le montage
- `Cmd + B` : couper au curseur.  
- `Shift + Cmd + Z` : zoom timeline complet.  
- `Cmd + Z` : annuler.  
- `Cmd + ⇧ + Z` : rétablir.  

:::note
Le montage demande de l’organisation : sauvegardez régulièrement et utilisez des noms clairs pour vos séquences.
:::

## Chapitre 7. Navigation et édition avancée

Une fois à l’aise avec les bases du montage, DaVinci Resolve propose des outils plus précis pour affiner vos séquences.

### La navigation dans la timeline
- **Curseur de lecture** : se déplace manuellement ou via les touches `←` et `→` (image par image).  
- `Maj + ← / →` : navigation par incréments plus larges.  
- `Haut / Bas` : aller au début ou à la fin des plans.  

💡 **Astuce**  
Vous pouvez placer plusieurs **marqueurs** (`M`) pour repérer vos moments clés.

### Outils d’édition avancée
- **Trim dynamique** : permet d’ajuster la fin d’un plan tout en déplaçant les suivants.  
- **Rouleau** : modifie simultanément la fin d’un plan et le début du suivant.  
- **Glissement** : conserve la durée d’un plan mais change sa portion utilisée.  
- **Répousser** : décale un plan tout en déplaçant les suivants.

👉 Ces outils s’activent dans la barre au-dessus de la timeline ou par clic droit sur un clip.

### Les transitions
- Dans l’onglet **Effets** → **Transitions vidéo**.  
- Glissez-déposez une transition entre deux plans.  
- Durée ajustable en tirant sur ses extrémités.  

⚠️ **Attention**  
Les transitions exigent un recouvrement des plans (handles).  
Si vos plans sont trop courts, la transition risque d’être impossible.

### La synchronisation audio/vidéo
- Importez vos vidéos et fichiers audio séparés.  
- Sélectionnez-les > clic droit > **Synchroniser les clips**.  
- Resolve utilise la forme d’onde audio pour aligner automatiquement.

💡 **Astuce**  
Si l’auto-synchro échoue, vous pouvez aligner manuellement via l’onglet **Forme d’onde audio** dans la timeline.

### Les effets simples
- **Correction de vitesse** : clic droit > **Changer la vitesse**.  
- **Image figée** : clic droit > **Créer une image fixe**.  
- **Stabilisation** : disponible dans l’onglet **Étalonnage** (paramètres du plan).

### Raccourcis utiles pour l’édition avancée
- `Cmd + T` : ajouter une transition par défaut.  
- `Alt + Glisser` : dupliquer un plan.  
- `Cmd + R` : activer/désactiver le contrôle de vitesse.  

:::note
Ces fonctions avancées permettent d’économiser un temps précieux en montage professionnel.
:::

## Chapitre 8. Le son avec Fairlight

Fairlight est l’espace de travail de DaVinci Resolve dédié au **traitement et au mixage audio**.  
C’est un environnement complet, comparable à un logiciel de montage sonore professionnel.

### Interface Fairlight
- Pistes audio avec formes d’onde.  
- Console de mixage (volume, panoramique, égalisation, effets).  
- Possibilité d’ajouter des bus (mixage de plusieurs pistes vers une sortie commune).

### Nettoyer et améliorer le son
- **Réduction de bruit** : supprimer les sons parasites (souffle, ventilation).  
- **Égalisation (EQ)** : renforcer ou atténuer certaines fréquences (ex. : grave, aigu).  
- **Compresseur** : homogénéiser le volume entre les passages faibles et forts.  

⚠️ **Attention**  
Évitez les réglages trop extrêmes : un son trop compressé ou filtré fatigue l’écoute.

### Ajouter des effets audio
- Onglet **Effets** → effets natifs (reverb, delay, EQ, etc.).  
- Glisser-déposer sur une piste ou un clip audio.  
- Paramétrer via la fenêtre de réglages.

💡 **Astuce**  
Pour une voix plus claire :  
- Couper les basses en dessous de 80 Hz.  
- Ajouter un léger boost entre 3–5 kHz.  

### Automatiser le volume
- Activez l’**enregistrement d’automation**.  
- Déplacez les curseurs en temps réel pour créer des variations (fondu en entrée/sortie).  
- Utile pour équilibrer voix, musique et bruitages.

### Raccourcis utiles en Fairlight
- `A` : outil de sélection.  
- `B` : outil lame (découpe).  
- `M` : ajouter un marqueur.  
- `Cmd + ,` : ouvrir les préférences Fairlight.  

:::tip
Pensez toujours au confort d’écoute. Un bon mixage se reconnaît quand l’auditeur n’a pas besoin de monter ou baisser le volume.
:::

## Chapitre 9. L’étalonnage (Color)

L’étalonnage est une étape essentielle pour donner une **cohérence visuelle** et une identité esthétique à votre projet.  
DaVinci Resolve est d’ailleurs reconnu mondialement pour la puissance de son module Color.

### Interface de l’espace Color
- **Timeline en bas** : vos plans avec vignettes.  
- **Viewer** : affiche le résultat en temps réel.  
- **Panneaux de correction** : roues colorimétriques, courbes, barres de réglages.  
- **Nœuds** : chaque correction s’applique sous forme de “nœud” dans un graphe.

👉 Chaque nœud représente une étape de traitement. Vous pouvez enchaîner plusieurs nœuds pour mieux organiser vos corrections (ex. : un pour l’exposition, un pour la balance des blancs, un pour l’effet créatif).

### Les outils principaux
- **Lift (noirs)**, **Gamma (tons moyens)**, **Gain (hautes lumières)** : permettent de corriger la luminosité et la couleur.  
- **Offset** : ajuste globalement toute l’image.  
- **Courbes** : corrections plus fines par canal (RVB).  
- **Qualificateur** : isole une couleur spécifique pour la modifier.  
- **Power Windows** : zones de masquage (par ex. éclaircir seulement un visage).  

💡 **Astuce**  
Travaillez toujours dans cet ordre :  
1. **Balance des blancs** (neutraliser dominantes de couleur).  
2. **Contraste et exposition**.  
3. **Saturation**.  
4. Ajustements créatifs (look, ambiance).

### Les scopes (analyse visuelle)
Resolve propose plusieurs outils pour évaluer objectivement votre image :  
- **Waveform** : luminance de gauche à droite.  
- **Vectorscope** : intensité et direction des couleurs.  
- **Parade RGB** : équilibre des trois canaux couleur.  
- **Histogramme** : répartition des niveaux d’intensité.

⚠️ **Attention**  
Ne vous fiez pas uniquement à vos yeux : les écrans des ordinateurs peuvent être mal calibrés. Les **scopes** assurent une correction précise.

### Trucs pratiques
- Dupliquez vos nœuds pour tester différentes approches.  
- Utilisez des **groupes** pour appliquer la même correction à plusieurs plans.  
- Sauvegardez vos looks en **LUTs** pour réutilisation.

:::tip
Un bon étalonnage ne doit pas se remarquer : l’objectif est d’harmoniser les images et de renforcer la narration visuelle.
:::

## Chapitre 10. Exportation

Une fois le montage terminé, il faut générer un fichier vidéo final.  
Dans Resolve, cette étape se fait dans la page **Deliver (Exportation)**.

### Paramètres d’exportation de base
- **Nom du fichier** : clair et unique (ex. : projet_cours_date.mp4).  
- **Destination** : disque externe ou dossier bien identifié.  
- **Format le plus courant** : MP4 (H.264).  
- **Qualité** : Élevée, mais attention à la taille de fichier.

👉 Pour un rendu destiné au web (YouTube, Vimeo) :  
- Résolution : 1920×1080 (ou 1280×720).  
- Codec : H.264.  
- Framerate : identique au projet.  
- Audio : AAC, 48 kHz.

### Exportation YouTube/Vimeo
Resolve propose des préréglages :  
- **YouTube** (1080p ou 4K).  
- **Vimeo**.  
- Ils configurent automatiquement le format recommandé par les plateformes.  

💡 **Astuce**  
Vous pouvez connecter directement votre compte YouTube et publier sans quitter Resolve.  
Mais il est souvent plus sûr d’exporter d’abord le fichier, puis de l’envoyer manuellement.

### Exportation pour diffusion locale
- Choisir **QuickTime** (MOV) ou **MP4**.  
- Codec **DNxHD** ou **ProRes** pour un rendu de qualité (mais plus lourd).  
- Idéal si vous voulez retravailler ensuite dans un autre logiciel.

### La file d’attente de rendu
- Cliquez sur **Ajouter à la file de rendu** pour préparer plusieurs exports d’un coup.  
- Lancez ensuite le rendu de toute la file.  
- Vous pouvez ainsi générer plusieurs versions : par ex. une version légère web + une version haute qualité.

⚠️ **Attention**  
Toujours vérifier l’**emplacement du fichier exporté** avant de lancer le rendu, pour éviter de le perdre dans un dossier par défaut.

### Raccourcis utiles
- `Cmd + /` : basculer rapidement sur la page Deliver.  
- `Espace` : lancer un aperçu du rendu.  

:::note
Mieux vaut faire un **test d’exportation de quelques secondes** avant de lancer le rendu complet, surtout pour un long projet.
:::

## Chapitre 11. Raccourcis clavier essentiels

Maîtriser les raccourcis clavier dans DaVinci Resolve permet de **gagner énormément de temps** au montage.  
Voici une sélection des plus utiles :

### Navigation
- `Espace` : lecture/pause.  
- `← / →` : avancer/reculer image par image.  
- `↑ / ↓` : passer au plan précédent/suivant.  
- `Maj + ← / →` : navigation rapide.  

### Montage
- `B` : outil **lame** (cut).  
- `A` : outil **sélection**.  
- `Cmd + Z` : annuler.  
- `Cmd + Maj + Z` : rétablir.  
- `Cmd + C / V` : copier/coller.  
- `Suppr` : supprimer un clip (laisser un trou).  
- `Maj + Suppr` : suppression en **ripple** (efface et recolle automatiquement).  

### Timeline
- `N` : activer/désactiver l’**aimant** (snap).  
- `Cmd + =` : zoom avant.  
- `Cmd + -` : zoom arrière.  
- `Alt + roulette souris` : zoom horizontal dans la timeline.  

### Audio
- `Cmd + ,` : préférences Fairlight.  
- `M` : ajouter un marqueur.  
- `Alt + Glisser` : dupliquer un clip audio.  

### Exportation
- `Cmd + /` : passer à la page Deliver (Export).  
- `Cmd + E` : exporter rapidement (selon dernier réglage).  

💡 **Astuce**  
Vous pouvez personnaliser les raccourcis :  
`DaVinci Resolve > Clavier personnalisé`  
Cela permet d’adapter Resolve à vos habitudes (ex. : si vous venez de Premiere ou Final Cut).

:::tip
Apprenez progressivement les raccourcis : commencez par les plus fréquents (lecture, cut, supprimer) et ajoutez-en d’autres au fur et à mesure.
:::

## Chapitre 12. Conseils pratiques & conclusion

Monter avec DaVinci Resolve demande un peu d’apprentissage, mais les bases s’acquièrent rapidement.  
Voici quelques recommandations finales pour travailler efficacement.

### Conseils généraux
- **Organisez vos fichiers** avant d’importer (dossier Vidéo, Audio, Images).  
- **Nommez clairement vos projets et chutiers** pour éviter de vous perdre.  
- **Sauvegardez souvent** : Resolve peut planter, comme tout logiciel de montage.  
- **Travaillez sur un disque externe rapide** pour gagner en fluidité.  

### Bonnes pratiques de montage
- Coupez **au service de l’histoire**, pas seulement de l’esthétique.  
- Privilégiez des coupes franches plutôt que des transitions excessives.  
- Équilibrez vos niveaux audio : la voix doit rester claire et constante.  
- Harmonisez vos couleurs et évitez les variations trop visibles entre plans.

### Pour aller plus loin
- Explorez **Fusion** pour les effets visuels avancés.  
- Testez **les LUTs créatives** pour donner un style particulier à vos vidéos.  
- Utilisez **les projets collaboratifs** (Studio) pour travailler en équipe.  

💡 **Astuce**  
La pratique régulière est la meilleure manière de progresser. Montez de petits projets (clips, exercices, capsules) pour développer vos réflexes.

---

## Conclusion

Avec DaVinci Resolve, vous avez entre les mains un outil **professionnel complet** qui couvre toutes les étapes :  
- Importation et organisation.  
- Montage vidéo.  
- Traitement audio.  
- Étalonnage.  
- Exportation.

Même en utilisant seulement les fonctions de base, vous pouvez réaliser des projets de qualité professionnelle.  
La clé est de rester organisé, patient et créatif.

:::tip
Votre meilleur allié : la curiosité. Explorez les menus, testez les options, regardez des tutoriels, et surtout… pratiquez !
:::
