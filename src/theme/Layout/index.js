
import Layout from '@theme-original/Layout';
import LienExterne from '@site/src/components/LienExterne';
import LibChatWidget from '@site/src/components/LibChatWidget';
import AvisBib from '@site/src/components/AvisBib';


export default function LayoutWrapper(props) {
  return (
    <>
      <AvisBib />
      <Layout {...props} />
      <LienExterne />
<LibChatWidget hash="2cdfcaf0f2e776291e8bfc9296e8b7573083d9b6ad33c930fa46024633447cce" />    </>
  );
}