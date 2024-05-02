const express = require("express");
const app = express();
const db = require("./db/index");
const userRoutes = require("./Routes/userRoutes");
app.use(express.json());
require("dotenv").config();
const PORT = process.env.PORT || 3000;
app.use("/api/v1", userRoutes);
db();
app.listen(PORT, () => {
	console.log(`Server Started runnung at Port ${PORT}`);
});
