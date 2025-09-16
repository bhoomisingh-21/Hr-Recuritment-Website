import React from "react";
import HeroSection from "./HeroSection";
import WhoWeAre from "./WhoWeAre";
import About from "./About";
import Benefits from "./Benefits"
import Contacts from "./Contacts"
import Footer from "./Footer"
import './index.css';
import ThankYou from "./thankyou";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <WhoWeAre />
      <About />
      <Benefits />
      <Contacts />
      <ThankYou />
      <Footer />
    </div>
  );
}

export default App;
