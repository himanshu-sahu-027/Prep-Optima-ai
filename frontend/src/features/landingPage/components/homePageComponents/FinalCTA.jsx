import { useNavigate } from "react-router";

export default function FinalCTA() {
  const navigate = useNavigate();

  return (
    <section className="home-cta">
      <div className="home-cta__inner">
        <h2 className="home-cta__heading">
          Your Next Interview Deserves
          <br />
          <span className="home-cta__heading--gradient">a Better Strategy</span>
        </h2>
        <button
          className="home-cta__btn"
          onClick={() => navigate("/generate-interview-strategy")}
        >
          Create My Interview Plan
        </button>
      </div>
    </section>
  );
}
