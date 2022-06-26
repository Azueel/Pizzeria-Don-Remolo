import { Provider } from 'react-redux';
import '../styles/index.css';
import '../styles/global.css';
import { store } from '../redux/store/store';
import HomeNav from '../modules/home-header/Main';
import { Footer } from '../modules/shared/Footer';
function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<HomeNav />
			<Component {...pageProps} />
			<Footer />
		</Provider>
	);
}

export default MyApp;
