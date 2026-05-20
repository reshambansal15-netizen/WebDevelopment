const express = require('express')

//Step 2: Create Express App/Function

const app = express()

//MiddleWare - Security 
//json format data

app.use(express.json() )

app.get('/' , (req,res)=>{
    res.send('API running')
})

//1. get - Fetch App Restraunts Data
app.get('/restraunt' , (req,res)=> {

    res.send('List of All Restraunt')
})

//2. Post - Place Order
app.post('/order', (req,res)=>{

    res.send(`Order Place Successfully : ${JSON.stringify(req.body)}`)

})

// Start the server

app.listen(5000, ()=>{
    console.log('Server Runnning on http://localhost:5000')
})