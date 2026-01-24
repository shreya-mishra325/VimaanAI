import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white">
      <div data-aos="fade-up" className="max-w-4xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl font-bold text-gray-900">
          Help Improve VimaanAI ✈️
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          VimaanAI is an evolving project focused on understanding flight delay
          patterns. Your feedback helps shape future improvements and features.
        </p>

        <div className="mt-10 flex justify-center">
          <button
            onClick={() => navigate("/feedback")}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-100 transition"
        >
            Share Feedback
          </button>
        </div>

      </div>
    </section>
  );
};

export default CTA;

