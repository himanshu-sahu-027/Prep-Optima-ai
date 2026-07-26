import React from "react";

function YourProfile({ resumeFile, setResumeFile, selfDescription, setSelfDescription }) {
  return (
    <div className="panel panel--right">
      <div className="panel__header">
        <span className="panel__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </span>
        <h2>Your Profile</h2>
      </div>

      {/* Upload Resume */}
      <div className="upload-section">
        <label className="section-label">
          Upload Resume
          <span className="badge badge--best">Best Results</span>
        </label>
        <label className="dropzone" htmlFor="resume">
          <span className="dropzone__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="16 16 12 12 8 16" />
              <line x1="12" y1="12" x2="12" y2="21" />
              <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
            </svg>
          </span>
          {resumeFile ? (
            <>
              <p className="dropzone__title">{resumeFile.name}</p>
              <p className="dropzone__subtitle">
                Resume selected successfully
              </p>
            </>
          ) : (
            <>
              <p className="dropzone__title">Click to upload</p>
              <p className="dropzone__subtitle">PDF or DOCX (Max 4MB)</p>
            </>
          )}
          <input
            hidden
            type="file"
            id="resume"
            name="resume"
            accept=".pdf,.docx"
            onChange={(e) => {
              setResumeFile(e.target.files[0]);
            }}
          />
        </label>
      </div>

      {/* OR Divider */}
      <div className="or-divider">
        <span>OR</span>
      </div>

      {/* Quick Self-Description */}
      <div className="self-description">
        <label className="section-label" htmlFor="selfDescription">
          Quick Self-Description
        </label>
        <textarea
          value={selfDescription}
          onChange={(e) => setSelfDescription(e.target.value)}
          id="selfDescription"
          name="selfDescription"
          className="panel__textarea panel__textarea--short"
          placeholder="Briefly describe your experience, key skills, and years of experience if you don't have a resume handy..."
        />
      </div>

      {/* Info Box */}
      <div className="info-box">
        <span className="info-box__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <circle cx="12" cy="12" r="10" />
            <line
              x1="12"
              y1="8"
              x2="12"
              y2="12"
              stroke="#1a1f27"
              strokeWidth="2"
            />
            <line
              x1="12"
              y1="16"
              x2="12.01"
              y2="16"
              stroke="#1a1f27"
              strokeWidth="2"
            />
          </svg>
        </span>
        <p>
          A <strong>Resume</strong> is required,{" "}
          <strong>Self Description</strong> is optional to generate a better personalized plan.
        </p>
      </div>
    </div>
  );
}

export default YourProfile;
