require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findByIdAndUpdate("625d674132bf26ce7582f711", { age: 1 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("625d674132bf26ce7582f711", { age: 1 })
  .then((count) => {
    console.log(count);
  })
  .catch((err) => {
    console.log(err);
  });
