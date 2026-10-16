import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import styles from "./CopyToClipboardButton.module.css";

// Les couleurs claires/sombres sont gérées en CSS ([data-theme='dark']) :
// aucun calcul du thème au rendu, donc pas de décalage à l'hydratation.
export default function CopyToClipboardButton({ text }) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const handleCopy = () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    }).catch(() => {});
  };

  return (
    <span className={styles.wrapper}>
      <button
        type="button"
        className={styles.button}
        onClick={handleCopy}
        aria-label={`Copier « ${text} »`}
      >
        <code className={styles.code}>{text}</code>
      </button>
      <span
        className={clsx(styles.tooltip, copied && styles.copied)}
        aria-hidden="true"
      >
        {copied ? "Copié!" : "Cliquer pour copier"}
      </span>
      <span className={styles.srOnly} role="status">
        {copied ? "Copié dans le presse-papiers" : ""}
      </span>
    </span>
  );
}
