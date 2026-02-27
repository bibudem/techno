import React, { useEffect, useState } from "react";

const N8N_URL = "https://ordo.bib.umontreal.ca/webhook/suggestion-achat";
const N8N_KEY = "BIB-2025-XYZ"; 

// Base CAS UdeM (note : .ashx)
const CAS_BASE = "https://identification.umontreal.ca/cas/login.ashx";
const CAS_VALIDATE = "https://identification.umontreal.ca/cas/serviceValidate";

export default function FormulaireSuggestionAchat() {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    nom: "",
    courriel: "",
    statut: "",
    departement: "",
    identifiant: "",
    type_document: "",
    titre: "",
    auteur: "",
    annee: "",
    isbn: "",
    edition: "",
    notes: "",
    reserver: "Non",
    date_requis: "",
    mettre_reserve: false,
    cours: ""
  });
  const [status, setStatus] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const urlParams = new URLSearchParams(window.location.search);
    const ticket = urlParams.get("ticket");

    // Mode DEV → CAS désactivé
    if (window.location.hostname === "localhost") {
      console.warn("CAS désactivé en mode localhost (développement)");
      return;
    }

    // URL de service en PROD
    const serviceUrl = window.location.origin + window.location.pathname;

    if (!ticket) {
      const casLoginUrl = `${CAS_BASE}?service=${encodeURIComponent(serviceUrl)}`;
      window.location.href = casLoginUrl;
      return;
    }

    const validateUrl = `${CAS_VALIDATE}?service=${encodeURIComponent(serviceUrl)}&ticket=${ticket}`;

    fetch(validateUrl)
      .then(r => r.text())
      .then(xml => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(xml, "text/xml");
        const successNode = doc.querySelector("cas\\:authenticationSuccess");

        if (successNode) {
          const netid = successNode.querySelector("cas\\:user")?.textContent || "";
          const email = successNode.querySelector("cas\\:email")?.textContent || "";
          const prenom = successNode.querySelector("cas\\:givenName")?.textContent || "";
          const nomFamille = successNode.querySelector("cas\\:sn")?.textContent || "";
          const statut = successNode.querySelector("cas\\:eduPersonPrimaryAffiliation")?.textContent || "";
          const departement = successNode.querySelector("cas\\:ou")?.textContent || "";

          const nomComplet = `${prenom} ${nomFamille}`.trim();

          setUser({ netid, courriel: email, nom: nomComplet, statut, departement });
          setForm(f => ({
            ...f,
            nom: nomComplet,
            courriel: email,
            statut: statut || "",
            departement: departement || "",
            identifiant: netid
          }));

          window.history.replaceState({}, document.title, window.location.pathname);
        } else {
          setStatus("Ticket CAS invalide.");
        }
      })
      .catch(() => {
        setStatus("Impossible de valider le ticket CAS.");
      });
  }, []);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({
      ...f,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours…");

    try {
      const res = await fetch(N8N_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": N8N_KEY
        },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        setStatus(null);
        setSuccess(true);
      } else {
        setStatus("❌ Erreur lors de l’envoi.");
      }
    } catch {
      setStatus("❌ Erreur réseau.");
    }
  };

  if (success) {
    return (
      <section style={{ maxWidth: "600px", margin: "2rem auto", padding: "2rem", background: "var(--white)", borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)", textAlign: "center" }}>
        <h2 style={{ color: "var(--bleu-500)", fontSize: "1.5rem", marginBottom: "1rem" }}>Votre demande a été acheminée</h2>
        <p style={{ fontSize: "1rem", color: "var(--c-333333)", marginBottom: "2rem" }}>
          Nous vous remercions d’avoir utilisé ce service.
        </p>
        <div>
          <a href="/dev/form-sa" style={{ background: "var(--bleu-500)", color: "var(--white)", padding: "10px 20px", borderRadius: "30px", textDecoration: "none", marginRight: "15px" }}>
            Effectuer une autre demande
          </a>
          <a href="/" style={{ background: "var(--c-6c757d)", color: "var(--white)", padding: "10px 20px", borderRadius: "30px", textDecoration: "none" }}>
            Retour à l’accueil
          </a>
        </div>
      </section>
    );
  }

  return (
    <section style={{ maxWidth: "700px", margin: "2rem auto", padding: "1rem", background: "var(--white)", borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Suggestion d’achat</h1>
      <p style={{ marginBottom: "1rem", fontSize: "0.9rem", color: "var(--c-555555)" }}>
        Avant de remplir ce formulaire, veuillez vérifier dans <a href="https://umontreal.on.worldcat.org/discovery?lang=fr" style={{ color: "var(--bleu-500)" }}>Sofia</a> que le document n’est pas déjà dans la collection.
      </p>

      <form onSubmit={submit}>
        {/* Identification */}
        <fieldset>
          <legend><strong>Identification</strong></legend>
          <label>
            Nom *<br/>
            <input name="nom" value={form.nom} onChange={onChange} required readOnly={!!user}/>
          </label><br/>
          <label>
            Courriel *<br/>
            <input type="email" name="courriel" value={form.courriel} onChange={onChange} required readOnly={!!user}/>
          </label><br/>
          <label>
            Catégorie d’usager<br/>
            <input name="statut" value={form.statut} onChange={onChange}/>
          </label><br/>
          <label>
            Faculté / Département<br/>
            <input name="departement" value={form.departement} onChange={onChange}/>
          </label>
        </fieldset>

        {/* Description */}
        <fieldset>
          <legend><strong>Description de la suggestion</strong></legend>
          <label>
            Type de document *<br/>
            <select name="type_document" value={form.type_document} onChange={onChange} required>
              <option value="">Choisir…</option>
              <option>Livre</option>
              <option>Périodique</option>
              <option>Document audiovisuel</option>
              <option>Base de données</option>
              <option>Autre</option>
            </select>
          </label><br/>
          <label>
            Titre *<br/>
            <textarea name="titre" value={form.titre} onChange={onChange} required rows={2}/>
          </label><br/>
          <label>
            Auteur·rice *<br/>
            <input name="auteur" value={form.auteur} onChange={onChange} required/>
          </label><br/>
          <label>
            Année de publication ou URL<br/>
            <input name="annee" value={form.annee} onChange={onChange}/>
          </label><br/>
          <label>
            ISBN / ISSN<br/>
            <input name="isbn" value={form.isbn} onChange={onChange}/>
          </label><br/>
          <label>
            Édition<br/>
            <input name="edition" value={form.edition} onChange={onChange}/>
          </label><br/>
          <label>
            Notes et commentaires<br/>
            <textarea name="notes" value={form.notes} onChange={onChange} rows={4}/>
          </label>
        </fieldset>

        {/* Réservation */}
        <fieldset>
          <legend><strong>Réservation</strong></legend>
          <label>
            <input type="radio" name="reserver" value="Oui" checked={form.reserver === "Oui"} onChange={onChange}/> Oui
          </label>
          <label>
            <input type="radio" name="reserver" value="Non" checked={form.reserver === "Non"} onChange={onChange}/> Non
          </label>
        </fieldset>

        {/* Section enseignants */}
        <fieldset>
          <legend><strong>Section réservée au corps enseignant</strong></legend>
          <label>
            Document requis pour un cours en date du…<br/>
            <input type="date" name="date_requis" value={form.date_requis} onChange={onChange}/>
          </label><br/>
          <label>
            <input type="checkbox" name="mettre_reserve" checked={form.mettre_reserve} onChange={onChange}/> Mettre le document à la réserve de cours
          </label><br/>
          {form.mettre_reserve && (
            <label>
              Sigle et nom du cours<br/>
              <input name="cours" value={form.cours} onChange={onChange}/>
            </label>
          )}
        </fieldset>

        {/* Messages d’état */}
        {status && (
          <div style={{ margin: "1rem 0", padding: "0.75rem", background: "var(--c-f5f5f5)", borderRadius: "4px" }}>
            {status}
          </div>
        )}

        {/* Actions */}
        <div style={{ marginTop: "1rem" }}>
          <button
            type="reset"
            onClick={() => setForm({ ...form, type_document: "", titre: "", auteur: "", annee: "", isbn: "", edition: "", notes: "", reserver: "Non", date_requis: "", mettre_reserve: false, cours: "" })}
          >
            Recommencer
          </button>
          <button type="submit" style={{ marginLeft: "1rem", background: "var(--bleu-500)", color: "white", padding: "0.5rem 1rem", borderRadius: "4px" }}>
            Envoyer
          </button>
        </div>
      </form>
    </section>
  );
}