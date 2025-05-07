import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowSquareOut } from '@phosphor-icons/react';
import { useLocation } from '@docusaurus/router';

const estLienExterne = (href) => {
  try {
    const url = new URL(href, window.location.href);
    const hostname = url.hostname;

    // Considérer bib.umontreal.ca et ses sous-domaines comme internes
    const estUdem = hostname === 'bib.umontreal.ca' || hostname.endsWith('.bib.umontreal.ca');

    return url.origin !== window.location.origin && !estUdem;
  } catch {
    return false;
  }
};

export default function LienExterne() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Cibler seulement la zone de contenu principal
    const zonePrincipale = document.querySelector('.theme-doc-markdown, .markdown');

    if (!zonePrincipale) return;

    const liens = zonePrincipale.querySelectorAll('a[href]');

    liens.forEach((lien) => {
      if (lien.closest('[data-ignore-external]')) return;
      if (lien.closest('footer')) return;
      if (lien.dataset.lienExterne === 'true') return;
      if (lien.querySelector('img') && !lien.textContent.trim()) return;

      const href = lien.getAttribute('href');
      if (!href || !estLienExterne(href)) return;

      lien.dataset.lienExterne = 'true'; // marquer comme traité
      lien.removeAttribute('target');
      lien.removeAttribute('rel');

      // Ajouter (PDF)
      if (href.toLowerCase().endsWith('.pdf')) {
        const pdfLabel = document.createElement('span');
        pdfLabel.textContent = ' (PDF)';
        pdfLabel.className = 'link-pdf-label';
        pdfLabel.style.marginLeft = '0.25em';
        lien.appendChild(pdfLabel);
      }

      // Ajouter icône externe
      const wrapper = document.createElement('span');
      wrapper.className = 'icone-externe';
      wrapper.style.marginLeft = '0.25em';
      wrapper.style.display = 'inline-flex';
      wrapper.style.verticalAlign = 'middle';

      // Protection contre le double rendu
      if (!lien.querySelector('.icone-externe')) {
        lien.appendChild(wrapper);
        createRoot(wrapper).render(<ArrowSquareOut size={16} />);
      }
    });
  }, [pathname]);

  return null;
}