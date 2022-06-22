import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleModal } from "../../../../redux/slices/modal/modalSlice";
import { NavMenu } from "./NavMenu";

export const MenuIcon = () => {
	const menu = useSelector(state => state.modal.menu);
	const dispatch = useDispatch();

	const handleMenu = (e) => dispatch(handleModal(e.target.dataset.modal));

	return (
		<>
			<div className="flex items-center">
				<div className="w-8 h-8 cursor-pointer">
					<Image 
						src={require('../../../../public/assets/icons/menu.svg')} 
						alt='menu-icon'
						onClick={handleMenu} 
						data-modal='menu'
					/>
				</div>
			</div>
			{menu && <NavMenu handleMenu={handleMenu} />}
		</>
	);
};