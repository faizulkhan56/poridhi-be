const express = require("express")
const app = express();
app.use(express.json());



app.post('/signup',(req,res)=>{

    const{name,age,location,pass} = req.body
    console.log(name,age,location,pass)
    console.log(req.headers["token"]);

res.send('completed')


});


app.post('/signup/:id',(req,res)=>{
 
if(req.headers["apikey"] !="abcd"){

    res.send('eror found apikey not match')
}
 console.log(req.params.id)
 console.log(req.query.age)
 console.log(req.headers["token"])
 console.log(req.headers["apikey"])

res.send('completed')


});



app.listen(4040,() =>{

    console.log("server started... again");

});