import React, { useState, useEffect } from "react";
import { useInterview } from "../hooks/useInterview.js";
import { useNavigate } from "react-router";

import TargetJobDescription from "../components/strategyGeneratorComponents/TargetJobDescription.jsx";
import YourProfile from "../components/strategyGeneratorComponents/YourProfile.jsx";
import MyRecentInterviewPlans from "../components/strategyGeneratorComponents/MyRecentInterviewPlans.jsx";

import "../styles/generateInterviewStrategy.scss";

function GenerateInterviewStrategy() {
  const { generateReport, reports, isGenerating, setIsGenerating } =
    useInterview();

  const [jobDescription, setJobDescription] = useState("");
  const [selfDescription, setSelfDescription] = useState("");
  const [resumeFile, setResumeFile] = useState(null);

  const [buttonClickable, setButtonClickable] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setButtonClickable(jobDescription.trim().length > 0 && resumeFile !== null);
  }, [jobDescription, resumeFile]);

  const handleGenerateReport = async () => {
    // Navigate to loading page immediately
    navigate("/loading");

    try {
      const data = await generateReport({
        jobDescription,
        selfDescription,
        resumeFile,
      });

      if (!data?._id) {
        console.error("Interview report generation failed");

        setIsGenerating(false);

        navigate("/generate-interview-strategy");

        return;
      }

      setIsGenerating(false);

      navigate(`/interview/${data._id}`);
    } catch (error) {
      console.error("Failed to generate interview report:", error);

      setIsGenerating(false);

      navigate("/generate-interview-strategy");
    }
  };

  return (
    <div className="generateInterviewStrategy-page">
      {/* Page Header */}
      <header className="page-header">
        <h1>
          Create Your Custom <span className="highlight">Interview Plan</span>
        </h1>
        <p>
          Let our AI analyze the job requirements and your unique profile to
          build a winning strategy.
        </p>
      </header>

      {/* Main Card */}
      <div className="interview-card">
        <div className="interview-card__body">
          {/* Left Panel - Job Description */}
          <TargetJobDescription
            jobDescription={jobDescription}
            setJobDescription={setJobDescription}
          />

          {/* Vertical Divider */}
          <div className="panel-divider" />

          {/* Right Panel - Profile */}
          <YourProfile
            resumeFile={resumeFile}
            setResumeFile={setResumeFile}
            selfDescription={selfDescription}
            setSelfDescription={setSelfDescription}
          />
        </div>

        {/* Card Footer */}
        <div className="interview-card__footer">
          <span className="footer-info">
            AI-Powered Strategy Generation &bull; Approx 30s
          </span>
          <button
            onClick={handleGenerateReport}
            className="button primary-button"
            disabled={!buttonClickable}
          >
            Generate My Interview Strategy
          </button>
        </div>
      </div>

      {/* Recent Reports List */}
      <MyRecentInterviewPlans
        reports={reports}
        onSelectReport={(id) => navigate(`/interview/${id}`)}
      />
    </div>
  );
}

export default GenerateInterviewStrategy;
