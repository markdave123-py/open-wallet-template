import { Router } from "express";
import { handleLogin } from "../controllers/authUserController.js"
import { createNewUserSchema, userLoginSchema } from "../validation/schemas/schemas.js";
import { createNewUser } from "../controllers/userController.js";
import { controllerHandler } from "../middlewares/controllerHandler";

export const router = Router();

router.post('auth/users', controllerHandler(createNewUser, createNewUserSchema));
router.post('auth/users/login', controllerHandler(handleLogin, userLoginSchema));