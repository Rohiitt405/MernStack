const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    password: {
        type: Number,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: false,
    },
});

export const user = new mongoose.model("USER", userSchema);