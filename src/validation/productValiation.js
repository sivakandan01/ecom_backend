let Joi = require("joi")

let ProductValidation = {
    create: {
        body: Joi.object({
            name: Joi.string().required(),
            productType: Joi.string().required(),
            stock: Joi.number().integer().required(),
            companyName: Joi.string().required()
        })
    },
    update: {
        body: Joi.object({
            name: Joi.string().required(),
            productType: Joi.string().required(),
            stock: Joi.number().integer().required(),
            companyName: Joi.string().required()
        })
    }
}

module.exports = ProductValidation