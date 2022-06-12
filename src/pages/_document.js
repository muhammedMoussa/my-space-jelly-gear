/* eslint-disable */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <script type="text/javascript" src="/static/hello.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            
            `,
          }}
        ></script>
      </body>
    </Html>
  );
}
