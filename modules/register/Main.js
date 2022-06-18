import RegisterForm from './components/RegisterForm';
import HeaderLogin from './components/HeaderRegister';

export const Main = () => {
	return (
		<div className='flex flex-col justify-center items-center h-full p-4 rounded-md bg-white'>
			<HeaderLogin />
			<RegisterForm />
		</div>
	);
};
