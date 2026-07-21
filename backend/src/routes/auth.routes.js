import express from "express";

// import the controller
import {
    registerUserController,
    loginUserController,
    logoutUserController,
    getMeController
} from "../controllers/auth.controller.js";

// import middlewares
import authUser from "../middlewares/auth.middleware.js";



const authRouter=express.Router();

/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access public
 */
authRouter.post("/register",registerUserController);

/**
 * @route POST /api/auth/login
 * @description Login a user with email and password
 * @access public
 */
authRouter.post("/login",loginUserController);

/**
 * @route GET /api/auth/logout
 * @description clear token from user cookie and add the token in tokenBlacklist
 * @access public
 */
authRouter.get("/logout",logoutUserController);

/**
 * @route GET /api/auth/getme
 * @description get the current logged in  user details
 * @access private
 */
authRouter.get("/get-me",authUser,getMeController);

export default authRouter;