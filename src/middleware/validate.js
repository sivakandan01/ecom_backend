let Joi = require("joi")

let validate = (schema) => {
    return((req, res, next) => {
        let { error } = schema.validate(req.body)

        if(error){
            return(
                res.status(400).json({success: false, message: error.details[0].message})
            )
        }
        next()
    })
}

module.exports = validate