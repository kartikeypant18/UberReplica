import React from "react";
import SectionCard from "./SectionCard";
import driveImage from "../assets/Drive-with-Uber.webp";

const DriveSection = () => {
  return (
    <SectionCard
      image={driveImage}
      title="Drive when you want, make what you need"
      text="Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber."
      buttonText="Get started"
      linkText="Already have an account? Sign in"
    />
  );
};

export default DriveSection;
