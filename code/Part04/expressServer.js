// NodeJS is the language Written in C
// Express is fast, unopinionated, minimalist web framework for Node.js
// Express is node, a node module

// HTTP is a native module
// const http = require("http");
// Express is a 3rd party module
const express = require("express");
// node_modules ==> express => lib ==> express.js ==> createApplication
// An "app" is the express function (createApplication inside the Express module)
// Invoked and is an Express application
const app = express();

// all is a method, and it takes 2 args:
// 1. route
// 2. callback to run if the route is requested
app.all("*", (req, res) => {
  // Express handles the basic headers! (statue, code, mime-type)
  // Express handles the end! Awesome!
  res.send(`<h1>This is the starter page!</h1>`);
});

app.listen(3000, () => {
  console.log("Listening on Port 3000...");
});
