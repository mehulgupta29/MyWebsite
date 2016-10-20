// We first require our express package
var express = require('express');
var bodyParser = require('body-parser');
var myData = require('./data.js');
var	cookieParser = require('cookie-parser');
var Guid = require("Guid");
var bcrypt = require("bcrypt-nodejs");

// This package exports the function to create an express instance:
var app = express();

// We can setup Jade now!
app.set('view engine', 'ejs');

// This is called 'adding middleware', or things that will help parse your request
app.use(cookieParser());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// This middleware will activate for every request we make to 
// any path starting with /assets;
// it will check the 'static' folder for matching files 
app.use('/assets', express.static('static'));

// Setup your routes here!

//ROUTES
app.get("/home", function (request, response) {
    response.render("pages/home", { pageTitle: "Welcome Home" });
});

app.get("/", function (request, response) { 
    // We have to pass a second parameter to specify the root directory
    // __dirname is a global variable representing the file directory you are currently in
    //response.sendFile("./pages/index.html", { root: __dirname });
    response.render("pages/home", {pageTitle: "Welcome", error: ''})
});

app.get("/education", function(request, response){
	console.log("/education");
	response.render("pages/education", {pageTitle: "Education", error: ''})
});

// We can now navigate to localhost:3000
app.listen(3000, function () {
    console.log('Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it');
});
