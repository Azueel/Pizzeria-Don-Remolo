const Modal = ({ children, modal, handleModal }) => {
	return (
		<div onClick={handleModal} data-modal={modal} className="modal-container flex justify-center items-center fixed top-0 w-full h-screen p-4 bg-modal_bg">
			{children}
		</div>
	);
};

export default Modal;