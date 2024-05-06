import "./App.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginSignupCard } from "./customComponents/Card";
function App() {
	return (
		<>
			<div className="flex items-center justify-center h-screen">
				<Tabs defaultValue="account" className="w-[400px]">
					<TabsList>
						<TabsTrigger value="login">Login</TabsTrigger>
						<TabsTrigger value="signup">Signup</TabsTrigger>
					</TabsList>
					<TabsContent value="login">
						<LoginSignupCard
							title={"Login"}
							description={"Already Register, Login now"}
							fieldRequirment={[
								{
									label: "Email",
									type: "email",
									id: "email",
									placeHolder: "Enter Email *",
								},
								{
									label: "Password",
									type: "password",
									id: "password",
									placeHolder: "Enter Password *",
								},
							]}
							buttonTitle={"Login"}
						/>
					</TabsContent>
					<TabsContent value="signup">
						<LoginSignupCard
							title={"SignUp"}
							description={"Just fill the details and Signup Now"}
							fieldRequirment={[
								{
									label: "Name",
									type: "text",
									id: "name",
									placeHolder: "Enter Name *",
								},
								{
									label: "Email",
									type: "email",
									id: "email",
									placeHolder: "Enter Email *",
								},
								{
									label: "Age",
									type: "number",
									id: "age",
									placeHolder: "Enter Age *",
								},
								{
									label: "Mobile Number",
									type: "number",
									id: "mobile number",
									placeHolder: "Enter Mobile Number *",
								},
								{
									label: "Address",
									type: "text",
									id: "address",
									placeHolder: "Enter Address *",
								},
							]}
							buttonTitle={"Sign Up"}
						/>
					</TabsContent>
				</Tabs>
			</div>
		</>
	);
}

export default App;
