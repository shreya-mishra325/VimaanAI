import Hero from "../sections/Hero.jsx";
import Insights from "../sections/Insights.jsx";
import Trends from "../sections/Trends.jsx";
import CTA from "../sections/CTA.jsx";
import Footer from "../sections/Footer.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <Insights />
      <Trends />
      <CTA/>
      <Footer/>
    </div>
  );
};

export default Home;