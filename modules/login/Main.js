import LoginForm from './components/LoginForm';
import HeaderLogin from './components/HeaderLogin';

export const Main = () => {
	return (
		<div className="sm:px-8 sm:max-w-xl rounded-md bg-white">
			<HeaderLogin />
			<LoginForm />
		</div>
	);
};
