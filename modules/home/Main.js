import React from 'react';
import { Hero } from './sections/Hero/Hero';
import { Gallery } from './components/Gallery/Gallery';
import Promotions from './sections/promotions/Main'

export const Main = () => {
	return (
		<section>
			<Hero />
			<Promotions />
			<Gallery />
		</section>
	);
};
