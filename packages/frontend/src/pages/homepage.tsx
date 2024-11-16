import CtaButton from "../components/cta-button";
import HeroSection from "../components/hero-section";

const Homepage = () => {
  return (
    <div className="bg-neutral-100 space-y-6 flex-colum justify-center items-center h-screen flex flex-col">
      <HeroSection />
      <CtaButton />
    </div>
  );
};

export default Homepage;
