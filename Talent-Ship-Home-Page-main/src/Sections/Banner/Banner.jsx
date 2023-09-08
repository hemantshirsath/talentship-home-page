import "./Banner.css";
import logo from "../../assets/logo.jpeg";
import wave from "../../assets/BannerWaveBg1.png";
import bannerImage from "../../assets/banner-1.png";
import { HiCheckCircle } from "react-icons/hi";

const Banner = () => {
  return (
    <div>
      <div className="banner-wrapper">
        <div>
          <img src={wave} className="banner-background-wave" alt="" />
          <div className="banner-content mb-5 pb-md-5">
            <div className="d-flex align-items-center justify-content-center mb-5">
              <img src={logo} alt="" className="logo-banner" />
              <h1 className="mb-2 brand-name text-start fw-bold">
                Talentship Global <br /> Advisory Forum
              </h1>
            </div>
            <div className="d-flex align-items-center justify-content-center ms-4">
              <div>
                <p className="text-start banner-text">
                  {" "}
                  <HiCheckCircle />{" "}
                  <span className="ms-2">
                    Start improving your start up without thinking about
                    funding.
                  </span>
                </p>
                <p className="text-start banner-text">
                  {" "}
                  <HiCheckCircle />{" "}
                  <span className="ms-2">
                    We are best in improving customer satisfaction and revenue.
                  </span>
                </p>
                <p className="text-start banner-text">
                  {" "}
                  <HiCheckCircle />{" "}
                  <span className="ms-2">
                    Let us help you to achieve your technological and goals.
                  </span>
                </p>
              </div>
            </div>
            <a href="">
              <button className="button mt-lg-5 mt-2">Learn More</button>
            </a>
          </div>

          <img className="banner-image" src={bannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
