import { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

// Icône ArrowSquareOut (Phosphor, graisse regular) en SVG statique : pas besoin
// d'une racine React par lien, qui ne serait jamais démontée.
const SVG_NS = 'http://www.w3.org/2000/svg';
const ICONE_EXTERNE_PATH =
  'M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z';

function creerIconeExterne() {
  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('width', '16');
  svg.setAttribute('height', '16');
  svg.setAttribute('viewBox', '0 0 256 256');
  svg.setAttribute('fill', 'currentColor');
  svg.setAttribute('focusable', 'false');
  const path = document.createElementNS(SVG_NS, 'path');
  path.setAttribute('d', ICONE_EXTERNE_PATH);
  svg.appendChild(path);
  return svg;
}

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
            wrapper.appendChild(creerIconeExterne());
            lien.appendChild(wrapper);
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