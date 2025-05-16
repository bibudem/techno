import { useEffect } from 'react';

export default function LibChatWidget() {
  useEffect(() => {
    const widgets = [
      {
        id: 'libchat_e861323806461c81b9297cafd90d08db',
        hash: 'e861323806461c81b9297cafd90d08db',
      },
      {
        id: 'libchat_4686db928ee24b4b79f3a374ba6a0d77',
        hash: '4686db928ee24b4b79f3a374ba6a0d77',
      },
    ];

    widgets.forEach(({ id, hash }) => {
      const script = document.createElement('script');
      script.src = `https://unequestion.bib.umontreal.ca/load_chat.php?hash=${hash}`;
      script.async = true;
      script.setAttribute('data-libchat', 'true');
      script.setAttribute('data-libchat-id', id); // pour faciliter le nettoyage
      document.body.appendChild(script);
    });

    return () => {
      document.querySelectorAll('script[data-libchat]').forEach(el => el.remove());
    };
  }, []);

  return (
    <>
      <div id="libchat_e861323806461c81b9297cafd90d08db" />
      <div id="libchat_4686db928ee24b4b79f3a374ba6a0d77" />
    </>
  );
}