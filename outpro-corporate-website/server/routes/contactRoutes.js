const express = require("express");
const auth = require("../middleware/auth");

const router = express.Router();

const {
  createContact,
  getContacts,
  deleteContact,
} = require("../controllers/contactController");

router.post("/", createContact);

// Only admin can view all contacts
router.get("/", auth, getContacts);

// Only admin can delete contacts
router.delete("/:id", auth, deleteContact);

module.exports = router;