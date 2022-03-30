const Joi = require("joi");

module.exports={
    // validation layer before going to the database layer .
    addTaskValidation:{
        body: Joi.object().keys({
            z: Joi.string().required(),
        })
    }
}