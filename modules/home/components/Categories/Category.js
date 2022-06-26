import Image from 'next/image';
import React from 'react';

export const Categories = ({ image, title }) => {
	return (
		<section>
			<Image
				src={require(`/public/assets/categories/empanada.png`)}
				alt="category-food-image"
			/>
			<p> {title} </p>
		</section>
	);
};
