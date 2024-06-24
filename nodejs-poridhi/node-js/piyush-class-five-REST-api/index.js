const express = require("express");
const users = require("./MOCK_DATA.json")
const fs = require("fs")

const app = express();
const PORT = 8000;

//Middleware - Plugin
app.use(express.urlencoded({extended:false}));

//Routes
app.get('/users', (req, res)=>{
   const html = `
    <ul>
    ${users.map(user => `<li>${user.first_name} <br>${user.last_name} <br> ${user.email}</li>`).join("")}
    <ul>`
    res.send(html)
})


//Routes
//app.get('/users', (req, res)=>{
 //res.json(users)
//})

//REST Api

app.get('/api/users', (req, res)=>{
    return res.json(users);
})

app.route('/api/users/:id').get((req, res)=>{
    
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    return res.json(user);

})

//.post((req, res) =>{
    // TODO : edit the user with id
   // return res.json({status : 'Pending'})
//})

app.post('/api/users' , (req , res)=>{
    // TODO : Create new user
    const  body = req.body;
    //console.log("body",body);
    users.push({...body , id:users.length+1});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
        if (err) {
          return res.json({ status: "error", message: err.message });
        }
        return res.json({ status: "success", id: users.length });
      });
    });

//.patch((req, res) =>{
    // TODO : edit the user with id
   // return res.json({status : 'Pending'})
//})
//.delete((req , res)=>{
   // // TODO : delete the user with id
   // res.json({status : 'Pending'})
//})



//app.post('/api/users' , (req , res)=>{
//     // TODO : Create new user
    // return res.json({status: "pending"});
 //})

//app.patch('/api/users/:id' , (req , res)=>{
//     // TODO : Edit the user with id
   // return res.json({status: "pending"});
 //})

//app.delete('/api/users/:id' , (req , res)=>{
//     // TODO : delete the user with id
   //return res.json({status: "pending"});
 //})



 app.delete('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex(user => user.id === id);
  
    if (userIndex === -1) {
      return res.status(404).json({ status: "error", message: "User not found" });
    }
  
    users.splice(userIndex, 1);
  
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
      if (err) {
        return res.status(500).json({ status: "error", message: err.message });
      }
      return res.json({ status: "success", message: `User with id ${id} deleted` });
    });
  });

app.listen(PORT , ()=>{
    console.log(`Server started at Port ${PORT}`)
})