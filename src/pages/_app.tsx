import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import ContextProvider from '../context/ContextProvider';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
	const CustomNProgress = NProgress.configure({ showSpinner: false });

	Router.events.on('routeChangeStart', () => CustomNProgress.start());

	Router.events.on('routeChangeComplete', () => CustomNProgress.done());
	Router.events.on('routeChangeError', () => CustomNProgress.done());

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
