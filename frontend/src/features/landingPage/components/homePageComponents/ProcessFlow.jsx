const steps = [
  {
    title: "Job Description + Resume",
    description: "Paste the job description and your profile",
    icon: (
      <svg
        width="38"
        height="24"
        viewBox="0 0 38 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Checklist */}
        <circle cx="3" cy="6" r="1.3" />
        <line x1="7" y1="6" x2="14" y2="6" />

        <circle cx="3" cy="12" r="1.3" />
        <line x1="7" y1="12" x2="14" y2="12" />

        <circle cx="3" cy="18" r="1.3" />
        <line x1="7" y1="18" x2="14" y2="18" />

        {/* Resume */}
        <path d="M23 2.5H31L35 6.5V21.5H23Z" />
        <polyline points="31 2.5 31 6.5 35 6.5" />

        <circle cx="29" cy="11" r="1.8" />
        <path d="M26 16c.8-1.5 1.8-2.2 3-2.2s2.2.7 3 2.2" />
      </svg>
    ),
  },

  {
    title: "AI Analysis",
    description: "Our AI analyzes and matches your profile",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Left half */}
        <path
          d="M12 5
             C11 3.2 9.5 2.5 8 3.2
             C6.6 3.8 6.2 5 6.5 6
             C4.8 6.3 4 7.6 4.2 9
             C4.3 10 4.9 10.8 5.8 11.3
             C4.8 12 4.5 13.3 5 14.5
             C5.5 15.7 6.5 16.2 7.5 16.2
             C7.2 17.7 8.2 19 9.6 19.3
             C10.8 19.5 12 18.7 12 17.5Z"
        />

        {/* Right half */}
        <path
          d="M12 5
             C13 3.2 14.5 2.5 16 3.2
             C17.4 3.8 17.8 5 17.5 6
             C19.2 6.3 20 7.6 19.8 9
             C19.7 10 19.1 10.8 18.2 11.3
             C19.2 12 19.5 13.3 19 14.5
             C18.5 15.7 17.5 16.2 16.5 16.2
             C16.8 17.7 15.8 19 14.4 19.3
             C13.2 19.5 12 18.7 12 17.5Z"
        />

        {/* Brain center */}
        <line x1="12" y1="5" x2="12" y2="17.5" />

        {/* Brain folds */}
        <path d="M8 7.5c1.5 0 2.5.8 2.5 2" />
        <path d="M7.5 12c1.5-.2 2.6.5 3 1.7" />

        <path d="M16 7.5c-1.5 0-2.5.8-2.5 2" />
        <path d="M16.5 12c-1.5-.2-2.6.5-3 1.7" />
      </svg>
    ),
  },

  {
    title: "Personalized Strategy",
    description: "Get a tailored interview preparation plan",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Strategy document */}
        <path d="M5 2h10l4 4v8" />
        <path d="M15 2v5h4" />
        <path d="M5 2v20h9" />

        <line x1="8" y1="10" x2="15" y2="10" />
        <line x1="8" y1="14" x2="13" y2="14" />

        {/* Small strategy/settings symbol */}
        <circle cx="17" cy="18" r="3" />
        <circle cx="17" cy="18" r="1" />

        <line x1="17" y1="13.5" x2="17" y2="15" />
        <line x1="17" y1="21" x2="17" y2="22.5" />
        <line x1="12.5" y1="18" x2="14" y2="18" />
        <line x1="20" y1="18" x2="21.5" y2="18" />
      </svg>
    ),
  },
];

export default function ProcessFlow() {
  return (
    <section className="home-process" id="process-flow">
      <div className="home-process__inner">
        <h2 className="home-process__heading">Process Flow</h2>
        <div className="home-process__flow">
          {steps.map((step, index) => (
            <div key={step.title} className="home-process__step">
              <div className="home-process__step-card">
                <div className="home-process__step-icon">{step.icon}</div>
                <h3 className="home-process__step-title">{step.title}</h3>
                <p className="home-process__step-desc">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="home-process__arrow">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
