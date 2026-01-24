import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useEffect, useRef} from 'react';
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Predict from "./pages/Predict.jsx";
import Feedback from "./pages/Feedback.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  const audioRef = useRef(null);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    audioRef.current = new Audio("/chime.mp3");
    audioRef.current.volume = 0.9;
  }, []);

  useEffect(() => {
    const playOnce = () => {
      if (!hasPlayedRef.current && audioRef.current) {
        audioRef.current.play().catch(() => {});
        hasPlayedRef.current = true;

        window.removeEventListener("click", playOnce);
        window.removeEventListener("scroll", playOnce);
      }
    };

    window.addEventListener("click", playOnce);
    window.addEventListener("scroll", playOnce);

    return () => {
      window.removeEventListener("click", playOnce);
      window.removeEventListener("scroll", playOnce);
    };
  }, []);

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

