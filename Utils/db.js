const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connection sucessful to DB");        
    } catch (error) {
        console.log("Database Connection error");
        process.exit(0);
    }
}

module.exports = connectDb;