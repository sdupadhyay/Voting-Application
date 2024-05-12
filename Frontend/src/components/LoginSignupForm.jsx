import { useState } from "react";
import { Button } from "./Button";
import { InputTag } from "./InputTag";
import { validateEmail } from "../../utils/validation";
import { Link, useNavigate } from "react-router-dom";

import { Login, SignUp } from "../fetching";
export const LoginSignupForm = ({
	formHeading = "",
	formRequirment = [],
	buttonTitle = "",
}) => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		mobile: "",
		name: "",
		age: "",
		password: "",
	});
	const [formError, setFormError] = useState({
		email: "",
		mobile: "",
		name: "",
		age: "",
		password: "",
	});
	let errorCheck = {
		email: "",
		mobile: "",
		name: "",
		age: "",
		password: "",
	};
	const formFieldsRules = {
		userEmail: {
			name: "email",
			label: "Email",
			placeholder: "Enter Email",
			type: "email",
			inputType: "inputTag",
			currentValue: formData?.email,
			errorMessage: formError?.email,
		},
		userPassword: {
			name: "password",
			label: "Password",
			placeholder: "Enter Password",
			type: "password",
			inputType: "inputTag",
			currentValue: formData?.password,
			errorMessage: formError?.password,
		},
		userPhonenumber: {
			name: "mobile",
			label: "Phone Number",
			placeholder: "Enter Phone Number",
			type: "number",
			inputType: "inputTag",
			currentValue: formData?.mobile,
			errorMessage: formError?.mobile,
		},
		userName: {
			name: "name",
			label: "name",
			placeholder: "Enter Name",
			type: "text",
			inputType: "inputTag",
			currentValue: formData?.name,
			errorMessage: formError?.name,
		},
		userAge: {
			name: "age",
			label: "age",
			placeholder: "Enter Age",
			type: "number",
			inputType: "inputTag",
			currentValue: formData?.age,
			errorMessage: formError?.age,
		},
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		setFormError({ ...formError, [name]: "" });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		let flag = 0;
		if (formRequirment?.length > 2) {
			if (!formData.name) flag = 1;
			errorCheck = { ...errorCheck, name: "Please Enter Name" };
			if (!formData.email) flag = 1;
			errorCheck = { ...errorCheck, email: "Please Enter Email" };
			if (!validateEmail(formData?.email)) flag = 1;
			errorCheck = { ...errorCheck, email: "Please Enter Valide Email" };
			if (!formData.mobile) flag = 1;
			errorCheck = { ...errorCheck, mobile: "Please Enter Mobile Number" };
			if (!formData.age)
				errorCheck = { ...errorCheck, age: "Please Enter Age" };
			if (!formData.password) flag = 1;
			errorCheck = { ...errorCheck, password: "Please Enter Password" };
			if (flag) setFormError(errorCheck);
			else {
				//console.log(formData);
				const response = await SignUp({ formData });
				console.log(response);
				setLoading(false);
				if (response?.statusCode == 200) navigate("/");
			}
		} else {
			if (!formData.email) flag = 1;
			errorCheck = { ...errorCheck, email: "Please Enter Email" };
			if (!validateEmail(formData?.email)) flag = 1;
			errorCheck = { ...errorCheck, email: "Please Enter Valide Email" };
			if (!formData.password) flag = 1;
			errorCheck = { ...errorCheck, password: "Please Enter Password" };
			if (flag) setFormError(errorCheck);
			else {
				const response = await Login({
					loginData: { email: formData?.email, password: formData?.password },
				});
				console.log("LOGIN Response", response);
				setLoading(false);
				if (response?.statusCode == 200) navigate("/user");
			}
		}
	};
	//console.log(formError);
	return (
		<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
			<form
				action="#"
				className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
			>
				<p className="text-center text-lg font-medium">{formHeading}</p>
				{formRequirment?.map((field, ind) => {
					const currentFieldRules = formFieldsRules[field];
					switch (currentFieldRules?.inputType) {
						case "inputTag":
							return (
								<InputTag
									key={ind}
									label={currentFieldRules?.label}
									placeholder={currentFieldRules?.placeholder}
									inputType={currentFieldRules?.type}
									name={currentFieldRules?.name}
									currentValue={currentFieldRules?.currentValue}
									error={currentFieldRules?.errorMessage}
									handleChange={handleChange}
								/>
							);
					}
				})}
				<Button
					buttonTitle={buttonTitle}
					classes="w-full"
					handleSubmit={handleSubmit}
					loading={loading}
				/>

				<p className="text-center text-sm text-gray-500">
					No account?
					<Link className="underline" to="/signup">
						Sign up Now
					</Link>
				</p>
			</form>
		</div>
	);
};
