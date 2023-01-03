import React from "react";
import "./App.scss";
import { AboutUs } from "./components/AboutUs/AboutUs";

/* Components */
import { NavBar } from "./components/NavBar/NavBar";
import { OurProducts } from "./components/OurProducts/OurProducts";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <OurProducts />
      <AboutUs />
    </div>
  );
};

export default App;
