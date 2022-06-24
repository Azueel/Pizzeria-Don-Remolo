import { useField, ErrorMessage } from 'formik';

export const Input = ({ label, ...props }) => {
	const [field, data] = useField(props);
	return (
		<div className="">
			<label htmlFor={field.name}> {label} </label>
			<input
				type="text"
				autoComplete="off"
				className={`w-full max-w-[512px] ${data.touched && data.error && 'border-red'}`}
				{...field}
				{...props}
			/>
			<ErrorMessage name={field.name}>
				{(msg) => <span className="text-red text-xxs pl-4">{msg}</span>}
			</ErrorMessage>
		</div>
	);
};
