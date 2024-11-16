import CtaButton from "../components/cta-button";
import HomepageTitle from "../components/homepage-title";

const Homepage = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 to-yellow-50 to-90% space-y-6 flex-colum justify-center items-center h-screen flex flex-col">
      <HomepageTitle />
      <CtaButton />
    </div>
  );
};

export default Homepage;
