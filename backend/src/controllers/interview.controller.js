import { PDFParse } from "pdf-parse";
import { generateInterviewReport, generateResumePdf } from "../services/ai.service.js";
import interviewReportModel from "../models/interviewReport.model.js";

/**
 * @name generateInterviewReportController
 * @description Generate an interview report for a candidate based on their resume pdf, self-description, and job description.
 * @route POST /api/interview
 * @access Private
 */
async function generateInterviewReportController(req, res) {
    const resumeFile = req.file;

    if (!resumeFile) {
        return res.status(400).json({
            message: "Please upload a resume PDF file."
        });
    }

    const pdfDoc = await PDFParse(Uint8Array.from(req.file.buffer));
    const resumeContent = await pdfDoc.getText();

    const { selfDescription, jobDescription } = req.body;

    const interviewReportByAi = await generateInterviewReport({
        resume: resumeContent.text,
        selfDescription,
        jobDescription
    });

    const interviewReport = await interviewReportModel.create({
        user: req.user.id,
        resume: resumeContent.text,
        selfDescription,
        jobDescription,
        ...interviewReportByAi
    });

    res.status(201).json({
        message: "Interview report generated successfully",
        interviewReport
    });

}




export {
    generateInterviewReportController
}
