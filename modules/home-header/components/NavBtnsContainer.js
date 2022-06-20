import { defaultButtonStyle, loginButtonStyle, registerButtonStyle } from "../styles/buttons_styles";

export const NavBtnsContainer = () => {
	return (
		<div className="flex justify-center items-center gap-2 nav-btns-container">
			<button className={`${defaultButtonStyle} ${loginButtonStyle}`} type="button" data-modal="login">
				Iniciar sesión
			</button>
			<button className={`${defaultButtonStyle} ${registerButtonStyle}`} type="button" data-modal="register">
				Registrarse
			</button>
		</div>
	);
};