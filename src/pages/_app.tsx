import Head from 'next/head';
import {MenuProvider} from '../../context/MenuContext'
import { GlobalStyle } from "../../styles/Global.styles";

function MyApp({ Component, pageProps }) {
  return (
    <MenuProvider>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <GlobalStyle />
		<Component {...pageProps} />
    </MenuProvider>
  )
}

export default MyApp
