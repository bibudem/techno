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
  const { pathname } = useLocation();

  useEffect(() => {
    document.querySelectorAll('a[href]').forEach((lien) => {

      if (lien.closest('[data-ignore-external]')) return;

      if (lien.closest('footer')) {
        return;
      }

      if (lien.querySelector('img') && !lien.textContent.trim()) {
        return;
      }

      const href = lien.getAttribute('href');
      if (
        estLienExterne(href) &&
        !lien.dataset.lienExterne &&
        !lien.querySelector('.icone-externe')
      ) {
        lien.dataset.lienExterne = 'true';

        // Retirer target/_blank / rel existants
        lien.removeAttribute('target');
        lien.removeAttribute('rel');

        // Si c'est un PDF, insérer le label "(PDF)"
        const isPdf = href.toLowerCase().endsWith('.pdf');
        if (isPdf) {
          const pdfLabel = document.createElement('span');
          pdfLabel.textContent = '(PDF)';
          pdfLabel.className = 'link-pdf-label';
          pdfLabel.style.fontStyle = 'regular';
          pdfLabel.style.marginLeft = '0.25em';
          lien.appendChild(pdfLabel);
        }

        // Puis ajouter l'icône externe
        const wrapper = document.createElement('span');
        wrapper.className = 'icone-externe';
        wrapper.style.marginLeft = '0.25em';
        wrapper.style.display = 'inline-flex';
        wrapper.style.verticalAlign = 'middle';

        lien.appendChild(wrapper);
        createRoot(wrapper).render(<ArrowSquareOut size={16} />);
      }
    });
  }, [pathname]);

  return null;
}