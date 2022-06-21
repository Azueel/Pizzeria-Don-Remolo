import { NavBar } from "../NavBar";
import { NavBtnsContainer } from "../NavBtnsContainer";
import { CloseBtn } from "./CloseBtn";

export const NavMenu = ({ handleMenu }) => {
	return (
		<div className="fixed top-0 left-0 w-full h-screen bg-modal_bg z-10 animate-fade_in">
			<NavBar itemsLayout='flex-col justify-center items-center w-full h-full' home={true}>
				<NavBtnsContainer />
				<CloseBtn handleMenu={handleMenu} />
			</NavBar>
		</div>
	);
};