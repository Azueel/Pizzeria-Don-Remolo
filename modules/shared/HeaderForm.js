import Image from 'next/image';
import { CloseBtn } from '../home-header/components/mobile/CloseBtn';

export default function HeaderForm({ title, handleModal }) {
	return (
		<>
			<div className='flex justify-end'> <CloseBtn handleMenu={handleModal} /> </div>
			<div className="flex justify-evenly items-center mb-4">
				<Image
					src={require('../../public/assets/logo-fondo-blanco.svg')}
					alt="logo don rémolo"
				/>
				<h1 className="text-center font-bold text-primary text-xl max-w-xxs">{title}</h1>
			</div>
		</>
	);
};