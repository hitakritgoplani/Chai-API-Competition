const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

	name: {
        type: String,
    },
    email: {
        type: String,
    },
	profile_pic: {
		type: String,
	},
	password: {
        type: String,
    },
	followers:{
		type: Number,
	},
	myfollowing:{
		type: Number,
	}
},
	{ versionKey: false }
)

module.exports = mongoose.model('users', userSchema);