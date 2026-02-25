import {hasKlaroConsent} from '@site/src/utils/consent';

const SERVICE_NAME = 'externalMedia';
const PROCESSED_ATTR = 'data-klaro-media-processed';
const MEDIA_HOSTS = [
  'youtube.com',
  'youtube-nocookie.com',
  'loom.com',
  'open.spotify.com',
  'anchor.fm',
  'podbean.com',
  'forms.office.com',
];

let mutationObserver;
let applyTimer;

function hostMatchesMediaServices(hostname) {
  const host = hostname.toLowerCase();
  return MEDIA_HOSTS.some(
    (mediaHost) => host === mediaHost || host.endsWith(`.${mediaHost}`),
  );
}

function shouldGateIframe(iframe) {
  const src = iframe.getAttribute('src');
  if (!src) return false;

  try {
    const iframeUrl = new URL(src, window.location.origin);
    if (iframeUrl.origin === window.location.origin) return false;
    return hostMatchesMediaServices(iframeUrl.hostname);
  } catch (_err) {
    return false;
  }
}

function prepareIframeForConsent(iframe) {
  if (iframe.getAttribute(PROCESSED_ATTR) === 'true') return false;
  if (!shouldGateIframe(iframe)) return false;

  const src = iframe.getAttribute('src');
  if (!src) return false;

  iframe.setAttribute(PROCESSED_ATTR, 'true');
  iframe.setAttribute('data-name', SERVICE_NAME);
  iframe.setAttribute('data-src', src);
  iframe.removeAttribute('src');
  iframe.setAttribute('loading', 'lazy');

  return true;
}

function getKlaroManager() {
  return window.klaro?.getManager?.() || null;
}

function applyConsentToPreparedElements() {
  const manager = getKlaroManager();
  if (manager && typeof manager.getConsent === 'function') {
    const app =
      typeof manager.getApp === 'function'
        ? manager.getApp(SERVICE_NAME)
        : manager.config?.services?.find((service) => service.name === SERVICE_NAME);
    if (app && typeof manager.updateAppElements === 'function') {
      manager.updateAppElements(app, manager.getConsent(SERVICE_NAME));
      return;
    }
  }

  // Fallback: applique directement la décision connue si manager API indisponible
  const consentGranted = hasKlaroConsent(SERVICE_NAME);
  document
    .querySelectorAll(`iframe[data-name="${SERVICE_NAME}"]`)
    .forEach((iframe) => {
      const currentSrc = iframe.getAttribute('src');
      const blockedSrc = iframe.getAttribute('data-src');
      if (consentGranted) {
        if (!currentSrc && blockedSrc) iframe.setAttribute('src', blockedSrc);
      } else if (currentSrc) {
        iframe.setAttribute('data-src', currentSrc);
        iframe.removeAttribute('src');
      }
    });
}

function processMediaIframes(root = document) {
  let mutated = false;
  root.querySelectorAll('iframe[src]').forEach((iframe) => {
    if (prepareIframeForConsent(iframe)) mutated = true;
  });

  if (mutated || hasKlaroConsent(SERVICE_NAME)) {
    applyConsentToPreparedElements();
  }
}

function scheduleProcess() {
  clearTimeout(applyTimer);
  applyTimer = setTimeout(() => {
    processMediaIframes(document);
  }, 60);
}

function setupMutationObserver() {
  if (mutationObserver || !document.body) return;

  mutationObserver = new MutationObserver((mutations) => {
    let shouldProcess = false;
    for (const mutation of mutations) {
      if (mutation.type !== 'childList') continue;
      for (const node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue;
        if (node.tagName === 'IFRAME' || node.querySelector('iframe')) {
          shouldProcess = true;
          break;
        }
      }
      if (shouldProcess) break;
    }

    if (shouldProcess) scheduleProcess();
  });

  mutationObserver.observe(document.body, {childList: true, subtree: true});
}

function initContextualMedia() {
  processMediaIframes(document);
  setupMutationObserver();
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContextualMedia);
  } else {
    initContextualMedia();
  }

  window.addEventListener('klaro:ready', scheduleProcess);
}

export function onRouteDidUpdate() {
  scheduleProcess();
}

export default {};
