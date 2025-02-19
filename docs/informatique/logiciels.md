---
title : Logiciels
pagination_next: null
pagination_prev: null
---

import React, { useState } from 'react';

export const Logiciel = ({ nom, categorie, description, libre, telechargement, distance, lien }) => (
  <div className="logiciel">
    <h3>
      <a href={lien || "#"}>{nom}</a>
    </h3>
    <p><strong>Catégorie :</strong> {categorie}</p>
    <p>{description}</p>
    <div className="tags">
      {libre === "✅" && <span className="tag tag--libre">Logiciel Libre</span>}
      {telechargement === "✅" && <span className="tag tag--telechargement">Téléchargeable</span>}
      {distance === "✅" && <span className="tag tag--distance">Accès à Distance</span>}
    </div>
  </div>
);

export const LogicielCatalogue = () => {
const logiciels = [
  { nom: "Abbyy FineReader", categorie: "Accessibilité", description: "Reconnaissance optique de caractères", libre: "❌", telechargement: "❌", distance: "❌", lien: null },

  { nom: "Adobe Acrobat Pro", categorie: "Bureautique", description: "Création et modification de fichiers PDF", libre: "❌", telechargement: "❌", distance: "✅", lien: "/docs/acrobat" },
  { nom: "Adobe After Effects", categorie: "Création et édition", description: "Effets spéciaux et animation", libre: "❌", telechargement: "❌", distance: "✅", lien: "/docs/adobe" },
  { nom: "Adobe Animate", categorie: "Création et édition", description: "Animation", libre: "❌", telechargement: "❌", distance: "✅", lien: "/docs/adobe" },
  { nom: "Adobe Audition", categorie: "Création et édition", description: "Montage et mixage audio", libre: "❌", telechargement: "❌", distance: "✅", lien: "/docs/adobe" },
  { nom: "Adobe Character Animator", categorie: "Création et édition", description: "Animation de personnages", libre: "❌", telechargement: "❌", distance: "✅", lien: "/docs/adobe" },
  { nom: "Adobe Encoder", categorie: "Création et édition", description: "Compression vidéo", libre: "❌", telechargement: "❌", distance: "✅", lien: "/docs/adobe" },
  { nom: "Adobe Illustrator", categorie: "Création et édition", description: "Dessin vectoriel", libre: "❌", telechargement: "❌", distance: "✅", lien: "/docs/adobe" },
  { nom: "Adobe InCopy", categorie: "Bureautique", description: "Traitement de texte", libre: "❌", telechargement: "❌", distance: "✅", lien: "/docs/adobe" },
  { nom: "Adobe InDesign", categorie: "Création et édition", description: "Mise en page", libre: "❌", telechargement: "❌", distance: "✅", lien: "/docs/adobe" },
  { nom: "Adobe Lightroom & Lightroom Classic", categorie: "Création et édition", description: "Retouche photo", libre: "❌", telechargement: "❌", distance: "✅", lien: "/docs/adobe" },
  { nom: "Adobe Photoshop", categorie: "Création et édition", description: "Retouche photo et création graphique", libre: "❌", telechargement: "❌", distance: "✅", lien: "/docs/adobe" },
  { nom: "Adobe Premiere Pro", categorie: "Création et édition", description: "Montage vidéo", libre: "❌", telechargement: "❌", distance: "✅", lien: "/docs/adobe" },
  { nom: "Adobe Premiere Rush", categorie: "Création et édition", description: "Montage vidéo", libre: "❌", telechargement: "❌", distance: "✅", lien: "/docs/adobe" },
  { nom: "Anaconda", categorie: "Traitement de données", description: "Distribution de Python", libre: "✅", telechargement: "✅", distance: "❌", lien: null },
  { nom: "ArcGIS & ArcGIS Pro", categorie: "Système dʼinformation géographique", description: "Cartographie", libre: "❌", telechargement: "❌", distance: "✅", lien: "/docs/arcgis" },
  { nom: "Antidote", categorie: "Correction grammaticale et orthographique", description: "Correction grammaticale et orthographique", libre: "❌", telechargement: "❌", distance: "✅", lien: "/docs/antidote" },
  { nom: "AutoCAD", categorie: "Bureautique", description: "Logiciel de conception assistée par ordinateur (CAO)", libre: "❌", telechargement: "❌", distance: "✅", lien: null },
  { nom: "Balabolka", categorie: "Accessibilité", description: "Synthèse vocale", libre: "❌", telechargement: "❌", distance: "✅", lien: null },
  { nom: "Beyond 20/20", categorie: "Analyse de données", description: "Analyse de données statistiques", libre: "❌", telechargement: "❌", distance: "❌", lien: null },
  { nom: "Bureau à distance", categorie: "Accessibilité", description: "Accès à distance aux ordinateurs", libre: "❌", telechargement: "❌", distance: "✅", lien: "/docs/bureaudistance" },
  { nom: "Caris Easy View", categorie: "Système dʼinformation géographique", description: "Visualisation de données géographiques", libre: "❌", telechargement: "❌", distance: "✅", lien: null },
  { nom: "ChemDraw", categorie: "Sciences", description: "Dessin de structures chimiques", libre: "❌", telechargement: "❌", distance: "✅", lien: "/docs/chemdraw" },
  { nom: "CmapTools", categorie: "Visualisation de données", description: "Cartes conceptuelles", libre: "❌", telechargement: "❌", distance: "✅", lien: null },
  { nom: "DaVinci Resolve", categorie: "Création et édition", description: "Montage vidéo et correction colorimétrique", libre: "❌", telechargement: "✅", distance: "❌", lien: null },
  { nom: "Dragon Naturally Speaking", categorie: "Accessibilité", description: "Reconnaissance vocale", libre: "❌", telechargement: "❌", distance: "❌", lien: null },
  { nom: "Duxbury Braille Translator", categorie: "Accessibilité", description: "Traduction de texte en braille", libre: "❌", telechargement: "❌", distance: "❌", lien: null },
  { nom: "EndNote", categorie: "Gestion bibliographique", description: "Gestion de références bibliographiques", libre: "❌", telechargement: "✅", distance: "✅", lien: "/docs/endnote" },
  { nom: "Finale NotePad", categorie: "Création et édition", description: "Édition de partitions musicales", libre: "❌", telechargement: "❌", distance: "❌", lien: null },
  { nom: "Gaussian 16", categorie: "Sciences", description: "Calculs de chimie quantique", libre: "❌", telechargement: "❌", distance: "❌", lien: null },
  { nom: "Gimp 2", categorie: "Création et édition", description: "Édition d'images", libre: "✅", telechargement: "✅", distance: "❌", lien: "/docs/gimp" },
  { nom: "Google Earth Pro", categorie: "Système dʼinformation géographique", description: "Visualisation de la Terre", libre: "✅", telechargement: "❌", distance: "❌", lien: "/docs/earthpro" },
  { nom: "HyperChem", categorie: "Sciences", description: "Modélisation moléculaire", libre: "❌", telechargement: "❌", distance: "❌", lien: null },
  { nom: "Inkscape", categorie: "Création et édition", description: "Dessin vectoriel", libre: "✅", telechargement: "✅", distance: "❌", lien: null },
  { nom: "JabRef", categorie: "Gestion bibliographique", description: "Gestion de références bibliographiques", libre: "❌", telechargement: "❌", distance: "❌", lien: null },
  { nom: "JAWS", categorie: "Accessibilité", description: "Lecteur d'écran pour les personnes aveugles ou malvoyantes", libre: "❌", telechargement: "❌", distance: "❌", lien: null },
  { nom: "Krita", categorie: "Création et édition", description: "Dessin et peinture numérique", libre: "✅", telechargement: "✅", distance: "❌", lien: null },
  { nom: "Lexibar LP5", categorie: "Accessibilité", description: "Clavier virtuel pour les personnes avec des besoins spécifiques", libre: "❌", telechargement: "❌", distance: "❌", lien: null },
  { nom: "Mathematica", categorie: "Traitement de données", description: "Calcul formel et symbolique", libre: "❌", telechargement: "❌", distance: "✅", lien: "/docs/mathematica" },
  { nom: "Meshroom", categorie: "Création et édition", description: "Reconstruction 3D à partir de photos", libre: "❌", telechargement: "✅", distance: "❌", lien: null },
  { nom: "Microsoft Access", categorie: "Bureautique", description: "Gestion de bases de données relationnelles", libre: "❌", telechargement: "✅", distance: "✅", lien: "/docs/office" },
  { nom: "Microsoft Excel", categorie: "Bureautique", description: "Tableur pour la gestion de données et calculs", libre: "❌", telechargement: "✅", distance: "✅", lien: "/docs/office" },
  { nom: "Microsoft Office 365", categorie: "Bureautique", description: "Suite bureautique en ligne", libre: "❌", telechargement: "✅", distance: "✅", lien: "/docs/office" },
  { nom: "Microsoft OneDrive", categorie: "Bureautique", description: "Stockage en ligne et partage de fichiers", libre: "❌", telechargement: "✅", distance: "✅", lien: "/docs/office" },
  { nom: "Microsoft OneNote", categorie: "Bureautique", description: "Prise de notes et organisation", libre: "❌", telechargement: "❌", distance: "✅", lien: "/docs/office" },
  { nom: "Microsoft Powerpoint", categorie: "Bureautique", description: "Présentation et création de diaporamas", libre: "❌", telechargement: "✅", distance: "✅", lien: "/docs/office" },
  { nom: "Microsoft Teams", categorie: "Bureautique", description: "Plateforme de communication et de collaboration", libre: "❌", telechargement: "✅", distance: "✅", lien: "/docs/office" },
  { nom: "Microsoft Word", categorie: "Bureautique", description: "Traitement de texte pour la création de documents", libre: "❌", telechargement: "✅", distance: "✅", lien: "/docs/office" },
  { nom: "MuseScore", categorie: "Création et édition", description: "Composition musicale et notation", libre: "❌", telechargement: "❌", distance: "❌", lien: null },
  { nom: "Natural Reader", categorie: "Accessibilité", description: "Synthèse vocale", libre: "❌", telechargement: "❌", distance: "✅", lien: null },
  { nom: "OpenRefine", categorie: "Traitement de données", description: "Nettoyage et transformation de données", libre: "✅", telechargement: "✅", distance: "❌", lien: null },
  { nom: "Microsoft Publisher", categorie: "Bureautique", description: "Création de publications et de supports marketing", libre: "❌", telechargement: "✅", distance: "✅", lien: "/docs/office" },
  { nom: "PyMOL", categorie: "Sciences", description: "Visualisation et analyse de structures moléculaires en 3D", libre: "❌", telechargement: "❌", distance: "❌", lien: null },
  { nom: "QTGrace", categorie: "Traitement de données", description: "Création et édition de graphiques scientifiques", libre: "❌", telechargement: "❌", distance: "❌", lien: null },
  { nom: "QDA Miner", categorie: "Traitement de données", description: "Analyse de données qualitatives", libre: "❌", telechargement: "❌", distance: "❌", lien: null },
  { nom: "QGIS", categorie: "Système dʼinformation géographique", description: "Cartographie et analyse spatiale", libre: "❌", telechargement: "✅", distance: "❌", lien: null },
  { nom: "R & R Studio", categorie: "Analyse statistique", description: "Environnement de développement intégré (IDE) pour R", libre: "❌", telechargement: "✅", distance: "✅", lien: null },
  { nom: "Reaper", categorie: "Création et édition", description: "Enregistrement audio multipiste et production musicale", libre: "❌", telechargement: "❌", distance: "✅", lien: null },
  { nom: "SAS", categorie: "Analyse statistique", description: "Logiciel d'analyse de données statistiques", libre: "❌", telechargement: "❌", distance: "✅", lien: null },
  { nom: "STATA", categorie: "Analyse statistique", description: "Logiciel d'analyse statistique pour la recherche et les études", libre: "❌", telechargement: "❌", distance: "✅", lien: null },
  { nom: "TexMaker", categorie: "Bureautique", description: "Éditeur LaTeX pour la création de documents scientifiques", libre: "❌", telechargement: "❌", distance: "✅", lien: null },
  { nom: "WordStat 8", categorie: "Traitement de données", description: "Analyse de texte pour la recherche qualitative", libre: "❌", telechargement: "❌", distance: "✅", lien: null },
  { nom: "Zotero", categorie: "Gestion bibliographique", description: "Gestionnaire de références bibliographiques", libre: "✅", telechargement: "✅", distance: "❌", lien: null },
  { nom: "Zoom", categorie: "Communication", description: "Plateforme de visioconférence", libre: "❌", telechargement: "✅", distance: "❌", lien: null },
  { nom: "Zoomtext", categorie: "Accessibilité", description: "Logiciel d'agrandissement d'écran et de lecture pour les personnes malvoyantes", libre: "✅", telechargement: "❌", distance: "❌", lien: null }
];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Toutes');

  const categories = ['Toutes', ...new Set(logiciels.map(l => l.categorie))];

  const filteredLogiciels = logiciels.filter(logiciel => {
    const matchesSearch = logiciel.nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          logiciel.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Toutes' || logiciel.categorie === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="catalogue">
      <h2>Catalogue des Logiciels</h2>
      <p>L'offre logicielle disponible sur les ordinateurs des bibliothèques de l'Université de Montréal va des navigateurs Internet les plus populaires, à la suite bureautique Microsoft Office, en passant par plusieurs logiciels spécialisés. Ici-bas, la liste non-exhaustive des logiciels offerts à la communauté de l'Université de Montréal.</p>

      {/* Barre de recherche */}
      <input
        type="text"
        placeholder="Rechercher un logiciel..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className="search-bar"
      />

      {/* Filtre par catégorie */}
      Filter les logiciels par catégories :
      <select
        value={selectedCategory}
        onChange={e => setSelectedCategory(e.target.value)}
        className="category-filter"
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>

      {/* Liste des logiciels */}
      <div className="logiciel-list">
        {filteredLogiciels.map((logiciel, index) => (
          <Logiciel key={index} {...logiciel} />
        ))}
      </div>
    </div>
  );
};

export default LogicielCatalogue;