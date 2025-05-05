let Joi = require("joi")

let UserValidation = {
    create: {
        body: Joi.object({
            userName: Joi.string().required(),
            email: Joi.string().required(),
            password: Joi.string().required().min(6),
            role: Joi.string().required().valid('admin', 'customer', 'company')
        })
    },
    update: {
        body: Joi.object({
            id: Joi.string().required(),
            userName: Joi.string().required(),
            email: Joi.string().required(),
            role: Joi.string().required().valid('admin', 'customer', 'company')
        })
    }
}

module.exports = UserValidation