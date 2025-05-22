import React, { useState } from 'react';
import styles from './FormulaireContactAPI.module.css';

export default function FormulaireContactAPI() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('initial');

  const formId = 44998;
  const emailFieldId = 1608125;
  const messageFieldId = 1608126;
  const apiBase = 'https://umontreal.libwizard.com/api/v1/submission';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch(`${apiBase}/getguid`);
      if (!res.ok) throw new Error('GUID fetch failed');
      const { guid } = await res.json();

      const payload = {
        formId,
        guid,
        flags: 0,
        collectIP: false,
        collectBrowser: false,
        collectRefer: false,
        isPreview: false,
        data: [
          {
            formId,
            fieldId: emailFieldId,
            type: 'control_email',
            data: email,
            hidden: false,
            flags: 0
          },
          {
            formId,
            fieldId: messageFieldId,
            type: 'control_multi',
            data: message,
            hidden: false,
            flags: 0
          }
        ],
        referrer: window.location.href,
        arrive: new Date().toISOString().substring(0, 19).replace('T', ' ')
      };

      await fetch(`${apiBase}/insertSubmission`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      setStatus('submitted');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Erreur de soumission :', error);
      setStatus('error');
    }
  };

  if (status === 'submitted') {
    return <p className={styles.success}>Merci, votre message a bien été envoyé.</p>;
  }

  if (status === 'error') {
    return <p className={styles.error}>Une erreur est survenue. Veuillez réessayer plus tard.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Courriel <span className={styles.obligatoire}>(obligatoire)</span><br />
        <input
          type="email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-describedby="email-note"
        />
        <div id="email-note" className={styles.note}>
          {/* Seuls les courriels se terminant par <code>@umontreal.ca</code> sont acceptés. */}
        </div>
      </label>

      <label className={styles.label}>
        Message <span className={styles.obligatoire}>(obligatoire)</span><br />
        <textarea
          className={styles.textarea}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          required
        />
      </label>

      <button type="submit" className={styles.button} disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Envoi en cours…' : 'Envoyer'}
      </button>
    </form>
  );
}