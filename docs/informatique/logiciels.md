---
title : Logiciels
id: Logiciels
hide_table_of_contents: true
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

# Catalogue des Logiciels
L'offre logicielle disponible sur les ordinateurs des bibliothèques de l'Université de Montréal va des navigateurs Internet les plus populaires, à la suite bureautique Microsoft Office, en passant par plusieurs logiciels spécialisés. Ici-bas, la liste non-exhaustive des logiciels offerts à la communauté de l'Université de Montréal.

<Link to="connexion-distance" className="button button--primary">
  Connectez-vous à distance à nos logiciels
</Link>

---

Sélectionnez un logiciel pour afficher sa description, ses emplacements d’utilisation et, si disponible, ses guides d’aide. Certains logiciels peuvent être téléchargés sur un ordinateur personnel via un lien dédié.

<LogicielCatalogue />