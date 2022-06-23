import RegisterForm from './components/RegisterForm';
import HeaderForm from '../shared/HeaderForm';

const Main = () => {
	return (
		<div className="w-full h-full sm:min-w-md overflow-y-auto">
			<HeaderForm title="Regístrate para una mejor experiencia" />
			<RegisterForm />
		</div>
	);
};

export default Main;