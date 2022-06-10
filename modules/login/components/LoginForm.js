import { SocialButtons } from './SocialButtons';

export default function LoginForm() {
	return (
		<form action="" className="flex flex-col gap-4">
			<div>
				<label htmlFor="email">Correo electrónico</label>
				<input type="email" className="w-full" id="email" autoFocus />
			</div>
			<div>
				<label htmlFor="password">Contraseña</label>
				<input type="password" className="w-full" id="password" autoFocus />
			</div>
			<div>
				<span className="text-sm text-primary cursor-pointer">
					¿Olvidaste tu contraseña?
				</span>
			</div>
			<button className="button-primary mt-8">Iniciar Sesión</button>
			<SocialButtons />
			<div className="text-center">
				<span>¿Aún no tienes una cuenta?</span> {''}
				<span className="font-medium text-primary cursor-pointer">Regístrate</span>
			</div>
		</form>
	);
}

// onClick={() => router.push('/register')}
