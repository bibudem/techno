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

    if (!id || !target) {
      window.location.href = '/404';
      return;
    }

    try {
      // Construit l’URL finale avec UTM
      const url = new URL(target, window.location.origin);
      url.searchParams.set("utm_source", "qr");
      url.searchParams.set("utm_medium", "print");
      url.searchParams.set("utm_campaign", `qr_${id}`);
      const finalUrl = url.toString();

      // Envoi événement GA4 avant redirection
      if (typeof gtag !== 'undefined') {
        gtag('event', 'qr_scan', {
          qr_id: id,
          method: 'qrcode',
          event_callback: () => {
            window.location.href = finalUrl;
          },
        });

        // Sécurité : redirection forcée si GA bloque
        setTimeout(() => {
          window.location.href = finalUrl;
        }, 800);
      } else {
        // Si GA pas chargé
        window.location.href = finalUrl;
      }
    } catch (e) {
      console.warn("Redirection invalide pour l’ID :", id, e);
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