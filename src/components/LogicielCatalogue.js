import React, { useState, useEffect } from "react";
import { useHistory } from "@docusaurus/router"; // Import pour la navigation dans Docusaurus
import Papa from "papaparse";

// Composant pour afficher un logiciel
const Logiciel = ({ nom, categorie, description, libre, telechargement, distance, lien }) => {
  const history = useHistory(); // Utilisation de useHistory pour la navigation

  const handleDistanceClick = () => {
    if (distance === "Oui") {
      history.push("connexion-distance"); // Redirection correcte en Docusaurus
    }
  };

  return (
    <div className="logiciel">
      <h3>
        <a href={lien || "#"}>{nom}</a>
      </h3>
      <p><strong>Catégorie :</strong> {categorie}</p>
      <p>{description}</p>

      <div className="tags">
        {/* Tag non cliquable */}
        <span className={`tag ${libre === "Oui" ? "tag--libre" : "tag--non"}`}>
          {libre === "Oui" ? "Logiciel Libre" : ""}
        </span>

        {/* Tag non cliquable */}
        <span className={`tag ${telechargement === "Oui" ? "tag--telechargement" : "tag--non"}`}>
          {telechargement === "Oui" ? "Télécharger le logiciel" : ""}
        </span>

        {/* Tag cliquable uniquement pour "Accès à Distance" */}
        <span className={`tag ${distance === "Oui" ? "tag--distance tag--clickable" : "tag--non"}`} 
              onClick={handleDistanceClick}
              style={{ cursor: distance === "Oui" ? "pointer" : "default" }}>
          {distance === "Oui" ? "🌍 Accès à Distance" : ""}
        </span>
      </div>
    </div>
  );
};

// Composant principal : Catalogue des logiciels
const LogicielCatalogue = () => {
  const [logiciels, setLogiciels] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Toutes");

  // Charger le fichier CSV
  useEffect(() => {
    fetch("/data/logiciels.csv") 
      .then(response => response.text()) 
      .then(csv => {
        Papa.parse(csv, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            setLogiciels(result.data);
          }
        });
      })
      .catch(error => console.error("❌ Erreur lors du chargement du CSV :", error));
  }, []);

  // Extraire les catégories uniques
  const categories = ["Toutes", ...new Set(logiciels.map(l => l.categorie))];

  // Filtrer les logiciels
  const filteredLogiciels = logiciels.filter(logiciel => {
    const matchesSearch = logiciel.nom?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          logiciel.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Toutes" || logiciel.categorie === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="catalogue">
      <h2>Catalogue des Logiciels</h2>
      <p>Recherchez un logiciel ou filtrez par catégorie :</p>

      <div className="filter-container">
        {/* Barre de recherche */}
        <input
          type="text"
          placeholder="Rechercher un logiciel..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="search-bar"
        />

        {/* Sélecteur de catégorie */}
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          className="category-filter"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Liste des logiciels */}
      <div className="logiciel-list">
        {filteredLogiciels.length > 0 ? (
          filteredLogiciels.map((logiciel, index) => <Logiciel key={index} {...logiciel} />)
        ) : (
          <p>Aucun logiciel trouvé.</p>
        )}
      </div>
    </div>
  );
};

export default LogicielCatalogue;