
import Layout from '@theme-original/Layout';
import LienExterne from '@site/src/components/LienExterne';
import LibChatWidgets from '@site/src/components/LibChatWidget';


export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props} />
      <LienExterne />
      <LibChatWidgets />
    </>
  );
}