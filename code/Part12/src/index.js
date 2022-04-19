const express = require("express");
require("./db/mongoose");
const userRouter = require("./routes/user");
const taskRouter = require("./routes/task");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(userRouter);
app.use(taskRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
