---
title: Authentification
description: Accédez aux services informatiques de l'Université de Montréal grâce à l'authentification par code d'accès et mot de passe.
image: "/img/cover/authentification.webp"
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import CardGrid from '@site/src/components/CardGrid';

<img 
  src={useBaseUrl(frontMatter.image)} 
  alt={frontMatter.title} 
  style={{
    width: "100%",
    maxWidth: "1200px",
    display: "block",
    margin: "16px auto",
    borderRadius: "8px"
  }} 
/>
# Authentification

L'authentification par code d'accès et mot de passe est nécessaire pour accéder à la plupart des services informatiques de l'Université de Montréal, comme se connecter au réseau sans fil, accéder au portail étudiant, à StudiUM, au courriel institutionnel ou aux ressources électroniques des bibliothèques. Ce service est offert par les Technologies de l'Information de l'Université de Montréal (TI).

## Ressources

<CardGrid
  items={[
    {
      title: "Wiki des Technologies de l'information (TI)",
      description:
        "Accédez à la documentation officielle sur les services informatiques de l'université.",
      link: "https://wiki.umontreal.ca/x/HJeUBw",
      icon: "BookOpenText",
    },
    {
      title: "Code d'accès ou mot de passe oublié ?",
      description:
        "Découvrez comment récupérer votre code d'accès ou réinitialiser votre mot de passe.",
      link:
        "https://ti.umontreal.ca/offre-de-services/services-par-categorie/comptes-et-mots-de-passe/authentification-code-dacces-unip/",
      icon: "Password",
    },
    {
      title: "Authentification à deux facteurs (A2F)",
      description:
        "Protégez vos accès avec une couche de sécurité supplémentaire grâce à l'A2F.",
      link:
        "https://wiki.umontreal.ca/pages/viewpage.action?pageId=184126772",
      icon: "Network",
    },
    {
      title: "Inscrire ou modifier ses questions de vérification (TI)",
      description:
        "Niveau de sécurité additionnel permettant d’accéder au Libre-service Mot de passe oublié.",
      link:
        "https://wiki.umontreal.ca/spaces/SIE/pages/130462126/Questions+de+v%C3%A9rification",
      icon: "BookOpenText",
    },
  ]}
/>


---


