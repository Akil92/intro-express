// Load ecpress
const express = require("express");
const path = require("path");

//require the TO-DO "database"
const todoDb = require("./data/todo-db");

//Create our express app 
const app = express();

//configure the app (app.set)
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "Views"));

//Mount middleware (app.use)


//Mount routes



//Define a "root" route directly on app
//Tomorrow, we'' use best practice routing
app.get("/", function(req, res) {
res.send("<h1>Hello Express!</h1>");
});

app.get("/home", function(req, res) {
    //Never begin the name of a template with a "/"
    res.render("home");
});

app.get("/todos", function(req, res) {
    const students = todoDb.getAll();
    res.render("todos/index", { students });
    //todos/index refrences a template, not a path to a folder(the todos folder is coming from the voews folder)
    //second argument is the object, data
});

app.listen(3000, function() {
    console.log("Listening on port 3000")
});



//Tell the app to listen on port 300
//For HTTP requests from clients
// app.listen(3000, function() {
//     console.log("Listening on port 3000");
// })