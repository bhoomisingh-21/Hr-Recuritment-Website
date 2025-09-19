import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./HeroSection";
import WhoWeAre from "./WhoWeAre";
import About from "./About";
import Benefits from "./Benefits";
import Contacts from "./Contacts";
import Footer from "./Footer";
import Thankyou from "./Thankyou";

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
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
    </Router>
  );
}

export default App;
