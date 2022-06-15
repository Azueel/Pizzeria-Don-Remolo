import { Formik } from 'formik';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from 'react';
import { SocialButtonsRegister } from './SocialButtonsRegister';

export default function LoginForm() {
	const NUM_PATTERN = /[0-9]/;
	const CAPITAL_PATTERN = /[A-Z]/;
	const LOWERCASE_PATTERN = /[a-z]/;
	const NON_ALPHANUMERIC_PATTERN = /[@$!%*#?&+-]/;

	const router = useRouter();
	const [showing, setShowing] = useState(false);
	const [securityPassword, setSecurityPassword] = useState('');

	const handleClickEye = () => {
		if (showing === false) {
			setShowing(true);
		} else {
			setShowing(false);
		}
	};

	return (
		<Formik
			initialValues={{
				user: '',
				email: '',
				password: '',
			}}
			validate={({ user, email, password }) => {
				let errores = {};

<<<<<<< HEAD
			<div>
				<label htmlFor="email">Correo electrónico</label>
				<input type="email" className="w-full" id="email" />
			</div>
			<div>
				<label htmlFor="password">Contraseña</label>
				<input
					type="password"
					className="w-full"
					id="password"
				/>
			</div>
=======
				//validacion Nombre
				if (!user) {
					errores.user = 'Por Favor Ingrese Su Nombre';
				} else if (user.length > 256) {
					errores.user = 'Su Nombre no puede superar los 256 caracteres';
				} else if (!/^[a-zA-ZÀ-ÿ\s]{1,256}$/.test(user)) {
					errores.user = 'El nombre solo puede contener letras y espacios';
				}
>>>>>>> a5c7956580e46bdc53920baa67d20a74e93dd4cc

				//validacion correo
				if (!email) {
					errores.email = 'Por Favor Ingresa un email';
				} else if (
					!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)
				) {
					errores.email = 'Por Favor ingresa un email valido';
				}

<<<<<<< HEAD
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
				<span>¿Ya Tienes Cuenta? </span>
				<span className="font-medium text-primary cursor-pointer">
					Inicia Sesión
				</span>
			</div>
		</form>
=======
				//validacion password
				if (!password) {
					errores.password = 'La contraseña es requerida';
				} else if (!NUM_PATTERN.test(password)) {
					errores.password =
						'La contraseña debe contener al menos un número';
				} else if (!CAPITAL_PATTERN.test(password)) {
					errores.password =
						'La contraseña debe contener al menos una mayúscula';
				} else if (!LOWERCASE_PATTERN.test(password)) {
					errores.password =
						'La contraseña debe contener al menos una minúscula';
				} else if (!NON_ALPHANUMERIC_PATTERN.test(password)) {
					errores.password =
						'La contraseña debe contener un carácter especial';
				} else if (password.length < 8 || password.length > 25) {
					errores.password =
						'La contraseña debe contener un mínimo de 8 caracteres y no superar 25';
				}

				return errores;
			}}
			onSubmit={(date) => {}}
		>
			{({
				values,
				errors,
				handleSubmit,
				handleChange,
				handleBlur,
				touched,
			}) => (
				<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
					<div>
						<label htmlFor="email">Nombre Completo</label>
						<input
							type="text"
							className="w-full"
							name="user"
							value={values.user}
							onChange={handleChange}
							onBlur={handleBlur}
							autoFocus
						/>
					</div>
					{touched.user && errors.user && (
						<div className="text-red ml-2 ">{errors.user}</div>
					)}

					<div>
						<label htmlFor="email">Correo electrónico</label>
						<input
							type="email"
							className="w-full"
							id="email"
							name="email"
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
							autoFocus
						/>
						{touched.email && errors.email && (
							<div className="text-red p-0 ml-2 mb-2">{errors.email}</div>
						)}
					</div>
					<div>
						<label htmlFor="password">Contraseña</label>
						<input
							type={showing ? 'text' : 'password'}
							className="w-full"
							id="password"
							name="password"
							value={values.password}
							onChange={handleChange}
							onBlur={handleBlur}
							autoFocus
						/>
						<Image
							onClick={handleClickEye}
							src={require('../../../public/assets/eye-off.png')}
							alt="eye-off"
						/>

						{touched.password && errors.password && (
							<div className="text-red p-0 ml-2 mb-2">
								{errors.password}
							</div>
						)}
					</div>

					<div className="flex">
						<Image
							src={require('../../../public/assets/alert-circle.png')}
							alt="alert-circle"
						/>
						<p className="ml-2 text-xs">Debe tener minimo 8 caracteres</p>
					</div>

					{values.password.length >= 8 && values.password.length <= 9 && (
						<div>
							<p className="text-xs">Seguridad:</p>
							<hr className="w-1/4 border-red border-4" />
						</div>
					)}

					{values.password.length >= 10 && values.password.length <= 12 && (
						<div>
							<p className="text-xs">Seguridad:</p>
							<hr className="w-1/2 border-yellow border-4" />
						</div>
					)}
					{values.password.length >= 13 && values.password.length <= 25 && (
						<div>
							<p className="text-xs">Seguridad:</p>
							<hr className="w-full border-green border-4" />
						</div>
					)}

					<button className="button-primary mt-3">Registrarse</button>
					<div className="px-8 text-sm">
						<p>
							Al registrarse, aceptas nuestras{' '}
							<span className="text-primary">Políticas de privacidad</span>{' '}
							y{' '}
							<span className="text-primary flex justify-center">
								Terminos y condiciones
							</span>
						</p>
					</div>
					<SocialButtonsRegister />
					<div className="text-center">
						<span>¿Ya Tienes Cuenta? </span>
						<span
							className="font-medium text-primary cursor-pointer"
							onClick={() => router.push('/login')}
						>
							Inicia Sesión
						</span>
					</div>
				</form>
			)}
		</Formik>
>>>>>>> a5c7956580e46bdc53920baa67d20a74e93dd4cc
	);
}
