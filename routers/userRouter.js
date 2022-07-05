const express = require("express");

const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", userController.getUsers)
router.post("/", userController.createUser)

router.get("/:id", userController.getUserById)
router.patch("/:id", userController.patchUser)
router.delete("/:id", userController.deleteUser)

module.exports = router;