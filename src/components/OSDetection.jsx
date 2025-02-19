import React, { useEffect, useState } from "react";

const OSDetection = () => {
  const [osInfo, setOsInfo] = useState({ osName: "", osVersion: "" });
  const [docLink, setDocLink] = useState("/docs/default-documentation");

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
          osVersion = majorVersion >= 14 ? "13 ou ultérieurs" : "13 ou antérieurs";
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
      const baseUrl = "/informatique/proxy/";
      switch (osInfo.osName) {
        case "Windows":
          return `${baseUrl}windows-${osInfo.osVersion}-documentation`;
          case "macOS":
            return osInfo.osVersion === "13 ou ultérieurs"
              ? `${baseUrl}macos-13-et-plus`
              : `${baseUrl}macos-12-et-moins`;
        case "ChromeOS":
          return `${baseUrl}chromeos-documentation`;
        case "iOS":
          return `${baseUrl}ios-documentation`;
        case "Linux":
          return `${baseUrl}linux-documentation`;
        case "Android":
          return `${baseUrl}android-documentation`;
        default:
          return `${baseUrl}default-documentation`;
      }
    };

    const detectedOS = detectOS();
    setOsInfo(detectedOS);
    setDocLink(generateLink(detectedOS));
  }, []);

  return (
    <div>
      <small>Votre système d'exploitation est : {osInfo.osName} {osInfo.osVersion}</small>
      <br />
      <a href={docLink} className="button button--primary">
        Accéder à la documentation pour {osInfo.osName}
      </a>
    </div>
  );
};

export default OSDetection;
