import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <html className="has-navbar-fixed-top">
        <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css"/>
          <script dangerouslySetInnerHTML={{__html:`window.twttr = (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0],
              t = window.twttr || {};
            if (d.getElementById(id)) return t;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);
            t._e = [];
            t.ready = function(f) {
              t._e.push(f);
            };
            return t;
          }(document, "script", "twitter-wjs"));`}}></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}