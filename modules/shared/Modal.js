const Modal = ({ children }) => {
	return (
		<div className="modal-container flex justify-center items-center fixed w-full h-screen top-0 left-0 bg-modal_bg animate-fade_in z-20">
			<div className="fixed top-0 bottom-0 flex justify-center items-center w-full max-w-[640px] bg-white p-5 sm:p-2 sm:px-16 md:px-20 sm:top-2 sm:bottom-3 sm:rounded-xl md:min-w-lg md:w-40">
				{children}
			</div>
		</div>
	);
};

export default Modal;