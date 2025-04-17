---
id : electronique
title : Électronique
---
import CardGrid from '@site/src/components/CardGrid';

# Électroniques

Cette section est destinée à vous aider à mieux comprendre les technologies des microcontrôleurs et des ordinateurs monocartes, notamment les Arduinos, les Raspberry Pi, le Makey Makey et l'Internet des objets (IoT). Ces technologies sont utilisées dans de nombreux domaines, tels que la robotique, l'automatisation industrielle, les systèmes embarqués, la domotique et les projets personnels d'électronique. 

---


<CardGrid
  items={[
    {
      title: "Arduino",
      description: `![Arduino](URL_DE_VOTRE_IMAGE "Arduino")
      
Arduino est une plateforme de développement _open‑source_ populaire pour les projets électroniques. Elle se compose d'une carte programmable et d'un IDE (Arduino IDE) permettant de créer des montages interactifs. Facile à prendre en main et personnalisable selon vos besoins.`,
      link: "/creatives/impression3d/arduino",
      icon: "Circuitry",
    },
    {
      title: "Raspberry Pi",
      description: `![Raspberry Pi](URL_DE_VOTRE_IMAGE "Raspberry Pi")
      
Le Raspberry Pi est un ordinateur monocarte abordable et polyvalent, pensé pour l'apprentissage de l'informatique et de l’électronique. Il embarque un processeur, des ports USB, Ethernet, HDMI et des broches GPIO pour vos montages.`,
      link: "/creatives/impression3d/raspberry-pi",
      icon: "DesktopTower",
    },
    {
      title: "Internet des Objets",
      description: `![ESP8266](URL_DE_VOTRE_IMAGE "ESP8266")
      
L’Internet des Objets (_IoT_) connecte objets domestiques et industriels au réseau. L’ESP8266, microcontrôleur à faible consommation, est largement utilisé pour piloter capteurs et actionneurs en Wi‑Fi.`,
      link: "/creatives/impression3d/iot",
      icon: "WifiHigh",
    },
  ]}
/>