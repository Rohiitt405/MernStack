const { schema } = require("../Models/userModel");

const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const status = 422;
        const message = 'Fil the Input properly';
        const extraDetails = err.issues[0].message;

        const error = {
            status, message, extraDetails
        };

        // ------> this will print the status error same through by the validator same as postman 
        // console.log(error);
        next(error);
        
        // ------> without Express error handlers
        // res.status(400).json({msg: message});
    }
};

module.exports = validate;