import React, { useEffect, useState } from "react";

const SERVICE_URL =
  "https://api.bib.umontreal.ca/disponibilite/ordinateurs/?lieu=RDP";

const rdpConfig = (addr) => `screen mode id:i:2
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
gatewaybrokeringtype:i:0
`;

const getPosteAddress = (posteId) => {
  const id = String(posteId).trim();
  const domain = id.toLowerCase().includes("sap")
    ? ".bib.umontreal.ca"
    : ".fil.umontreal.ca";

  return `${id}${domain}`;
};

const downloadRdpFile = (addr) => {
  const blob = new Blob([rdpConfig(addr)], {
    type: "application/x-rdp;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${addr}.rdp`;
  link.style.display = "none";

  document.body.appendChild(link);
  link.click();
  link.remove();

  window.setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 100);
};

const PostesDisponibles = ({ zone }) => {
  const [postes, setPostes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!zone) {
      setPostes([]);
      setLoading(false);
      setError("Aucune zone n’a été spécifiée.");
      return;
    }

    const controller = new AbortController();
    let timeoutId;

    const fetchPostes = async (initialLoad = false) => {
      if (initialLoad) {
        setLoading(true);
      }

      try {
        const response = await fetch(
          `${SERVICE_URL}&zone=${encodeURIComponent(zone)}`,
          {
            signal: controller.signal,
            headers: {
              Accept: "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status}`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("La réponse de l’API n’est pas un tableau.");
        }

        const postesDisponibles = data.filter(
          (poste) =>
            poste &&
            poste.id &&
            poste.enabled === true &&
            poste.state !== "active"
        );

        setPostes(postesDisponibles);
        setError(null);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(
            "Impossible de récupérer les postes disponibles :",
            err
          );

          setError(
            "Erreur de connexion. Nouvelle tentative dans quelques instants…"
          );
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);

          timeoutId = window.setTimeout(() => {
            fetchPostes(false);
          }, 5000);
        }
      }
    };

    fetchPostes(true);

    return () => {
      controller.abort();
      window.clearTimeout(timeoutId);
    };
  }, [zone]);

  if (loading) {
    return <p>Chargement des postes disponibles…</p>;
  }

  return (
    <div>
      {error ? (
        <p role="alert">❌ {error}</p>
      ) : postes.length === 0 ? (
        <p>Aucun poste disponible.</p>
      ) : (
        <ul>
          {postes.map((poste) => {
            const addr = getPosteAddress(poste.id);

            return (
              <li key={poste.id}>
                <a
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    downloadRdpFile(addr);
                  }}
                >
                  {poste.id}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default PostesDisponibles;