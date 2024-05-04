const { generateToken } = require("../jwt");
const User = require("../models/user");
const options = {
	httpOnly: true,
	secure: true,
};
const signup = async (req, res) => {
	try {
		const { name, age, email, mobile, address, password } = req.body;
		if (!(name || age || email || mobile || address || password)) {
			return res.status(400).json({ message: "All Fields should be filled" });
		}
		await User.create(req.body);
		//console.log(newUser);
		res.status(200).json({ message: "User Created Sucessfully" });
	} catch (err) {
		console.log(err);
		res.status(500).json({ err: "Somrthing went wrong", err });
	}
};
const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		if (!(email || password))
			return res.status(200).json({ message: "All Fields should be filled" });
		const user = await User.findOne({ email });
		if (!user || !(await user.isPasswordCorrect(password))) {
			return res.status(401).json({ message: "Invalid Email or Password" });
		}
		const token = generateToken({ role: user?.role, userId: user?._id });
		return res
			.status(200)
			.cookie("Token", token, options)
			.json({ message: "User Login Sucessfully" });
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
};
const logout = async (req, res) => {
	try {
		res
			.status(200)
			.clearCookie("Token", options)
			.json({ message: "Logout Sucessfully" });
	} catch (error) {
		res.status(400).json({ message: "Something Went wrong" });
	}
};
module.exports = { login, signup, logout };
