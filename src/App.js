import React from "react";
import './App.css'
import "./styles/Colours.css"
import "./styles/font.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import AboutContinued from "./components/AboutContinued/AboutContinued";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";

function MainPage() {
  return (
    <>
      <Home />
      <About />
      <Experience />
      <Projects />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about-continued" element={<AboutContinued />} />
      </Routes>
    </Router>
  );
}

export default App;
