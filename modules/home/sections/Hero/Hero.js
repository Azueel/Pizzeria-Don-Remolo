import { HeroBottom } from '../../components/Hero/HeroBottom';
import { HeroTop } from '../../components/Hero/HeroTop';
import { HeroSectionStyles } from './styles/styles';

export const Hero = () => {
	return (
		<section className={`${HeroSectionStyles}`}>
			<HeroTop />
			<HeroBottom />
		</section>
	);
};
