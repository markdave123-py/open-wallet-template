import { User } from '../models/user.js';
import bcrypt from 'bcrypt';

const createNewUser = async (req, res)=>{
    const {email, password, firstname, lastname} = req.body;

    if (!email || !firstname || !lastname || !password){
        res.status(404).json({'message': 'pls enter the required credentials'});
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10); 
    
        const user = await User.create({
            email,
            firstname,
            lastname,
            hashedPassword
    });

        await user.save();

        return {
            code: 200,
            message: "user successfully created"
    }
    } catch (error) {
        res.status(500).json({"message": error.message});
    }
}