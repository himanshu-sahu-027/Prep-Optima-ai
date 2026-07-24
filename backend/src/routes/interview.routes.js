import express from "express";

// import controller
import { generateInterviewReportController } from "../controllers/interview.controller.js";

// import middlewares
import authUser from "../middlewares/auth.middleware.js";
import uploadPdf from "../middlewares/pdfFile.middleware.js";

const interviewRouter=express.Router();


/**
 * @route POST /api/interview
 * @desc Generate an interview report for a candidate based on their resume pdf, self-description, and job description.
 * @access Private
 */
interviewRouter.post("/", authUser, uploadPdf.single("resume")  , generateInterviewReportController);



export default interviewRouter;