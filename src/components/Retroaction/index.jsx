import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown } from '@phosphor-icons/react';
import styles from './Retroaction.module.css';

const Retroaction = () => {
  const [vote, setVote] = useState(null);
  const [comment, setComment] = useState('');
  const [status, setStatus] = useState('initial');

  const formId = 43784;
  const voteFieldId = 1582731;
  const commentFieldId = 1582733;
  const apiBase = 'https://umontreal.libwizard.com/api/v1/submission';
  const webhookUrl = 'https://ordo.bib.umontreal.ca/webhook/retroaction-studio-site';

  const submitVote = async (voteValue, commentValue = '') => {
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
        collectBrowser: true,
        collectRefer: true,
        isPreview: false,
        data: [
          {
            formId,
            fieldId: voteFieldId,
            type: 'control_radio',
            data: voteValue,
            hidden: false,
            flags: 0
          },
          {
            formId,
            fieldId: commentFieldId,
            type: 'control_multi',
            data: commentValue,
            hidden: false,
            flags: 0
          }
        ],
        referrer: window.location.href,
        arrive: new Date().toISOString().substring(0, 19).replace('T', ' ')
      };

      // 1. Envoi principal vers LibWizard
      await fetch(`${apiBase}/insertSubmission`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      // 2. Envoi parallèle vers ton webhook n8n
      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(err => console.error('Erreur webhook n8n :', err));

      setStatus('submitted');
    } catch (error) {
      console.error('Erreur de soumission :', error);
      setStatus('error');
    }
  };

  const handleOuiClick = () => {
    setVote('oui');
    submitVote('oui');
  };

  const handleNonClick = () => {
    setVote('non');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    submitVote('non', comment);
  };

  if (status === 'submitted') {
    return (
      <div
        style={{
          marginTop: '1rem',
          background: '#e6ffed',
          padding: '1rem',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <p style={{ margin: 0 }}>
          Merci pour votre retour. Chaque avis nous aide à rendre ce site web meilleur.
        </p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div style={{ marginTop: '1rem', background: '#ffecec', padding: '1rem', borderRadius: '8px' }}>
        <p>Une erreur est survenue. Veuillez réessayer plus tard.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleFormSubmit} className={styles.wrapper}>
      <p>L’information sur cette page vous a-t-elle été utile ?</p>

      <div className={styles.buttons}>
        <button
          type="button"
          data-type="oui"
          onClick={handleOuiClick}
          className={`${styles.button} ${vote === 'oui' ? styles.selectedOui : ''}`}
        >
          <ThumbsUp size={20} /> Oui
        </button>
        <button
          type="button"
          data-type="non"
          onClick={handleNonClick}
          className={`${styles.button} ${vote === 'non' ? styles.selectedNon : ''}`}
        >
          <ThumbsDown size={20} /> Non
        </button>
      </div>

      {vote === 'non' && (
        <>
          <div style={{ marginTop: '1rem' }}>
            <strong>Faites-nous part de vos commentaires.</strong><br />
            <span style={{ fontSize: '0.9rem' }}>
              Merci de ne pas inclure de renseignements personnels. Vous ne recevrez pas de réponse, mais vos commentaires seront pris en compte.
            </span>
          </div>
          <textarea
            className={styles.textarea}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Votre message..."
            rows={3}
          />
          <button type="submit" className={styles.submitButton} disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Envoi en cours…' : 'Envoyer'}
          </button>
        </>
      )}
    </form>
  );
};

export default Retroaction;