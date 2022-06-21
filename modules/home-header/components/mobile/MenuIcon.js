import Image from "next/image";
import { useState } from "react";
import { NavMenu } from "./NavMenu";

export const MenuIcon = () => {
	const [menu, setMenu] = useState(false);
	const handleMenu = () => setMenu(!menu);

	return (
		<>
			<div className="flex items-center">
				<div className="w-8 h-8 cursor-pointer" onClick={handleMenu}>
					<Image src={require('../../../../public/assets/icons/menu.svg')} alt='menu-icon' />
				</div>
			</div>
			{menu && <NavMenu handleMenu={handleMenu} />}
		</>
	);
};