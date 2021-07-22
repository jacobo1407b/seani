import Document, { Html, Head, Main, NextScript } from "next/document";
import CustomHead from 'components/CustomHead'
import Logo from 'assets/images/utt.png'


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="es">
        <Head>
        <CustomHead Logo={Logo}/> 
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
