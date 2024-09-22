import HomeHeroSection from "./webApp/Components/HomeHeroSection";
import TechnologyStackNew from "./webApp/Components/TechnologyStackNew";

const Home = async () => {
  return (
    <main className="main_box_container">
      <HomeHeroSection />
      <TechnologyStackNew />
    </main>
  );
};

export default Home;
