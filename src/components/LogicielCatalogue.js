import React, { useState, useEffect } from "react";
import { useHistory } from "@docusaurus/router";
import Papa from "papaparse";
import {
  PlugsConnected,
  LockOpen,
  MapPin,
  LinkSimple
} from "@phosphor-icons/react";
import "./LogicielCatalogue.css";

// Mapping entre noms de bibliothèques et leurs liens externes
const biblioLinks = {
  "Lettres et sciences humaines": "https://bib.umontreal.ca/espaces/#lsh",
  "Mathématiques et informatique": "https://bib.umontreal.ca/espaces/#math-info",
  "Droit": "https://bib.umontreal.ca/espaces/#droit",
  "Médecine vétérinaire": "https://bib.umontreal.ca/espaces/#medecine-veterinaire",
  "Musique": "https://bib.umontreal.ca/espaces/#musique",
  "Hubert-Reeves": "https://bib.umontreal.ca/espaces/#Hubert-reeves",
  "Thérèse-Gouin-Décarie": "https://bib.umontreal.ca/espaces/#tgd",
  "Santé": "https://bib.umontreal.ca/bibliotheques/sante",
  "Aménagement": "https://bib.umontreal.ca/bibliotheques/amenagement",
  "Tous les postes informatiques des bibliothèques": "https://bib.umontreal.ca/espaces",
  "Toutes les bibliothèques - sur ordinateurs identifiés et de numérisation": "https://bib.umontreal.ca/espaces",
  "Lettres et sciences humaines (Service accessibilité)": "https://bib.umontreal.ca/espaces/#lsh",
  "Lettres et sciences humaines ordinateurs identifiés «Données statistiques» du 3e étage": "https://bib.umontreal.ca/espaces/#lsh",
  "Mathématiques et informatique local 2486": "https://bib.umontreal.ca/espaces/#math-info",
  "Campus de Laval": "https://bib.umontreal.ca/espaces/#laval"
};

// Composant pour afficher un logiciel
const Logiciel = ({ nom, categorie, description, libre, distance, lien, bibliotheques = "" }) => {
  const history = useHistory();

  return (
    <div className="logiciel">
      <h3>{nom}</h3>
      <p className="categorie-label">{categorie}</p>
      <p>{description}</p>

      <div className="tags">
        {libre === "Oui" && (
          <span className="tag tag--libre">
            <LockOpen size={16} weight="bold" className="icon" />
            Logiciel Libre
          </span>
        )}

        {distance === "Oui" && (
          <a
            className="tag tag--distance tag--clickable"
            href="/informatique/connexion-distance"
          >
            <PlugsConnected size={16} weight="bold" className="icon" />
            Accès à Distance
          </a>
        )}

        {lien && (
          <a
            className="tag tag--clickable guide-link"
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
          {bibliotheques.split(";").map((biblio, i) => {
            const nom = biblio.trim();
            const url = biblioLinks[nom];
            return url ? (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="biblio-tag"
              >
                <MapPin size={14} className="icon" /> {nom}
              </a>
            ) : (
              <span key={i} className="biblio-tag">
                <MapPin size={14} className="icon" /> {nom}
              </span>
            );
          })}
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
    const matchesSearch =
      logiciel.nom?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      logiciel.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "Toutes" || logiciel.categorie === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="catalogue">
      <p><strong>Recherchez un logiciel ou filtrez par catégorie :</strong></p>

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