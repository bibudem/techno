---
id : decoupeuse
title : Découpeuse
image: "/img/cover/vinyl.webp"
---

import CardGrid from '@site/src/components/CardGrid';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

<img 
  src={useBaseUrl(frontMatter.image)} 
  alt=""
  style={{
    width: "100%",
    maxWidth: "1200px",
    display: "block",
    margin: "16px auto",
    borderRadius: "8px"
  }} 
/>

# Découpeuse

Les découpeuses numériques permettent de créer des motifs 2D sur divers matériaux. Les utilisations les plus fréquentes sont la découpe de vinyle et de tissu. Il est également possible de graver du métal et de dessiner sur du papier ou du carton.

L’outil (lame, pointe de gravure, ou crayon) est fixé sur un axe. Le matériau à découper est, en règle générale, posé sur un support adhésif, appelé tapis de coupe. Ce dernier est entraîné par des rouleaux d’avant en arrière. La combinaison des déplacements de l’outil sur son axe et du tapis de coupe permettent de créer des motifs, comme des reproductions d’images, du texte, etc.


<CardGrid
  items={[
    {
      title: "Silhouette Cameo 4",
      description:  `
      La découpeuse Silhouette Cameo 4 est disponible à la Bibliothèque Hubert Reeves`,
      link: "/creatives/decoupeuse/cameo",
      icon: "Scissors",
    },
    {
      title: "Cricut Maker",
      description: `
      La découpeuse Cricut Maker est disponible à la Bibliothèque de mathématiques et informatique`,
      link: "/creatives/decoupeuse/cricut",
      icon: "Scissors",
    },
    {
      title: "Brother SDX225",
      description: `
      La découpeuse Silhouette Brother SDX225 est disponible à la Bibliothèque Thérèse Gouin Décarie`,
      link: "/creatives/decoupeuse/brother",
      icon: "Scissors",
    },
  ]}
/>

## Formations et soutien

Quel que soit votre niveau de connaissance, on est là pour vous aider à réaliser vos projets!

<CardGrid
  items={[
    {
      title: "Réservez une consultation",
      description: "Avant votre première visite, on vous invite à réserver une rencontre avec un membre de notre équipe. C’est l’occasion de poser vos questions et de bien planifier votre projet.",
      link: "https://outlook.office.com/book/studiobib@umontreal.ca/s/hLyU7Bn5BUO-VCbnXdiHyA2?ismsaljsauthenabled",
    },
    {
      title: "Participez à une formation",
      description: "On offre aussi des formations pratiques tout au long de l’année pour vous familiariser avec les découpeuses.",
      link: "https://calendrier.bib.umontreal.ca/calendar?t=g&q=d%C3%A9coupeuse&cid=7690&cal=7690&inc=0",
    },
  ]}
/>
