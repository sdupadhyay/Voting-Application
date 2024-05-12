export const SignUp = async ({ formData }) => {
	try {
		let res = await fetch("http://localhost:3000/api/v1/user/signup", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(formData),
		});
		let response = await res.json();
		return response;
	} catch (error) {
		console.log("ERROR", error);
		return error;
	}
};
export const Login = async ({ loginData }) => {
	try {
		let res = await fetch("http://localhost:3000/api/v1/user/login", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(loginData),
		});
		let response = await res.json();
		return response;
	} catch (error) {
		console.log("Error", error);
		return error;
	}
};
