import { 
    getAllInterviewReports, 
    generateInterviewReport, 
    getInterviewReportById
} from "../services/interview.api"

import { useContext, useEffect } from "react"

import { InterviewContext } from "../context/interview.context.jsx"

import { useParams } from "react-router"


export const useInterview = () => {

    const context = useContext(InterviewContext)
    const { interviewId } = useParams()

    if (!context) {
        throw new Error("useInterview must be used within an InterviewProvider")
    }

    const { loading, setLoading, report, setReport, reports, setReports, isGenerating, setIsGenerating } = context


    /**
     * @description Generates an interview report based on the provided job description, self description, and resume file.
     * @param { jobDescription, selfDescription, resumeFile } Parameters for generating the interview report.
     * @returns {Promise<Object>} - A promise that resolves to the generated interview report.
     */
    const generateReport = async ({ jobDescription, selfDescription, resumeFile }) => {
        
        setLoading(true)
        
        let response = null
        
        try {

            response = await generateInterviewReport({ jobDescription, selfDescription, resumeFile })
            setReport(response.interviewReport)
        
        } catch (error) {
        
            console.log(error)
        
        } finally {
        
            setLoading(false)
        
        }

        return response && response.interviewReport
    }

    /**
     * @description Get an interview report by its ID.
     * @param { string } interviewId - The ID of the interview report to fetch.
     * @returns {Promise<Object|null>} - A promise that resolves to the fetched interview report.
     */
    const getReportById = async (interviewId) => {
        
        setLoading(true)
        
        let response = null
        
        try {
        
            response = await getInterviewReportById(interviewId)
            if (response && response.interviewReport) {
                setReport(response.interviewReport)
            }
        
        } catch (error) {
        
            console.log(error)
        
        } finally {
        
            setLoading(false)
        
        }
        
        return response && response.interviewReport
    }

    /**
     * @description Get all interview reports for the current authenticated user.
     * @returns {Promise<Array>} - A promise that resolves to an array of interview reports.
     */
    const getReports = async () => {
        
        setLoading(true)
        
        let response = null
        
        try {
        
            response = await getAllInterviewReports()
            if (response && response.interviewReports) {
                setReports(response.interviewReports)
            }
        
        } catch (error) {
        
            console.log(error)
        
        } finally {
        
            setLoading(false)
        
        }

        return response && response.interviewReports
    }

    
    /**
     * @description Fetches the interview report by ID when the component mounts or when the interviewId changes. If no interviewId is provided, it fetches all reports.
     */
    useEffect(() => {
        if (interviewId) {
            getReportById(interviewId)
        } else {
            getReports()
        }
    }, [ interviewId ])

    return { loading, report, reports, generateReport, getReportById, getReports, isGenerating, setIsGenerating }

}
