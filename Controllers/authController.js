const User = require("../Models/useModel");
const bcrypt = require('bcryptjs');

const home = async (req, res) => {
    try {
        res.status(200).json({msg:"Home Page"});
    } catch (error) {
        console.log(error);
    }
};

const register = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, phone, password } = req.body;
        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(400).json({msg: "email already exits"});
        }

        // ---> skip this we will use PreMethod for this hashing
        const saltRound = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({username, email, phone, password:hashedPassword/**/});

        res.status(201).json({msg:userCreated});
    } catch (error) {
        console.error(error);
        res.status(500).json({msg:"Internal server Error"});
    }
};

module.exports = {home, register};