import "./Footer.css";
import logo from "../../assets/logo.jpeg";
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Top footer */}
      <div className="top-footer-bg">
        <div className="container">
          <div className="row justify-content-between text-white">
            {/* text-1 */}
            <div className="col col-12 col-md-5 text-center">
              <div className="d-flex align-items-center justify-content-center height-col">
                <div>
                  <h1 className="top-footer-text">
                    Let&apos;s Work to Boost Your Revenue.
                  </h1>
                  <button className="button-outline">Contact</button>
                </div>
              </div>
            </div>
            {/* text-2 */}
            <div className="col col-12 col-md-5 text-center">
              <div className="d-flex align-items-center justify-content-center height-col">
                <div>
                  <h1 className="top-footer-text">
                    Plan Strategically for Your Business.
                  </h1>
                  <button className="button-outline">Let&apos;s Talk</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Footer */}
      <div className="bg-black p-4 mdp-5 footer-bg">
        <div className="container">
          {/* Footer row */}
          <div className="row justify-content-md-center text-white">
            {/* col -1 */}
            <div className="col col-12 col-md-6 col-lg-4 mb-5 mb-md-0">
              {/* logo */}
              <div className="d-flex align-items-center justify-content-start">
                <img className="logo-Size me-2" src={logo} alt="" />
                <p className="companyName">
                  <span className="first-name">Talentship Global</span> <br />{" "}
                  <span className="last-name">Advisory Forum</span>
                </p>
              </div>
              <hr className="Horizontal-line mb-4 mt-3" />
              {/* Logo description */}
              <p className="mb-4 me-2 footer-secondary-text">
              At Talentship Global Advisory Forum, we believe in harnessing unique talents and untapped potential for the greater good.
              </p>
              {/* Logo Social medias */}
              <BiLogoFacebook className="footer-social-logo" />
              <FaInstagram className="footer-social-logo" />
              <BiLogoTwitter className="footer-social-logo" />
              <BiLogoLinkedin className="footer-social-logo" />
            </div>

            {/* col - 2 */}
            <div className="col col-12 col-md-6 col-lg-2 mb-5 mb-md-0">
              <h2 className="footer-header-text">Our Company</h2>
              <div className="footer-secondary-text">
                <p>Compnay Profile</p>
                <p>Career</p>
                <p>Plans & Pricing </p>
                <p>Help Center </p>
                <p>Contact</p>
              </div>
            </div>
            {/* col - 3 */}
            <div className="col col-12 col-md-6 col-lg-2 mb-5 mb-md-0">
              <h2 className="footer-header-text">Our Services</h2>
              <div className="footer-secondary-text">
                <p> Manage investment</p>
                <p>Business planning</p>
                <p>Financial advices </p>
                <p>Tax strategy </p>
                <p>Insurance strategy</p>
              </div>
            </div>
            {/* col - 4 */}
            <div className="col col-12 col-md-6 col-lg-4 mb-5 mb-md-0">
              <h2 className="footer-header-text">Newsletter</h2>
              <p className="footer-secondary-text">
                Join our subscribers list to get the latest news and special
                offers.
              </p>
              <div className="mt-5">
                <input
                  className="footer-input text-white mb-5"
                  type="email"
                  placeholder="Your Email"
                />
                <button className="button-outline mx-md-4">Submit</button>
              </div>
            </div>
          </div>
          {/* Bottom footer */}
          <div className="text-white">
            <hr className="Horizontal-line mb-5 mt-5" />
            <p className="text-center">
              © Copyright – Talentship Global Advisory Forum 2023. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
