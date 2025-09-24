const home = async (req, res) => {
    try {
        res.status(200).json("Home Page");
    } catch (error) {
        console.log(error);
    }
};

const register = async (req, res) => {
    try {
        res.status(200).send("Register Page");
    } catch (error) {
        res.status(500).send("Internal server Error");
    }
};

module.exports = {home, register};