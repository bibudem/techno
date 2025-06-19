import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

function loadScript(src, isModule = false) {
  const s = document.createElement('script');
  s.src = src;
  s.async = true;
  if (isModule) s.type = 'module';
  document.head.appendChild(s);
}

function injectConsentComponent() {
  const el = document.createElement('bib-consent');
  el.setAttribute('server-url', '/consent-server');
  document.body.appendChild(el);
}

if (ExecutionEnvironment.canUseDOM) {
  loadScript('https://cdn.jsdelivr.net/gh/bibudem/ui@1/dist/bib-consent.js', true);
  loadScript('https://cdn.jsdelivr.net/gh/bibudem/ui@1/dist/bib-consent-preferences-btn.js', true);
  injectConsentComponent();
}

window.addEventListener('consent-tokens-ready', () => {
  const placeholder = document.getElementById('footer-btn-placeholder');
  if (placeholder) {
    const btn = document.createElement('bib-consent-preferences-btn');
    btn.className = 'footerBtn';
    placeholder.replaceWith(btn);
  }
});