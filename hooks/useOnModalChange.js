import { useDispatch } from 'react-redux';
import { handleModal } from '../redux/slices/modal/modalSlice';

export const useOnModalChange = () => {
	const dispatch = useDispatch();
	const handleWindow = (e) => dispatch(handleModal(e.target.dataset.modal));
	return { handleWindow };
};