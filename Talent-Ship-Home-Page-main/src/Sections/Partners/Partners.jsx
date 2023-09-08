import React from "react";
import "./partners.css"; // Updated CSS file name

const Partner = () => {
  const partnerLogos = [
    "src/assets/logo1.png",
    "src/assets/logo2.png",
    "src/assets/logo3.png",
    "src/assets/logo4.png",
    "src/assets/logo5.png",
    "src/assets/logo6.png",
    // Add more logos as needed
  ];

  const backgroundImageUrl = "src/assets/map.png";
  const bigTextBackgroundUrl = "src/assets/bannerimg.jpg";

  return (
    <>
      <div className="partner-container">
        <div className="left-container">
          <div className="container">
            <div className="text">100</div>
            <div className="subtext">Partners Worldwide</div>
          </div>
        </div>
        <div className="right-container">
          <div className="partners-section">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {partnerLogos.map((logo, index) => (
                <div
                  key={index}
                  className="partner-logo-container bg-white rounded-md p-2 shadow-md overflow-hidden"
                >
                  <div className="marquee">
                    <img src={logo} alt={`Partner ${index + 1}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
