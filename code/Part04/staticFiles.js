const express = require("express");
const app = express();

// app comes with a use method...
// use takes 1 arg (right now):
// 1. the middleware you want to run
// public 폴더 외부에 있으면 인식하지 못한다. Route 개념과는 다르다. 그냥 가지고 있는 Resource라 생각할 수 있다.
// url 앞에 public을 작성하지 않아도 된다.
// API Key 등 중요한 정보는 결코 public 등에 보관해서는 안 된다.
// localhost:3000/styles.css
// localhost:3000/node.png
app.use(express.static("public"));
// localhost:3000/accepts.index.js
// app.use(express.static("node_modules"));

app.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
