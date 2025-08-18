
// src/App.jsx
import React from "react";
import "./styles/main.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import PiIntegration from "./components/PiIntegration";
import Tokenomics from "./components/Tokenomics";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <PiIntegration />
      <Tokenomics />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;
