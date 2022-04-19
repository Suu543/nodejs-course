const express = require("express");
const router = new express.Router();

const User = require("../models/user");

// Users
router.get("/users", async (req, res, next) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(500).send();
  }
});

router.get("/users/:id", async (req, res, next) => {
  const _id = req.params.id;

  try {
    const user = await User.findById(_id);

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (err) {
    res.status(500).send();
  }
});

router.post("/users", async (req, res, next) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.patch("/users/:id", async (req, res, next) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password", "age"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid Updates!" });
  }

  try {
    const user = await User.findOneAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete("/users/:id", async (req, res, next) => {
  try {
    const user = await User.findOneAndDelete(req.params.id);

    if (!user) {
      return res.status(404).send();
    }
  } catch (err) {
    res.status(500).send();
  }
});

module.exports = router;
