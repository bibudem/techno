# À propos

Ce dépôt contient le site techno généré avec [Docusaurus](https://docusaurus.io/).

## Installation

```sh
git clone https://github.com/bibudem/techno.git
cd techno
npm install
```

## Développement

```sh
npm run start
```

## Composant de rétroaction

Ce composant permet aux usagers de signaler s’ils ont trouvé une page utile ou non, et de laisser un commentaire facultatif.  
Les réponses sont envoyées automatiquement via l’API LibWizard. Le composant est injecté automatiquement via un fichier swizzlé : `src/theme/DocItem/Content.jsx`.

### Affichage automatique

Le composant `Retroaction` est injecté automatiquement **à la fin de chaque page de documentation**.

Aucune importation manuelle n’est requise dans les fichiers `.md` ou `.mdx`.

---

### 🚫 Désactiver le composant sur une page

Si tu ne veux **pas afficher la rétroaction sur une page donnée**, ajoute simplement ce champ dans le frontmatter :


```yaml
---
title: Exemple de page
retroaction: false
---

