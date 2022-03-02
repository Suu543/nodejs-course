const path = require("path");

const express = require("express");
const app = express();

const helmet = require("helmet");
app.use(helmet());

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

function validateUser(req, res, next) {
  // ... validated logic
  res.locals.validated = true;
  next();
}

app.use(validateUser);
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      "img-src": ["'self'", "https: data:"],
    },
  })
);

app.get("/", (req, res, next) => {
  // The data, in the 2nd arg, is going to be appended to res.locals
  res.render("index", {
    msg: "Success!",
    msg2: "Failure!",
    // HTML came from the DB and we want to drop it in the template
    html: `<p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdH6m8uo9xKBhK7z_YqOXo5qwMUDYciOWQqzvtqawG4lcA-2OTf0q6v6nL5yfmUw-Rz2o&usqp=CAU" /></p>`,
  });
});

app.get("/about", (req, res, next) => {
  res.render("about", {});
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
