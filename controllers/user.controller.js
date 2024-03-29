const User = require('../models/user.model');

async function createUser (req, res) {
    try {
        const body = req.body;
        const user = new User(body);
        const savedUser = await user.save();

        res.status(200).json({
            message: "User added successfully",
            savedUser
        });
	}
	catch(err){
		
		console.log(err);
		res.status(500).json(err);
	}
}

async function getUser (req, res) {
	try{
		const users = await User.find();
		res.status(200).json(users);
	}
	catch (err){
		console.log(err);
		res.status(500).json(err);
	}
}

async function getFollowers (req, res) {
	try{
		const followers = await User.find();
		res.status(200).json(followers);
	}
	catch (err){
		console.log(err);
		res.status(500).json(err);
	}
}

module.exports = {createUser, getUser, getFollowers};