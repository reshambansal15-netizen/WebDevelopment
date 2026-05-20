// Step 1 - Importing the required modules
// Import means to get the module from the node modules and use it in our code
//we have require('Module-name') function to import the module

const express = require('express')

//Step 2 - Define URl/
//express() function is a built in function in express module - This function help us to build or create Server and API

const app = express()

//HTTP METHODS - Communicate with API
//There are 4 HTTP methods 
//1. get() - Get the data from Server/Backend

app.get('/login' , (req,res)=> {

    res.send('Fill the form to Login')

})

//Step 3: Start the Server

app.listen(3000 , ()=> {
    console.log('Server Running on http://localhost:3000')

})