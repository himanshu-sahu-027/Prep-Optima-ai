const icons = {
  targetJob: (
    <svg
      className="the-idea__icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2" // lighter stroke
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      {/* Pencil extended slightly beyond doc */}
      <path d="M16 12l2 2l-6 6H10v-2z" />
      <line x1="8" y1="10" x2="12" y2="10" />
      <line x1="8" y1="14" x2="12" y2="14" />
      <line x1="8" y1="18" x2="12" y2="18" />
    </svg>
  ),

  profile: (
  <svg
    className="the-idea__icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"   // lighter stroke
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" y1="10" x2="16" y2="10" />
    <line x1="8" y1="14" x2="16" y2="14" />
    <line x1="8" y1="18" x2="16" y2="18" />
  </svg>
),


  gap: (
    <svg
      className="the-idea__icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <circle cx="12" cy="12" r="2" />
      <line x1="7.5" y1="7.5" x2="10.5" y2="10.5" />
      <line x1="16.5" y1="7.5" x2="13.5" y2="10.5" />
      <line x1="7.5" y1="16.5" x2="10.5" y2="13.5" />
      <line x1="16.5" y1="16.5" x2="13.5" y2="13.5" />
    </svg>
  ),

  strategy: (
    <svg
      className="the-idea__icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="9" y1="6" x2="21" y2="6" />
      <line x1="9" y1="12" x2="21" y2="12" />
      <line x1="9" y1="18" x2="21" y2="18" />
      <circle cx="4" cy="6" r="1" />
      <circle cx="4" cy="12" r="1" />
      <circle cx="4" cy="18" r="1" />
    </svg>
  ),
};

export default function TheIdea() {
  return (
    <section className="the-idea">
      <div className="the-idea__header">
        <span className="the-idea__badge">THE IDEA</span>

        <h2 className="the-idea__title">
          Treat Interview Preparation as a <span>Gap-Analysis</span> Problem
        </h2>
      </div>

      <div className="the-idea__flow">
        <div className="the-idea__card">
          {icons.targetJob}

          <h3>Target Job</h3>

          <p>(JD, Skills)</p>
        </div>

        <span className="the-idea__connector">+</span>

        <div className="the-idea__card">
          {icons.profile}

          <h3>Your Profile</h3>

          <p>(Resume, Exp)</p>
        </div>

        <span className="the-idea__connector">→</span>

        <div className="the-idea__card the-idea__card--gradient">
          {icons.gap}

          <h3>Analyze the Gap</h3>

          <p>(AI Analysis)</p>
        </div>

        <span className="the-idea__connector">→</span>

        <div className="the-idea__card">
          {icons.strategy}

          <h3>Personalized Strategy</h3>

          <p>(Questions, Score, Roadmap)</p>
        </div>
      </div>
    </section>
  );
}
