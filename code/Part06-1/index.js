const path = require("path");

const express = require("express");
const app = express();

const helmet = require("helmet");
app.use(helmet());

// Serve up static files
app.use(express.static("public"));
// Parse json and urlencoded data into req.body
app.use(express.json());
app.use(express.urlencoded());

// app.set(name, value), takes 2 args:
// 1. Key
// 2. Value
// npm install ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 만약 두 개 이상의 views 폴더를 추가하고 싶은 경우 배열을 사용할 수 있다.
// app.set("view", [path.join(__dirname, "views")]);

// 1. Express as we know it happens. This File
// 2. We define a view engine.
// - EJS
// - Mustache
// - Handlebars
// - Jade/Pug
// 3. Inside one of our routes, we have a res.render
// 4. We pass that res.render 2 things:
// - The file we want to use (중요)
// - The data we want to send to that file (중요)
// 5. Express uses the node module for our specified view engine and parses the file.
// - that means, it takes the HTML/CSS/JS and combines it iwth whatever "node" there in this file.
// 6. The final result of this process is a compiled product of the things the browser can read.
// - HTML, CSS, and JS

app.get("/", (req, res, next) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
