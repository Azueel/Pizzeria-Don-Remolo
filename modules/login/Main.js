import LoginForm from './components/LoginForm';
import HeaderLogin from './components/HeaderLogin';

export const Main = () => {
	return (
		<div className="p-4 sm:px-8 w-full sm:max-w-xl ">
			<HeaderLogin />
			<LoginForm />
		</div>
	);
};
