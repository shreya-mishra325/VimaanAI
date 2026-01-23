import Hero from "../sections/Hero.jsx";
import Insights from "../sections/Insights.jsx";
import Trends from "../sections/Trends.jsx";
import CTA from "../sections/CTA.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <Insights />
      <Trends />
      <CTA/>
      {/* Trends, CTA, Footer will come here later */}
    </div>
  );
};

export default Home;