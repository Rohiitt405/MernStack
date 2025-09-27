const User = require("../Models/userModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const home = async (req, res) => {
    try {
        res.status(200).json({msg:"Home Page"});
    } catch (error) {
        console.log(error);
    }
};

const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;
        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(400).json({msg: "Email already exits"});
        }

        // const saltRound = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({
            username, 
            email, 
            phone, 
            password/*:hashedPassword*/
        });
        
        res.status(201).json({
            msg: "Registration successful", 
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({msg:"Internal server Error"});
    }
};

module.exports = {home, register};