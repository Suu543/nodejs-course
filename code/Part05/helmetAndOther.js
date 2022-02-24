const express = require("express");
const app = express();

const helmet = require("helmet");

app.use(helmet());

app.use(express.static("public"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

// 1. static
// 2. json
// 3. urlencoded
// 4. helmet - can help protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately

app.post("/ajax", (req, res) => {
  console.log(req.body);
  res.json(["Test", 1, 2, 3, 4]);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
