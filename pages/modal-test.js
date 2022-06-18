import { useState } from "react";
import { Main as Login } from '../modules/login/Main';
import { Main as Register } from '../modules/register/Main';
import Modal from "../modules/shared/Modal";

const test = () => {
	const [isLogin, setIsLogin] = useState(false);
	const [isRegister, setIsRegister] = useState(false);
	const handleModal = (e) => {
		e.target.dataset.modal === 'login'
		? setIsLogin(!isLogin)
		: e.target.dataset.modal === 'register'
		? setIsRegister(!isRegister)
		: null
	};
	return (
		<>
			<div className="w-full h-screen">
				<button className='w-10' data-modal='login' onClick={handleModal}>Login</button>
				<button className='w-10' data-modal='register' onClick={handleModal}>Register</button>
				{isLogin && 
					<Modal handleModal={handleModal} isModal={isLogin} setIsModal={setIsLogin} modal='login' ><Login /></Modal>
				}
				{isRegister && 
					<Modal handleModal={handleModal} isModal={isRegister} setIsModal={setIsRegister} modal='register' ><Register /></Modal>
				}
			</div>
		</>
	);
};

export default test