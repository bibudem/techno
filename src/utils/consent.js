const CONSENT_COOKIE_NAME = 'bib-consent';

function readCookie(name) {
  if (typeof document === 'undefined' || !document.cookie) return '';
  const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = document.cookie.match(
    new RegExp('(?:^|; )' + escapedName + '=([^;]*)'),
  );
  return match ? match[1] : '';
}

function parseConsentCookie() {
  const rawValue = readCookie(CONSENT_COOKIE_NAME);
  if (!rawValue) return null;

  try {
    return JSON.parse(decodeURIComponent(rawValue));
  } catch (_err) {
    return null;
  }
}

export function hasKlaroConsent(serviceName) {
  if (typeof window === 'undefined') return false;

  const manager = window.klaro?.getManager?.();
  if (manager && typeof manager.getConsent === 'function') {
    return Boolean(manager.getConsent(serviceName));
  }

  const cookieConsents = parseConsentCookie();
  if (!cookieConsents || typeof cookieConsents !== 'object') return false;
  return Boolean(cookieConsents[serviceName]);
}

export {CONSENT_COOKIE_NAME};
