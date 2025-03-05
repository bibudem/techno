import React, { useEffect, useState } from "react";

const OSDetection = () => {
  const [osInfo, setOsInfo] = useState({ osName: "", osVersion: "" });
  const [docLink, setDocLink] = useState("/informatique/proxy");

  useEffect(() => {
    const detectOS = () => {
      const userAgent = window.navigator.userAgent;
      let osName = "Inconnu";
      let osVersion = "";

      if (userAgent.includes("Windows NT 10.0")) {
        osName = "Windows";
        osVersion = "10";
      } else if (userAgent.includes("Windows NT 11.0") || (userAgent.includes("Windows NT 10.0") && navigator.userAgentData?.platformVersion?.split('.')[0] >= 13)) {
        osName = "Windows";
        osVersion = "11";
      } else if (userAgent.includes("Mac OS X")) {
        osName = "macOS";
        const macVersionMatch = userAgent.match(/Mac OS X (\d+[_|\.\d]+)/);
        if (macVersionMatch) {
          const macVersion = macVersionMatch[1].replace('_', '.');
          const majorVersion = parseInt(macVersion.split('.')[1]);
          osVersion = majorVersion >= 14 ? "13 et ultérieurs" : "12 et antérieurs";
        }
      } else if (userAgent.includes("CrOS")) {
        osName = "ChromeOS";
      } else if (/iPad|iPhone|iPod/.test(userAgent)) {
        osName = "iOS";
      } else if (userAgent.includes("Linux")) {
        osName = "Linux";
      } else if (userAgent.includes("Android")) {
        osName = "Android";
      }

      return { osName, osVersion };
    };

    const generateLink = (osInfo) => {
      const baseUrl = "/informatique/proxy"; // La page contenant les tabs
      let tabValue = ""; // Valeur du tab à sélectionner

      switch (osInfo.osName) {
        case "Windows":
          tabValue = `Windows${osInfo.osVersion}`;
          break;
        case "macOS":
          tabValue = osInfo.osVersion;
          break;
        case "iOS":
          tabValue = "iOS";
          break;
        case "Android":
          tabValue = "Android";
          break;
        default:
          return baseUrl;
      }

      // Met à jour le localStorage pour que Docusaurus sélectionne l'onglet
      localStorage.setItem("docusaurus.tab.os-tabs", JSON.stringify(tabValue));

      return baseUrl;
    };

    const detectedOS = detectOS();
    setOsInfo(detectedOS);
    setDocLink(generateLink(detectedOS));
  }, []);

  return (
    <div>
      <center>
      <small>Votre système d'exploitation est : {osInfo.osName} {osInfo.osVersion}</small>
      <br />

      <a href={docLink} className="button button--primary">
        Accéder à la documentation pour {osInfo.osName}
      </a>
      <br /><br />
      </center>
    </div>
  );
};

export default OSDetection;