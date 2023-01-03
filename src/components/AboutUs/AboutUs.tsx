import React from "react";
import { Element } from "react-scroll";
import { Header } from "../shared/Header/Header";
import { Text } from "../shared/Text/Text";
import "./AboutUs.scss";

export const AboutUs: React.FC = () => {
  return (
    <Element id="about-us" name="about-us">
      <div className="AboutUs">
        <div className="AboutUs__textContainer">
          <Header>About Us</Header>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            quia eum ex animi vitae, quisquam provident expedita modi placeat
            illum nam aperiam corporis quae laboriosam ab dolore at. Similique,
            accusantium.
          </Text>
        </div>
        <img
          src={require("../../assets/images/qk-logo.jpeg")}
          className="AboutUs__logo"
          alt="QK Logo"
        />
      </div>
    </Element>
  );
};
