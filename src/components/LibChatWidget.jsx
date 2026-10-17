import { useEffect } from 'react';

// Widget de clavardage LibChat.
// - global : onglet flottant monté par le Layout sur toutes les pages ;
// - intégré (inline) : fenêtre de clavardage placée dans une page ; l'onglet
//   flottant est alors masqué (voir custom.css) pour ne pas l'afficher en double.
export default function LibChatWidget({ hash, inline = false }) {
  useEffect(() => {
    if (typeof window === 'undefined' || !hash) return undefined;

    const id = `libchat_${hash}`;
    // Le script n'est chargé qu'une fois par widget, même si le composant est remonté
    if (document.querySelector(`script[data-libchat-id="${id}"]`)) return undefined;

    const script = document.createElement('script');
    script.src = `https://unequestion.bib.umontreal.ca/load_chat.php?hash=${hash}`;
    script.async = true;
    script.setAttribute('data-libchat', 'true');
    script.setAttribute('data-libchat-id', id);
    document.body.appendChild(script);

    return () => {
      // Ne retirer que son propre script (l'autre widget peut être monté en même temps)
      document.querySelector(`script[data-libchat-id="${id}"]`)?.remove();
    };
  }, [hash]);

  return <div id={`libchat_${hash}`} data-libchat-inline={inline ? 'true' : undefined} />;
}
