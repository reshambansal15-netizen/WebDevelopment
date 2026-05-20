const express = require('express')
const cors = require('cors')

const app = express()

//MiddleWare - Security Checks
app.use(cors())  //Enable CORS Policy - Share the Response
app.use(express())

//Dummy API - Route
app.post('/register', (req,res)=>{

    const {name, email, password} = req.body // frontend is refer as req.body

    //Response from backend

    res.json({message : `Welcome, ${name}! Your Account has been registered. `})

})

//Start the Server
app.listen(3000 , ()=> {
    console.log('Server Running http://localhost:3000')
})