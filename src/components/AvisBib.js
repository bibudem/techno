import React, { useEffect } from 'react';

export default function AvisBib() {
  useEffect(() => {
    // Charger dynamiquement le script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/bibudem/ui@1/dist/bib-avis.min.js';
    script.type = 'module';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <bib-avis
      service="https://avis.bib.umontreal.ca/api/avis"
      bouton-fermer
    ></bib-avis>
  );
}