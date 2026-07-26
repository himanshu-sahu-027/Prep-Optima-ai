import React from "react";
import "../styles/loading.scss";

function Loading() {
  return (
    <div className="loading-page">
      <div className="loading-card">
        <div className="loading-card__spinner">
          <div className="loading-card__spinner-outer"></div>
          <div className="loading-card__spinner-inner"></div>
        </div>
        <h1 className="loading-card__heading">
          Generating Your Interview Report
        </h1>
        <p className="loading-card__description">
          Our AI is analyzing your resume and the job description to build a
          personalized interview preparation strategy.
        </p>
        <p className="loading-card__footer-text">
          This usually takes less than 30 seconds.
        </p>
        <p className="loading-card__footer-text loading-card__footer-text--subtle">
          Please don't refresh or close this page.
        </p>
        <p className="loading-card__status">
          Preparing your personalized strategy...
        </p>
      </div>
    </div>
  );
}

export default Loading;
