import { GlobalStyle } from "../../styles/Global.styles";

function MyApp({ Component, pageProps }) {
	return (
	<>
		<GlobalStyle />
		<Component {...pageProps} />
	</>)
}

export default MyApp;
