import React from "react";
import "./App.scss";

/* Components */
import { AboutUs } from "./components/AboutUs/AboutUs";
import { ACookieForEveryOccasion } from "./components/ACookieForEveryOccasion/ACookieForEveryOccasion";
import { ContactUs } from "./components/ContactUs/ContactUs";
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
      <ContactUs />
    </div>
  );
};

export default App;
