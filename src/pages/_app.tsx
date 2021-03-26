import Head from "next/head";
import { MenuProvider } from "../../context/MenuContext";
import { CartProvider } from "../../context/CartContext";

import { GlobalStyle } from "../../styles/Global.styles";

function MyApp({ Component, pageProps }) {
	return (
		<MenuProvider>
			<CartProvider>
				<Head>
					<meta name="viewport" content="viewport-fit=cover" />
				</Head>
				<GlobalStyle />
				<Component {...pageProps} />
			</CartProvider>
		</MenuProvider>
	);
}

export default MyApp;
