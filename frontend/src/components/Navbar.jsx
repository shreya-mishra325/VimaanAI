import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <div className="text-xl font-bold cursor-pointer" onClick={() => navigate("/")}>
        VimaanAI ✈️
    </div>

    <div className="space-x-6 text-sm font-medium">
        <button onClick={() => handleScroll("home")}>Home</button>
        <button onClick={() => handleScroll("insights")}>Insights</button>
        <button onClick={() => handleScroll("insights")}>Trends</button>
        <button onClick={() => navigate("/predict")}>Predict</button>
        <button onClick={() => navigate("/feedback")}>Contact</button>
    </div>
    </div>
    </nav>
  );
};

export default Navbar;
