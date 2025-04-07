import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowSquareOut } from '@phosphor-icons/react';

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
  useEffect(() => {
    const liens = document.querySelectorAll('a[href]');

    liens.forEach((lien) => {
      const href = lien.getAttribute('href');

      if (
        estLienExterne(href) &&
        !lien.dataset.lienExterne &&
        !lien.querySelector('.icone-externe')
      ) {
        lien.dataset.lienExterne = 'true';

        // les liens s'ouvrent dans le même onglet
        lien.removeAttribute('target');
        lien.removeAttribute('rel');

        const wrapper = document.createElement('span');
        wrapper.className = 'icone-externe';
        wrapper.style.marginLeft = '0.25em';
        wrapper.style.display = 'inline-flex';
        wrapper.style.verticalAlign = 'center';

        lien.appendChild(wrapper);
        createRoot(wrapper).render(<ArrowSquareOut size={16} />);
      }
    });
  }, []);

  return null;
}