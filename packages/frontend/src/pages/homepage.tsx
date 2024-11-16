import CtaButton from "../components/cta-button";
import HeroSection from "../components/hero-section";

const Homepage = () => {
  return (
    <div className="bg-gradient-to-r from-neutral-400 from-10% via-neutral-150 via-30% to-neutral-50 to-90% space-y-6 flex-colum justify-center items-center h-screen flex flex-col">
      <HeroSection />
      <CtaButton />
    </div>
  );
};

export default Homepage;
