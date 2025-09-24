const User = require("../Models/useModel");

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
            return res.status(400).json({msg: "email already exits"});
        }

        const userCreated = await User.create({username, email, phone, password });

        res.status(201).json({msg:userCreated});
    } catch (error) {
        res.status(500).json({msg:"Internal server Error"});
    }
};

module.exports = {home, register};