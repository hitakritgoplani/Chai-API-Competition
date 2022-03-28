const express = require("express");
const port =  8000;
const app = express();

require("./config/mongodb.config");

const userRoute = require('./routes/user.route');
const postRoute = require('./routes/post.route');

app.use('/users', userRoute);
app.use('/post', postRoute);


app.get("/", (req, res) =>{

	res.send("APi's made by Teabugs");
});


app.listen(port , ()=> {

	console.log("Server running at port 8000");

});