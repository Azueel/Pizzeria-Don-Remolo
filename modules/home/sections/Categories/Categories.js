import Image from 'next/image';
import React from 'react';
// import { Categories } from '../../components/Categories/Category';

export const Categories = () => {
	return (
		<section className="md:w-5/6 min-h-[340px]' mx-auto py-8">
			<h2 className="text-[1.2rem] font-bold">¿QUÉ SE TE ANTOJA HOY?</h2>
			<section className="my-8 py-12 flex bg-white justify-around">
				<section className="flex flex-col items-center">
					<Image
						src={require(`/public/assets/categories/empanada.png`)}
						alt="category-food-image"
					/>
					<p className="font-bold">Empanada</p>
				</section>
				<section className="flex flex-col items-center">
					<Image
						src={require(`/public/assets/categories/pizza.png`)}
						alt="category-food-image"
					/>
					<p className="font-bold">Pizza</p>
				</section>
				<section className="flex flex-col items-center">
					<Image
						src={require(`/public/assets/categories/postre.png`)}
						alt="category-food-image"
					/>
					<p className="font-bold">Postre</p>
				</section>
			</section>
		</section>
	);
};
