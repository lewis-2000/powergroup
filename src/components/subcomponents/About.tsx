import React from "react";
import ImageSliderForegroundCenterTextHero from "../elements/ImageSliderForegroundCenterTextHero";

interface AboutProps {
  HeaderBgUrls: string[]; // Array of image URLs
  AboutDetails: string;
  AboutTitle: string;
  AboutSubtitle: string; // Optional subtitle for About Me content
}

const About: React.FC<AboutProps> = ({
  HeaderBgUrls,
  AboutDetails,
  AboutTitle,
  AboutSubtitle,
}) => {
  return (
    <div className="h-auto w-full">
      <ImageSliderForegroundCenterTextHero
        backgroundImages={HeaderBgUrls}
        title={AboutTitle}
        subtitle={AboutSubtitle}
      />

      {/* About Me Content */}
      <div className="bg-white py-12 md:py-20 px-6 md:px-12">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-6">
          About Me
        </h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed">
            {AboutDetails}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
