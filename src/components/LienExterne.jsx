// src/components/LienExterne.jsx

import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowSquareOut } from '@phosphor-icons/react';
import { useLocation } from '@docusaurus/router';

const estLienExterne = (href) => {
  try {
    const url = new URL(href, window.location.href);
    return (
      url.origin !== window.location.origin &&
      !url.hostname.endsWith('bib.umontreal.ca')
    );
  } catch {
    return false;
  }
};

export default function LienExterne() {
  const location = useLocation();

  useEffect(() => {
    const liens = document.querySelectorAll('a[href]');

    liens.forEach((lien) => {
      // Si le lien est à l'intérieur d'un card, on n'y ajoute pas l'icône
      if (lien.closest('.cardbib, .card, .cardGrid, .cardImage')) {
        return;
      }

      const href = lien.getAttribute('href');
      if (
        estLienExterne(href) &&
        !lien.dataset.lienExterne &&
        !lien.querySelector('.icone-externe')
      ) {
        lien.dataset.lienExterne = 'true';

        // On force même onglet, pas de target/_blank
        lien.removeAttribute('target');
        lien.removeAttribute('rel');

        const wrapper = document.createElement('span');
        wrapper.className = 'icone-externe';
        wrapper.style.marginLeft = '0.25em';
        wrapper.style.display = 'inline-flex';
        wrapper.style.verticalAlign = 'middle';

        lien.appendChild(wrapper);
        createRoot(wrapper).render(<ArrowSquareOut size={16} />);
      }
    });
  }, [location.pathname]);

  return null;
}