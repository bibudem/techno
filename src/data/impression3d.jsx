// Bibliothèques offrant l'impression 3D (carte et liste de /creatives/impression3d).
import React from 'react';
import Link from '@docusaurus/Link';
import {BIBLIOTHEQUES} from './bibliotheques';

const atelier = (local) => (
  <>
    <Link to="/espaces/ateliers">Atelier de fabrication</Link>, local{' '}
    <span style={{whiteSpace: 'nowrap'}}>{local}</span>.
  </>
);

// Les deux Bambu Lab partagent un guide ; ?imprimante= ouvre directement le bon onglet
const X1C = { label: 'BambuLab X1C AMS', href: '/creatives/impression3d/bambu?imprimante=x1c' };
const X2D = { label: 'BambuLab X2D AMS', href: '/creatives/impression3d/bambu?imprimante=x2d' };
const PRUSA = { label: 'Prusa i3 MK3s+', href: '/creatives/impression3d/prusa' };

// Emplacement et modèles par bibliothèque ; nom, liens et coordonnées viennent
// de la source commune src/data/bibliotheques.js.
export const bibliothequesImpression3D = [
  {...BIBLIOTHEQUES.amenagement, location: 'À côté du comptoir.', tags: [X1C]},
  {...BIBLIOTHEQUES.mathInfo, location: atelier('2432'), tags: [X1C, X2D, PRUSA]},
  {...BIBLIOTHEQUES.hubertReeves, location: atelier('A-0724.4'), tags: [X1C, PRUSA]},
  {
    ...BIBLIOTHEQUES.tgd,
    location: atelier('D-280-1'),
    tags: [
      { label: 'Elegoo Saturn 3 Ultra', href: '/creatives/impression3d/saturn' },
      X1C,
      PRUSA,
    ],
  },
  {
    ...BIBLIOTHEQUES.sante,
    location: (
      <>
        6<sup>e</sup> étage, à l'entrée de la bibliothèque.
      </>
    ),
    tags: [
      { label: 'Ultimaker S3', href: '/creatives/impression3d/ultimaker' },
      { label: 'Ultimaker 2', href: '/creatives/impression3d/ultimaker' },
    ],
  },
  {...BIBLIOTHEQUES.margueriteDYouville, tags: [X1C]},
  {...BIBLIOTHEQUES.medecineVeterinaire, tags: [X1C]},
];
