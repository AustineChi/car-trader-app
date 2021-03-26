import { GlobalStyle } from "../../styles/Global.styles";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <GlobalStyle />
		<Component {...pageProps} />
    </>
  )
}

export default MyApp
