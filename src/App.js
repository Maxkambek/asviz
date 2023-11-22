import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Rights from "./pages/Rights";
import Servis from "./pages/Servis";
import Navbar from "./components/Navbar";
import Social from "./components/Social";
import Sertif1 from "./components/Sertif1";
import Sertif2 from "./components/Sertif2";
import Sertif3 from "./components/Sertif3";
import Sertif4 from "./components/Sertif4";
import Sertif5 from "./components/Sertif5";
import Price from "./components/Price";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Social />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Price" element={<Price />} />
          <Route path="/About" element={<About />} />
          <Route path="/Servis" element={<Servis />} />
          <Route path="/Rights" element={<Rights />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Sertif1" element={<Sertif1 />} />
          <Route path="/Sertif2" element={<Sertif2 />} />
          <Route path="/Sertif3" element={<Sertif3 />} />
          <Route path="/Sertif4" element={<Sertif4 />} />
          <Route path="/Sertif5" element={<Sertif5 />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
