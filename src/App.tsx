import React from "react";
import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./components/Home"
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./components/About";
import Project from "./components/Projects"
import "./App.css"

const App: React.FC = () => {
  const location = useLocation();
  return (
    <>
    <NavBar />
    <Routes location={location} key={location.pathname}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
    </Routes>
    <Footer />
    </>
  )

};

export default App;