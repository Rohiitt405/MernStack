//  ------> We can destructure the schmea, model from mongoose 
const { Schema, model } = require('mongoose');

// ------> Instead of mongoose.Schema use write only schema bcoz we destructure the Schema from mongoose 
const contactSchema = new Schema ({
    username: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
});

const Contact = model('Contact', contactSchema);
module.exports = Contact;