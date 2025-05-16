
import Layout from '@theme-original/Layout';
import LienExterne from '@site/src/components/LienExterne';
import LibChatWidget from '@site/src/components/LibChatWidget';


export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props} />
      <LienExterne />
<LibChatWidget hash="e861323806461c81b9297cafd90d08db" />    </>
  );
}