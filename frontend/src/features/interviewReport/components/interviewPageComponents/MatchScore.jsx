import React from "react";

const MatchScore = ({ matchScore, scoreColor }) => {
  let scoreMessage = "";

  if (matchScore >= 80) {
    scoreMessage = "Excellent match for this role";
  } else if (matchScore >= 65) {
    scoreMessage = "Strong match for this role";
  } else if (matchScore >= 50) {
    scoreMessage = "Moderate match for this role";
  } else if (matchScore >= 35) {
    scoreMessage = "Fair match for this role";
  } else {
    scoreMessage = "Low match for this role";
  }

  return (
    <div className="match-score">
      <p className="match-score__label">Match Score</p>

      <div
        className={`match-score__ring ${scoreColor}`}
        style={{ "--score": `${matchScore}%` }}
      >
        <div className="match-score__ring-inner">
          <span className="match-score__value">{matchScore}</span>
          <span className="match-score__pct">%</span>
        </div>
      </div>

      <p className={`match-score__sub ${scoreColor}`}>{scoreMessage}</p>
    </div>
  );
};

export default MatchScore;
