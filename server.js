var express = require("express");
const bodyParser = require("body-parser");
var path = require("path");
// const router = require("./app/routing/apiRoutes");

var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
  // app.use(express.bodyParser());
  app.use(bodyParser.urlencoded({ extended: false }))
  // app.use(bodyParser.json())
  // app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(express.static("app/public"));

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

//require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);
app.use(express.static("app/public"));


//starts app on port 8080
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  