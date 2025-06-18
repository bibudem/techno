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

function waitForConsent(callback) {
  const interval = setInterval(() => {
    const c = window.__UDemConsent;
    if (c && typeof c === 'object') {
      clearInterval(interval);
      callback(c);
    }
  }, 300);
}

if (ExecutionEnvironment.canUseDOM) {
  waitForConsent((categories) => {
    if (categories.performanceCookies) initGA();
    if (categories.adsCookies) initClarity();
  });
}