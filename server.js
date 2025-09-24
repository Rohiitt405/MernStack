const express = require("express");
const router = require("./Router/authRoute");
const connectDb = require("./Utils/db");
const app = express();

// const dotenv = require("dotenv");
// dotenv.config();
require("dotenv").config();      // ---> Another method

app.use("/", router);

const PORT = process.env.PORT;

connectDb().then(() => {
    app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});
