import ChooseUs from "./webApp/Components/ChooseUs";
import Guideline from "./webApp/Components/Guideline";
import HomeHeroSection from "./webApp/Components/HomeHeroSection";
import TechnologyStackNew from "./webApp/Components/TechnologyStackNew";
import VideoCard from "./webApp/Components/VideoCard";

const Home = async () => {
  return (
    <main className="main_box_container">
      <HomeHeroSection />
      <TechnologyStackNew />
      <VideoCard />
      <ChooseUs />
      <Guideline />
    </main>
  );
};

export default Home;
