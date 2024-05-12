const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	age: {
		type: Number,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	mobile: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		enum: ["voter", "admin"],
		default: "voter",
	},
	isVoted: {
		type: Boolean,
		default: false,
	},
});

userSchema.pre("save", async function (next) {
	try {
		if (this.isModified("password")) {
			this.password = await bcrypt.hash(this.password, 10);
		}
		next();
	} catch (err) {
		return next(err);
	}
});
userSchema.methods.isPasswordCorrect = async function (userPassword) {
	try {
		const match = await bcrypt.compare(userPassword, this.password);
		return match;
	} catch (err) {
		throw err;
	}
};
const User = mongoose.model("User", userSchema);
module.exports = User;
