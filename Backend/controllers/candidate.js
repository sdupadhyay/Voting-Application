const Candidate = require("../models/candidate");
const User = require("../models/user");

const addCandidate = async (req, res) => {
	try {
		if (req.role == "admin") {
			const { name, party, age, education } = req.body;
			await Candidate.create({ name, party, age, education });
			return res.status(200).json({ message: "Candidate Created Sucessfully" });
		}
		return res.status(401).json({ message: "Unauthorised Acess" });
	} catch (error) {
		return res.status(400).json({ message: error });
	}
};
const updateCandidate = async (req, res) => {
	try {
		if (req.role == "admin") {
			const { candidateID } = req.params;
			const { name, party, age, education } = req.body;
			const response = await Candidate.findByIdAndUpdate(
				candidateID,
				{ name, party, age, education },
				{ new: true, runValidators: true }
			);
			if (!response)
				return res.status(404).json({ message: "Candidate not found" });
			return res.status(200).json({ message: "Candidate Updated sucessfully" });
		}
		return res.status(401).json({ message: "Unauthorised Acess" });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};
const deleteCandidate = async (req, res) => {
	try {
		if (req.role == "admin") {
			const { candidateID } = req.params;
			const { name, party, age, education } = req.body;
			const response = await Candidate.findByIdAndDelete(candidateID);
			if (!response)
				return res.status(404).json({ message: "Candidate not found" });
			return res.status(200).json({ message: "Candidate Deleted sucessfully" });
		}
		return res.status(401).json({ message: "Unauthorised Acess" });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};
const voting = async (req, res) => {
	try {
		if (req.role == "admin")
			return res.status(403).json({ message: "admin is not allowed" });
		if (req.role == "voter") {
			const { candidateID } = req.params;
			const { userId } = req;
			const candidate = await Candidate.findById(candidateID);
			if (!candidate) {
				return res.status(404).json({ message: "Candidate not found" });
			}
			const user = await User.findById(req.userId);
			//console.log(candidate.votes);
			if (!user) {
				return res.status(404).json({ message: "user not found" });
			}
			if (user.isVoted) {
				return res.status(400).json({ message: "You have already voted" });
			}
			candidate.votes?.push({ user: userId });
			candidate.voteCount++;
			await candidate.save();
			user.isVoted = true;
			await user.save();
			return res.status(200).json({ message: "Vote recorded successfully" });
		}
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error: "Internal Server Error" });
	}
};
const getVoteCount = async (req, res) => {
	try {
		const candidateList = await Candidate.find();
		const voteRecord = candidateList?.map((ele) => {
			return {
				party: ele?.party,
				voteCount: ele?.voteCount,
			};
		});
		return res.status(200).json({ voteRecord });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "Internal Server Error" });
	}
};
const getAllCandidates = async (req, res) => {
	try {
		const candidateList = await Candidate.find({}, "name party");
		return res.status(200).json({ candidateList });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "Internal Server Error" });
	}
};
module.exports = {
	addCandidate,
	updateCandidate,
	deleteCandidate,
	voting,
	getVoteCount,
	getAllCandidates,
};
