import { desktopLayout } from "../styles/layouts";
import { NavBar } from "./NavBar";
import { NavBtnsContainer } from "./NavBtnsContainer";
import { NavCart } from "./NavCart";
import { NavLogo } from "./NavLogo";

const HomeHeader = () => {
	return (
		<header className={`${desktopLayout}`}>
			<NavLogo />
			<NavBar />
			<NavBtnsContainer />
			<NavCart />
		</header>
	);
};

export default HomeHeader 