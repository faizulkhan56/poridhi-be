const express = require("express")
const app = express();



app.get('/students',(req,res)=>{

res.send('student information')


})

app.get('/employee',(req,res)=>{

    const id = req.query.id;
    const dept = req.query.dept;

    console.log(id);
    console.log(dept);

    const result =  {
        name: "Faizul",
        age: 38,
        salary:3500
        }

    if(id){

    res.send(result)

    }

    else

    {
    res.send('no id')
    } })


    app.get('/employee/manager',(req,res)=>{

        res.send('i am manger')
        
        
        })
   app.get('/employee/:id/:dept',(req,res)=>{
            const id = req.params.id
            const dept = req.params.dept
            console.log(id)
            console.log(dept)
            res.send(`I am manager with ${id} path parameter ${dept}`);
            
            
            })


app.listen(4040,() =>{

    console.log("server started... again");

});