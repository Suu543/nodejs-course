const path = require("path");
const logger = require("morgan");
const helmet = require("helmet");
const express = require("express");
const forecast = require("./src/utils/forecast");

const app = express();

app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
  res.render("index", {
    title: "Weather",
    name: "Yongsu Jeong",
  });
});

app.get("/about", (req, res, next) => {
  res.render("about", {
    title: "About Me",
    name: "Yongsu Jeong",
  });
});

app.get("/help", (req, res, next) => {
  res.render("help", {
    helpText: "This is some helpful txt...",
    title: "Help",
    name: "Yongsu Jeong",
  });
});

app.get("/weather", (req, res, next) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address",
    });
  }
});

app.get("/products", (req, res, next) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }

  console.log(req.query.search);

  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res, next) => {
  res.render("404", {
    title: "404",
    name: "Yongsu Jeong",
    errorMessage: "Help Article Not Found...",
  });
});

app.get("*", (req, res, next) => {
  res.render("404", {
    title: "404",
    name: "Yongsu Jeong",
    errorMessage: "Page Not Found...",
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
