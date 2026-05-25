const express =  require('express')
const cors    =   require('cors')

const app = express()

//Middleware - Security Checks
app.use(cors())   //ENABLE CORS PLOICY_ SHARE THE RESOURCE
app.use(express.json())


//Dummy API - Route

app.post('/register' , (req,res)=>{

const {name , email , password} = req.body  //frontend is refer as req.body

console.log('User Registered ' , {name , email})

//Reponse From Backend

res.json({message : `Welcome , ${name}! Your Account has been registered `})


})

//Start The Server
app.listen(3000 , ()=>{
    console.log('Server Running http://localhost:3000')
})