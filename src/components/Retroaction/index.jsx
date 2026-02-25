import React, {useState} from 'react';
import clsx from 'clsx';
import {CheckCircle, ThumbsDown, ThumbsUp, WarningCircle} from '@phosphor-icons/react';
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
    if (status === 'submitting') {
      return;
    }

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
      const submissionRes = await fetch(`${apiBase}/insertSubmission`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!submissionRes.ok) throw new Error('Submission failed');

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
    submitVote('non', comment.trim());
  };

  if (status === 'submitted') {
    return (
      <div className={styles.feedbackBox} role="status" aria-live="polite">
        <CheckCircle size={20} weight="fill" className={styles.feedbackIcon} aria-hidden="true" />
        <p className={styles.feedbackText}>
          Merci pour votre retour. Chaque avis nous aide à améliorer le site.
        </p>
      </div>
    );
  }

  const isSubmitting = status === 'submitting';
  return (
    <form onSubmit={handleFormSubmit} className={styles.wrapper}>
      <h3 className={styles.title}>L'information sur cette page vous a-t-elle été utile?</h3>
      <p className={styles.subtitle}>
        Votre retour est anonyme et ne prend que quelques secondes.
      </p>

      <div className={styles.buttons} role="group" aria-label="Votre réponse">
        <button
          type="button"
          onClick={handleOuiClick}
          disabled={isSubmitting}
          className={clsx(styles.button, vote === 'oui' && styles.selectedOui)}
        >
          <ThumbsUp size={20} /> Oui
        </button>
        <button
          type="button"
          onClick={handleNonClick}
          disabled={isSubmitting}
          className={clsx(styles.button, vote === 'non' && styles.selectedNon)}
        >
          <ThumbsDown size={20} /> Non
        </button>
      </div>

      {vote === 'non' && (
        <div className={styles.commentSection}>
          <label htmlFor="retroaction-comment" className={styles.commentLabel}>
            Qu'est-ce qui pourrait être amélioré ? (optionnel)
          </label>
          <p className={styles.commentHint}>
            Merci de ne pas inclure de renseignements personnels.
          </p>
          <textarea
            id="retroaction-comment"
            className={styles.textarea}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Votre message..."
            rows={4}
            maxLength={500}
          />
          <div className={styles.commentFooter}>
            <span className={styles.counter}>{comment.length}/500</span>
            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
            </button>
          </div>
        </div>
      )}

      {status === 'error' && (
        <p className={styles.error} role="alert">
          <WarningCircle size={18} weight="fill" aria-hidden="true" />
          Une erreur est survenue. Veuillez réessayer.
        </p>
      )}
    </form>
  );
};

export default Retroaction;
