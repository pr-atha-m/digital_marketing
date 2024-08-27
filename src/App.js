// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import FollowUs from "./components/FollowUs";
import Footer from "./components/Footer";
import "./App.css";

const App = () => (
  <div className="App">
    <Navbar />
    <div className="content">
      <Home />
      <About />
      <Services />
      <Contact />
      <FollowUs />
    </div>
  </div>
);

export default App;
