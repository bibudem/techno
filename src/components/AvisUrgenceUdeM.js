import React, { useEffect } from 'react';

const URGENCE_SCRIPT_SRC =
  'https://urgence.umontreal.ca/typo3conf/ext/udem_urgence/Resources/Public/JavaScript/udem-urgence-bcrp.js';
const URGENCE_ENDPOINT = 'https://urgence.umontreal.ca/?type=28623';

export default function AvisUrgenceUdeM() {
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const renderUrgenceBanner = () => {
      if (typeof window.bcrpUrgenceBannerRender === 'function') {
        window.bcrpUrgenceBannerRender();
      }
    };

    if (typeof window.bcrpUrgenceBannerRender === 'function') {
      renderUrgenceBanner();
      return undefined;
    }

    const existingScript = document.querySelector(`script[src="${URGENCE_SCRIPT_SRC}"]`);
    if (existingScript) {
      existingScript.addEventListener('load', renderUrgenceBanner);
      return () => existingScript.removeEventListener('load', renderUrgenceBanner);
    }

    const script = document.createElement('script');
    script.src = URGENCE_SCRIPT_SRC;
    script.async = true;
    script.dataset.udemUrgenceBanner = 'true';
    document.body.appendChild(script);

    return undefined;
  }, []);

  return <div id="udem-urgence-bcrp" data-udem-urgence-endpoint={URGENCE_ENDPOINT} />;
}
