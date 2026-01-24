import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useEffect} from 'react';
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Predict from "./pages/Predict.jsx";
import Feedback from "./pages/Feedback.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init({
      duration:1000,
      once: true
    })
  }, []);

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

