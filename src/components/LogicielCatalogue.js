import React, { useState, useEffect } from "react";
import Link from "@docusaurus/Link";
import Papa from "papaparse";
import {
  PlugsConnected,
  LockOpen,
  MapPin,
  LinkSimple
} from "@phosphor-icons/react";
import { isExternalLink } from "@site/src/utils/links";
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
  "Santé": "https://bib.umontreal.ca/espaces/#sante",
  "Aménagement": "https://bib.umontreal.ca/espaces/#amenagement",
  "Tous les postes informatiques des bibliothèques": "https://bib.umontreal.ca/espaces",
  "Toutes les bibliothèques - sur ordinateurs identifiés et de numérisation": "https://bib.umontreal.ca/espaces",
  "Lettres et sciences humaines (Service accessibilité)": "https://bib.umontreal.ca/espaces/#lsh",
  "Lettres et sciences humaines ordinateurs identifiés «Données statistiques» du 3e étage": "https://bib.umontreal.ca/espaces/#lsh",
  "Mathématiques et informatique local 2486": "https://bib.umontreal.ca/espaces/#math-info",
  "Campus de Laval": "https://bib.umontreal.ca/espaces/#laval"
};

// Composant pour afficher un logiciel
const Logiciel = ({ nom, categorie, description, libre, distance, lien, bibliotheques = "" }) => {
  const hasGuide = Boolean(lien);
  const isExternalGuide = isExternalLink(lien);

  return (
    <div className="logiciel">
      <h3>
        {hasGuide ? (
          isExternalGuide ? (
            <a
              className="logiciel-title-link"
              href={lien}
              target="_blank"
              rel="noopener noreferrer"
            >
              {nom}
            </a>
          ) : (
            <Link className="logiciel-title-link" to={lien}>
              {nom}
            </Link>
          )
        ) : (
          nom
        )}
      </h3>
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

        {hasGuide && (
          isExternalGuide ? (
            <a
              className="tag tag--clickable guide-link"
              href={lien}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkSimple size={16} weight="bold" />
              Guides
            </a>
          ) : (
            <Link className="tag tag--clickable guide-link" to={lien}>
              <LinkSimple size={16} weight="bold" />
              Guides
            </Link>
          )
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
  const [etat, setEtat] = useState("chargement"); // chargement | pret | erreur

  useEffect(() => {
    let annule = false;

    fetch("/data/logiciels.csv")
      .then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.text();
      })
      .then(csv => {
        const result = Papa.parse(csv, { header: true, skipEmptyLines: true });
        if (annule) return;
        setLogiciels(result.data);
        setEtat("pret");
      })
      .catch(error => {
        console.error("Erreur lors du chargement du catalogue :", error);
        if (!annule) setEtat("erreur");
      });

    return () => {
      annule = true;
    };
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
          type="search"
          placeholder="Rechercher un logiciel…"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          aria-label="Rechercher un logiciel"
          className="search-bar"
        />

        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          aria-label="Filtrer les logiciels par catégorie"
          className="category-filter"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Nombre de résultats, annoncé aux lecteurs d'écran à chaque filtrage */}
      <p className="catalogue-count" role="status">
        {etat === "pret" &&
          `${filteredLogiciels.length} logiciel${filteredLogiciels.length > 1 ? "s" : ""} trouvé${filteredLogiciels.length > 1 ? "s" : ""}`}
      </p>

      <div className="logiciel-list">
        {etat === "chargement" ? (
          <p className="catalogue-empty" role="status">Chargement du catalogue…</p>
        ) : etat === "erreur" ? (
          <p className="catalogue-empty" role="alert">Le catalogue n’a pas pu être chargé. Veuillez réessayer plus tard.</p>
        ) : filteredLogiciels.length > 0 ? (
          filteredLogiciels.map((logiciel) => <Logiciel key={logiciel.nom} {...logiciel} />)
        ) : (
          <p className="catalogue-empty">
            {searchQuery.trim()
              ? `Aucun logiciel ne correspond à « ${searchQuery.trim()} ».`
              : "Aucun logiciel dans cette catégorie."}{" "}
            Vérifiez l’orthographe ou{" "}
            <a href="mailto:studio@bib.umontreal.ca">écrivez-nous</a> si vous cherchez un logiciel précis.
          </p>
        )}
      </div>
    </div>
  );
};

export default LogicielCatalogue;
