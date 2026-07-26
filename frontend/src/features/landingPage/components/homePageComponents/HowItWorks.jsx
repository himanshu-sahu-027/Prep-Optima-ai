const steps = [
  {
    number: "01",
    title: "Add Job Description",
    description:
      "Paste the full job description of the role you are targeting to get started.",
    icon: (
      <span className="home-how-it-works__icon-box">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      </span>
    ),
  },

  {
    number: "02",
    title: "Add Profile",
    description:
      "Upload your resume or briefly describe your experience, key skills, and years of experience.",
    icon: (
      <span className="home-how-it-works__icon-box">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </span>
    ),
  },

  {
    number: "03",
    title: "Get Your Strategy",
    description:
      "Our AI analyzes your data and generates a comprehensive, personalized interview plan.",
    icon: (
      <>
        <span className="home-how-it-works__icon-box">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="7 17 17 7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </span>

        <span className="home-how-it-works__icon-box">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18h6" />
            <path d="M10 22h4" />
            <path d="M8.5 14.5A6 6 0 1 1 15.5 14.5C14.5 15.3 14 16 14 18h-4c0-2-.5-2.7-1.5-3.5z" />
          </svg>
        </span>
      </>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="home-how-it-works" id="how-it-works">
      <div className="home-how-it-works__inner">
        <h2 className="home-how-it-works__heading">How It Works</h2>

        <div className="home-how-it-works__cards">
          {steps.map((step) => (
            <div key={step.number} className="home-how-it-works__card">
              <div className="home-how-it-works__card-icon">{step.icon}</div>

              <h3 className="home-how-it-works__card-title">
                <span>{step.number}</span> {step.title}
              </h3>

              <p className="home-how-it-works__card-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
