const express = require('express');

const {login, register} = require("../controllers/authController.js");
const authMiddleware = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// / Example protected route
router.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "You have access", userId: req.user });
});

module.exports = router;