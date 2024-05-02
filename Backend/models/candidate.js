const mongoose = require("mongoose");
const candidateSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	party: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
	},
	education: {
		type: String,
		require: true,
	},
	votes: [
		{
			user: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
				require: true,
			},
			votedAt: {
				type: Number,
				default: Date.now(),
			},
		},
	],
	voteCount: {
		type: Number,
		default: 0,
		require: true,
	},
});
const Candidate = mongoose.model("Candidate", candidateSchema);
module.exports = Candidate;
