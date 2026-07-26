import { useNavigate } from "react-router";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="home-hero">
      <div className="home-hero__inner">
        <div className="home-hero__badge">AI-POWERED INTERVIEW PREPARATION</div>

        <h1 className="home-hero__heading">
          Turn Any Job Description Into
          <br />
          <span className="home-hero__heading--gradient">
            Your Interview Strategy
          </span>
        </h1>

        <p className="home-hero__description">
          Upload your resume or profile, paste a job description, and get a
          personalized interview preparation strategy tailored to your
          background and the role you want.
        </p>

        <div className="home-hero__actions">
          <button
            className="home-hero__btn home-hero__btn--primary"
            onClick={() => navigate("/generate-interview-strategy")}
          >
            Build My Interview Plan
          </button>
          <button
            className="home-hero__btn home-hero__btn--secondary"
            onClick={() => {
              document
                .querySelector("#how-it-works")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            See How It Works
          </button>
        </div>
      </div>
    </section>
  );
}
