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
app.get("/", function(req, res) {
  res.send("Welcome to Bob's Burger Joint!");
});

// Displays all characters
app.get("/api/makeReservations", function(req, res) {
  return res.json(openTables);
});


// Create New Tables - takes in JSON input
app.post("/api/openTables", function(req, res) {
    var waitingListArr = [];
  var newCustomer = req.body;

    for(i = 0; i < openTables.length; i++) {
    if(i < 5){
    openTables.push(newCustomer)
    }
    else{
        waitingListArr.push(newCustomer)
    }
}
  res.json(newCustomer);
  console.log(openTables)
  console.log(waitingListArr)
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


