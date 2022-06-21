import { mobileLayout } from "../../styles/layouts";
import { NavCart } from "../NavCart";
import { MenuIcon } from "./MenuIcon";

export const MobileNavHeader = () => {
	return (
		<header className={`mobileHeader ${mobileLayout}`}>
			<MenuIcon />
			<NavCart position='justify-self-end' />
		</header>
	);
};