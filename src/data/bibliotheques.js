// Bibliothèques de l'Université de Montréal : source unique pour les cartes
// (CarteBibliotheques) et les listes de lieux du site.
// - titleLink : fiche de la bibliothèque sur bib.umontreal.ca
// - mapLink : itinéraire Google Maps
// - coords : [latitude, longitude] (liens Google Maps des fiches, ou OpenStreetMap)
// - region : vue de la carte où apparaît la bibliothèque (Montréal par défaut)

const ESPACES = 'https://bib.umontreal.ca/espaces/';
const RECHERCHE_MAPS = 'https://www.google.com/maps/search/?api=1&query=';

export const BIBLIOTHEQUES = {
  amenagement: {
    title: 'Aménagement',
    titleLink: `${ESPACES}#amenagement`,
    mapLink: 'https://maps.app.goo.gl/irzr8ofQRdBNMFd86',
    coords: [45.5046547, -73.621263],
  },
  droit: {
    title: 'Droit',
    titleLink: `${ESPACES}#droit`,
    mapLink: `${RECHERCHE_MAPS}${encodeURIComponent('Bibliothèque de droit Université de Montréal')}`,
    // Pavillon Maximilien-Caron (OpenStreetMap)
    coords: [45.4986407, -73.616983],
  },
  hubertReeves: {
    title: 'Hubert-Reeves',
    titleLink: `${ESPACES}#Hubert-reeves`,
    mapLink: 'https://maps.app.goo.gl/T6E9TaKNk6dDgrds9',
    coords: [45.5231104, -73.6196605],
  },
  lsh: {
    title: 'Lettres et sciences humaines',
    titleLink: `${ESPACES}#lsh`,
    mapLink: 'https://maps.app.goo.gl/6HsLMAxoBWpQZgcD8',
    // Pavillon Samuel-Bronfman (OpenStreetMap)
    coords: [45.4993923, -73.6165279],
  },
  mathInfo: {
    title: 'Mathématiques et informatique',
    titleLink: `${ESPACES}#math-info`,
    mapLink: 'https://maps.app.goo.gl/Jwg5Q34WrjR7vhGV8',
    coords: [45.5010087, -73.6157778],
  },
  tgd: {
    title: 'Thérèse-Gouin-Décarie',
    titleLink: `${ESPACES}#tgd`,
    mapLink: 'https://maps.app.goo.gl/t8GE4RdMBEJiHJtd8',
    coords: [45.5106865, -73.6115803],
  },
  sante: {
    title: 'Santé',
    titleLink: `${ESPACES}#sante`,
    mapLink: 'https://maps.app.goo.gl/KVE9w3JN2BKp278q8',
    coords: [45.5025116, -73.6158328],
  },
  margueriteDYouville: {
    title: "Marguerite d'Youville",
    titleLink: `${ESPACES}#marguerite-d-youville`,
    mapLink: 'https://g.co/kgs/q8wfQY2',
    coords: [45.5096654, -73.6190605],
  },
  medecineVeterinaire: {
    title: 'Médecine vétérinaire',
    titleLink: `${ESPACES}#medecine-veterinaire`,
    mapLink: `${RECHERCHE_MAPS}${encodeURIComponent('Bibliothèque de médecine vétérinaire Université de Montréal')}`,
    coords: [45.6215436, -72.9657664],
    region: 'Saint-Hyacinthe',
  },
};
