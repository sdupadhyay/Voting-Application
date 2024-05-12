export const InputTag = ({
	label = "",
	inputType = "",
	placeholder = "",
	name = "",
	currentValue = "",
	handleChange,
	error,
}) => {
	return (
		<div>
			<label htmlFor={inputType} className="sr-only">
				{label}
			</label>
			<input
				name={name}
				type={inputType}
				className={`w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm ${
					error ? "border-2 border-red-600" : ""
				}`}
				placeholder={placeholder}
				value={currentValue}
				onChange={handleChange}
			/>
			{error ? (
				<p className="text-left p-2 text-sm text-red-600">{error}</p>
			) : null}
		</div>
	);
};
