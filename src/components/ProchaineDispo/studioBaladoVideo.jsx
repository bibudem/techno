import React, { useEffect, useState } from "react";

export default function StudioBaladoVideo() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const url = "https://ordo.bib.umontreal.ca/webhook/api/studio-balado-video";

    fetch(url, { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(setData)
      .catch(() => setError(true));
  }, []);

  if (error) return <span>Indisponible</span>;
  if (!data) return <span>Chargement…</span>;
  if (!data.next) return <span>Aucune disponibilité prochaine</span>;

  const formatTime = (iso) =>
    new Date(iso).toLocaleTimeString("fr-CA", {
      hour: "2-digit",
      minute: "2-digit",
    });

  const start = formatTime(data.next.start_local);
  const end = formatTime(data.next.end_local);

  return (
    <span>
      Prochaine disponibilité : {start} → {end}
    </span>
  );
}