import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

function loadScript(src, onLoad) {
  const s = document.createElement('script');
  s.src = src;
  s.async = true;
  if (onLoad) s.onload = onLoad;
  document.head.appendChild(s);
}

function initGA() {
  const id = 'G-R5SGXR9DKM';
  loadScript(`https://www.googletagmanager.com/gtag/js?id=${id}`, () => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', id);
    console.log('✅ Google Analytics chargé');
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
  // Gérer le consentement UdeM
  function handleConsent(categories) {
    if (categories.performanceCookies) initGA();
    if (categories.adsCookies) initClarity();
  }

  // Enregistre le handler pour écoute future
  if (typeof window.on_udem_cookie_update_consent === 'function') {
    window.on_udem_cookie_update_consent(handleConsent);
  }

  // Si le consentement est déjà présent
  if (window.__UDemConsent) {
    handleConsent(window.__UDemConsent);
  }
}