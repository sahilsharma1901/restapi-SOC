
const express = require("express");

const usersController = require("../usersController/usersController");

const router = express.Router();

router.get("/", usersController.getUsers);
router.post("/", usersController.postUser);
router.patch("/edit/:userId", usersController.updateUser);
router.delete("/:userId", usersController.deleteUser);

module.exports = router;