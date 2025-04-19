# À propos


**studio·bib** est un site de documentation construit avec [Docusaurus 3.7](https://docusaurus.io/) et pensé pour centraliser les tutoriels, guides et références des espaces techno et services informatiques offerts dans les bibliothèques UdeM et dans l'environnement UdeM.

---

## Installation

```sh
git clone https://github.com/bibudem/techno.git
cd techno
npm install
```

---

## Développement

```sh
npm run start
```

---

## Composants clés

### CardGrid

Affiche une grille réactive de cartes.

```md
import CardGrid from '@site/src/components/CardGrid';
<CardGrid
  items={[
    {
      title: 'Postes AVA',
      description: 'Connectez votre portable à un grand écran…',
      link: '/informatique/ava',
      icon: 'Desktop',
    },
  ]}
/>
```

### CardAide

Invite l’usager à demander de l’aide.
Pour l'aide informatique :

```yaml
---
help : info
---
```

Pour l'aide à la création : 

```yaml
---
help : crea
---
```

### Rétroaction 

Formulaire de feedback en bas de chaque page, présent par défaut sur toutes les pages.
Pour le désactiver, ajoute ce champ dans le frontmatter : 

```yaml
---
retroaction : false
---
```

### Cacher la date de dernière mise à jour

```md
import HideLastUpdated from '@site/src/components/HideLastUpdated';
<HideLastUpdated/>
```

---

## Contribuer
Si vous souhaitez contribuer à la documentation en lien avec les sections **Technologies créatives** et **Productions médias**, vous pouvez le faire en suivant ces étapes :

1. Cloner le dépôt;
2. Modifier les fichiers Markdown (.md) ou images;
3. Proposer une PR avec vos changements.

---

## Licence

### Code source  
Le code de ce projet est distribué sous licence [MIT](LICENSE). Vous êtes libre de copier, modifier et redistribuer le code, sous réserve de conserver la notice de droit d’auteur et la licence.

### Contenu
Les textes, images et schémas de la documentation sont mis à disposition sous licence [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/) (sauf mention contraire). Vous pouvez réutiliser, adapter et partager ces contenus, à condition de mentionner Les bibliothèques de l'Université de Montréal comme source.
