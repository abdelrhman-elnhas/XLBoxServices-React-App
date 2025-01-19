import About from "@components/About";
import Carousel from "@components/Carousel";
import Categories from "@components/Categories";
import FAQs from "@components/FAQs";
import Hero from "@components/Hero";
import Video from "@components/Video";

const Home = () => {
  return (
    <>
      <Hero />
      <Carousel />
      <About />
      <Categories />
      <Video />
      <FAQs />
    </>
  );
};

export default Home;
