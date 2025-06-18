import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

function loadScript(src, onLoad) {
  const s = document.createElement('script');
  s.src = src;
  s.async = true;
  if (onLoad) s.onload = onLoad;
  document.head.appendChild(s);
}

function initGA() {
  loadScript('https://www.googletagmanager.com/gtag/js?id=G-R5SGXR9DKM', () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-R5SGXR9DKM');
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
  window.addEventListener('consent-tokens-ready', (event) => {
    const tokens = event.detail;
    if (tokens.analytics_consent?.value) initGA();
    if (tokens.ad_consent?.value)        initClarity();
  });
}