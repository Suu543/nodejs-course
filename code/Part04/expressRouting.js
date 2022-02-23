const express = require("express");
const app = express();

// app object has a few methods:
// HTTP Verbs! REST Verbs!
// CRUD App Corresponse!
// 1. get
// - DEFAULT for all browers! is GET!!
// 2. post - CREATE
// 3. delete - DELETE
// 4. put - UPDATE
// etc...
// 5. all (just express thing) ==> I will accept any method

// Takes 2 args:
// 1. path
// 2. callback to run if an HTTP request that matches THIS verb
// is made to the path in #1

// 문제는 이 방식을 해버리면, 아래 다른 get, post, delete, put이 무시된다.
app.all("/", (req, res) => {
  console.log(req);
  res.send(`<h1>Welcome to the homepage</h1>`);
});

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to the homepage GET!</h1>`);
});

app.post("/", (req, res) => {
  res.send(`<h1>Welcome to the homepage POST!</h1>`);
});

app.delete("/", (req, res) => {
  res.send(`<h1>Welcome to the homepage DELETE!</h1>`);
});

app.put("/", (req, res) => {
  res.send(`<h1>Welcome to the homepage PUT!</h1>`);
});

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
