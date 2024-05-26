import {escape} from "querystring"
import "reflect-metadata";
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import express from "express";
const app = express();
app.use(express.json());
const port = 3000;

AppDataSource.initialize().then(async () => {
   
    const userRepo = AppDataSource.getRepository(User);
    app.get('/students',async(req,res)=>{
     
        const users=await userRepo.find();
        res.send(users);
        })

    app.post('/student',async(req,res)=>{

        const{firstName, lastName, age} = req.body
        const user =new User()
        user.lastName = lastName
        user.firstName = firstName
        user.age = age

        try{

            const savedUser=await userRepo.save(user)
            res.status(201).send(savedUser)
        }

        catch(error){

            res.status(500).send("fail to save")
        }


    })

    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
}).catch(error => console.log("Error during Data Source initialization:", error));
