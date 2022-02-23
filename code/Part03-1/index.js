const fs = require("fs");
const router = require("./src/diy-router");
const app = router();
const port = 3000;

app.static("public");

app.get("/", (req, res) => res.send("<h1>Hello World</h1>"));
app.get("/test-route", (req, res) => res.send("<h1>Testing testing</h1>"));
app.get("/user/:username", (req, res) => {
  const users = [
    { username: "johndoe", name: "John Doe" },
    { username: "janesmith", name: "Jane Smith" },
  ];

  const user = users.find((user) => user.username === req.params.username);

  res.send(`<h1>Hello, ${user.name}!</h1>`);
});
app.get("/test", (req, res) => {
  fs.readFile("./public/node.html", (err, data) => {
    if (err) {
      res.send("");
    }

    res.send(data);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
