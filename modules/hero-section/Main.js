import { HeroBottom } from "./components/HeroBottom";
import { HeroTop } from "./components/HeroTop";
import { HeroSectionStyles } from "./styles/styles";

const Main = () => {
	return (
		<section className={`${HeroSectionStyles}`}>
			<HeroTop />
			<HeroBottom />
		</section>
	)
};

export default Main;