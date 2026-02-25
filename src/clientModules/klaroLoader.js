import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  const loadScript = (src, options = {}) => {
    const {
      id,
      defer = true,
      onLoad = () => {},
      onError = () => {},
    } = options;

    if (id && document.getElementById(id)) {
      onLoad();
      return;
    }

    const script = document.createElement('script');
    if (id) script.id = id;
    script.src = src;
    script.defer = defer;
    script.onload = onLoad;
    script.onerror = onError;
    script.referrerPolicy = 'strict-origin-when-cross-origin';
    document.head.appendChild(script);
  };

  const runKlaroWhenReady = () => {
    let attempts = 0;
    const maxAttempts = 120; // ~6 secondes

    const tryRun = () => {
      if (
        window.klaro &&
        typeof window.klaro.run === 'function' &&
        window.klaroConfig
      ) {
        window.klaro.run(window.klaroConfig);
        window.dispatchEvent(new Event('klaro:ready'));
        return;
      }

      if (attempts < maxAttempts) {
        attempts += 1;
        setTimeout(tryRun, 50);
      } else {
        console.error('Klaro non disponible: initialisation interrompue.');
      }
    };

    tryRun();
  };

  loadScript('/klaro.js', {
    id: 'klaro-config',
    onLoad: () => {
      // Si Klaro est déjà présent globalement, on l'exécute directement.
      if (window.klaro && typeof window.klaro.run === 'function') {
        runKlaroWhenReady();
        return;
      }

      loadScript('https://cdn.kiprotect.com/klaro/v0.7.22/klaro.js', {
        id: 'klaro-lib-cdn',
        onLoad: runKlaroWhenReady,
        onError: () =>
          console.error('Impossible de charger Klaro depuis le CDN.'),
      });
    },
  });
}

export default {};
