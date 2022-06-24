import Image from 'next/image';

export const HeroTop = () => {
	return (
		<article className="hero-top relative flex flex-row justify-end w-full h-full">
			<div className="hero-top-left flex flex-col justify-center items-center w-full p-1">
				<p className="font-[800] text-[16.3px]">
					EL MEJOR SERVICIO ES NUESTRA ESPECIALIDAD
				</p>
				<Image src={require('../../../public/assets/icons/hero-line.svg')} />
			</div>
			<div className="hero-top-right w-full h-28">
				<Image src={require('../../../public/assets/icons/hero.svg')} alt='hero' />
			</div>
		</article>
	);
};