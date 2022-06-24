export const OrderType = ({ title, styles, order, fn }) => {
	return (
		<button 
			className={`w-32 text-primary text-[13px] font-bold rounded-[50px] ${styles}`} 
			onClick={fn}
			data-order={order}
		>{title}</button>
	);
};