const Post = require('../models/post.model');

async function createPost (req, res) {
    try {
        const body = req.body;
        const user = new User(body);
        const savedUser = await user.save();

        res.status(200).json({
            message: "Post added successfully",
            savedUser
        });
	}
	catch(err){
		
		console.log(err);
		res.status(500).json(err);
	}
}

async function deletePost (req, res) {
	try {
		await Post.deletePost({});
		res.status(200).json({message: "Post deleted successfully"});
	} 
	catch (err) {
		console.log(err);
		res.staus(500).json(err);
	}
}

async function getPostsByUser(req, res) {
    try {
        const result = await Post.find({});
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.staus(500).json(err);
    }
}

module.exports = {createPost, deletePost, getPostsByUser};