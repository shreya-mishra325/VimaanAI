import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navbtn = "px-2.5 py-2 rounded-md text-gray-600 text-sm font-medium \
  transition-all duration-200 ease-in-out \
  hover:text-sky-700 hover:bg-sky-50 hover:-translate-y-0.5";

  const handleNav = (path) => {
    navigate(path);
    setOpen(false);
  };

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <div
          className="text-lg font-bold cursor-pointer"
          onClick={() => handleNav("/")}
        >
          VimaanAI ✈️
        </div>

        <div className="hidden md:flex space-x-3">
          <button className={navbtn} onClick={() => handleScroll("home")}>
            Home
          </button>
          <button className={navbtn} onClick={() => handleScroll("insights")}>
            Insights
          </button>
          <button className={navbtn} onClick={() => handleScroll("trends")}>
            Trends
          </button>
          <button className={navbtn} onClick={() => handleNav("/predict")}>
            Predict
          </button>
          <button className={navbtn} onClick={() => handleScroll("contact")}>
            Contact
          </button>
        </div>

        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

  <div
    className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
    open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
    }`}
    onClick={() => setOpen(false)}
  />


  <div
    className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
    open ? "translate-x-0" : "translate-x-full"
    }`}
  >
  <div className="h-16 px-6 flex items-center justify-between border-b">
    <span className="font-semibold text-gray-800">Menu</span>
    <button onClick={() => setOpen(false)} className="p-2 rounded-md hover:bg-gray-100 transition">
      ✕
    </button>
  </div>

  <div className="px-6 py-6 flex flex-col space-y-2">
  <button className={`${navbtn} w-full text-left`} onClick={() => handleScroll("home")}>
    Home
  </button>

  <button className={`${navbtn} w-full text-left`} onClick={() => handleScroll("insights")}>
    Insights
  </button>

  <button className={`${navbtn} w-full text-left`} onClick={() => handleScroll("trends")}>
    Trends
  </button>

  <button className={`${navbtn} w-full text-left`} onClick={() => handleNav("/predict")}>
    Predict
  </button>

  <button className={`${navbtn} w-full text-left`} onClick={() => handleScroll("contact")}>
    Contact
  </button>
  </div>
  </div>
</nav>
  );
};

export default Navbar;
