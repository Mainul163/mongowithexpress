const express = require("express");
const {
  getAllUsers,
  createUser,
  getOneUser,
  deleteUser,
} = require("../controllers/user.controller");
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.post("/", createUser);
router.delete("/:id", deleteUser);
module.exports = router;
