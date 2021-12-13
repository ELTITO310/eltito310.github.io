import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>

            <link rel="icon" href="ehh.gif" type="image/gif" sizes="16x16" />

            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="description" content="Hola!, me llamo Roy, soy un full stack developer" />
            <meta name="keywords" content="roy, roy portafolio, roy discord, eltito, !eltito" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;