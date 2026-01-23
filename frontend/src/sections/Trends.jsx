import { useEffect, useState } from "react";

const AIRPORTS = [
  { city: "Delhi", code: "DEL" },
  { city: "Mumbai", code: "BOM" },
  { city: "Bengaluru", code: "BLR" },
  { city: "Hyderabad", code: "HYD" },
  { city: "Kolkata", code: "CCU" },
  { city: "Bhubaneswar", code: "BBI" },
];

const getDelayRisk = (condition) => {
  if (!condition) return "Unknown";

  const c = condition.toLowerCase();
  if (c.includes("rain") || c.includes("storm")) return "High";
  if (c.includes("fog") || c.includes("mist")) return "Moderate";
  return "Low";
};

const Trends = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const results = await Promise.all(
          AIRPORTS.map(async (airport) => {
            const res = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${airport.city}&units=metric&appid=${
                import.meta.env.VITE_WEATHER_API_KEY
              }`
            );
            const data = await res.json();

            return {
                ...airport,
                condition: data.weather?.[0]?.main,
                icon: data.weather?.[0]?.icon,
                risk: getDelayRisk(data.weather?.[0]?.main),
            };
          })
        );
        setWeatherData(results);
      } catch (err) {
        console.error("Weather fetch failed", err);
      }
    };

    fetchWeather();
  }, []);

  return (
    <section id="trends" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HISTORICAL TRENDS (UNCHANGED) */}
        <h2 className="text-3xl font-bold text-gray-900">
          Historical Flight Trends
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl">
          Analyzing historical flight patterns helps identify consistent delay
          trends across time, season, and route categories.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg border">
            <h3 className="font-semibold text-gray-800">Time of Day</h3>
            <p className="mt-2 text-sm text-gray-600">
              Early morning departures generally experience fewer delays
              compared to late evening flights.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg border">
            <h3 className="font-semibold text-gray-800">Seasonal Impact</h3>
            <p className="mt-2 text-sm text-gray-600">
              Monsoon conditions historically increase delay probability,
              especially at major hub airports.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg border">
            <h3 className="font-semibold text-gray-800">Route Congestion</h3>
            <p className="mt-2 text-sm text-gray-600">
              High-traffic metro routes tend to accumulate delays as the day
              progresses.
            </p>
          </div>
        </div>

        <h3 className="mt-20 text-2xl font-bold text-gray-900">
          Current Weather Impact
        </h3>

        <p className="mt-3 text-gray-600 max-w-2xl">
          Live weather conditions across major Indian airports and their
          potential impact on flight delays.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {weatherData.map((item) => (
            <div
              key={item.code}
              className="p-6 bg-white rounded-lg border flex flex-col gap-2"
            >
              <h4 className="font-semibold text-gray-800">
                {item.city} ({item.code})
              </h4>

              <p className="text-sm text-gray-600">
                Weather:{" "}
                <span className="font-medium">
                  {item.condition || "Unavailable"}
                </span>
              </p>

              <span
  className={`inline-flex items-center gap-2 w-fit px-3 py-1 text-xs rounded-full font-medium ${
    item.risk === "High"
      ? "bg-red-100 text-red-700"
      : item.risk === "Moderate"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-green-100 text-green-700"
  }`}
>
  <span className="relative flex h-2 w-2">
    <span
      className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
        item.risk === "High"
          ? "bg-red-400"
          : item.risk === "Moderate"
          ? "bg-yellow-400"
          : "bg-green-400"
      }`}
    ></span>
    <span
      className={`relative inline-flex rounded-full h-2 w-2 ${
        item.risk === "High"
          ? "bg-red-500"
          : item.risk === "Moderate"
          ? "bg-yellow-500"
          : "bg-green-500"
      }`}
    ></span>
  </span>

  {item.risk} delay risk
</span>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Trends;

