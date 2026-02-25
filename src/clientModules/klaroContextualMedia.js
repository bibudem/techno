import {hasKlaroConsent} from '@site/src/utils/consent';

const SERVICE_NAME = 'externalMedia';
const PROCESSED_ATTR = 'data-klaro-media-processed';
const CONTEXT_NOTICE_SELECTOR =
  '.context-notice, .cm-as-context-notice, [data-type="placeholder"]';
const INLINE_NOTICE_CLASS = 'sb-media-blocked-notice';
const MANAGE_BUTTON_CLASS = 'sb-media-consent-manage';
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
let contextAcceptListenerBound = false;

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

function openKlaroSettings() {
  if (typeof window === 'undefined') return;
  if (window.klaro && typeof window.klaro.show === 'function') {
    window.klaro.show();
  }
}

function findInlineNotice(iframe) {
  const next = iframe.nextElementSibling;
  if (next && next.classList.contains(INLINE_NOTICE_CLASS)) return next;
  return null;
}

function removeInlineNotice(iframe) {
  const inlineNotice = findInlineNotice(iframe);
  if (inlineNotice) inlineNotice.remove();

  if (iframe.dataset.sbOriginalDisplay !== undefined) {
    iframe.style.display = iframe.dataset.sbOriginalDisplay;
  } else {
    iframe.style.removeProperty('display');
  }
}

function ensureManageButton(container) {
  if (!container) return;
  if (container.querySelector(`.${MANAGE_BUTTON_CLASS}`)) return;

  const button = document.createElement('button');
  button.type = 'button';
  button.className = MANAGE_BUTTON_CLASS;
  button.textContent = 'Paramètres des témoins';

  const buttonRow = container.querySelector('.cm-buttons') || container;
  buttonRow.appendChild(button);
}

function findContextNoticeForIframe(iframe) {
  const candidates = [];
  if (iframe.parentElement) candidates.push(iframe.parentElement);
  if (iframe.parentElement?.parentElement)
    candidates.push(iframe.parentElement.parentElement);
  const placeholder = iframe.closest('[data-type="placeholder"]');
  if (placeholder) candidates.push(placeholder);

  for (const node of candidates) {
    const notice = node.querySelector('.context-notice, .cm-as-context-notice');
    if (notice) return notice;
  }

  return null;
}

function ensureInlineNotice(iframe) {
  let inlineNotice = findInlineNotice(iframe);
  if (!inlineNotice) {
    inlineNotice = document.createElement('div');
    inlineNotice.className = INLINE_NOTICE_CLASS;
    inlineNotice.innerHTML =
      '<p>Ce contenu externe est bloqué selon vos préférences de témoins.</p>';
    iframe.insertAdjacentElement('afterend', inlineNotice);
  }

  ensureManageButton(inlineNotice);

  if (iframe.dataset.sbOriginalDisplay === undefined) {
    iframe.dataset.sbOriginalDisplay = iframe.style.display || '';
  }
  iframe.style.display = 'none';
}

function syncBlockedMediaNotices(consentGranted) {
  document
    .querySelectorAll(`iframe[data-name="${SERVICE_NAME}"]`)
    .forEach((iframe) => {
      if (consentGranted) {
        removeInlineNotice(iframe);
        return;
      }

      const contextNotice = findContextNoticeForIframe(iframe);
      if (contextNotice) {
        ensureManageButton(contextNotice);
        removeInlineNotice(iframe);
        return;
      }

      ensureInlineNotice(iframe);
    });
}

function isContextAcceptButton(target) {
  if (!(target instanceof Element)) return false;
  const button = target.closest('button, a');
  if (!button) return false;
  if (!button.closest(CONTEXT_NOTICE_SELECTOR)) return false;

  if (
    button.matches('.cm-btn.cn-ok') ||
    button.matches('.cm-btn.cm-btn-accept') ||
    button.matches('.cm-btn.cm-btn-success')
  ) {
    return true;
  }

  const label = (button.textContent || '').trim().toLowerCase();
  return (
    label === "j'accepte" ||
    label === 'j’accepte' ||
    label === "c'est bon" ||
    label === 'c’est bon'
  );
}

function persistExternalMediaConsent(granted) {
  const manager = getKlaroManager();
  if (!manager) return false;

  try {
    if (typeof manager.updateConsent === 'function') {
      manager.updateConsent(SERVICE_NAME, granted);
    } else if (typeof manager.updateAppConsent === 'function') {
      const app =
        typeof manager.getApp === 'function'
          ? manager.getApp(SERVICE_NAME)
          : SERVICE_NAME;
      manager.updateAppConsent(app, granted);
    } else if (manager.consents && typeof manager.consents === 'object') {
      manager.consents[SERVICE_NAME] = granted;
    }

    if (typeof manager.saveAndApplyConsents === 'function') {
      manager.saveAndApplyConsents();
    } else {
      if (typeof manager.saveConsents === 'function') manager.saveConsents();
      if (typeof manager.applyConsents === 'function') manager.applyConsents();
    }

    return true;
  } catch (_err) {
    return false;
  }
}

function setupContextAcceptListener() {
  if (contextAcceptListenerBound || typeof document === 'undefined') return;
  contextAcceptListenerBound = true;

  document.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    const manageButton = target.closest(`.${MANAGE_BUTTON_CLASS}`);
    if (manageButton) {
      event.preventDefault();
      openKlaroSettings();
      return;
    }

    if (!isContextAcceptButton(target)) return;

    persistExternalMediaConsent(true);
    applyConsentToPreparedElements();
    setTimeout(applyConsentToPreparedElements, 120);
  });
}

function applyConsentToPreparedElements() {
  const manager = getKlaroManager();
  if (manager && typeof manager.getConsent === 'function') {
    const consentGranted = Boolean(manager.getConsent(SERVICE_NAME));
    const app =
      typeof manager.getApp === 'function'
        ? manager.getApp(SERVICE_NAME)
        : manager.config?.services?.find((service) => service.name === SERVICE_NAME);
    if (app && typeof manager.updateAppElements === 'function') {
      manager.updateAppElements(app, consentGranted);
      syncBlockedMediaNotices(consentGranted);
      setTimeout(() => syncBlockedMediaNotices(consentGranted), 120);
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

  syncBlockedMediaNotices(consentGranted);
  setTimeout(() => syncBlockedMediaNotices(consentGranted), 120);
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
  setupContextAcceptListener();
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
