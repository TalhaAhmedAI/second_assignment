import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact";
import Terms from "./pages/terms";
import Home from "./pages/home";
import Ratings from "./pages/ratings";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/ratings/:id" element={<Ratings />} />
      </Routes>
    </Router>
  );
};

export default Routing;
