import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  const ensureKlaroDialogAccessibleNames = (root = document) => {
    const selector = [
      '#klaro-cookie-notice[role="dialog"]',
      '#klaro-cookie-notice[role="alertdialog"]',
      '.klaro .cookie-notice[role="dialog"]',
      '.klaro .cookie-notice[role="alertdialog"]',
      '.klaro .cookie-modal[role="dialog"]',
      '.klaro .cookie-modal[role="alertdialog"]',
    ].join(', ');

    const dialogs = root.querySelectorAll(selector);
    dialogs.forEach((dialog, index) => {
      if (dialog.hasAttribute('aria-label') || dialog.hasAttribute('aria-labelledby')) {
        return;
      }

      const titleEl = dialog.querySelector('h1, h2, .cm-header h1, .cm-header h2');
      if (titleEl) {
        if (!titleEl.id) {
          titleEl.id = `klaro-dialog-title-${index}`;
        }
        dialog.setAttribute('aria-labelledby', titleEl.id);
        return;
      }

      const isNotice =
        dialog.id === 'klaro-cookie-notice' ||
        dialog.classList.contains('cookie-notice');
      dialog.setAttribute(
        'aria-label',
        isNotice ? 'Préférences de témoins' : 'Paramètres de confidentialité',
      );
    });
  };

  const watchKlaroDialogsA11y = () => {
    ensureKlaroDialogAccessibleNames();

    if (window.__klaroA11yObserverInstalled) return;
    const observeRoot = document.getElementById('klaro') || document.body;
    if (!observeRoot) return;

    const observer = new MutationObserver(() => {
      ensureKlaroDialogAccessibleNames();
    });

    observer.observe(observeRoot, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'role', 'aria-label', 'aria-labelledby'],
    });

    window.__klaroA11yObserverInstalled = true;
  };

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
        watchKlaroDialogsA11y();
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
