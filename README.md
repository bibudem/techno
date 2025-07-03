<p align="center">
  <img src="static/img/logo-tb.svg" alt="Logo studio·bib" width="500" />
</p>

<p align="center">
  <a href="https://studio.bib.umontreal.ca/" target="_blank" rel="noopener">
    https://studio.bib.umontreal.ca/
  </a>
</p>

![Licence](https://img.shields.io/static/v1?label=Licence&message=MIT&color=blue)
![Statut – Pré-lancement](https://img.shields.io/static/v1?label=Statut&message=Pré-lancement&color=blue)
[![Dernier commit](https://img.shields.io/github/last-commit/bibudem/techno?label=Dernier%20commit&color=blue&style=flat-square)](https://github.com/bibudem/techno/commits)
[![Docusaurus version](https://img.shields.io/npm/v/@docusaurus/core?label=Docusaurus&logo=docusaurus&color=527FFF&style=flat-square)](https://www.npmjs.com/package/@docusaurus/core)

# À propos

**studio·bib** est un site de documentation développé avec [Docusaurus 3.8.1](https://docusaurus.io/), conçu pour centraliser tutoriels, guides et ressources liés aux espaces techno et aux services informatiques des bibliothèques de l’UdeM.

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

### QR Code – Redirections dynamiques dans Docusaurus

#### Utilisation du fichier `qrcode.json`

Le fichier `qrcode.json` contient une liste de redirections associées à des identifiants uniques, utilisés pour générer des liens QR courts du type :

```
https://studio.bib.umontreal.ca/qrcode?id=xx-001
```

Chaque `id` redirige automatiquement vers une page du site à l’aide du composant React `/qrcode.jsx`.

---

#### Fonctionnement

- Le composant lit le paramètre `id` dans l’URL.
- Il cherche la page correspondante dans `qrcode.json`.
- Il redirige vers la page en ajoutant automatiquement des paramètres UTM :
  ```
  ?utm_source=qr&utm_medium=print&utm_campaign=qr_xx-001
  ```
- Il envoie aussi un événement Google Analytics (`qr_scan`) si activé via Klaro.

---

#### Structure du fichier `qrcode.json`

```json
{
  "sw-001": "/informatique/logiciels/arcgis",
  "it-001": "/informatique/impression",
  "me-001": "/medias/obs",
  "cr-001": "/creatives/impression3d/ultimaker",
  "sp-001": "/espaces/studiovideo",
  "xx-001": "/a-propos/nous-joindre"
}
```

---

#### Convention des préfixes

| Catégorie            | Dossier                           | Préfixe |
|----------------------|-----------------------------------|---------|
| Logiciels            | `informatique/logiciels/`         | `sw-`   |
| Informatique gén.    | `informatique/` (hors logiciels)  | `it-`   |
| Médias               | `medias/`                         | `me-`   |
| Création numérique   | `creatives/`                      | `cr-`   |
| Espaces              | `espaces/`                        | `sp-`   |
| À propos / infos     | `a-propos/`                       | `xx-`   |
| Sondages             | `Sondage LibWizard`               | `sd-`   |

---

#### Emplacement

- `src/data/qrcode.json` → données
- `src/pages/qrcode.jsx` → composant de redirection

---

#### Remarques

- Les redirections sont **côté client** (JavaScript), adaptées aux sites statiques.
- Le tracking est compatible **Google Analytics 4**, conditionnel au consentement (via Klaro).

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
