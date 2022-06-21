import { defaultButtonStyle, loginButtonStyle, registerButtonStyle } from "../styles/buttons_styles";

export const NavBtnsContainer = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-2 nav-btns-container desktop_bk:flex-row">
			<button className={`${defaultButtonStyle} ${loginButtonStyle}`} type="button" data-modal="login">
				Ingresar
			</button>
			<button className={`${defaultButtonStyle} ${registerButtonStyle}`} type="button" data-modal="register">
				Registrarse
			</button>
		</div>
	);
};