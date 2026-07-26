import { envConfig } from "../config/env.js";

import { GoogleGenAI } from "@google/genai";
import { z } from "zod";


const ai = new GoogleGenAI({
    apiKey: envConfig.GOOGLE_GEMINI_API_KEY,
});

/**
 * @description zod schema for the interview report structure, including match score, technical and behavioral questions, skill gaps, preparation plan, and title.
 */
const interviewReportSchema = z.object({

    matchScore: z
        .number()
        .min(0)
        .max(100)
        .describe(
            "A score between 0 and 100 indicating how well the candidate's profile matches the job description"
        ),

    technicalQuestions: z.array(
        z.object({
            question: z.string(),
            intention: z.string(),
            answer: z.string(),
        })
    ),

    behavioralQuestions: z.array(
        z.object({
            question: z.string(),
            intention: z.string(),
            answer: z.string(),
        })
    ),

    skillGaps: z.array(
        z.object({
            skill: z.string(),
            severity: z.enum(["low", "medium", "high"]),
        })
    ),

    preparationPlan: z.array(
        z.object({
            day: z.number(),
            focus: z.string(),
            tasks: z.array(z.string()),
        })
    ),

    title: z.string(),
});


/**
 * @name generateContentWithRetry
 * @description Calls Gemini API and retries when the service is temporarily unavailable due to high demand.
 *
 * Maximum attempts: 4
 * Retry delays: 1s -> 2s -> 4s
 */
async function generateContentWithRetry(request, maxAttempts = 4) {

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {

        try {

            return await ai.models.generateContent(request);

        } catch (error) {

            const isServiceUnavailable =
                error?.status === 503 ||
                error?.code === 503 ||
                error?.status === "UNAVAILABLE" ||
                error?.message?.includes('"code":503') ||
                error?.message?.includes("high demand");

            // If the error is not related to temporary
            // Gemini unavailability, don't retry it.
            if (!isServiceUnavailable) {
                throw error;
            }

            // All 4 attempts have failed.
            if (attempt === maxAttempts) {

                const serviceError = new Error(
                    "AI service is temporarily unavailable. Please try again shortly due to high demand."
                );

                serviceError.statusCode = 503;

                throw serviceError;
            }

            // Exponential backoff:
            // attempt 1 -> 1 second
            // attempt 2 -> 2 seconds
            // attempt 3 -> 4 seconds
            const delay = 1000 * Math.pow(2, attempt - 1);

            console.log(
                `Gemini service unavailable. Attempt ${attempt}/${maxAttempts} failed. Retrying in ${delay / 1000}s...`
            );

            await new Promise((resolve) => {
                setTimeout(resolve, delay);
            });
        }
    }
}


/**
 * @name generateInterviewReport
 * @description Generates a personalized interview preparation report using the candidate's resume, self-description, and job description.
 */
async function generateInterviewReport({
    resume,
    selfDescription,
    jobDescription
}) {

    const prompt = `
                    You are an AI interview preparation assistant.

                    Generate a personalized interview preparation report.

                    Resume:
                    ${resume}

                    Self Description:
                    ${selfDescription}

                    Job Description:
                    ${jobDescription}

                    Generate technical interview questions, behavioral questions,
                    skill gaps, and a practical preparation plan based specifically
                    on the candidate and target job.
                    Follow the provided JSON response schema exactly.

                    IMPORTANT RULES:

                    1. title must contain ONLY the job title extracted from the job description.

                    Correct examples:
                    - Software Engineer (Frontend)
                    - Backend Developer
                    - Java Full Stack Developer
                    - React Developer

                    Incorrect examples:
                    - Interview Preparation Report for xyz
                    - Interview Report for Software Engineer
                    - xyz - Software Engineer (Frontend)
                    - Software Engineer (Frontend) Interview Preparation Report

                    The title field should ONLY contain the actual job title and nothing else.`;

    const jsonSchema = z.toJSONSchema(interviewReportSchema);


    const response = await generateContentWithRetry({

        model: "gemini-3.5-flash",

        contents: prompt,

        config: {
            responseMimeType: "application/json",
            responseJsonSchema: jsonSchema,
        }
    });


    const parsedResponse = JSON.parse(response.text);

    return interviewReportSchema.parse(parsedResponse);
}


export {
    generateInterviewReport
};