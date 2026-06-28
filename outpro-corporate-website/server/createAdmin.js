const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./models/Admin");

mongoose.connect("mongodb://127.0.0.1:27017/outproDB");

async function createAdmin() {

  const existing = await Admin.findOne({
    username: "admin",
  });

  if (existing) {

    console.log("Admin already exists");

    process.exit();

  }

  const hash = await bcrypt.hash("admin123", 10);

  await Admin.create({

    username: "admin",

    password: hash,

  });

  console.log("Admin Created Successfully");

  process.exit();
}

createAdmin();