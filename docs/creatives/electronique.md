---
id : electronique
title : Électronique
---

# Électroniques

Cette section est destinée à vous aider à mieux comprendre les technologies des microcontrôleurs et des ordinateurs monocartes, notamment les Arduinos, les Raspberry Pi, le Makey Makey et l'Internet des objets (IoT). Ces technologies sont utilisées dans de nombreux domaines, tels que la robotique, l'automatisation industrielle, les systèmes embarqués, la domotique et les projets personnels d'électronique. 

---

<div
  className="grid grid--1"
  style={{
    display: "grid",
    gap: "1rem",
    gridTemplateColumns: "1fr",
  }}
>
  {/* Carte Arduino */}
  <a
    href="#"
    className="card card--clickable"
    style={{
      backgroundColor: "#0057ac",
      color: "#fff",
      borderRadius: "8px",
      padding: "1rem",
      textDecoration: "none",
      transition: "transform 0.2s, box-shadow 0.2s, background-color 0.2s",
    }}
  >
    <div className="card__header">
      <h3>Arduino</h3>
    </div>
    <div className="card__body">
      <img
        src="#"
        alt="une carte Arduino"
        style={{ width: "100%", borderRadius: "4px", marginBottom: "1rem" }}
      />
      Arduino est une plateforme de développement *open-source* populaire pour les projets électroniques. Elle se compose d'une carte électronique programmable et d'un environnement de développement (Arduino IDE) qui permet aux utilisateurs de créer des projets interactifs en contrôlant les entrées et les sorties. Les cartes Arduino sont faciles à utiliser, abordables et peuvent être personnalisées pour répondre à des besoins spécifiques.
    </div>
    <div style={{ marginTop: "1rem" }}>
      [Découvrir Arduino](#)
    </div>
  </a>

  {/* Carte Raspberry Pi */}
  <a
    href="#"
    className="card card--clickable"
    style={{
      backgroundColor: "#0057ac",
      color: "#fff",
      borderRadius: "8px",
      padding: "1rem",
      textDecoration: "none",
      transition: "transform 0.2s, box-shadow 0.2s, background-color 0.2s",
    }}
  >
    <div className="card__header">
      <h3>Raspberry Pi</h3>
    </div>
    <div className="card__body">
      <img
        src="#"
        alt="une carte Raspberry Pi"
        style={{ width: "100%", borderRadius: "4px", marginBottom: "1rem" }}
      />
      Le Raspberry Pi est un ordinateur monocarte abordable et polyvalent qui a été développé pour encourager l'apprentissage de l'informatique et de l'électronique. Il dispose d'un processeur puissant, de ports USB, de ports Ethernet, d'un port HDMI, d'un connecteur pour une caméra et de broches GPIO pour la connexion de périphériques électroniques.
    </div>
    <div style={{ marginTop: "1rem" }}>
      [Découvrir Raspberry Pi](#)
    </div>
  </a>

  {/* Carte Internet des Objets */}
  <a
    href="#"
    className="card card--clickable"
    style={{
      backgroundColor: "#0057ac",
      color: "#fff",
      borderRadius: "8px",
      padding: "1rem",
      textDecoration: "none",
      transition: "transform 0.2s, box-shadow 0.2s, background-color 0.2s",
    }}
  >
    <div className="card__header">
      <h3>Internet des Objets</h3>
    </div>
    <div className="card__body">
      <img
        src="#"
        alt="Une carte ESP8266"
        style={{ width: "100%", borderRadius: "4px", marginBottom: "1rem" }}
      />
      L'Internet des Objets (*IoT*) est une technologie en constante évolution qui permet la connexion de différents types d'objets à internet, allant des appareils domestiques tels que les thermostats et les lumières, aux équipements industriels tels que les capteurs de température et les systèmes de surveillance. L'ESP8266 est un microcontrôleur qui est souvent utilisé dans les projets *IoT* en raison de sa connectivité Wi-Fi intégrée et de sa faible consommation d'énergie.
    </div>
    <div style={{ marginTop: "1rem" }}>
      [Découvrir l'Internet des Objets](#)
    </div>
  </a>
</div>