const express = require("express");
const router = express.Router();
const authControllers = require("../Controllers/authController")

/*
app.get('/', (req, res) => {
    res.status(200).send("Welcome to MERN STACK Home Page");
});

app.get('/register', (req, res) => {
    res.status(200).json({msg:"Register Page"});
});
-----> With using router
router.route("/").get((req, res) => {
  res.status(200).send("Welcome to Home Page");
});

router.route("/register").get((req, res) => {
  res.status(200).json({ msg: "registration successful from router" });
});
*/

// ------> With using Controllers
router.route("/").get(authControllers.home);
router.route("/register").post(authControllers.register);
router.route("/login").post(authControllers.login);

module.exports = router;