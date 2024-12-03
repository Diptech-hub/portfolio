import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Project from "./components/Projects";
import Preloader from "./components/preLoader";
import { AnimatePresence } from "framer-motion";
import "./App.css";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasVisitedThisSession = sessionStorage.getItem(
      "hasVisitedThisSession"
    );

    if (!hasVisitedThisSession) {
      setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasVisitedThisSession", "true");
      }, 3000);
    } else {
      setLoading(false);
    }
  }, []);

  const location = useLocation();
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<Project />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
