import React, { useState, useEffect } from "react";

const rdpConfig = (addr) => `
screen mode id:i:2
session bpp:i:32
winposstr:s:0,1,691,455,2274,1457
compression:i:1
keyboardhook:i:2
audiocapturemode:i:0
videoplaybackmode:i:1
connection type:i:7
networkautodetect:i:1
bandwidthautodetect:i:1
displayconnectionbar:i:1
enableworkspacereconnect:i:0
disable wallpaper:i:0
allow font smoothing:i:0
allow desktop composition:i:0
disable full window drag:i:1
disable menu anims:i:1
disable themes:i:0
disable cursor setting:i:0
bitmapcachepersistenable:i:1
full address:s:${addr}
audiomode:i:0
redirectprinters:i:1
redirectcomports:i:0
redirectsmartcards:i:1
redirectclipboard:i:1
redirectposdevices:i:0
autoreconnection enabled:i:1
authentication level:i:2
prompt for credentials:i:0
negotiate security layer:i:1
remoteapplicationmode:i:0
gatewayusagemethod:i:4
gatewaycredentialssource:i:4
gatewayprofileusagemethod:i:0
promptcredentialonce:i:0
use redirection server name:i:0
rdgiskdcproxy:i:0
use multimon:i:0
gatewaybrokeringtype:i:0`;

const PostesDisponibles = ({ zone }) => {
  const [postes, setPostes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const serviceUrl = "https://api.bib.umontreal.ca/disponibilite/ordinateurs/?lieu=RDP";

  useEffect(() => {
    let isMounted = true;

    const fetchPostes = async () => {
      try {
        const response = await fetch(`${serviceUrl}&zone=${zone}`);
        if (!response.ok) throw new Error(`Erreur HTTP: ${response.status}`);

        const data = await response.json();
        if (isMounted) {
          setPostes(data.filter(poste => poste.state !== "active" && poste.enabled));
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError("Erreur de connexion. Réessai dans quelques instants...");
          setLoading(false);
        }
      }
    };

    fetchPostes();
    const interval = setInterval(fetchPostes, 5000); // Mise à jour toutes les 5 sec

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [zone]);

  const generateRdpFile = (addr) => {
    const file = new Blob([rdpConfig(addr)], { type: "application/x-rdp" });
    return URL.createObjectURL(file);
  };

  return (
    <div>
      {loading && <p>⏳ Chargement des postes disponibles...</p>}
      {error && <p>❌ {error}</p>}
      {!loading && !error && (
        <ul>
          {postes.length === 0 ? (
            <p>Aucun poste disponible.</p>
          ) : (
            postes.map((poste) => {
              const domain = poste.id.toLowerCase().includes("sap") ? ".bib.umontreal.ca" : ".fil.umontreal.ca";
              const addr = poste.id + domain;
              const downloadUrl = generateRdpFile(addr);

              return (
                <li key={poste.id}>
                  <a href={downloadUrl} download={`${addr}.rdp`}>
                    {addr.replace(".fil.umontreal.ca", "").replace(".bib.umontreal.ca", "")}
                  </a>
                </li>
              );
            })
          )}
        </ul>
      )}
    </div>
  );
};

export default PostesDisponibles;