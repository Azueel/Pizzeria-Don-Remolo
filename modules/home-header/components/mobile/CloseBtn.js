import Image from 'next/image';

export const CloseBtn = ({ handleMenu }) => {
	return (
		<div className="flex justify-center items-center w-14 h-14 bg-white rounded-[50%] shadow-button">
			<div className="w-4 h-4 cursor-pointer">
				<Image onClick={handleMenu} src={require('../../../../public/assets/icons/close.svg')} alt='close-btn' />
			</div>
	</div>
	);
};