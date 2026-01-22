import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const scrollToInsights = () => {
    document.getElementById("insights")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-50 to-white"
    >
      <div className="max-w-3xl px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Know Your Flight’s Delay Risk
          <br />
          <span className="text-sky-600">Before You Fly</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Data-backed delay insights for Indian domestic flights, built around
          real aviation trends — not guesswork.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => navigate("/predict")}
            className="px-6 py-3 bg-sky-600 text-white rounded-md font-medium hover:bg-sky-700 transition"
          >
            Predict Delay
          </button>

          <button
            onClick={scrollToInsights}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-100 transition"
          >
            Explore Insights
          </button>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
  <div>
    <p className="text-2xl font-semibold text-orange-500">5,000+</p>
    <p className="text-sm text-gray-500">Flights analyzed</p>
  </div>

  <div>
    <p className="text-2xl font-semibold text-blue-600">~65%</p>
    <p className="text-sm text-gray-500">Baseline prediction accuracy</p>
  </div>

  <div>
    <p className="text-2xl font-semibold text-green-600">India-focused</p>
    <p className="text-sm text-gray-500">Domestic route coverage</p>
  </div>
</div>

      </div>
    </section>
  );
};

export default Hero;

