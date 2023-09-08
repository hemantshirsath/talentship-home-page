import react from "react";
import "./Partners.css";
const Partners = () => {
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
      <div className="partner">
        <div className="left">
          <div className="container">
            <div className="text">100</div>
            <div className="subtext">Partners In world wide</div>
          </div>
        </div>
        <div className="right">
          <div className="slider">
            <div className="slide-track mt-10">
              <div className="slide">
                <img
                  className="w-[140px] p-4"
                  src="src/assets/logo1.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  className="w-[140px] p-4"
                  src="src/assets/logo2.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  className="w-[140px] p-4"
                  src="src/assets/logo3.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  className="w-[140px] p-4"
                  src="src/assets/logo4.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  className="w-[140px] p-4"
                  src="src/assets/logo5.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  className="w-[140px] p-4"
                  src="src/assets/logo6.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Partners;
