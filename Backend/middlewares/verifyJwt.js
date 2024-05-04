const jwt = require("jsonwebtoken");

const verifyJwt = (req, res, next) => {
	try {
		const token = req?.cookies?.Token;
		if (!token) return res.status(401).json({ messgae: "Token Not Found" });
		const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
		if (!decodedToken) return res.status("402", "Something Went Wrong");
		req.userId = decodedToken?.userId;
		req.role = decodedToken?.role;
		next();
	} catch (error) {
		console.log("Jwt Verify", error);
		res.status(400).json({ err: "Something Went Wrong" });
	}
};
module.exports = verifyJwt;
