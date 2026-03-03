import React, { useEffect, useState } from "react";
import Link from "@docusaurus/Link";
import styles from "./studioBaladoVideo.module.css";

const EXTERNAL_LINK_PATTERN = /^(?:[a-z][a-z\d+\-.]*:|\/\/)/i;

function getLinkProps(link) {
  if (!link) return { to: "#" };

  if (EXTERNAL_LINK_PATTERN.test(link)) {
    return {
      href: link,
      target: "_blank",
      rel: "noopener noreferrer",
    };
  }

  return { to: link };
}

function formatDuration(minutes) {
  const hours = Number(minutes) / 60;

  if (!Number.isFinite(hours) || hours <= 0) {
    return "durée inconnue";
  }

  if (Number.isInteger(hours)) {
    return `${hours} h`;
  }

  return `${hours.toFixed(1).replace(".", ",")} h`;
}

export default function StudioBaladoVideo({ reserveLink, reserveText = "Réserver" }) {
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

  const reserveButton = reserveLink ? (
    <Link
      {...getLinkProps(reserveLink)}
      className={styles.reserve}
      data-ignore-external="true"
    >
      {reserveText}
    </Link>
  ) : null;

  if (error) {
    return (
      <div className={`${styles.box} ${styles.error}`} role="status" aria-live="polite">
        <div className={styles.layout}>
          <div className={styles.content}>
            <p className={styles.label}>Prochaine disponibilité</p>
            <p className={styles.main}>Indisponible pour le moment</p>
          </div>
          {reserveButton}
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className={`${styles.box} ${styles.loading}`} role="status" aria-live="polite">
        <div className={styles.layout}>
          <div className={styles.content}>
            <p className={styles.label}>Prochaine disponibilité</p>
            <p className={styles.main}>Chargement…</p>
          </div>
          {reserveButton}
        </div>
      </div>
    );
  }

  if (!data.next) {
    return (
      <div className={`${styles.box} ${styles.empty}`} role="status" aria-live="polite">
        <div className={styles.layout}>
          <div className={styles.content}>
            <p className={styles.label}>Prochaine disponibilité</p>
            <p className={styles.main}>Aucune disponibilité prochaine</p>
          </div>
          {reserveButton}
        </div>
      </div>
    );
  }

  const formatDate = (iso) =>
    new Date(iso).toLocaleDateString("fr-CA", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const formatTime = (iso) =>
    new Date(iso).toLocaleTimeString("fr-CA", {
      hour: "2-digit",
      minute: "2-digit",
    });

  const startDate = formatDate(data.next.start_local);
  const startTime = formatTime(data.next.start_local);
  const duration = formatDuration(data.duration_min);

  return (
    <div className={`${styles.box} ${styles.success}`} role="status" aria-live="polite">
      <div className={styles.layout}>
        <div className={styles.content}>
          <p className={styles.label}>Prochaine disponibilité</p>
          <p className={styles.main}>Créneau de {duration}</p>
          <p className={styles.sub}>
            Dès {startDate} à {startTime}
          </p>
        </div>
        {reserveButton}
      </div>
    </div>
  );
}
