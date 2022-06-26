import Image from 'next/image';
import React from 'react';

export const Footer = () => {
	return (
		<div className="bg-gray-light py-8">
			<div className="md:w-3/4 grid grid-cols-5 gap-2 mx-auto leading-6">
				<Image
					src={require('/public/assets/logos/logo-transparent.png')}
					alt="logo-don-remolo"
				/>
				<div>
					<h4 className="font-bold mb-3 text-xxs">Servicio al cliente</h4>
					<p className="text-xxs">Comprobante electrónico</p>
					<p className="text-xxs">Contáctanos</p>
					<p className="text-xxs">Preguntas frecuentes</p>
				</div>

				<div>
					<h4 className="font-bold mb-3 text-xxs">La empresa</h4>
					<p className="text-xxs">Nosotros</p>
					<p className="text-xxs">Sobre la pizza</p>
					<p className="text-xxs">Locales</p>
				</div>
				<div>
					<h4 className="font-bold mb-3 text-xxs">Legales</h4>
					<p className="text-xxs">Términos y condiciones</p>
					<p className="text-xxs">Políticas de privacidad</p>
					<p className="text-xxs">Empresas y Socios estratégicos</p>
				</div>
				<div className=" col-span-4 flex items-end justify-center">
					<p className="text-xxs">© 2022 DON REMOLO. Todos los derechos reservados</p>
				</div>
				<div className="flex flex-col lg:flex-row items-center justify-center">
					<span className="text-xxs mr-2">Síguenos en:</span>
					<div className="flex">
						<Image
							src={require('/public/assets/icons/instagram.svg')}
							alt="instagram-icon"
						/>
						<Image
							src={require('/public/assets/icons/facebook.svg')}
							alt="instagram-icon"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
