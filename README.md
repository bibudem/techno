<p align="center">
  <img src="static/img/logo-tb.svg" alt="Logo studio·bib" width="500" />
</p>

<p align="center">
  <a href="https://studio.bib.umontreal.ca/" target="_blank" rel="noopener">
    https://studio.bib.umontreal.ca/
  </a>
</p>

![Licence](https://img.shields.io/static/v1?label=Licence&message=MIT&color=blue)
![Statut – En construction](https://img.shields.io/static/v1?label=Statut&message=En%20construction&color=orange)
[![Dernier commit](https://img.shields.io/github/last-commit/bibudem/techno?label=Dernier%20commit&color=blue&style=flat-square)](https://github.com/bibudem/techno/commits)
[![Docusaurus version](https://img.shields.io/npm/v/@docusaurus/core?label=Docusaurus&logo=docusaurus&color=527FFF&style=flat-square)](https://www.npmjs.com/package/@docusaurus/core)

# À propos

**studio·bib** est un site de documentation développé avec [Docusaurus 3.7](https://docusaurus.io/), conçu pour centraliser tutoriels, guides et ressources liés aux espaces techno et aux services informatiques des bibliothèques de l’UdeM.

---

## Installation

```bash
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

Formulaire de feedback présent par défaut en bas de chaque page.
Pour le désactiver :

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

Vous souhaitez contribuer aux sections Technologies créatives ou Productions médias ? Voici comment faire :

1. Cloner ce dépôt;
2. Modifier les fichiers Markdown (.md) ou les images;
3. Proposer une pull request avec vos changements.

---

## Licence

### Code source  
Le code est distribué sous licence MIT. Vous pouvez le copier, le modifier et le redistribuer, en conservant la mention de licence.

### Contenu
Sauf indication contraire, les textes, images et schémas de cette documentation sont sous licence Creative Commons Attribution 4.0 International (CC BY 4.0). Merci de citer **Les bibliothèques de l’Université de Montréal** comme source.
