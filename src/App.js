import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Links from "./components/Links";
import BusjesHuren from "./extraPages/PersoonsBusjesHuren";
import VerhuisWagen from "./extraPages/VerhuisWagenHuren";
import VolkswagenWagen from "./extraPages/volkswagenBusjeHuren";
import VerhuisBusjes from "./extraPages/VerhuisBusjeHuren";
import BestelBusje from "./extraPages/BestelbusjeHuren";
import NegenPersoonsBusje from "./extraPages/NegenpersoonsBusjeProduct";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Persoons-busjes-huren" element={<BusjesHurenPage />} />
          <Route path="/Verhuis-wagen-huren" element={<VerhuisWagenPage />} />
          <Route path="/Volkswagen-busjes-huren" element={<VWHurenPage />} />
          <Route path="/Verhuis-busje-huren" element={<VerhuisBusjePage />} />
          <Route path="/Bestel-busje-huren" element={<BestelBusjePage />} />
          <Route
            path="/negen-persoons-busje"
            element={<NegenPersoonsBusjePage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <div>
      <Hero />
      <Newsletter />
      <Links />
      <Footer />
    </div>
  );
}

function BusjesHurenPage() {
  return (
    <div>
      <Navbar />
      <div className="pt-[100px]">
        <BusjesHuren />
      </div>
    </div>
  );
}

function VerhuisWagenPage() {
  return (
    <div>
      <Navbar />
      <div className="pt-[100px]">
        <VerhuisWagen />
      </div>
    </div>
  );
}

function VWHurenPage() {
  return (
    <div>
      <Navbar />
      <div className="pt-[100px]">
        <VolkswagenWagen />
      </div>
    </div>
  );
}

function VerhuisBusjePage() {
  return (
    <div>
      <Navbar />
      <div className="pt-[100px]">
        <VerhuisBusjes />
      </div>
    </div>
  );
}

function BestelBusjePage() {
  return (
    <div>
      <Navbar />
      <div className="pt-[100px]">
        <BestelBusje />
      </div>
    </div>
  );
}

function NegenPersoonsBusjePage() {
  return (
    <div>
      <Navbar />
      <div className="pt-[100px]">
        <NegenPersoonsBusje />
      </div>
    </div>
  );
}

export default App;
