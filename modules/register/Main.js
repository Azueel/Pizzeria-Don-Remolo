import RegisterForm from './components/RegisterForm';
import HeaderForm from '../shared/HeaderForm';

export const Main = ({ handleModal }) => {
	return (
		<div className="w-full sm:min-w-md">
			<HeaderForm title="Regístrate para una mejor experiencia" />
			<RegisterForm handleModal={handleModal} />
		</div>
	);
};
