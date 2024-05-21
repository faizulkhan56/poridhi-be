const express = require("express")
const app = express();



app.get('/students',(req,res)=>{

res.send('student information')


})



app.listen(4040,() =>{

    console.log("server started... again");

});