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

const MENTION_NOUVEL_ONGLET = ' (ouvre une nouvelle fenêtre)';

function ajouterMention(lien) {
  if (lien.querySelector('.sr-only-external')) return;
  const sr = document.createElement('span');
  sr.className = 'sr-only sr-only-external';
  sr.textContent = MENTION_NOUVEL_ONGLET;
  lien.appendChild(sr);
}

function ajouterIcone(lien) {
  if (lien.querySelector('.icone-externe')) return;
  const wrapper = document.createElement('span');
  wrapper.className = 'icone-externe';
  wrapper.style.marginLeft = '0.25em';
  wrapper.style.display = 'inline-flex';
  wrapper.style.verticalAlign = 'middle';
  wrapper.setAttribute('aria-hidden', 'true');
  wrapper.appendChild(creerIconeExterne());
  lien.appendChild(wrapper);
}

function ajouterMentionPdf(lien, href) {
  try {
    const url = new URL(href, window.location.href);
    if (!url.pathname.toLowerCase().endsWith('.pdf')) return;
    if (lien.querySelector('.link-pdf-label')) return;
    const pdfLabel = document.createElement('span');
    pdfLabel.textContent = ' (PDF)';
    pdfLabel.className = 'link-pdf-label';
    pdfLabel.style.marginLeft = '0.25em';
    lien.appendChild(pdfLabel);
  } catch {
    /* rien */
  }
}

// Traite tous les liens du contenu et du pied de page :
// - lien externe dans le texte d'une page : nouvel onglet + icône + mention pour lecteurs d'écran ;
// - tout autre lien qui s'ouvre déjà dans un nouvel onglet (boutons des composants,
//   sous-domaines bib.umontreal.ca…) : mention pour lecteurs d'écran seulement.
function traiterLiens() {
  document.querySelectorAll('main a[href], footer a[href]').forEach((lien) => {
    if (lien.dataset.lienExterne === 'true') return;
    if (lien.closest('#readability-widget')) return;

    const href = lien.getAttribute('href');
    const imageSeule = lien.querySelector('img') && !lien.textContent.trim();
    // Icône et ouverture forcée seulement dans le texte des pages (comme avant)
    const decorable =
      Boolean(lien.closest('.markdown')) && !lien.closest('[data-ignore-external]') && !imageSeule;

    if (decorable && estLienExterne(href)) {
      lien.dataset.lienExterne = 'true';
      lien.setAttribute('target', '_blank');
      lien.setAttribute('rel', 'noopener noreferrer');
      ajouterMentionPdf(lien, href);
      ajouterIcone(lien);
      ajouterMention(lien);
      return;
    }

    if (lien.getAttribute('target') === '_blank') {
      lien.dataset.lienExterne = 'true';
      ajouterMention(lien);
    }
  });
}

export default function LienExterne() {
  const { pathname } = useLocation();

  // Après chaque navigation, puis à chaque ajout de contenu (listes chargées
  // depuis une API, cartes affichées après coup…).
  useEffect(() => {
    let timeout = setTimeout(traiterLiens, 120);
    const observer = new MutationObserver(() => {
      clearTimeout(timeout);
      timeout = setTimeout(traiterLiens, 150);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
