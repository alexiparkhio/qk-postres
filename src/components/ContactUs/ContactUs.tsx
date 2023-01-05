import React from "react";
import { Element } from "react-scroll";
import { IG_URL } from "../shared/constants";
import { Header } from "../shared/Header/Header";
import { Text } from "../shared/Text/Text";
import "./ContactUs.scss";

export const ContactUs: React.FC = () => {
  return (
    <Element id="contact-us" name="contact-us" className="ContactUs">
      <div className="ContactUs__box">
        <Header>Contact Us</Header>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          eveniet alias ipsa harum quibusdam iste! Reprehenderit, odit corrupti
          esse sapiente mollitia vel quas molestiae animi itaque earum porro at
          inventore.
        </Text>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          eveniet alias ipsa harum quibusdam iste! Reprehenderit, odit corrupti
          esse sapiente mollitia vel quas molestiae animi itaque earum porro at
          inventore.
        </Text>

        <div className="ContactUs__btn">EMAIL US</div>
        <a href={IG_URL} target="_blank" rel="noopener noreferrer">
          Follow us on Instagram
        </a>
      </div>
      <img
        src={require("../../assets/images/star.jpeg")}
        alt="star"
        className="ContactUs__img"
      />
    </Element>
  );
};
