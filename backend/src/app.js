import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.set("trust proxy", 1);

app.use(express.json()); // Middleware to parse JSON requests
app.use(cookieParser());
app.use(cors({ origin: envConfig.FRONTEND_URL, credentials: true, }));

// import all the Routers
import authRouter from "./routes/auth.routes.js";
import interviewRouter from "./routes/interview.routes.js";

// using all the routers
app.use("/api/auth", authRouter);
app.use("/api/interview", interviewRouter);

export default app;
