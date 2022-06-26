import React from 'react';
import { Hero } from './sections/Hero/Hero';
import { Gallery } from './components/Gallery/Gallery';
import { Promotions } from './sections/promotions/Promotions';
import { Categories } from './sections/Categories/Categories';
import MostPopular from './sections/most-popular/Main';

export const Main = () => {
	return (
		<section>
			<Hero />
			<Promotions />
			<Categories />
			<MostPopular />
			<Gallery />
		</section>
	);
};
