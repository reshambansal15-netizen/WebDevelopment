const express = require("express");
const router = express.Router();
const upload = require("../config/multer");

const {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
} = require("../controllers/authController");

const { protect } = require("../middleware/authMiddleware");


router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/profile", protect, getProfile);

router.put(
  "/profile",
  protect,
  upload.single("profilePic"),
  updateProfile
);

module.exports = router;