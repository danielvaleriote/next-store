import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import ContextProvider from '../context/ContextProvider';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ContextProvider>
				<Navbar />
				<Component {...pageProps} />
			</ContextProvider>
		</>
	);
}

export default MyApp;
