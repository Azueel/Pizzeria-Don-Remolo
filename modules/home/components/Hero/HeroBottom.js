import { useState } from "react";
import { OrderType } from "./OrderType";

export const HeroBottom = () => {
	const [orderType, setOrderType] = useState({
		home: true,
		local: false,
	});
	const handleOrder = (e) => {
		if(e.target.dataset.order === 'home') setOrderType({ home: true, local: false })
		else if(e.target.dataset.order === 'local') setOrderType({ home: false, local: true })
	};

	return (
		<article className="hero-bottom flex flex-col w-full max-w-[440px] h-full md:items-center lg:max-w-[550px] xl:max-w-[800px]">
			<p className="w-[300px] text-[14px] text-center font-bold lg:text-[1.1rem]">
				¿Cómo deseas ordenar hoy?
			</p>
			<div className="flex items-center w-full h-full p-3 md:justify-center">
				<div className="grid grid-cols-2 gap-5 w-[280px] h-12 border border-primary rounded-[50px] p-[1px]">
					<OrderType 
						title='A domicilio'
						order='home'
						fn={handleOrder}
						styles={orderType.home && 'text-white border bg-primary'}
					/>
					<OrderType 
						title='Retiro en local'
						order='local'
						fn={handleOrder}
						styles={orderType.local && 'text-white border bg-primary'}
					/>
				</div>
			</div>
		</article>
	);
};