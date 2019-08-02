var express = require("express");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Data
var openTables = [
 {
   routeName: "smithfamily",
   name: "The Smiths",
   phone: "phone number",
   email: "email"
 },

];

// Routes
app.get("/", function (req, res) {
 res.send("Welcome to Mos Eisley Casino!");
});

// Displays all characters
app.get("/api/makeReservations", function (req, res) {
 return res.json(openTables);
});


// Create New Tables - takes in JSON input
app.post("/api/openTables", function (req, res) {
 var waitingListArr = [];
 var newCustomer = req.body;
 console.log(newCustomer);
 
 if (openTables.length < 5) {
   openTables.push(newCustomer);
   console.log("This is the open Table: " + openTables);
 }
 else {
   waitingListArr.push(newCustomer)
   console.log(openTables);
   console.log(waitingListArr);
   console.log("This is the " + waitingListArr);
   console.log("Occuped Tables: " + openTables);
 }

 res.json(newCustomer);

});

app.listen(PORT, function () {
 console.log("App listening on PORT " + PORT);
});