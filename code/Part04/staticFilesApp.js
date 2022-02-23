// NodeJS is the language Written in C
// Express is fast, unopinionated, minimalist web framework for Node.js
// Express is node, a node module

// HTTP is a native module
// const http = require("http");
// Express is a 3rd party module
const path = require("path");
const express = require("express");
// node_modules ==> express => lib ==> express.js ==> createApplication
// An "app" is the express function (createApplication inside the Express module)
// Invoked and is an Express application
const app = express();

// Serve up static files! Only 1 line... take that nodejs
app.use(express.static("public"));

// all is a method, and it takes 2 args:
// 1. route
// 2. callback to run if the route is requested
app.all("/", (req, res) => {
  // Express handles the basic headers! (statue, code, mime-type)
  // Express handles the end! Awesome!
  // Read in Node.html
  // Absolute Path is required
  console.log(path.join(__dirname + "/node.html"));
  res.sendFile(path.join(__dirname + "/node.html"));
});

app.all("*", (req, res) => {
  res.send("<h1>Sorry, This Page does not exist</h1>");
});

app.listen(3000, () => {
  console.log("Listening on Port 3000...");
});
