let Joi = require("joi")

let ProductValidation = {
    create: {
        body: Joi.object({
            name: Joi.string().required(),
            productType: Joi.string().required(),
            stock: Joi.number().integer().required(),
            price: Joi.number().integer().required(),
            companyName: Joi.string().required()
        })
    },
    update: {
        body: Joi.object({
            id: Joi.string().required(),
            name: Joi.string().required(),
            productType: Joi.string().required(),
            stock: Joi.number().integer().required(),
            price: Joi.number().integer().required(),
            companyName: Joi.string().required(),
            createdAt: Joi.string(),
            updatedAt: Joi.string()
        })
    }
}

module.exports = ProductValidation