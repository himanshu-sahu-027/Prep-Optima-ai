import { envConfig } from "../config/env.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

// import models
import userModel from "../models/user.model.js";
import tokenBlacklistModel from "../models/tokenBlacklist.model.js";

/**
 * @name registerUserController
 * @description register a new user , expects username, email and password in the request body
 * @route POST /api/auth/register
 * @access public
 */
async function registerUserController(req, res) {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      message: "please provide username, email, password",
    });
  }

  const isUserAlreadyExists = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExists) {
    return res.status(400).json({
      message: "Account already exists with this username or email address",
    });
  }

  const hashPassword = await bcryptjs.hash(password, 10);

  const registeredUser = await userModel.create({
    username,
    email,
    password: hashPassword,
  });

  const token = jwt.sign(
    { id: registeredUser._id, username: registeredUser.username },
    envConfig.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "None",
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.status(201).json({
    message: "user registered successfully",
    user: {
      id: registeredUser._id,
      username: registeredUser.username,
      email: registeredUser.email,
    },
  });
}

/**
 * @name loginUserController
 * @description login a user , expects email and password in the request body
 * @route POST /api/auth/login
 * @access public
 */
async function loginUserController(req, res) {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "Account does not exists with this email address",
    });
  }

  const isPasswordValid = await bcryptjs.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid password",
    });
  }

  const token = jwt.sign(
    { id: user._id, username: user.username },
    envConfig.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "None",
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.status(200).json({
    message: "user logged in successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}

/**
 * @name logoutUserController
 * @description clear token from user cookie and add the token in tokenBlacklist
 * @route GET /api/auth/logout
 * @access public
 */
async function logoutUserController(req, res) {
  const token = req.cookies.token;

  if (token) {
    await tokenBlacklistModel.create({ token });
  }

  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "None",
  });

  res.status(200).json({
    message: "user logged out successfully",
  });
}

/**
 * @name getMeController
 * @description get the current logged in user
 * @route GET /api/auth/get-me
 * @access private
 */
async function getMeController(req, res) {
  const user = await userModel.findById(req.user.id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.status(200).json({
    message: "User details fetched successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}

export {
  registerUserController,
  loginUserController,
  logoutUserController,
  getMeController,
};
