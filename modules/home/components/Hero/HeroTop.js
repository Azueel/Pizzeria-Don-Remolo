import Image from 'next/image';

export const HeroTop = () => {
	return (
		<article className="hero-top relative flex flex-row justify-end w-full h-full">
			<div className="hero-top-left flex flex-col justify-center items-center w-full p-1">
				<p className="max-w-[180px] font-[800] text-[16.3px] sm:text-[1.2rem] lg:text-[1.5rem]">
					EL MEJOR SERVICIO ES NUESTRA ESPECIALIDAD
				</p>
				<Image src={require('/public/assets/icons/hero-line.svg')} alt="hero-image" />
			</div>
			<div className="hero-top-right w-full h-28 lg:h-64 lg:w-full">
				<Image src={require('/public/assets/icons/hero.svg')} alt="hero-image" />
			</div>
		</article>
	);
};
