const express = require('express')  //Frontend - Backend
const cors = require('cors')         //Data Sharing
const bodyParser = require('body-parser')  //Help us to pass Data
const bcrypt = require('bcrypt')   //Hash The Data , we are using for password
const mongoose = require('mongoose')   //Backend-Database Connection
require('dotenv').config()


const app = express()

app.use(cors())  //Enable Cors
app.use(express.json())   //Json Format Data


//MONGOOSE CONNECTION _ Backend - DATABASE CONNECTION
//1.Connect -   mongodb://localhost:27017/DataBase_Name

mongoose.connect('process.env.MONGO_URI')

.then(()=>console.log("MongoDB Connected"))

.catch((err)=> console.log(err))


//2. SCHEMA - BLUEPRINT OF DATA WHIHC YOU WANT TO STORE

 const UserSchema =   new   mongoose.Schema({

name:String ,
email:{
       type:String ,
       unique:true
    },
password:String
            
 })


 //3. Model - Same Like Collection
       
const User   =  mongoose.model("User" , UserSchema)


//---------------------------Database Logic ---------------//

//Register - API - post


app.post('/resgister' , async(req,res)=>{

const {name , email , password} = req.body


//1. Basic Validation

if(!name || !email || !password){

return res.json( {
    message:"All Feilds Must be Completed"
})

}

//2. Check Exitisng User
const existingUser   =  await  User.findOne({email})

if(existingUser){
    return res.json({
        message:"User Already Exits"
    })
}

//3. Hash Password
const hashedPassword = await bcrypt.hash(password , 10)


//Save Data in MongoDB Collection(User) 
             
const newUser =   new     User({
                name,
                email,
                password:hashedPassword
 })

await newUser.save()


res.json({
    message:"User Registered Succesfully"
})

})

// Login //
app.post("/login" , async(req,res)=>{

const {email,password} = req.body


//Find User
const user = await User.findOne({email})

if(!user){
    return res.json({
        message:"User Not Found- Register First"
    })
}

//Compared Password
const valid = await bcrypt.compare(password , user.password)

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