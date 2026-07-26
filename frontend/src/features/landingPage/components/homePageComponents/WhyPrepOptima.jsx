const comparisonData = {
  generic: {
    title: "Generic Preparation",
    points: [
      { text: "Generic question lists", supported: false },
      { text: "No profile context", supported: false },
      { text: "Unfocused study time", supported: false },
      { text: "One-size-fits-all approach", supported: false },
      { text: "No personalized feedback", supported: false },
    ],
  },
  prepOptima: {
    title: "PrepOptima-ai",
    points: [
      { text: "Personalized questions", supported: true },
      { text: "Tailored to your profile", supported: true },
      { text: "Efficient and targeted study", supported: true },
      { text: "Custom strategy for each role", supported: true },
      { text: "Actionable skill gap insights", supported: true },
    ],
  },
};

export default function WhyPrepOptima() {
  return (
    <section className="home-why" id="why-prepoptima">
      <div className="home-why__inner">
        <h2 className="home-why__heading">Why PrepOptima</h2>
        <p className="home-why__description">
          Stop preparing for every interview the same way.{" "}
          <span className="home-why__brand-name">PrepOptima-ai</span> turns your
          profile and target role into a focused preparation strategy.
        </p>
        <div className="home-why__comparison">
          <div className="home-why__column home-why__column--generic">
            <h3 className="home-why__column-title">
              {comparisonData.generic.title}
            </h3>
            <ul className="home-why__list">
              {comparisonData.generic.points.map((point) => (
                <li key={point.text} className="home-why__list-item">
                  <span className="home-why__icon home-why__icon--cross">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </span>
                  <span>{point.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="home-why__column home-why__column--prepoptima">
            <h3 className="home-why__column-title">
              {comparisonData.prepOptima.title}
            </h3>
            <ul className="home-why__list">
              {comparisonData.prepOptima.points.map((point) => (
                <li key={point.text} className="home-why__list-item">
                  <span className="home-why__icon home-why__icon--check">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>{point.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
