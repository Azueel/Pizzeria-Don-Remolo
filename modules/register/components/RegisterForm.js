import Image from 'next/image';
import { SocialButtonsRegister } from './SocialButtonsRegister';

export default function LoginForm() {
	return (
		<form action="" className="flex flex-col gap-4">
			<div>
				<label htmlFor="email">Nombre de usuario</label>
				<input type="text" className="w-full" id="user" autoFocus />
			</div>

			<div>
				<label htmlFor="email">Correo electrónico</label>
				<input type="email" className="w-full" id="email" autoFocus />
			</div>
			<div>
				<label htmlFor="password">Contraseña</label>
				<input
					type="password"
					className="w-full"
					id="password"
					autoFocus
				/>
			</div>

			<div className="flex">
				<Image
					src={require('../../../public/assets/alert-circle.png')}
					alt="alert-circle"
				/>
				<p className="ml-2 text-xs">Debe tener minimo 8 caracteres</p>
			</div>

			<button className="button-primary mt-3">Registrarse</button>
			<div className="px-8 text-sm">
				<p>
					Al registrarse, aceptas nuestras{' '}
					<span className="text-primary">Políticas de privacidad</span> y{' '}
					<span className="text-primary flex justify-center">
						Terminos y condiciones
					</span>
				</p>
			</div>
			<SocialButtonsRegister />
			<div className="text-center">
				<span>¿Ya Tienes Cuenta?</span>
				<span className="font-medium text-primary cursor-pointer">
					Inicia Sesión
				</span>
			</div>
		</form>
	);
}
