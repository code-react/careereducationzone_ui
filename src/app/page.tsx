import TestimonialCarousel from "./webApp/Components/Carousel/Testimonial";
import ChooseUs from "./webApp/Components/ChooseUs";
import ContactForm from "./webApp/Components/ContactForm/ContactForm";
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
      {/* <TestimonialCarousel /> */}
      <ContactForm />
    </main>
  );
};

export default Home;
