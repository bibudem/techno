import React, { useState } from 'react';

const Retroaction = () => {
  const [vote, setVote] = useState(null);
  const [comment, setComment] = useState('');
  const [status, setStatus] = useState('initial'); // 'initial' | 'submitting' | 'submitted' | 'error'

  const formId = 43784;
  const voteFieldId = 1582731;
  const commentFieldId = 1582733;
  const apiBase = 'https://umontreal.libwizard.com/api/v1/submission';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Obtenir un GUID de soumission
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
            data: vote,
            hidden: false,
            flags: 0
          },
          {
            formId,
            fieldId: commentFieldId,
            type: 'control_multi',
            data: comment,
            hidden: false,
            flags: 0
          }
        ],
        referrer: window.location.href,
        arrive: new Date().toISOString().substring(0, 19).replace('T', ' ')
      };

      // Envoyer la soumission
      await fetch(`${apiBase}/insertSubmission`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      setStatus('submitted');
    } catch (error) {
      console.error('Erreur de soumission :', error);
      setStatus('error');
    }
  };

  if (status === 'submitted') {
    return (
      <div style={{ marginTop: '1rem', background: '#e6ffed', padding: '1rem', borderRadius: '8px' }}>
        <p>✅ Merci, nous avons bien reçu vos commentaires.</p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div style={{ marginTop: '1rem', background: '#ffecec', padding: '1rem', borderRadius: '8px' }}>
        <p>❌ Une erreur est survenue. Veuillez réessayer plus tard.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '2rem', borderTop: '1px solid #ccc', paddingTop: '1rem' }}>
      <p>Cette page vous a-t-elle été utile&nbsp;?</p>
      <div>
        <button type="button" onClick={() => setVote('oui')} style={{ marginRight: '0.5rem', background: vote === 'oui' ? '#d0f0c0' : undefined }}>
          👍 Oui
        </button>
        <button type="button" onClick={() => setVote('non')} style={{ background: vote === 'non' ? '#fcdcdc' : undefined }}>
          👎 Non
        </button>
      </div>

      {vote && (
        <>
          <textarea
            placeholder="Laissez un commentaire (optionnel)"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={3}
            style={{ display: 'block', width: '100%', marginTop: '1rem' }}
          />
          <button type="submit" style={{ marginTop: '0.5rem' }} disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Envoi en cours…' : 'Envoyer'}
          </button>
        </>
      )}
    </form>
  );
};

export default Retroaction;