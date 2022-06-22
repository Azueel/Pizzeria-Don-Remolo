import LoginForm from './components/LoginForm';
import HeaderForm from '../shared/HeaderForm';

const Main = ({ handleModal }) => {
	return (
		<div className="w-full sm:min-w-md">
			<HeaderForm handleModal={handleModal} title="Inicio de sesión" />
			<LoginForm handleModal={handleModal} />
		</div>
	);
};

export default Main;