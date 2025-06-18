import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  // Charge les composants web
  const scriptConsent = document.createElement('script');
  scriptConsent.src = 'https://cdn.jsdelivr.net/gh/bibudem/ui@1/dist/bib-consent.js';
  scriptConsent.type = 'module';
  document.head.appendChild(scriptConsent);

  const scriptBtn = document.createElement('script');
  scriptBtn.src = 'https://cdn.jsdelivr.net/gh/bibudem/ui@1/dist/bib-consent-preferences-btn.js';
  scriptBtn.type = 'module';
  document.head.appendChild(scriptBtn);

  // Injecte les deux composants dans le DOM
  const consentEl = document.createElement('bib-consent');
  // const btnEl = document.createElement('bib-consent-preferences-btn');

  document.body.appendChild(consentEl);
  // document.body.appendChild(btnEl);

  // Active GA/Clarity selon le consentement
  window.addEventListener('consent-update', (event) => {
    const prefs = event.detail;
    if (prefs?.analytics) loadGA();
    if (prefs?.ads) loadClarity();
  });

  function loadGA() {
    const s = document.createElement('script');
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-R5SGXR9DKM';
    s.async = true;
    s.onload = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      gtag('js', new Date());
      gtag('config', 'G-R5SGXR9DKM');
      console.log('✅ GA actif');
    };
    document.head.appendChild(s);
  }

  function loadClarity() {
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r); t.async=1; t.src='https://www.clarity.ms/tag/' + i;
      y=l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t,y);
    })(window, document, 'clarity', 'script', 'r5bxj4q7vj');
    console.log('✅ Clarity actif');
  }
}