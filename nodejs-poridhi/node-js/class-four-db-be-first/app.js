const express = require('express');
const db = require('./db'); // Import the database connection
const student = require('./student')

const app = express();

app.use('/api',student)




app.listen(4040,() =>{

    console.log("server started... again");

});