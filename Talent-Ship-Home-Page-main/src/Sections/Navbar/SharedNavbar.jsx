import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.jpeg";
import { NavLink } from "react-bootstrap";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import { useState } from "react";

const SharedNavbar = () => {
  // For Transparent Navbar
  const [transparentNavbar, setTransparentNavbar] =useState(false);
  const changeNavbarBackground = () => {
    if(window.scrollY >=80){
      setTransparentNavbar(true);
    }
    else setTransparentNavbar(false);
  }
  window.addEventListener('scroll', changeNavbarBackground)
  return (
    <div className="sticky-navBar">
      <Navbar collapseOnSelect expand="lg" className={transparentNavbar ? 'navbar-color active' : 'navbar-color'} variant="dark">
        <Container>
          {/* Navbar logo and name */}
          <Navbar.Brand href="/">
            <div className="d-flex d-flex align-items-center justify-content-center">
              <img className="logo-Size m-2" src={logo} alt="" />
              <p className="companyName">
                <span className="first-name">Talentship Global</span> <br />{" "}
                <span className="last-name">Advisory Forum</span>
              </p>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto center-nav-links">
              <NavLink className="px-3 py-1 my-2 " to="/">
                <p className="navLink">Home</p>
              </NavLink>
              <NavLink className="text-decoration-none px-3 py-1 my-2" to="/">
                <p className="navLink">Principles</p>
              </NavLink>

              <NavLink className="text-decoration-none px-3 py-1 my-2 " to="/">
                <p className="navLink">Projects</p>
              </NavLink>
              <NavLink className="text-decoration-none px-3 py-1 my-2 " to="/">
                <p className="navLink">Team</p>
              </NavLink>
            </Nav>

            <Nav className="center-nav-links">
              <div className="flex-nav-links">
                <NavLink className="my-lg-2" to="/">
                  <button className="nav-button-outline">Sign In</button>
                </NavLink>
                <NavLink className="my-lg-2" to="/">
                  <button className="nav-button-outline">Contact</button>
                </NavLink>
              </div>

              <div className="flex-nav-links all-social-links">
                <NavLink className="my-lg-3" to="/">
                  <BiLogoLinkedin className="social-logo" />
                </NavLink>
                <NavLink className="my-lg-3" to="/">
                  <BiLogoTwitter className="social-logo" />
                </NavLink>
                <NavLink className="my-lg-3" to="/">
                  <BiLogoFacebook className="social-logo" />
                </NavLink>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default SharedNavbar;
