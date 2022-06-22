const Modal = ({ children, modal, handleModal }) => {
	return (
		<div
			onClick={handleModal}
			data-modal={modal}
			className="modal-container flex justify-center items-center fixed top-0 w-full h-screen lg:p-4 bg-modal_bg animate-fade_in"
		>
			<div className="absolute bg-white p-2 sm:p-12 sm:px-16 md:px-20 top-0 bottom-0 md:bottom-auto w-full md:min-w-lg md:w-40 rounded-xl">
				{children}
			</div>
		</div>
	);
};

export default Modal;