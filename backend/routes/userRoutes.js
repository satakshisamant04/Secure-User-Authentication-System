const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");

// Import controllers
const {
  registerUser,
  loginUser,
  getProfile,
  updateUser,
  changePassword,
  deleteAccount,
} = require("../controllers/userController");

// ROUTES
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", auth, getProfile);
router.put("/update", auth, updateUser);
router.put("/change-password", auth, changePassword);
router.delete("/delete", auth, deleteAccount);

module.exports = router;
