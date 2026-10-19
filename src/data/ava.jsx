// Postes Apportez Votre Appareil (AVA) par bibliothèque (carte et liste de
// /informatique/ava). Nom, liens et coordonnées : src/data/bibliotheques.js.
import React from 'react';
import {BIBLIOTHEQUES} from './bibliotheques';

const postes = (n) => [{label: `${n} postes`, nombre: n}];

export const bibliothequesAva = [
  {...BIBLIOTHEQUES.amenagement, tags: postes(2), details: ['Section arrière']},
  {
    ...BIBLIOTHEQUES.droit,
    tags: postes(17),
    details: [
      '14 dans les salles de travail pour cycles supérieurs (10 avec écran standard, 4 avec écran ultralarge 21:9)',
      '3 dans la salle de lecture',
    ],
  },
  {
    ...BIBLIOTHEQUES.hubertReeves,
    tags: postes(6),
    details: ['5 à la cartothèque', '1 à l’entrée A'],
  },
  {
    ...BIBLIOTHEQUES.lsh,
    tags: postes(20),
    details: [
      '1 au service Accessibilité (local 1085-2)',
      <>2 au 1<sup>er</sup> étage</>,
      <>4 au 2<sup>e</sup> étage</>,
      <>4 au 3<sup>e</sup> étage</>,
      <>8 au 5<sup>e</sup> étage</>,
      <>1 au 6<sup>e</sup> étage</>,
    ],
  },
  {...BIBLIOTHEQUES.mathInfo, tags: postes(6), details: ['Dans la zone de silence']},
  {...BIBLIOTHEQUES.medecineVeterinaire, tags: postes(2), details: ['Dans l’aire publique']},
  {
    ...BIBLIOTHEQUES.sante,
    tags: postes(5),
    details: [<>4 au 2<sup>e</sup> étage</>, <>1 au 3<sup>e</sup> étage</>],
  },
  {
    ...BIBLIOTHEQUES.tgd,
    tags: postes(3),
    details: [<>2 au 2<sup>e</sup> étage, section de la rotonde</>, <>1 au 3<sup>e</sup> étage</>],
  },
];

// Nombre total de postes, pour l'en-tête de la liste
export const totalPostesAva = bibliothequesAva.reduce(
  (total, lieu) => total + lieu.tags.reduce((n, tag) => n + (tag.nombre || 0), 0),
  0,
);
