//console.log('hi there')

//const num1=100
//const num2=10
//const result=num1+num2
//console.log(result)


const express = require("express")
const app = express();
app.get('/',(req,res)=>{

res.send('hi there')


})

app.listen(4000,() =>{

    console.log("server started...");

});