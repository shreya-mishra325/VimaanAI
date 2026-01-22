import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";

function Home() {
  return (
    <div className="pt-20">
      <div id="home" className="h-screen p-10 bg-gray-50">
        Home Section
      </div>
      <div id="insights" className="h-screen p-10 bg-gray-100">
        Insights Section
      </div>
    </div>
  );
}

function Predict() {
  return <div className="pt-20 p-10">Predict Page</div>;
}

function Feedback() {
  return <div className="pt-20 p-10">Feedback Page</div>;
}


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Hero/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

