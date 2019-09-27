import React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';
import {ServerStyleSheets} from '@material-ui/styles';
import theme from '../src/theme';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const styledComponentsSheet = new ServerStyleSheet();
    const materialSheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            styledComponentsSheet.collectStyles(
              materialSheets.collect(<App {...props} />)
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <React.Fragment>
            {initialProps.styles}
            {materialSheets.getStyleElement()}
            {styledComponentsSheet.getStyleElement()}
          </React.Fragment>
        ),
      };
    } finally {
      styledComponentsSheet.seal();
    }
  }

  render() {
    return (
      <html lang="en" dir="ltr">
        <Head>
          <meta name="charset" content="utf-8" key="charset" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
            key="viewport"
          />
          <meta
            name="theme-color"
            content={theme.palette.primary.main}
            key="theme-color"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href="/static/favicon.svg"
            sizes="any"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Inconsolata:400,700|Work+Sans:400,700&display=swap"
            rel="stylesheet"
          />
          <style jsx global>{`
            body,
            html,
            #__next {
              width: 100%;
              height: 100%;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
