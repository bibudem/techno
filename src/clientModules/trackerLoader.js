// src/clientModules/trackerLoader.js
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

function loadScript(src, onLoad) {
  const s = document.createElement('script');
  s.src = src;
  s.async = true;
  if (onLoad) s.onload = onLoad;
  document.head.appendChild(s);
}

function initGA() {
  loadScript('https://www.googletagmanager.com/gtag/js?id=G-XXXX', () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){ window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-XXXX');
    console.log('✅ GA chargé');
  });
}

function initClarity() {
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r); t.async=1; t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "r5bxj4q7vj");
  console.log('✅ Clarity chargé');
}

if (ExecutionEnvironment.canUseDOM) {
  // Handler pour réagir aux changements de consentement UdeM
  function handleConsent(categories) {
    if (categories.performanceCookies) initGA();
    if (categories.adsCookies)         initClarity();
  }
  // Enregistrement du handler
  if (typeof window.on_udem_cookie_update_consent === 'function') {
    window.on_udem_cookie_update_consent(handleConsent);
  }
  // Si le consentement a déjà eu lieu avant le chargement de ce module
  if (window.__UDemConsent) {
    handleConsent(window.__UDemConsent);
  }
}