import { PDFParse } from "pdf-parse";
import { generateInterviewReport } from "../services/ai.service.js";
import interviewReportModel from "../models/interviewReport.model.js";

/**
 * @name generateInterviewReportController
 * @description Generate an interview report for a candidate based on their resume pdf, self-description, and job description.
 * @route POST /api/interview
 * @access Private
 */
async function generateInterviewReportController(req, res) {

    try {

        const resumeFile = req.file;

        if (!resumeFile) {
            return res.status(400).json({
                message: "Please upload a resume PDF file."
            });
        }


        // Extract text from resume PDF
        const pdfDoc = await new PDFParse(
            Uint8Array.from(resumeFile.buffer)
        );

        const resumeContent = await pdfDoc.getText();


        const { selfDescription, jobDescription } = req.body;


        // Generate interview report using AI
        // AI service will retry up to 4 times if Gemini returns 503
        const interviewReportByAi = await generateInterviewReport({
            resume: resumeContent.text,
            selfDescription,
            jobDescription
        });


        // Save generated report in database
        const interviewReport = await interviewReportModel.create({
            user: req.user.id,
            resume: resumeContent.text,
            selfDescription,
            jobDescription,
            ...interviewReportByAi
        });


        return res.status(201).json({
            message: "Interview report generated successfully",
            interviewReport
        });

    } catch (error) {

        // Gemini remained unavailable after all retry attempts
        if (error.statusCode === 503) {

            return res.status(503).json({
                message: "AI service is temporarily unavailable. Please try again shortly due to high demand."
            });
        }


        // Any other unexpected error
        console.error("Generate interview report error:", error);

        return res.status(500).json({
            message: "Failed to generate interview report."
        });
    }
}

/**
 * @name getInterviewReportByIdController
 * @description Get an interview report by its interviewId.
 * @route GET /api/interview/report/:interviewId
 * @access Private
 */

async function getInterviewReportByIdController (req, res) {

    const { interviewId } = req.params;

    const interviewReport = await interviewReportModel.findOne({ _id: interviewId, user: req.user.id });

    if(!interviewReport){
        return res.status(404).json({
            message: "Interview report not found."
        })
    }

    res.status(200).json({
        message : "Interview report fetched successfully.",
        interviewReport
    })


}

/**
 * @name getAllInterviewReportsController
 * @description Get all interview reports for the authenticated user ( logged in user ).
 * @route GET /api/interview
 * @access Private
 */
async function getAllInterviewReportsController(req, res) {
    const interviewReports = await interviewReportModel.find({ user: req.user.id }).sort({ createdAt: -1 }).select("-resume -selfDescription -jobDescription -__v -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan")

    res.status(200).json({
        message: "Interview reports fetched successfully.",
        interviewReports
    })
}




export {
    generateInterviewReportController,
    getInterviewReportByIdController,
    getAllInterviewReportsController,

}
