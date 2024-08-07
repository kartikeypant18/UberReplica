import React from "react";
import "./styles.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import DriveSection from "./components/DriveSection";
import Footer from "./components/Footer";
import BusinessSection from "./components/BusinessSection";
import EarnSection from "./components/EarnSection";
import QrComponent from "./components/QrComponent";

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <DriveSection />
      <BusinessSection />
      <EarnSection />
      <QrComponent />
      <Footer />
    </>
  );
};

export default App;
