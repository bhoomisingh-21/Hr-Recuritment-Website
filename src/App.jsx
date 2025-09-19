import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./HeroSection";
import WhoWeAre from "./WhoWeAre";
import About from "./About";
import Benefits from "./Benefits";
import Contacts from "./Contacts";
import Footer from "./Footer";
import ThankYou from "./ThankYou"; // 👈 correct casing

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <WhoWeAre />
              <About />
              <Benefits />
              <Contacts />
              <Footer />
            </>
          }
        />
        {/* Thank You Page */}
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;
