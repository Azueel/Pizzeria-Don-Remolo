import React from 'react';
import { Hero } from './sections/Hero/Hero';
import { Gallery } from './components/Gallery/Gallery';

export const Main = () => {
	return (
		<section>
			<Hero />
			<Gallery />
		</section>
	);
};
