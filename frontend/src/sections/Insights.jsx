import PlaneAnimation from "../components/PlaneAnimation";

const Insights = () => {
  return (
    <section
      id="insights"
      className="py-20 bg-white"
    >
      <div data-aos="fade-up" className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Aviation Insights at a Glance
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl">
            Patterns observed from historical flight and route data help
            understand why delays happen — even before making a prediction.
          </p>

          <div className="mt-8 space-y-4">
            <div data-aos="fade-right" className="p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-800">
                Evening flights tend to face higher delay frequency compared to
                early morning departures.
              </p>
            </div>

            <div data-aos="fade-right" className="p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-800">
                Monsoon months historically increase delay probability on busy
                domestic routes.
              </p>
            </div>

            <div data-aos="fade-right" className="p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-800">
                High-traffic metro routes experience congestion spillovers
                during peak travel hours.
              </p>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center">
        <PlaneAnimation />
        </div>
      </div>
    </section>
  );
};

export default Insights;
