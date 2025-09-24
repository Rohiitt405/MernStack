const express = require("express");
const router = require("./Router/authRoute");
const dotenv = require("dotenv");
const connectDb = require("./Utils/db");
const app = express();
dotenv.config();

app.use("/", router);

const PORT = process.env.PORT;

connectDb().then(() => {
    app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});
