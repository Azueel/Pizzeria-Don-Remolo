import Image from 'next/image';
import { CloseBtn } from '../home-header/components/mobile/CloseBtn';

export default function HeaderForm({ title }) {
	return (
		<>
			<div className='flex justify-end w-full max-w-[512px]'> <CloseBtn /> </div>
			<div className="flex justify-evenly items-center w-full max-w-[512px] ">
				<Image
					src={require('../../public/assets/logo-fondo-blanco.svg')}
					alt="logo don rémolo"
				/>
				<h1 className="text-center font-bold text-primary text-xl max-w-xxs">{title}</h1>
			</div>
		</>
	);
};