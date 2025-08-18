// src/App.jsx
import React, { Suspense, lazy } from "react";
import "./styles/main.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";

// Lazy loading للمكونات الكبيرة
const PiIntegration = lazy(() => import("./components/PiIntegration"));
const Tokenomics = lazy(() => import("./components/Tokenomics"));
const Roadmap = lazy(() => import("./components/Roadmap"));

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Hero />

        <section className="section-wrapper">
          <About />
        </section>

        <Suspense fallback={<div className="loading">Loading Nawah Sections...</div>}>
          <section className="section-wrapper">
            <PiIntegration />
          </section>

          <section className="section-wrapper">
            <Tokenomics />
          </section>

          <section className="section-wrapper">
            <Roadmap />
          </section>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
