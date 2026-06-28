const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

// ---------------- Middleware ----------------

app.use(cors());

app.use(express.json());

// ---------------- MongoDB ----------------

mongoose.connect(process.env.MONGO_URI)
.then(() => {

    console.log("✅ MongoDB Connected");

})
.catch((error)=>{

    console.log(error);

});

// ---------------- Routes ----------------

app.get("/", (req,res)=>{

    res.json({

        success:true,

        message:"Welcome to Outpro API"

    });

});

app.use("/api/contact",contactRoutes);
app.use("/api/admin", adminRoutes);

// ---------------- Server ----------------

const PORT=process.env.PORT||5000;

app.listen(PORT,()=>{

console.log(`🚀 Server running on http://localhost:${PORT}`);

});