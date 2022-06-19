import LoginForm from './components/LoginForm';
import HeaderForm from '../shared/HeaderForm';

export const Main = ({ handleModal }) => {
	return (
		<div className="w-full sm:min-w-md">
			<HeaderForm title="Inicio de sesión" />
			<LoginForm handleModal={handleModal} />
		</div>
	);
};
