import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { handleModal } from '../../../../redux/slices/modal/modalSlice';

export const CloseBtn = () => {
	const modalOpts = useSelector(state => state.modal);
	const dispatch = useDispatch();

	const handleClose = (e) => dispatch(handleModal(e.target.dataset.modal));

	return (
		<div className="flex justify-center items-center w-14 h-14 bg-white rounded-[50%] shadow-button">
			<div className="w-4 h-4 cursor-pointer">
				<Image 
					onClick={handleClose}
					src={require('../../../../public/assets/icons/close.svg')} 
					alt='close-btn' 
					data-modal={
						modalOpts.register ? 'register' 
						: modalOpts.login ? 'login'
						: modalOpts.menu ? 'menu'  
						: modalOpts.login && modalOpts.menu ? 'login'
						: modalOpts.register && modalOpts.menu ? 'register'
						: ''
						} 
				/>
			</div>
	</div>
	);
};