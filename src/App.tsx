import React from "react";
import "./App.scss";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { ACookieForEveryOccasion } from "./components/ACookieForEveryOccasion/ACookieForEveryOccasion";

/* Components */
import { NavBar } from "./components/NavBar/NavBar";
import { OurProducts } from "./components/OurProducts/OurProducts";
import { TopScreen } from "./components/TopScreen/TopScreen";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <TopScreen />
      <OurProducts />
      <ACookieForEveryOccasion />
      <AboutUs />
    </div>
  );
};

export default App;
