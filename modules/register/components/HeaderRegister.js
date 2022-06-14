import Image from 'next/image';

export default function HeaderLogin() {
	return (
		<div className="flex justify-evenly items-center mb-4">
			<Image
				src={require('../../../public/assets/logo-fondo-blanco.svg')}
				alt="logo don rémolo"
			/>
			<h1 className="text-center font-bold text-primary text-xl">
				Regístrate para una <br />
				mejor experiencia
			</h1>
		</div>
	);
}
