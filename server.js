const express = require("express");
const router = require("./Router/authRoute");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

app.use("/", router);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running at port: ${PORT}`);
});