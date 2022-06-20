import { NavItem } from "./NavItem";

export const NavBar = () => {
	return (
		<nav className="nav-bar-container flex justify-end items-center h-full">
			<ul className="nav-items-list flex gap-4 font-bold">
				<NavItem page='/' title='Menú' />
				<NavItem page='/' title='Rastrea tu pedido' />
				<NavItem page='/' title='Locales' />
				<NavItem page='/' title='Deja tu comentario' />
			</ul>
		</nav>
	);
};