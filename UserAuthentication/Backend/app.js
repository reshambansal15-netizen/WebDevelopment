const express = require('express')  //Frontend-Backend
const cors = require('cors') //Data Sharing
const bcrypt = require('bcrypt') // Hash the data, we are using for password
const bodyParser = require('body-parser') //Help us to pass data
const mongoose = require('mongoose') //Backend-Database connection

const app = express()

app.use(cors())  //Enable Cors
app.use(express.json()) //Json Format Data

//MONGOOSE CONNECTION - Backend-Database CONNECTION
//1. Connect -  mongodb://localhost:27017/Database_name

mongoose.connect('mongodb://localhost:27017/register')

.then(()=>console.log("MongoDB Connected"))

.catch((err)=> console.log(err))

//2. SCHEMA - Blueprint of data which you want to store 

const UserSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String , 
        unique:true
    },
    password:String
})

//3. Model - Same Like Collection

const User = mongoose.model("User" , UserSchema)

//--------------------------Database Logic-------------------

//Register - API

app.post('/register' , async(req,res)=>{
    const {name, email, password} = req.body // Defined as Frontend

//1. Basic Validation
    if(!name || !email || !password){

        return res.json({
            message: "All field must be completed"
        })
    }

    //2. Check Existing User
    const existingUser = await User.findOne({email})

    if(existingUser){
        return res.json({
            message: "User Already exists"
        })
    }

    //3.Hash Password
    const hashedPassword = await bcrypt.hash(password, 10)

    //Save the data in MongoDB Collection(User)

    const newUser = new User({
        name,
        email,
        password:hashedPassword
    })

    await newUser.save()

    res.json({
        message: "User Registeration Successfully"
    })
})

// Login -

app.post("/login" , async(req,res)=> {

    const{email,password} = req.body

    //Find User
    const user = await User.findOne({email})

    if(!user){
        return res.json({
            message:"User not Found - Register First"
        })
    }

    //Compared Password
    const valid = await bcrypt.compare(password, user.password)

    if(valid){
        res.json({
            message:"Login Successfully"
        })
    }else{
        res.json({
            message:"Incorrect Password"
        })
    }
})

//Server -

app.listen(3000, ()=>{
    console.log("http://localhost:3000 Backend Address")
})