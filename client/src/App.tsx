import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Top from "./component/top";
import Navbar from "./component/navbar";

function App() {
  return (
    <section>
      <Top />
      <Navbar />
    </section>
  );
}

export default App;
