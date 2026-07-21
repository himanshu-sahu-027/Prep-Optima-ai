import jwt from "jsonwebtoken";
import { envConfig } from "../config/env.js";

import tokenBlacklistModel from "../models/tokenBlacklist.model.js";

async function authUser(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Token is not provided.",
    });
  }

  const isTokenBlacklisted = await tokenBlacklistModel.findOne({ token });

  if (isTokenBlacklisted) {
    return res.status(401).json({
      message: "Invalid Token",   // Token has been blacklisted
    });
  }

  try {
    const decoded = jwt.verify(token, envConfig.JWT_SECRET);

    req.user = decoded;

    next();

  } catch (err) {
    return res.status(401).json({
      message: "Invalid token"
    });
  }
}

export default authUser;
