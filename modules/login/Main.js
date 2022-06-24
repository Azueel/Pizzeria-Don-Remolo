import LoginForm from './components/LoginForm';
import HeaderForm from '../shared/HeaderForm';

const Main = () => {
	return (
		<div className="w-full sm:min-w-md">
			<HeaderForm title="Inicio de sesión" />
			<LoginForm />
		</div>
	);
};

export default Main;