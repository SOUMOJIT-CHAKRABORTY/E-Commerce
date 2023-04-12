import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Top from "./component/top";
import Navbar from "./component/navbar";
import HeroSection from "./component/hero-section";

function App() {
  return (
    <section>
      <Top />
      <Navbar />
      <HeroSection />
    </section>
  );
}

export default App;
