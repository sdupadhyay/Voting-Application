const express = require("express");
const app = express();
const db = require("./db/index");
const userRoutes = require("./Routes/userRoutes");
const candidateRoutes = require("./Routes/candidateRoutes");
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cookieParser());
require("dotenv").config();
const PORT = process.env.PORT || 3000;
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/candidate", candidateRoutes);
db();
app.listen(PORT, () => {
	console.log(`Server Started runnung at Port ${PORT}`);
});
