import { useEffect } from 'react';

export default function LibChatWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unequestion.bib.umontreal.ca/load_chat.php?hash=e861323806461c81b9297cafd90d08db';
    script.async = true;
    script.setAttribute('data-libchat', 'true');
    document.body.appendChild(script);

    return () => {
      document.querySelectorAll('script[data-libchat]').forEach(el => el.remove());
    };
  }, []);

  return <div id="libchat_e861323806461c81b9297cafd90d08db" />;
}