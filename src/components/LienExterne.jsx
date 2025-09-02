import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowSquareOut } from '@phosphor-icons/react';
import { useLocation } from '@docusaurus/router';

const EST_INTERNE_HOST = (host) =>
  host === 'bib.umontreal.ca' || host.endsWith('.bib.umontreal.ca');

const estLienExterne = (href) => {
  try {
    if (!href || href.startsWith('#')) return false;

    const lower = href.toLowerCase();
    if (
      lower.startsWith('mailto:') ||
      lower.startsWith('tel:') ||
      lower.startsWith('javascript:') ||
      lower.startsWith('data:') ||
      lower.startsWith('blob:')
    ) {
      return false;
    }

    const url = new URL(href, window.location.href);
    const interne = url.origin === window.location.origin || EST_INTERNE_HOST(url.hostname);
    return !interne;
  } catch {
    return false;
  }
};

export default function LienExterne() {
  const { pathname } = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      // contenu principal + footer
      const zones = document.querySelectorAll('.theme-doc-markdown, .markdown');
      if (!zones.length) return;

      zones.forEach((zone) => {
        const liens = zone.querySelectorAll('a[href]');
        liens.forEach((lien) => {
          if (lien.closest('[data-ignore-external]')) return;
          if (lien.dataset.lienExterne === 'true') return;
          if (lien.querySelector('img') && !lien.textContent.trim()) return;

          const href = lien.getAttribute('href');
          if (!estLienExterne(href)) return;

          lien.dataset.lienExterne = 'true';
          lien.setAttribute('target', '_blank');
          lien.setAttribute('rel', 'noopener noreferrer');

          try {
            const url = new URL(href, window.location.href);
            if (url.pathname.toLowerCase().endsWith('.pdf')) {
              const pdfLabel = document.createElement('span');
              pdfLabel.textContent = ' (PDF)';
              pdfLabel.className = 'link-pdf-label';
              pdfLabel.style.marginLeft = '0.25em';
              lien.appendChild(pdfLabel);
            }
          } catch {
            /* rien */
          }

          if (!lien.querySelector('.icone-externe')) {
            const wrapper = document.createElement('span');
            wrapper.className = 'icone-externe';
            wrapper.style.marginLeft = '0.25em';
            wrapper.style.display = 'inline-flex';
            wrapper.style.verticalAlign = 'middle';
            wrapper.setAttribute('aria-hidden', 'true');
            lien.appendChild(wrapper);
            createRoot(wrapper).render(<ArrowSquareOut size={16} />);
          }

          if (!lien.querySelector('.sr-only-external')) {
            const sr = document.createElement('span');
            sr.className = 'sr-only-external';
            sr.style.position = 'absolute';
            sr.style.width = '1px';
            sr.style.height = '1px';
            sr.style.padding = '0';
            sr.style.margin = '-1px';
            sr.style.overflow = 'hidden';
            sr.style.clip = 'rect(0,0,0,0)';
            sr.style.whiteSpace = 'nowrap';
            sr.style.border = '0';
            sr.textContent = ' (ouvre une nouvelle fenêtre)';
            lien.appendChild(sr);
          }
        });
      });
    }, 120);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}