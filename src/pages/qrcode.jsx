import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import Layout from '@theme/Layout';
import redirects from '@site/src/data/qrcode.json';

export default function QrRedirect() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    const target = redirects[id];

    if (id && typeof gtag !== 'undefined') {
      gtag('event', 'qr_scan', {
        event_category: 'QR',
        event_label: id,
      });
    }

    if (target) {
      try {
        const url = new URL(target, window.location.origin);
        url.searchParams.set("utm_source", "qr");
        url.searchParams.set("utm_medium", "print");
        url.searchParams.set("utm_campaign", `qr_${id}`);
        const finalUrl = url.toString();

        setTimeout(() => {
          window.location.href = finalUrl;
        }, 300);
      } catch (e) {
        console.error("Redirection invalide pour l’ID :", id, e);
        window.location.href = '/404';
      }
    } else {
      window.location.href = '/404';
    }
  }, [location]);

  return (
    <Layout>
      <p style={{ textAlign: 'center', marginTop: '4rem' }}>
        Redirection en cours…
      </p>
    </Layout>
  );
}