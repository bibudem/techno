import React, {useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import {CheckCircle, ThumbsDown, ThumbsUp, WarningCircle} from '@phosphor-icons/react';
import styles from './Retroaction.module.css';

const UDEM_EMAIL_PATTERN = '[^\\s@]+@[uU][mM][oO][nN][tT][rR][eE][aA][lL]\\.ca';

const Retroaction = () => {
  const [vote, setVote] = useState(null);
  const [comment, setComment] = useState('');
  const [email, setEmail] = useState('');
  const [wantsFollowUp, setWantsFollowUp] = useState(false);
  const [status, setStatus] = useState('initial');
  const commentRef = useRef(null);
  const emailRef = useRef(null);

  const formId = 43784;
  const voteFieldId = 1582731;
  const commentFieldId = 1582733;
  const emailFieldId = 1635391;
  const apiBase = 'https://umontreal.libwizard.com/api/v1/submission';
  const webhookUrl = 'https://ordo.bib.umontreal.ca/webhook/retroaction-studio-site';

  useEffect(() => {
    if (vote === 'non') {
      commentRef.current?.focus();
    }
  }, [vote]);

  useEffect(() => {
    if (vote === 'non' && wantsFollowUp) {
      emailRef.current?.focus();
    }
  }, [vote, wantsFollowUp]);

  const clearErrorState = () => {
    if (status === 'error') {
      setStatus('initial');
    }
  };

  const submitVote = async (voteValue, commentValue = '', emailValue = '') => {
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

      if (emailValue) {
        data.push({
          formId,
          fieldId: emailFieldId,
          type: 'control_email',
          data: emailValue,
          hidden: false,
          flags: 0
        });
      }

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
    setEmail('');
    setWantsFollowUp(false);
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

  const handleEmailChange = (e) => {
    clearErrorState();
    setEmail(e.target.value);
  };

  const handleFollowUpChange = (e) => {
    clearErrorState();
    setWantsFollowUp(e.target.checked);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    submitVote('non', comment.trim(), wantsFollowUp ? email.trim() : '');
  };

  const submittedWithFollowUp = vote === 'non' && wantsFollowUp && email.trim() !== '';

  if (status === 'submitted') {
    return (
      <div className={styles.feedbackBox} role="status" aria-live="polite">
        <CheckCircle size={20} weight="fill" className={styles.feedbackIcon} aria-hidden="true" />
        <p className={styles.feedbackText}>
          {submittedWithFollowUp
            ? 'Merci, votre retour a été envoyé. Si un suivi est nécessaire, l’équipe pourra vous écrire à l’adresse fournie.'
            : 'Merci, votre retour a été envoyé. Il nous aide à améliorer le site.'}
        </p>
      </div>
    );
  }

  const isSubmitting = status === 'submitting';
  return (
    <form onSubmit={handleFormSubmit} className={styles.wrapper}>
      <h3 className={styles.title}>L'information sur cette page vous a-t-elle été utile?</h3>
      <p className={styles.subtitle}>
        Votre réponse nous aide à améliorer le site. Si vous choisissez non, vous pourrez
        préciser le problème et demander un suivi.
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

          <div className={styles.fieldGroup}>
            <label
              htmlFor="retroaction-follow-up"
              className={clsx(
                styles.followUpCard,
                wantsFollowUp && styles.followUpCardSelected,
              )}
            >
              <input
                id="retroaction-follow-up"
                type="checkbox"
                className={styles.checkboxInput}
                checked={wantsFollowUp}
                onChange={handleFollowUpChange}
              />
              <span className={styles.followUpContent}>
                <span className={styles.followUpTitle}>
                  Je souhaite qu’un membre de l’équipe fasse un suivi avec moi
                </span>
                <span className={styles.followUpHint}>
                  Si vous cochez cette option, un courriel UdeM sera demandé.
                </span>
              </span>
            </label>
          </div>

          {wantsFollowUp && (
            <div className={styles.fieldGroup}>
              <label htmlFor="retroaction-email" className={styles.commentLabel}>
                Courriel UdeM
              </label>
              <p id="retroaction-email-hint" className={styles.commentHint}>
                Obligatoire si vous demandez un suivi. Seules les adresses @umontreal.ca sont
                acceptées.
              </p>
              <input
                id="retroaction-email"
                ref={emailRef}
                type="email"
                className={styles.input}
                value={email}
                onChange={handleEmailChange}
                placeholder="prenom.nom@umontreal.ca"
                autoComplete="email"
                inputMode="email"
                required={wantsFollowUp}
                maxLength={254}
                pattern={UDEM_EMAIL_PATTERN}
                title="Utilisez une adresse courriel se terminant par @umontreal.ca."
                aria-describedby="retroaction-email-hint"
              />
            </div>
          )}

          <div className={styles.commentFooter}>
            <span className={styles.counter}>{comment.length}/500</span>
            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
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
  );
};

export default Retroaction;
