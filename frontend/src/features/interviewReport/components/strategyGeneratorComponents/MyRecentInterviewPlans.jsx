import React from "react";

function MyRecentInterviewPlans({ reports, onSelectReport }) {
  if (reports.length === 0) return null;

  return (
    <section className="recent-reports">
      <h2>My Recent Interview Plans</h2>
      <ul className="reports-list">
        {reports.map((report) => (
          <li
            key={report._id}
            className="report-item"
            onClick={() => onSelectReport(report._id)}
          >
            <h3>{report.title || "Untitled Position"}</h3>
            <p className="report-meta">
              Generated on {new Date(report.createdAt).toLocaleDateString()}
            </p>
            <p
              className={`match-score ${report.matchScore >= 80 ? "score--high" : report.matchScore >= 60 ? "score--mid" : "score--low"}`}
            >
              Match Score: {report.matchScore}%
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MyRecentInterviewPlans;
