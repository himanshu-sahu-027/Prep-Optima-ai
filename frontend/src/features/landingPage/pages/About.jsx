import "../styles/about.scss";
import Navbar from "../components/homePageComponents/Navbar";
import Footer from "../components/homePageComponents/Footer";
import Hero from "../components/aboutPageComponents/Hero";
import TheIdea from "../components/aboutPageComponents/TheIdea";
import Mission from "../components/aboutPageComponents/Mission";

export default function About() {
  return (
    <div className="about-page">
      <Navbar />
      <main>
        <Hero />
        <TheIdea />
        <Mission />
      </main>
      <Footer />
    </div>
  );
}
