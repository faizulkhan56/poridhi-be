const http = require("http");
const fs = require("fs");




const myServer = http.createServer((req , res)=>{
 
    console.log("new req received")
    console.log(req.headers.host)

const log = `${Date.now()} : ${req.url} \n ${req.headers.host} \n` ;
fs.appendFile('log.txt' , log , (err , data)=>

{
    
    switch(req.url){
        case '/' : res.end("Home Page");
        break;

        case '/about' : res.end("I am Faizul");
        break;

        default:
            res.end("404 Not Found")

    }
   }
    
    )


})


const PORT = 8000;
myServer.listen(8000, ()=>{
    console.log(`Server started at port no ${PORT} `);
})

