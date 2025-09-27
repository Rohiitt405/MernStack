const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

/**/

// ------> bcrypt
userSchema.pre("save", async function () {
    const user = this;
    console.log("actual data", this);

    if (!user.isModified("password")) {
        return next();
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, saltRound);
        user.password = hashedPassword;
    } catch (error) {
        return next(error);
    }
});

// ------->JWT 
userSchema.methods.generateToken =  function () {
    console.log("IM token");;
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "30d" }
        );
    } catch (error) {
        console.error("Token error: ", error);
    }
};

module.exports = mongoose.model("USER", userSchema);