export default function Features() {
  return (
    <section className="home-features" id="features">
      <div className="home-features__inner">
        <h2 className="home-features__heading">Features</h2>

        <div className="home-features__grid">
          {/* ================= MATCH SCORE ================= */}

          <div className="home-features__card home-features__card--score">
            <h3 className="home-features__card-title">Match Score</h3>

            <div className="home-features__score-ring">
              <svg viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="48"
                  className="home-features__score-track"
                />

                <circle
                  cx="60"
                  cy="60"
                  r="48"
                  className="home-features__score-progress"
                />
              </svg>

              <div className="home-features__score-value">
                <strong>82</strong>
                <span>%</span>
              </div>
            </div>

            <p className="home-features__score-message">
              Excellent match for this role
            </p>
            <p className="home-features__score-desc">
              See how closely your profile matches the skills and requirements
              of the role.
            </p>
          </div>

          {/* ================= INTERVIEW QUESTIONS ================= */}

          <div className="home-features__card home-features__card--questions">
            <div className="home-features__question-icons">
              <div className="home-features__question-icon home-features__question-icon--technical">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>

              <div className="home-features__question-icon home-features__question-icon--behavioral">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                </svg>
              </div>
            </div>

            <h3 className="home-features__card-title">Interview Questions</h3>

            <p className="home-features__card-desc">
              Practice personalized technical and behavioral questions tailored
              to the role and your profile.
            </p>
          </div>

          {/* ================= SKILL GAPS ================= */}

          <div className="home-features__card home-features__card--gaps">
            <div className="home-features__gaps-content">
              <div className="home-features__gaps-visual">
                <h3 className="home-features__card-title">Skill Gaps</h3>

                <span className="home-features__priority">PRIORITY</span>

                <div className="home-features__severity-list">
                  <div className="home-features__severity home-features__severity--high">
                    <span className="home-features__severity-dot" />
                    <strong>High</strong>
                    <span>• Essential for this role</span>
                  </div>

                  <div className="home-features__severity home-features__severity--medium">
                    <span className="home-features__severity-dot" />
                    <strong>Medium</strong>
                    <span>• Recommended</span>
                  </div>

                  <div className="home-features__severity home-features__severity--low">
                    <span className="home-features__severity-dot" />
                    <strong>Low</strong>
                    <span>• Nice to have</span>
                  </div>
                </div>
              </div>

              <p className="home-features__side-desc">
                Identify the skills you're missing and understand what to
                prioritize before your interview.
              </p>
            </div>
          </div>

          {/* ================= ROAD MAP ================= */}

          <div className="home-features__card home-features__card--roadmap">
            <div className="home-features__roadmap-content">
              <div className="home-features__roadmap-visual">
                <h3 className="home-features__card-title">Road Map</h3>

                <div className="home-features__timeline">
                  <div className="home-features__timeline-item">
                    <span className="home-features__timeline-dot" />
                    <span>Step 1</span>
                  </div>

                  <div className="home-features__timeline-item">
                    <span className="home-features__timeline-dot" />
                    <span>Technical Questions</span>
                  </div>

                  <div className="home-features__timeline-item">
                    <span className="home-features__timeline-dot" />
                    <span>Behavioral Questions</span>
                  </div>

                  <div className="home-features__timeline-item">
                    <span className="home-features__timeline-dot" />
                    <span>Final Preparation</span>
                  </div>
                </div>
              </div>

              <p className="home-features__side-desc">
                Follow a focused preparation path that turns your weak areas
                into clear, actionable steps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
