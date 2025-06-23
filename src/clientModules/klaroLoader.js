import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  const loadScript = (src, onLoad) => {
    const s = document.createElement('script');
    s.src = src;
    s.defer = true;
    s.onload = onLoad;
    document.head.appendChild(s);
  };

  loadScript('/klaro.js', () => {

    loadScript('https://cdn.kiprotect.com/klaro/v0.7.22/klaro.js', () => {
      const tryRun = () => {
        if (window.klaro && typeof window.klaro.run === 'function' && window.klaroConfig) {
          window.klaro.run(window.klaroConfig);
        } else {
          setTimeout(tryRun, 50);
        }
      };
      tryRun();
    });
  });
}