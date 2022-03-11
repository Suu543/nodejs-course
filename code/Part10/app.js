const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");
//====================== PASSPORT FIELS ====================
const session = require("express-session");
const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;
// console.log(GitHubStrategy);
//==========================================================

const indexRouter = require("./routes/index");

const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config();

app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);

// ==================== PASSPORT CONFIG ==================
// /login 라우터 호출 ==> passport.use middleware 실행 ==> /auth (callbackURL)
app.use(
  session({
    secret: "I love Express!",
    resave: false,
    saveUninitialized: true,
  })
);
// 이 부분이 verify Callback
app.use(passport.initialize());
// session data is stored server-side
app.use(passport.session());
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRETS,
      callbackURL: "http://localhost:3000/auth",
    },
    function (accessToken, refreshToken, profile, cb) {
      // console.log(profile);
      // 이 부분이 verify Callback
      return cb(null, profile);
    }
  )
);

// login된 유저를 req.user에 보관
passport.serializeUser((user, cb) => {
  cb(null, user);
});
passport.deserializeUser((user, cb) => {
  cb(null, user);
});
// ===================================================
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

app.listen(PORT || 3000, () => {
  console.log(`Listening on port ${PORT}`);
});
