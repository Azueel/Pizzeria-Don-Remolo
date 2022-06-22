import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleModal } from "../../../redux/slices/modal/modalSlice";
import LoginForm from '../../login/Main';
import RegisterForm from '../../register/Main';
import Modal from "../../shared/Modal";
import { defaultButtonStyle, loginButtonStyle, registerButtonStyle } from "../styles/buttons_styles";

export const NavBtnsContainer = () => {
	const isLogin = useSelector((state) => state.modal.login);
	const isRegister = useSelector((state) => state.modal.register);
	const dispatch = useDispatch();

	const handleLoginModal = (e) => dispatch(handleModal(e.target.dataset.modal));

	const handleRegisterModal = (e) => dispatch(handleModal(e.target.dataset.modal));

	return (
		<>
			<div className="flex flex-col justify-center items-center gap-2 nav-btns-container desktop_bk:flex-row">
				<button className={`${defaultButtonStyle} ${loginButtonStyle}`} type="button" data-modal="login" onClick={handleLoginModal}>
					Ingresar
				</button>
				<button className={`${defaultButtonStyle} ${registerButtonStyle}`} type="button" data-modal="register" onClick={handleRegisterModal}>
					Registrarse
				</button>
			</div>
			{isLogin && <Modal> <LoginForm /> </Modal>}
			{isRegister && <Modal> <RegisterForm /> </Modal>}
		</>
	);
};