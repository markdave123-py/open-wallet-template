import { User } from '../models/user';
import  jwt  from 'jsonwebtoken';
import dotenv from "dotenv";
import bcrypt from "bcrypt"
import { config } from '../config/env';

dotenv.config();

const handleLogin = async (req, res) =>{
    const {email, password} = req.body;

    if (!email || !password) return res.status(400).json({"message": "username and password required!!"});
    
    const users = await User.findAll();
    const user = users.find(person => person.email === email );

    if(!user) return res.status(404).json({"message": "not a valid user!!"});

    const match = await bcrypt.compare(password, user.password);

    if(match) {
        const accessToken = jwt.sign(
            {"username": user.email},
            config.db.ACCESS_TOKEN_SECRET,
            {"expiresIn": "600s"}
        );

        res.json({accessToken});
    }else{
        res.sendStatus(401);
    }
}