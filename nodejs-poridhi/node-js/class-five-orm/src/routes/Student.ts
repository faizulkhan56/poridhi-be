import { Router } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export const router = Router();

const userRepo = () => AppDataSource.getRepository(User);

router.get('/students', async (req, res) => {
    const users = await userRepo().find();
    res.send(users);
});

router.post('/student', async (req, res) => {
    const { firstName, lastName, age } = req.body;
    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;

    try {
        const savedUser = await userRepo().save(user);
        res.status(201).send(savedUser);
    } catch (error) {
        res.status(500).send("Failed to create a new student.");
    }
});



router.delete('/student/:id', async (req, res) => {

    const id = parseInt(req.params.id)
    if (!id){
      return res.status(400).send("Invalid Id");

    }

    try {
        const result = await userRepo().delete(id);
        if(result.affected===0){
        return res.status(404).send("User not found");

        }
        res.status(200).send("user deleted successfully");
    } catch (error) {
        res.status(500).send("Failed to delete user");
    }
});

router.put('/student/:id', async (req, res) => {

    const id = parseInt(req.params.id)
    const { firstName, lastName, age } = req.body;
    if (!id){
      return res.status(400).send("Invalid Id");

    }

    try {
        const userToUpdate = await userRepo().findOneBy({id:id});
        if(!userToUpdate){
        return res.status(404).send("User not found");

        }
        userToUpdate.firstName = firstName
        userToUpdate.lastName = lastName
        userToUpdate.age = age
        const updatedUser = await userRepo().save(userToUpdate)
        res.status(200).send(updatedUser)}
        
        catch (error) {
            res.status(500).send("Failed to delete user");
        }

});





router.delete('/student', async (req, res) => {

    
      return res.status(400).send("give id with delete request");

    });