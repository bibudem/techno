---
title: Utilisation du téléprompteur
description: Guide pour la prise en main du téléprompteur du Studio vidéo - Bibliothèque des lettres et sciences humaines.
slug: /medias/teleprompteur
breadcrumbs: true
toc_max_heading_level: 2
help : crea
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

![Le prompteur en action](/img/docs/studiovideolsh1.webp)

Le téléprompteur permet d’afficher du texte ou du contenu devant l’objectif de la caméra, afin de le consulter tout en gardant le regard dirigé vers la caméra.

:::info
Le téléprompteur est disponible uniquement dans le [Studio vidéo](/docs/espaces/studiovideolsh.md) de la Bibliothèque des lettres et sciences humaines (BLSH).
:::

## Utilisation

### Se connecter au poste

Se connecter au PC du studio avec ses identifiants UdeM. Le logiciel **Camera Hub** se lance automatiquement et permet de contrôler le téléprompteur.

### Afficher un texte

- Dans **Camera Hub**, sélectionner le mode **Texte**, puis copier ou saisir le texte à afficher.
- Ajuster la taille du texte et son affichage à l’écran.

Pour plus de confort pendant l’enregistrement, il est recommandé de contrôler le défilement du texte à l’aide du contrôleur placé dans le studio.

[Les boutons du contrôleur](#contrôleur-du-téléprompteur) permettent de faire avancer ou reculer le texte au rythme souhaité, sans interrompre l’enregistrement.

**Camera Hub** permet également d’activer le défilement automatique et d’en régler la vitesse. Cette option peut être utile pour un texte continu, mais nécessite d’adapter le rythme de lecture à celui du téléprompteur.

:::info Conseil
Faire un essai avant l’enregistrement afin d’ajuster la taille du texte et de se familiariser avec les commandes du contrôleur.
:::

### Afficher une présentation ou un autre contenu

Le téléprompteur peut également être utilisé comme un deuxième écran, permettant d’y afficher :

* une présentation PowerPoint;
* un document PDF;
* une image;
* une page Web;
* toute autre fenêtre ouverte sur le PC du studio.

1) [Appuyer sur le **bouton 1** du contrôleur](#contrôleur-du-téléprompteur) pour changer le mode d’affichage du téléprompteur et l’utiliser comme deuxième écran. (voir en bas)

2) Ouvrir le contenu souhaité sur le PC du studio, puis déplacer simplement la fenêtre vers l’écran du téléprompteur.

Pour une présentation PowerPoint, il est possible d’afficher les diapositives directement devant la caméra.

### Contrôleur du téléprompteur
Le contrôleur permet de contrôler le texte affiché sur le téléprompteur pendant un enregistrement.

<style>{`
.prompter-controls {
  --prompter-blue: #0057ac;
  --prompter-blue-light: #eef6ff;
  --prompter-border: #d9e2ec;
  --prompter-text-muted: #53657a;

  margin: 2rem 0;
}

/* INTRODUCTION */

.prompter-intro {
  margin-bottom: 1.5rem;
}

.prompter-intro h2 {
  margin-bottom: 0.5rem;
}

.prompter-intro p {
  max-width: 760px;
  margin-bottom: 0;
  color: var(--prompter-text-muted);
  font-size: 1.05rem;
  line-height: 1.6;
}


/* AVIS BLSH */

.prompter-notice {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1rem 1.25rem;
  margin: 1.5rem 0 2.5rem;
  border: 1px solid #cfe2f6;
  border-radius: 12px;
  background: var(--prompter-blue-light);
}

.prompter-notice-icon {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--prompter-blue);
  color: white;
  font-weight: 700;
}

.prompter-notice strong {
  display: block;
  margin-bottom: 0.2rem;
  color: #102a43;
}


/* STREAM DECK */

.prompter-device {
  max-width: 630px;
  margin: 0 auto 2.5rem;
  padding: 1.5rem 1.5rem 1.7rem;
  border-radius: 20px;
  background: #15181c;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.14);
}

.prompter-label {
  width: fit-content;
  margin: 0 auto 1.2rem;
  padding: 0.25rem 1.1rem;
  background: white;
  color: #111;
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.prompter-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.9rem;
  max-width: 390px;
  margin: 0 auto;
}

.prompter-key {
  position: relative;
  display: flex;
  aspect-ratio: 1;
  align-items: center;
  justify-content: center;
  border: 1px solid #41474e;
  border-radius: 13px;
  background: linear-gradient(145deg, #24292e, #101214);
  box-shadow:
    inset 0 0 0 2px rgba(255, 255, 255, 0.025),
    0 4px 8px rgba(0, 0, 0, 0.4);
  color: white;
  font-size: 2rem;
  line-height: 1;
}

.prompter-key.empty {
  opacity: 0.45;
}

.prompter-key-number {
  position: absolute;
  top: -9px;
  right: -9px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 2px solid #15181c;
  border-radius: 50%;
  background: var(--prompter-blue);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
}


/* ICÔNES */

.prompter-icon-source {
  position: relative;
  width: 34px;
  height: 27px;
}

.prompter-icon-source::before,
.prompter-icon-source::after {
  content: "";
  position: absolute;
  width: 22px;
  height: 15px;
  border: 2px solid white;
  border-radius: 3px;
}

.prompter-icon-source::before {
  top: 0;
  right: 0;
}

.prompter-icon-source::after {
  bottom: 0;
  left: 0;
}

.prompter-arrow {
  font-size: 2.5rem;
  font-weight: 300;
}

.prompter-section-icon {
  --prompter-section-bar-w: 3px;
  --prompter-section-bar-h: 20px;
  --prompter-section-tri: 13px;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 24px;
  gap: 5px;
}

.prompter-section-icon::before,
.prompter-section-icon::after {
  content: "";
  flex: 0 0 auto;
}

.prompter-section-icon::before {
  width: var(--prompter-section-bar-w);
  height: var(--prompter-section-bar-h);
  border-radius: 1px;
  background: white;
}

.prompter-section-icon::after {
  width: 0;
  height: 0;
  border-top: calc(var(--prompter-section-tri) * 0.7) solid transparent;
  border-bottom: calc(var(--prompter-section-tri) * 0.7) solid transparent;
}

.prompter-section-icon--prev::before {
  order: 2;
}

.prompter-section-icon--prev::after {
  order: 1;
  border-right: var(--prompter-section-tri) solid white;
}

.prompter-section-icon--next::before {
  order: 1;
}

.prompter-section-icon--next::after {
  order: 2;
  border-left: var(--prompter-section-tri) solid white;
}


/* CARTES */

.prompter-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.prompter-card {
  flex: 1 1 200px;
  max-width: 240px;
  padding: 1.2rem;
  border: 1px solid var(--prompter-border);
  border-radius: 14px;
  background: var(--ifm-background-surface-color, #fff);
}

.prompter-card-header {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  margin-bottom: 1rem;
}

.prompter-card-number {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--prompter-blue);
  color: white;
  font-size: 0.85rem;
  font-weight: 700;
}

.prompter-card h3 {
  margin: 0;
  font-size: 1rem;
  line-height: 1.25;
}

.prompter-card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;
  margin-bottom: 1rem;
  border-radius: 10px;
  background: #191d21;
  color: white;
  font-size: 1.6rem;
}

.prompter-card p {
  margin: 0;
  color: var(--prompter-text-muted);
  font-size: 0.95rem;
  line-height: 1.45;
}


/* ASTUCE */

.prompter-tip {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--prompter-border);
}

.prompter-tip-icon {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--prompter-blue-light);
  font-size: 1.3rem;
}

.prompter-tip strong {
  color: var(--prompter-blue);
}


/* MODE SOMBRE DOCUSAURUS */

[data-theme='dark'] .prompter-notice {
  border-color: #234d72;
  background: rgba(0, 87, 172, 0.15);
}

[data-theme='dark'] .prompter-notice strong {
  color: #e5f2ff;
}

[data-theme='dark'] .prompter-controls {
  --prompter-border: #3b4652;
  --prompter-text-muted: #b6c2cf;
  --prompter-blue-light: rgba(0, 87, 172, 0.18);
}


/* RESPONSIVE */

@media (max-width: 600px) {
  .prompter-device {
    padding: 1rem 1rem 1.2rem;
  }

  .prompter-label {
    font-size: 1.15rem;
  }

  .prompter-grid {
    gap: 0.6rem;
  }

  .prompter-key {
    font-size: 1.45rem;
  }

  .prompter-arrow {
    font-size: 2rem;
  }

  .prompter-section-icon {
    transform: scale(0.75);
  }

  .prompter-card {
    max-width: none;
  }

  .prompter-notice {
    padding: 1rem;
  }
}
`}</style>


<div className="prompter-controls">

  




  <div className="prompter-device">

    <div className="prompter-label">
      PROMPTEUR
    </div>

    <div className="prompter-grid">

      {/* 1 — AFFICHAGE */}

      <div className="prompter-key">
        <span className="prompter-icon-source"></span>
        <span className="prompter-key-number">1</span>
      </div>


      {/* BOUTON NON UTILISÉ */}

      <div className="prompter-key empty"></div>


      {/* 2 — DÉFILEMENT HAUT */}

      <div className="prompter-key">
        <span className="prompter-arrow">↑</span>
        <span className="prompter-key-number">2</span>
      </div>


      {/* 3 — SECTION PRÉCÉDENTE */}

      <div className="prompter-key">
        <span className="prompter-section-icon prompter-section-icon--prev"></span>
        <span className="prompter-key-number">3</span>
      </div>


      {/* 4 — SECTION SUIVANTE */}

      <div className="prompter-key">
        <span className="prompter-section-icon prompter-section-icon--next"></span>
        <span className="prompter-key-number">4</span>
      </div>


      {/* 5 — DÉFILEMENT BAS */}

      <div className="prompter-key">
        <span className="prompter-arrow">↓</span>
        <span className="prompter-key-number">5</span>
      </div>

    </div>

  </div>


  {/* EXPLICATION DES TOUCHES */}

  <div className="prompter-cards">


    {/* 1 */}

    <div className="prompter-card">

      <div className="prompter-card-header">
        <span className="prompter-card-number">1</span>
        <h3>Changer d'affichage</h3>
      </div>

      <div className="prompter-card-icon">
        <span className="prompter-icon-source"></span>
      </div>

      <p>
        Permet de basculer entre l'affichage **texte** dans **Camera Hub**
        vers l'affichage **écran**.
      </p>

    </div>


    {/* 2 */}

    <div className="prompter-card">

      <div className="prompter-card-header">
        <span className="prompter-card-number">2</span>
        <h3>Défiler vers le haut</h3>
      </div>

      <div className="prompter-card-icon">
        <span className="prompter-arrow">↑</span>
      </div>

      <p>
        Fait défiler manuellement le texte vers le haut.
      </p>

    </div>


    {/* 3 */}

    <div className="prompter-card">

      <div className="prompter-card-header">
        <span className="prompter-card-number">3</span>
        <h3>Section précédente</h3>
      </div>

      <div className="prompter-card-icon">
        <span className="prompter-section-icon prompter-section-icon--prev"></span>
      </div>

      <p>
        Revient à la section précédente du texte dans le prompteur.
      </p>

    </div>


    {/* 4 */}

    <div className="prompter-card">

      <div className="prompter-card-header">
        <span className="prompter-card-number">4</span>
        <h3>Section suivante</h3>
      </div>

      <div className="prompter-card-icon">
        <span className="prompter-section-icon prompter-section-icon--next"></span>
      </div>

      <p>
        Passe à la section suivante du texte dans le prompteur.
      </p>

    </div>


    {/* 5 */}

    <div className="prompter-card">

      <div className="prompter-card-header">
        <span className="prompter-card-number">5</span>
        <h3>Défiler vers le bas</h3>
      </div>

      <div className="prompter-card-icon">
        <span className="prompter-arrow">↓</span>
      </div>

      <p>
        Fait défiler manuellement le texte vers le bas.
      </p>

    </div>

  </div>



</div>
