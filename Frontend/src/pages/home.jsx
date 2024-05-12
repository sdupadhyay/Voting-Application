import { LoginSignupForm } from "../components/LoginSignupForm";

export const HomePage = ({
	h1Heading = "",
	description,
	formRequirment = [],
	formHeading = "",
	buttonTitle = "",
}) => {
	return (
		<>
			<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-lg">
					{h1Heading ? (
						<h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
							{h1Heading}
						</h1>
					) : null}
					{description ? (
						<p className="mx-auto mt-4 max-w-md text-center text-gray-500">
							{description}
						</p>
					) : null}
					<LoginSignupForm
						formHeading={formHeading}
						formRequirment={formRequirment}
						buttonTitle={buttonTitle}
					/>
				</div>
			</div>
		</>
	);
};
