import { emotionCache } from "@/emotionCache";
import { MantineProvider } from "@mantine/core";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyles, createStylesServer } from "@mantine/next";
import Script from "next/script";

const stylesServer = createStylesServer(emotionCache());

class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <ServerStyles
            html={initialProps.html}
            server={stylesServer}
            key="styles"
          />
        </>
      ),
    };
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <script
            src="https://buttr.dev/butter.js"
            data-site-id="ribgpfgjzs"
            async
          ></script>
          <meta name="description" content="브이뮤직" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default _Document;
