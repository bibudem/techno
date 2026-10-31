import React, {useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {CheckCircle, ThumbsDown, ThumbsUp, WarningCircle} from '@phosphor-icons/react';
import styles from './Retroaction.module.css';

const Retroaction = () => {
  const [vote, setVote] = useState(null);
  const [comment, setComment] = useState('');
  const [status, setStatus] = useState('initial');
  const commentRef = useRef(null);
  const merciRef = useRef(null);

  const formId = 43784;
  const voteFieldId = 1582731;
  const commentFieldId = 1582733;
  const apiBase = 'https://umontreal.libwizard.com/api/v1/submission';
  const webhookUrl = 'https://ordo.bib.umontreal.ca/webhook/retroaction-studio-site';

  useEffect(() => {
    if (vote === 'non') {
      commentRef.current?.focus();
    }
  }, [vote]);

  // Le formulaire est remplacé par le remerciement : on y place le focus pour qu'il
  // ne retombe pas au début de la page, et pour que le message soit lu.
  useEffect(() => {
    if (status === 'submitted') {
      merciRef.current?.focus();
    }
  }, [status]);

  const clearErrorState = () => {
    if (status === 'error') {
      setStatus('initial');
    }
  };

  const submitVote = async (voteValue, commentValue = '') => {
    if (status === 'submitting') {
      return;
    }

    setStatus('submitting');

    try {
      const res = await fetch(`${apiBase}/getguid`);
      if (!res.ok) throw new Error('GUID fetch failed');
      const { guid } = await res.json();

      const data = [
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
      ];

      const payload = {
        formId,
        guid,
        flags: 0,
        collectIP: false,
        collectBrowser: true,
        collectRefer: true,
        isPreview: false,
        data,
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
    setComment('');
    submitVote('oui');
  };

  const handleNonClick = () => {
    clearErrorState();
    setVote('non');
  };

  const handleCommentChange = (e) => {
    clearErrorState();
    setComment(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    submitVote('non', comment.trim());
  };

  if (status === 'submitted') {
    return (
      <aside className={styles.wrapper} aria-label="Rétroaction sur la page">
        <div ref={merciRef} tabIndex={-1} className={styles.feedbackBox}>
          <CheckCircle size={20} weight="fill" className={styles.feedbackIcon} aria-hidden="true" />
          <p className={styles.feedbackText}>
            Merci, votre retour a été envoyé. Il nous aide à améliorer le site.
          </p>
        </div>
      </aside>
    );
  }

  const isSubmitting = status === 'submitting';
  return (
    <aside className={styles.wrapper} aria-label="Rétroaction sur la page">
    <form onSubmit={handleFormSubmit}>
      <p id="retroaction-titre" className={styles.title}>Cette page vous a été utile?</p>

      <div className={styles.buttons} role="group" aria-labelledby="retroaction-titre">
        <button
          type="button"
          onClick={handleOuiClick}
          disabled={isSubmitting}
          aria-pressed={vote === 'oui'}
          aria-label="Oui"
          className={clsx(styles.button, vote === 'oui' && styles.selected)}
        >
          <ThumbsUp size={24} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={handleNonClick}
          disabled={isSubmitting}
          aria-pressed={vote === 'non'}
          aria-label="Non"
          className={clsx(styles.button, vote === 'non' && styles.selected)}
        >
          <ThumbsDown size={24} aria-hidden="true" />
        </button>
      </div>

      {vote === 'non' && (
        <div className={styles.commentSection}>
          <p className={styles.sectionIntro}>
            Merci. Dites-nous ce qui manquait ou ce qui a rendu cette page moins utile.
          </p>

          <div className={styles.fieldGroup}>
            <label htmlFor="retroaction-comment" className={styles.commentLabel}>
              Commentaire <span className={styles.optional}>(optionnel)</span>
            </label>
            <p id="retroaction-comment-hint" className={styles.commentHint}>
              Décrivez brièvement le problème. Évitez d’inscrire des renseignements personnels
              dans ce champ.
            </p>
            <textarea
              id="retroaction-comment"
              ref={commentRef}
              className={styles.textarea}
              value={comment}
              onChange={handleCommentChange}
              placeholder="Ex. une information manquait, un lien était difficile à trouver, une étape n’était pas claire..."
              rows={5}
              maxLength={500}
              aria-describedby="retroaction-comment-hint"
            />
          </div>

          <p className={styles.commentHint}>
            Ce formulaire est anonyme et ne permet pas de suivi. Pour obtenir de l’aide ou une
            réponse, <Link to="/a-propos/nous-joindre">contactez-nous directement</Link>.
          </p>

          <div className={styles.commentFooter}>
            <span className={styles.counter}>{comment.length}/500</span>
            <button
              type="submit"
              className={clsx('button button--secondary', styles.submitButton)}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer mon retour'}
            </button>
          </div>
        </div>
      )}

      {status === 'error' && (
        <p className={styles.error} role="alert">
          <WarningCircle size={18} weight="fill" aria-hidden="true" />
          Une erreur est survenue lors de l'envoi. Veuillez réessayer.
        </p>
      )}
    </form>
    </aside>
  );
};

export default Retroaction;
