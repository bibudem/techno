---
title : Logiciels
id: Logiciels
hide_table_of_contents: true
image: "/img/cover/logiciels.jpg"
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

# Catalogue des Logiciels
L'offre logicielle disponible sur les ordinateurs des bibliothèques de l'Université de Montréal va des navigateurs Internet les plus populaires, à la suite bureautique Microsoft Office, en passant par plusieurs logiciels spécialisés. Ici-bas, la liste non-exhaustive des logiciels offerts à la communauté de l'Université de Montréal.

<Link to="connexion-distance" className="button button--primary">
  Connectez-vous à distance à nos logiciels
</Link>



<LogicielCatalogue />