import React from "react";
import SectionCard from "./SectionCard";
import earImage from "../assets/Earn-with-Uber.webp";

const EarnSection = () => {
  return (
    <SectionCard
      image={earImage}
      title="Make money by renting out your car"
      text="Connect with thousands of drivers and 
      earn more per week with Uber’s free fleet management tools."
      buttonText="Get started"
    />
  );
};

export default EarnSection;
