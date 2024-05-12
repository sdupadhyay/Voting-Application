export const Button = ({
	buttonTitle = "",
	classes = "",
	handleSubmit,
	loading = false,
}) => {
	return (
		<button
			//type="submit"
			onClick={handleSubmit}
			className={`block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white ${classes}`}
		>
			{loading ? "submiting ..." : `${buttonTitle}`}
		</button>
	);
};
