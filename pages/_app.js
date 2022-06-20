import { Provider } from 'react-redux';
import '../styles/index.css';
import '../styles/global.css';
import { store } from '../redux/store/store';
import HomeNav from '../modules/home-header/Main';

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<HomeNav />
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;