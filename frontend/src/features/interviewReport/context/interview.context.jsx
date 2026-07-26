import { createContext,useState } from "react";


export const InterviewContext = createContext()

export const InterviewProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [report, setReport] = useState(null) // setting a single report 
    const [reports, setReports] = useState([]) // setting all the reports or list of reports of authenticated user 
    const [isGenerating, setIsGenerating] = useState(false) // separate state for AI generation loading

    return (
        <InterviewContext.Provider value={{ loading, setLoading, report, setReport, reports, setReports, isGenerating, setIsGenerating }}>
            {children}
        </InterviewContext.Provider>
    )
}
