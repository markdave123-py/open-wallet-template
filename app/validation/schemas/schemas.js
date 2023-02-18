import Joi from "joi";

export const createNewUserSchema = {
    email: Joi.string().required(),
    password: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required()
}

export const userLoginSchema = {
    email: Joi.string().required(),
    password: Joi.string().required()
}