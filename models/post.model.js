const { truncateThreshold } = require("chai/lib/chai/config");
const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");
const Schema = mongoose.Schema;
const User = require('./user.model');

const postSchema = new Schema({

	description:{
		type: String,
		required: true
	},
	image:[{
		type: String,
		required:true
	}],
	postedby:{
		type: Schema.Types.ObjectId,
		ref:User,
		required:true
	}
},
{ versionKey: false }

)