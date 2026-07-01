const express = require("express");
const router = express.Router();

const {
  createPost,
  getPosts,
  toggleLike,
  deletePost,
} = require("../controllers/postController");

const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, createPost);

router.get("/", protect, getPosts);

router.put("/like/:id", protect, toggleLike);

router.delete("/:id", protect, deletePost);

module.exports = router;