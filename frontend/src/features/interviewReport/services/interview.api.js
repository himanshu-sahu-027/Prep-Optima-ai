import api from "../../../config/axios";


/**
 * @description Service to generate interview report based on user self description, resume and job description.
 * @param { jobDescription, selfDescription, resumeFile } - Parameters for generating the interview report.
 * @returns {Promise<Object>} - A promise that resolves to the generated interview report.
 */
export const generateInterviewReport = async ({ jobDescription, selfDescription, resumeFile }) => {

    /*
        Why FormData is used here ? 
        
        FormData is used to handle file uploads in web applications. 
        In this case, the resumeFile is a file that needs to be sent to the server along with other text data (jobDescription and selfDescription). 
        FormData allows us to construct a set of key/value pairs representing form fields and their values, including files. 
        When we send this FormData object in an HTTP request, it is encoded as multipart/form-data, which is the standard way to upload files via HTTP. 
        This ensures that the server can correctly parse and handle the uploaded file along with the other form data.
    */
    const formData = new FormData()
    formData.append("jobDescription", jobDescription)
    formData.append("selfDescription", selfDescription)
    formData.append("resume", resumeFile)

    const response = await api.post("/api/interview/", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })

    return response.data

}


/**
 * @description Service to get interview report by interviewId.
 * @param { interviewId } - The ID of the interview report to fetch.
 * @returns {Promise<Object>} - A promise that resolves to the fetched interview report.
 */
export const getInterviewReportById = async (interviewId) => {
    const response = await api.get(`/api/interview/report/${interviewId}`)

    return response.data
}


/**
 * @description Service to get all interview reports of logged in user.
 * @returns {Promise<Array>} - A promise that resolves to an array of interview reports.
 */
export const getAllInterviewReports = async () => {
    const response = await api.get("/api/interview/")

    return response.data
}

