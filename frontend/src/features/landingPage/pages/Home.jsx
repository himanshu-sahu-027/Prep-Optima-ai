import Navbar from "../components/homePageComponents/Navbar";
import Hero from "../components/homePageComponents/Hero";
import ProductPreview from "../components/homePageComponents/ProductPreview";
import HowItWorks from "../components/homePageComponents/HowItWorks";
import Features from "../components/homePageComponents/Features";
import WhyPrepOptima from "../components/homePageComponents/WhyPrepOptima";
import ProcessFlow from "../components/homePageComponents/ProcessFlow";
import FinalCTA from "../components/homePageComponents/FinalCTA";
import Footer from "../components/homePageComponents/Footer";
import "../styles/home.scss";

export default function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <ProductPreview />
      <HowItWorks />
      <ProcessFlow />
      <Features />
      <WhyPrepOptima />
      <FinalCTA />
      <Footer />
    </div>
  );
}
