import React from "react";
import { Link } from "react-scroll";
import "./NavBar.scss";

/* Assets */

/* Custom Hooks */
import { MOBILE_WIDTH } from "../shared/constants";
import { useWindowDimensions } from "../shared/hooks/useWindowDimensions/useWindowDimensions";

export const NavBar: React.FC = () => {
  const { width } = useWindowDimensions();
  const isDesktopWidth = width > MOBILE_WIDTH;

  return (
    <nav className={`NavBar${isDesktopWidth ? "--desktop" : "--mobile"}`}>
      <img
        src={require("../../assets/images/qk-logo.jpeg")}
        className="NavBar__logo"
        alt="QK Logo"
      />
      {isDesktopWidth && (
        <div className="NavBar__navContainer">
          <Link
            to="our-products"
            spy={true}
            smooth={true}
            duration={500}
            className="NavBar__element"
          >
            Our Products
          </Link>

          <Link
            to="about-us"
            spy={true}
            smooth={true}
            duration={500}
            className="NavBar__element"
          >
            About Us
          </Link>
        </div>
      )}

      <div className="NavBar__navContainer">
        <Link
          to="instagram"
          spy={true}
          smooth={true}
          duration={500}
          className="NavBar__element"
        >
          Instagram
        </Link>

        <Link
          to="about-us"
          spy={true}
          smooth={true}
          duration={500}
          className="NavBar__contact"
        >
          CONTACT US
        </Link>
      </div>
    </nav>
  );
};
