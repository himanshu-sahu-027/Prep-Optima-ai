const sections = [
  {
    label: "Technical Questions",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
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
    ),
    active: true,
  },
  {
    label: "Behavioral Questions",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    active: false,
  },
  {
    label: "Road Map",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="3 11 22 2 13 21 11 13 3 11" />
      </svg>
    ),
    active: false,
  },
];

const questions = [
  {
    id: 1,
    title:
      "Explain how you would optimize the performance of a React application that fetches and displays a large list of food items.",
  },
  {
    id: 2,
    title:
      "What are some common cross-browser compatibility issues you have faced, and how does Tailwind CSS help in resolving them?",
  },
];

const skillGaps = [
  {
    label: "TypeScript",
    severity: "medium",
  },
  {
    label: "Frontend Testing (Jest / React Testing Library)",
    severity: "medium",
  },
  {
    label: "Advanced State Management (Redux/Redux Toolkit)",
    severity: "low",
  },
];

const severityGuide = [
  {
    label: "High",
    description: "Essential for this role",
    severity: "high",
  },
  {
    label: "Medium",
    description: "Recommended",
    severity: "medium",
  },
  {
    label: "Low",
    description: "Nice to have",
    severity: "low",
  },
];

export default function ProductPreview() {
  return (
    <section className="home-preview">
      <div className="home-preview__inner">
        {/* Left Navigation */}
        <aside className="home-preview__nav">
          <span className="home-preview__nav-heading">SECTIONS</span>

          <div className="home-preview__nav-list">
            {sections.map((section) => (
              <button
                key={section.label}
                className={`home-preview__nav-item ${
                  section.active ? "home-preview__nav-item--active" : ""
                }`}
              >
                <span className="home-preview__nav-icon">{section.icon}</span>

                <span>{section.label}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* Questions */}
        <main className="home-preview__questions">
          <div className="home-preview__questions-header">
            <h3>Technical Questions</h3>

            <span className="home-preview__question-count">
              {questions.length} questions
            </span>
          </div>

          <div className="home-preview__header-line" />

          <div className="home-preview__questions-list">
            {questions.map((question) => (
              <div key={question.id} className="home-preview__question-card">
                <span className="home-preview__question-number">
                  Q{question.id}
                </span>

                <p className="home-preview__question-text">{question.title}</p>

                <span className="home-preview__question-chevron">{">"}</span>
              </div>
            ))}
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="home-preview__sidebar">
          {/* Match Score */}
          <div className="home-preview__score-section">
            <span className="home-preview__sidebar-heading">MATCH SCORE</span>

            <div className="home-preview__score-ring">
              <svg viewBox="0 0 120 120" className="home-preview__score-svg">
                <circle
                  cx="60"
                  cy="60"
                  r="48"
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="6"
                />

                <circle
                  cx="60"
                  cy="60"
                  r="48"
                  fill="none"
                  stroke="#3ecf68"
                  strokeWidth="6"
                  strokeDasharray={`${0.82 * 301.6} 301.6`}
                  strokeLinecap="round"
                  transform="rotate(-90 60 60)"
                />
              </svg>

              <div className="home-preview__score-value">
                <span className="home-preview__score-number">82</span>
                <span className="home-preview__score-percent">%</span>
              </div>
            </div>

            <p className="home-preview__score-message">
              Excellent match for this role
            </p>
          </div>

          <div className="home-preview__sidebar-divider" />

          {/* Skill Gaps */}
          <div className="home-preview__gaps-section">
            <span className="home-preview__sidebar-heading">SKILL GAPS</span>

            <div className="home-preview__gaps-list">
              {skillGaps.map((gap) => (
                <div
                  key={gap.label}
                  className={`home-preview__gap-item home-preview__gap-item--${gap.severity}`}
                >
                  {gap.label}
                </div>
              ))}
            </div>
          </div>

          <div className="home-preview__sidebar-divider" />

          {/* Severity Guide */}
          <div className="home-preview__severity">
            <span className="home-preview__sidebar-heading">
              SEVERITY GUIDE
            </span>

            <div className="home-preview__severity-list">
              {severityGuide.map((item) => (
                <div key={item.label} className="home-preview__severity-item">
                  <span
                    className={`home-preview__severity-dot home-preview__severity-dot--${item.severity}`}
                  />

                  <span>
                    <strong>{item.label}</strong>
                    {" • "}
                    {item.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
