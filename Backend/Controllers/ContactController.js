const Contact = require('../Models/ContactModel');

const contactForm = async (req, res) => {
    try {
        const response = req.body;
        await Contact.create(response);
        return res.status(201).json({msg: "message send sucessfully"});
    } catch (error) {
        return res.status(500).json({msg: "message not delivered"});
    }
};

module.exports = contactForm;