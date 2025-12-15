---
title : Logiciels
id: logiciels
# hide_table_of_contents: true
image: "/img/cover/logiciels.webp"
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

<img 
  src={useBaseUrl(frontMatter.image)} 
  alt={frontMatter.title} 
  style={{
    width: "100%",
    maxWidth: "1200px",
    display: "block",
    margin: "16px auto",
    borderRadius: "8px"
  }} 
/>

import LogicielCatalogue from '@site/src/components/LogicielCatalogue';
import CardGrid from "@site/src/components/CardGrid";

# Catalogue des logiciels
L'offre logicielle disponible sur les ordinateurs des bibliothèques de l'UdeM va des navigateurs internet les plus populaires, à la suite bureautique Microsoft Office, en passant par plusieurs logiciels spécialisés. Vous trouverez ici la liste non-exhaustive des logiciels offerts à la communauté UdeM.

<Link to="/informatique/connexion-distance" className="button button--primary">
  Connectez-vous à distance à nos logiciels
</Link>

<Link to="#chercher-un-logiciel" className="button button--secondary">
  Chercher un logiciel
</Link>

---

## Les logiciels les plus demandés {#logiciels-demandes}

<CardGrid
  items={[
    {
      title: "Office 365",
      description: "",
      link: "/informatique/logiciels/office",
      icon : "",
      petit: true,
    },
    {
      title: "Zotero",
      description: "",
      link: "/informatique/logiciels/zotero",
      icon : "",
      petit: true,
    },
    {
      title: "EndNote",
      description: "",
      link: "/informatique/logiciels/endnote",
      icon : "",
      petit: true,
    },
    {
      title: "Antidote",
      description: "",
      link: "/informatique/logiciels/antidote",
      icon : "",
      petit: true,
    },
    {
      title: "SPSS",
      description: "",
      link: "/informatique/logiciels/spss",
      icon : "",
      petit: true,
    },
    {
      title: "QDA Miner",
      description: "",
      link: "/informatique/logiciels/qdaminer",
      icon : "",
      petit: true,
    },
  ]}
/>


---

## Chercher un logiciel

Sélectionnez un logiciel pour afficher sa description, ses emplacements d’utilisation et, si disponible, ses guides d’aide. Certains logiciels peuvent être téléchargés sur un ordinateur personnel via un lien dédié.

<LogicielCatalogue />