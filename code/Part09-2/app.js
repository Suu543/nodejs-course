const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");

// /now_playing
const indexRouter = require("./routes/index");
// /movies/...
const movieRouter = require("./routes/movie");
// /search/...
const searchRouter = require("./routes/search");

const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config();

app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);

app.use((req, res, next) => {
  // cut off the response if the api key is bad
  if (req.query.api_key != 123456789) {
    // these are not the droids we're looking for
    res.status(401); // Unauthorized = 401, NOT a 200
    res.json("Invalid API Key");
  } else {
    next();
  }
});

// view engine setup
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
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/movie", movieRouter);
app.use("/search", searchRouter);

app.listen(PORT || 3000, () => {
  console.log(`Listening on port ${PORT}`);
});
