---
title: Postes Apportez Votre Appareil (AVA)
description: "Postes AVA (Apportez Votre Appareil) dans les bibliothèques de l'UdeM : branchez votre portable à un écran ultralarge, avec clavier et souris, sans réservation."
image: "/img/cover/ordinateurs.webp"
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import CarteBibliotheques from '@site/src/components/CarteBibliotheques';
import {bibliothequesAva, totalPostesAva} from '@site/src/data/ava';

<img 
  src={useBaseUrl(frontMatter.image)} 
  alt={frontMatter.title} 
  style={{
    width: "100%",
    maxWidth: "1200px",
    display: "block",
    margin: "16px auto",
    borderRadius: "8px"
  }} 
/>

<!-- :::tip Votre avis nous intéresse!
Avez-vous déjà utilisé un poste AVA? [Dites-le nous en répondant à ce sondage!](#)
::: -->

Les bibliothèques de l'UdeM mettent à votre disposition des postes **Apportez Votre Appareil (AVA)**. Ces postes vous permettent de brancher votre ordinateur portable à un écran ultralarge 21:9, via HDMI ou USB-C. Vous aurez également accès à un clavier et une souris pour une meilleure ergonomie. **Aucune réservation requise.**

---

## Comment ça fonctionne? {#comment-ca-fonctionne}

1. Trouver un poste AVA disponible dans [les bibliothèques participantes](#localisation).
2. Brancher votre ordinateur portable à l'écran à l'aide du câble **HDMI** ou **USB-C** fourni.
3. Connecter le clavier et la souris à l'aide de l'**USB-A** ou **USB-C** fourni.
4. Commencer à travailler !

--- 

## Localisation

<CarteBibliotheques
  lieux={bibliothequesAva}
  service="des postes Apportez Votre Appareil (AVA)"
  etiquetteTags="Nombre de postes"
  libelleJsonLd="Postes AVA"
  sousTitre={`${totalPostesAva} postes`}
/>

---

## Aide

Si vous rencontrez des difficultés pour utiliser les postes AVA, adressez-vous au personnel de votre bibliothèque.
