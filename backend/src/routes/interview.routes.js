import express from "express";

// import controller
import { 
    generateInterviewReportController,
    getInterviewReportByIdController,
    getAllInterviewReportsController,
    

 } from "../controllers/interview.controller.js";

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

/**
 * @route GET /api/interview/report/:interviewId
 * @desc Get an interview report by its interviewId.
 * @access Private
 */
interviewRouter.get("/report/:interviewId", authUser, getInterviewReportByIdController);
 

/**
 * @route GET /api/interview
 * @desc Get all interview reports for the authenticated user ( logged in user ).
 * @access Private
 */
interviewRouter.get("/", authUser, getAllInterviewReportsController);

export default interviewRouter;