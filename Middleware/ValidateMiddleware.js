const { schema } = require("../Models/userModel");

const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        return next();
    } catch (error) {
        const status = 422;
        const message = "Fill the input properly";
        const extraDetail = err.issues.map((currElem) => currElem.message);

        const err = {
            status, message, extraDetail,
        };

        next(extraDetail);
    }
};

module.exports = validate;