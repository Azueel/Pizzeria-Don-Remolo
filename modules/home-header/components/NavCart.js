import Image from "next/image";

export const NavCart = () => {
	return (
		<div className="flex items-center w-full h-full">
			<div className={"relative flex justify-center w-12 h-12 hover:translate-y-[-1px] active:translate-y-px"}>
				<Image className="absolute cursor-pointer" src={require('../../../public/assets/icons/cart.svg')} alt='cart' />
				<span className="absolute text-primary"> 0 </span>
			</div>
		</div>
	);
};