// http is native to NodeJS. We just have to ask for it
const http = require("http");

// fs = file system module! fs is built into Node
// fs gives node access to THIS computers file system.
const fs = require("fs");

// the http module has a createServer method
// takes 1 arg:
// 1. callback, callback has 2 args: req (request), res (response)
const server = http.createServer((req, res) => {
  console.log(`A request was made to: ${req.url}`);

  if (req.url === "/") {
    // the user wants the homepage! We know, because the req object has / in the url property
    // console.log(req);
    // res = out way of responding to the requester
    // http message
    // 1. start-line - CHECK
    // 2. header
    // 3. body
    // writeHead takes 2 args:
    // 1. status code
    // 2. object for the mime-type
    res.writeHead(200, {
      "content-type": "text/html",
    });
    const homePageHTML = fs.readFileSync("node.html");
    console.log(homePageHTML); // Buffer Data

    res.write(homePageHTML);
    res.end();
  } else if (req.url === "/node.png") {
    res.writeHead(200, {
      "content-type": "image/png",
    });
    const image = fs.readFileSync("node.png");
    res.write(image);
    res.end();
  } else if (req.url === "./styles.css") {
    res.writeHead(200, {
      "content-type": "text/css",
    });
    const css = fs.readFileSync("styles.css");
    res.write(css);
    res.end();
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
    });
    res.write("<h1>Sorry, this isn't the page you're looking for!</h1>");
    res.end();
  }
});

// createServer returns an object with a listen method
// listen takes 1 arg:
// 1. port to listen for http traffic on
server.listen(3000);
