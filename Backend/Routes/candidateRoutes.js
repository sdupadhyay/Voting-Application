const express = require("express");
const verifyJwt = require("../middlewares/verifyJwt");
const {
	addCandidate,
	updateCandidate,
	deleteCandidate,
	voting,
	getVoteCount,
	getAllCandidates,
} = require("../controllers/candidate");
const router = express.Router();
router.post("/", verifyJwt, addCandidate);
router.put("/:candidateID", verifyJwt, updateCandidate);
router.delete("/:candidateID", verifyJwt, deleteCandidate);
router.get("/vote/:candidateID", verifyJwt, voting);
router.get("/count", getVoteCount);
router.get("/", getAllCandidates);

module.exports = router;
