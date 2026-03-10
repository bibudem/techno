import React, { useEffect, useState } from "react";

function getIsDarkTheme() {
  if (typeof document === "undefined") return false;
  return document.documentElement.getAttribute("data-theme") === "dark";
}

export default function CopyToClipboardButton({ text }) {
  const [copied, setCopied] = useState(false);
  const [hover, setHover] = useState(false);
  const [isDark, setIsDark] = useState(getIsDarkTheme);

  useEffect(() => {
    const updateTheme = () => setIsDark(getIsDarkTheme());
    updateTheme();

    const observer = new MutationObserver((mutations) => {
      const hasThemeMutation = mutations.some(
        (mutation) =>
          mutation.type === "attributes" &&
          mutation.attributeName === "data-theme",
      );
      if (hasThemeMutation) {
        updateTheme();
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    window.addEventListener("themechange", updateTheme);
    window.addEventListener("sb:color-mode-changed", updateTheme);

    return () => {
      observer.disconnect();
      window.removeEventListener("themechange", updateTheme);
      window.removeEventListener("sb:color-mode-changed", updateTheme);
    };
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <span
      style={{ 
        position: "relative", 
        cursor: "pointer", 
        display: "inline-block", 
        maxWidth: "100%" 
      }}
      onClick={handleCopy}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <code 
        style={{ 
          backgroundColor: isDark ? "var(--gris-700)" : "var(--gris-50)",
          color: isDark ? "var(--bleu-50)" : "var(--gris-700)",
          border: isDark ? "1px solid var(--gris-500)" : "1px solid var(--gris-200)",
          padding: "3px 6px", 
          borderRadius: "4px", 
          wordBreak: "break-word", 
          overflowWrap: "anywhere", 
          display: "inline-block",
          maxWidth: "100%"
        }}
      >
        {text}
      </code>

      {/* Tooltip au survol */}
      {hover && !copied && (
        <span
          style={{
            position: "absolute",
            top: "-30px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: isDark ? "var(--gris-100)" : "var(--gris-600)",
            color: isDark ? "var(--bleu-700)" : "var(--white)",
            padding: "5px 10px",
            borderRadius: "5px",
            fontSize: "12px",
            whiteSpace: "nowrap",
            opacity: 0.9,
          }}
        >
          Cliquer pour copier
        </span>
      )}

      {/* Message après copie */}
      {copied && (
        <span
          style={{
            position: "absolute",
            top: "-30px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: isDark ? "var(--bleu-300)" : "var(--gris-700)",
            color: isDark ? "var(--bleu-700)" : "var(--white)",
            padding: "5px 10px",
            borderRadius: "5px",
            fontSize: "12px",
            whiteSpace: "nowrap",
          }}
        >
          Copié!
        </span>
      )}
    </span>
  );
}
