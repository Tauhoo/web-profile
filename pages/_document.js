import Document, { Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"
import { domain, common_font } from "../config"

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          <title>{domain}</title>
          <link
            href='https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Nobile&display=swap'
            rel='stylesheet'
          />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />
          <style>{`
            body, html { 
                margin: 0; 
                font-size: 18px; 
                padding: 0px !important;
                overflow: unset !important;
            }

            /* width */
            ::-webkit-scrollbar {
              width: 8px;
            }
            
            /* Track */
            ::-webkit-scrollbar-track {
              background: linear-gradient(to top, #09203f 0%, #537895 100%);;
            }
            
            /* Handle */
            ::-webkit-scrollbar-thumb {
              border-radius: 4px;
              background: black; 
            }
            `}</style>
          {styleTags}
        </Head>
        <body>
          <div className='root'>{main}</div>
          <NextScript />
        </body>
      </html>
    )
  }
}
