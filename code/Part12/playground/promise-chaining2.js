require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("625d674132bf26ce7582f711")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch(err);

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("625d674132bf26ce7582f711")
  .then((count) => {
    console.log(count);
  })
  .catch((err) => {
    console.log(err);
  });
