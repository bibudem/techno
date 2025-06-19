import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  // Google Tag (GA4)
  const gaScript = document.createElement('script');
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-R5SGXR9DKM';
  gaScript.async = true;
  document.head.appendChild(gaScript);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-R5SGXR9DKM');

  // Microsoft Clarity
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r); t.async=1; t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t,y);
  })(window, document, 'clarity', 'script', 'r5bxj4q7vj');
}