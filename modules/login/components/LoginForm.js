import { useRouter } from 'next/router';
import { SocialButtons } from './SocialButtons';
import { Formik, Form } from 'formik';
import { Input } from '../../shared/Input';
import * as Yup from 'yup';
import { loginUser } from '../../../services/authService';
import { login } from '../../../redux/slices/auth';
import { useDispatch } from 'react-redux';

export default function LoginForm() {
	const dispatch = useDispatch();
	const router = useRouter();
	const validate = Yup.object({
		email: Yup.string()
			.matches(
				/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})\D$/i,
				'Introduce un correo electrónico válido por favor',
			)
			.required('El correo electrónico es obligatorio'),
		password: Yup.string().required('Ingresa tu contraseña por favor'),
	});
	return (
		<Formik
			initialValues={{ email: '', password: '' }}
			validationSchema={validate}
			validator={() => ({})}
			onSubmit={async (values) => {
				try {
					const response = await loginUser(values);
					localStorage.setItem('auth', response?.token);
					dispatch(login({ ...values, token: response?.token }));
					router.push('/');
				} catch (error) {
					console.log(error);
				}
			}}
		>
			{(formik) => (
				<Form className="flex flex-col gap-4">
					<Input label="Correo electrónico" name="email" type="email" />
					<Input label="Contraseña" name="password" type="password" />
					<button className="button-primary mt-8" type="submit">
						Iniciar Sesión
					</button>
					<SocialButtons />
					<div className="text-center">
						<span>¿Aún no tienes una cuenta?</span> {''}
						<span
							className="font-medium text-primary cursor-pointer hover:font-bold"
							onClick={() => router.push('/register')}
						>
							Regístrate
						</span>
					</div>
				</Form>
			)}
		</Formik>
	);
}
