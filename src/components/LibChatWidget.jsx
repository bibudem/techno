import { useEffect } from 'react';

export default function LibChatWidget({ hash }) {
  useEffect(() => {
    if (typeof window === 'undefined' || !hash) return;

    const script = document.createElement('script');
    script.src = `https://unequestion.bib.umontreal.ca/load_chat.php?hash=${hash}`;
    script.async = true;
    script.setAttribute('data-libchat', 'true');
    script.setAttribute('data-libchat-id', `libchat_${hash}`);
    document.body.appendChild(script);

    return () => {
      document.querySelectorAll('script[data-libchat]').forEach(el => el.remove());
    };
  }, [hash]);

  return <div id={`libchat_${hash}`} />;
}