const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db/index");
const userRoutes = require("./Routes/userRoutes");
const candidateRoutes = require("./Routes/candidateRoutes");
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
	origin: true, //included origin as true
    credentials: true, //included credentials as true
	// origin: ["http://localhost:5173"],
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
require("dotenv").config();
const PORT = process.env.PORT || 3000;
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/candidate", candidateRoutes);
db();
app.listen(PORT, () => {
	console.log(`Server Started runnung at Port ${PORT}`);
});
