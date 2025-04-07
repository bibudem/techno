import React, { useState, useEffect } from "react";
import { useHistory } from "@docusaurus/router";
import Papa from "papaparse";
import {
  PlugsConnected,
  LockOpen,
  MapPin,
  BuildingOffice,
  LinkSimple
} from "@phosphor-icons/react";
import "./LogicielCatalogue.css";

// Composant pour afficher un logiciel
const Logiciel = ({ nom, categorie, description, libre, distance, lien, bibliotheques = "" }) => {
  const history = useHistory();

  const handleDistanceClick = () => {
    if (distance === "Oui") {
      history.push("connexion-distance");
    }
  };

  return (
    <div className="logiciel">
     <h3>{nom}</h3>
     <p className="categorie-label">{categorie}</p>
      <p>{description}</p>

      <div className="tags">
        {libre === "Oui" && (
          <span className="tag tag--libre tag--clickable">
            <LockOpen size={16} weight="bold" className="icon" />
            Logiciel Libre
          </span>
        )}

        {distance === "Oui" && (
          <span
            className="tag tag--distance tag--clickable"
            onClick={handleDistanceClick}
          >
            <PlugsConnected size={16} weight="bold" className="icon" />
            Accès à Distance
          </span>
        )}

        {lien && (
          <a
            className="tag tag--lien tag--clickable guide-link"
            href={lien}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkSimple size={16} weight="bold" />
            Guides
          </a>
        )}
      </div>

      {bibliotheques && (
        <div className="bibliotheques-list">
          {bibliotheques.split(";").map((biblio, i) => (
            <span key={i} className="biblio-tag">
              <MapPin size={14} className="icon" /> {biblio.trim()}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

// Composant principal : Catalogue des logiciels
const LogicielCatalogue = () => {
  const [logiciels, setLogiciels] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Toutes");

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

  const categories = ["Toutes", ...new Set(logiciels.map(l => l.categorie))];

  const filteredLogiciels = logiciels.filter(logiciel => {
    const matchesSearch = logiciel.nom?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          logiciel.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Toutes" || logiciel.categorie === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="catalogue">
      <p>Recherchez un logiciel ou filtrez par catégorie :</p>

      <div className="filter-container">
        <input
          type="text"
          placeholder="Rechercher un logiciel..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="search-bar"
        />

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