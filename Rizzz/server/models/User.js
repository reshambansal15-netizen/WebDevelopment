const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    profilePic: {
      type: String,
      default: "https://i.pravatar.cc/150?img=12",
    },

    bio: {
      type: String,
      default: "Hello! Welcome to Rizzz 💜",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);