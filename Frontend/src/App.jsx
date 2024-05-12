import "./App.css";

import { HomePage } from "./pages/home";
import { Routes, Route } from "react-router-dom";
function App() {
	const routesDetails = [
		{
			path: "/",
			h1Heading: "Give You Vote Today",
			formRequirment: ["userEmail", "userPassword"],
			formHeading: "Login To Your Account",
			buttonTitle: "Login",
		},
		{
			path: "/signup",
			h1Heading: "Give You Vote Today",
			formRequirment: [
				"userEmail",
				"userPhonenumber",
				"userName",
				"userAge",
				"userPassword",
			],
			formHeading: "Sign Up Now",
			buttonTitle: "SIGNUP",
		},
	];
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<HomePage
							h1Heading="Give You Vote Today"
							formRequirment={["userEmail", "userPassword"]}
							formHeading="Login To Your Account"
							buttonTitle="LOGIN"
						/>
					}
				/>
				<Route
					path="/signup"
					element={
						<HomePage
							h1Heading="Give You Vote Today"
							formHeading="Sign Up Now"
							buttonTitle="SIGNUP"
							formRequirment={[
								"userEmail",
								"userPhonenumber",
								"userName",
								"userAge",
								"userPassword",
							]}
						/>
					}
				/>
				<Route path="/user" element={<h1>User PAge</h1>} />
			</Routes>
		</>
	);
}

export default App;
