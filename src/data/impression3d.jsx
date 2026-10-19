// Bibliothèques offrant l'impression 3D.
// Source unique pour les fiches et la carte de la page /creatives/impression3d.
import React from 'react';
import Link from '@docusaurus/Link';

const atelier = (local) => (
  <>
    <Link to="/espaces/ateliers">Atelier de fabrication</Link>, local {local}.
  </>
);

// Les deux Bambu Lab partagent un guide ; ?imprimante= ouvre directement le bon onglet
const X1C = { label: 'BambuLab X1C AMS', href: '/creatives/impression3d/bambu?imprimante=x1c' };
const X2D = { label: 'BambuLab X2D AMS', href: '/creatives/impression3d/bambu?imprimante=x2d' };
const PRUSA = { label: 'Prusa i3 MK3s+', href: '/creatives/impression3d/prusa' };

// coords : [latitude, longitude], tirées des liens Google Maps de chaque fiche
// (ou d'OpenStreetMap quand la fiche n'a pas de lien précis).
// region : vue de la carte où apparaît la bibliothèque (Montréal par défaut).
export const bibliothequesImpression3D = [
  {
    title: 'Aménagement',
    titleLink: 'https://bib.umontreal.ca/espaces/#amenagement',
    location: 'À côté du comptoir.',
    mapLink: 'https://maps.app.goo.gl/irzr8ofQRdBNMFd86',
    coords: [45.5046547, -73.621263],
    tags: [X1C],
  },
  {
    title: 'Mathématiques et informatique',
    titleLink: 'https://bib.umontreal.ca/espaces/#math-info',
    location: atelier('2432'),
    mapLink: 'https://maps.app.goo.gl/Jwg5Q34WrjR7vhGV8',
    coords: [45.5010087, -73.6157778],
    tags: [X1C, X2D, PRUSA],
  },
  {
    title: 'Hubert-Reeves',
    titleLink: 'https://bib.umontreal.ca/espaces/#Hubert-reeves',
    location: atelier('A-0724.4'),
    mapLink: 'https://maps.app.goo.gl/T6E9TaKNk6dDgrds9',
    coords: [45.5231104, -73.6196605],
    tags: [X1C, PRUSA],
  },
  {
    title: 'Thérèse-Gouin-Décarie',
    titleLink: 'https://bib.umontreal.ca/espaces/#tgd',
    location: atelier('D-280-1'),
    mapLink: 'https://maps.app.goo.gl/t8GE4RdMBEJiHJtd8',
    coords: [45.5106865, -73.6115803],
    tags: [
      { label: 'Elegoo Saturn 3 Ultra', href: '/creatives/impression3d/saturn' },
      X1C,
      PRUSA,
    ],
  },
  {
    title: 'Santé',
    titleLink: 'https://bib.umontreal.ca/espaces/#sante',
    location: (
      <>
        6<sup>e</sup> étage, à l'entrée de la bibliothèque.
      </>
    ),
    mapLink: 'https://maps.app.goo.gl/KVE9w3JN2BKp278q8',
    coords: [45.5025116, -73.6158328],
    tags: [
      { label: 'Ultimaker S3', href: '/creatives/impression3d/ultimaker' },
      { label: 'Ultimaker 2', href: '/creatives/impression3d/ultimaker' },
    ],
  },
  {
    title: "Marguerite d'Youville",
    titleLink: 'https://bib.umontreal.ca/espaces/#marguerite-d-youville',
    mapLink: 'https://g.co/kgs/q8wfQY2',
    coords: [45.5096654, -73.6190605],
    tags: [X1C],
  },
  {
    title: 'Médecine vétérinaire',
    titleLink: 'https://bib.umontreal.ca/espaces/#medecine-veterinaire',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=Biblioth%C3%A8que+de+m%C3%A9decine+v%C3%A9t%C3%A9rinaire+Universit%C3%A9+de+Montr%C3%A9al',
    coords: [45.6215436, -72.9657664],
    region: 'Saint-Hyacinthe',
    tags: [X1C],
  },
];
