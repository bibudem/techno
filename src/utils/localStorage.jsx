export function getStored(key, fallback) {
    if (typeof window === 'undefined') {
      return fallback;
    }
    const raw = localStorage.getItem(key);
    if (raw === null) {
      return fallback;
    }
    // Enlève les guillemets superflus
    if (raw.startsWith('"') && raw.endsWith('"')) {
      return raw.slice(1, -1);
    }
    return raw;
  }