import Image from 'next/image';
import React from 'react';

export const Gallery = () => {
	return (
		<div className="bg-bg-gallery w-full  leading-10 py-10 pb-20">
			<h2 className="text-center uppercase font-bold">
				Conoce más de nosotros @Pizzeriadonremolo
			</h2>
			<div className="flex justify-center items-center gap-3 flex-wrap mt-8">
				<Image
					src={require('../../../public/assets/gallery/picture1.png')}
					alt="picture-don-remolo"
				/>
				<Image
					src={require('../../../public/assets/gallery/picture2.png')}
					alt="picture-don-remolo"
				/>
				<Image
					src={require('../../../public/assets/gallery/picture3.png')}
					alt="picture-don-remolo"
				/>{' '}
				<Image
					src={require('../../../public/assets/gallery/picture4.png')}
					alt="picture-don-remolo"
				/>
			</div>
		</div>
	);
};
