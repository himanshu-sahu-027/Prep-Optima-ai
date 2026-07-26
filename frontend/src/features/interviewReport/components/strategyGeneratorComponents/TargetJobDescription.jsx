import React from "react";

function TargetJobDescription({ jobDescription, setJobDescription }) {
  return (
    <div className="panel panel--left">
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
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        </span>
        <h2>Target Job Description</h2>
        <span className="badge badge--required">Required</span>
      </div>
      <textarea
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        className="panel__textarea"
        placeholder={`Paste the full job description here...\ne.g. 'Senior Frontend Engineer at Google requires proficiency in React, TypeScript, and large-scale system design...'`}
        maxLength={5000}
      />
      <div className="char-counter">
        {jobDescription.length} / 5000 chars
      </div>
    </div>
  );
}

export default TargetJobDescription;
