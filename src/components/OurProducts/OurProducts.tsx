import React from "react";
import "./OurProducts.scss";

/* Components */
import { Element } from "react-scroll";
import { Header } from "../shared/Header/Header";
import { Text } from "../shared/Text/Text";

/* Constants */
import { IG_URL } from "../shared/constants";

export const OurProducts: React.FC = () => {
  return (
    <Element id="our-products" name="our-products">
      <div className="OurProducts">
        <div className="OurProducts__textContainer">
          <Header>Our Products</Header>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            consequatur minus odit, ipsam in similique quod mollitia vero fugit
            eaque? Vitae perferendis nulla expedita quaerat adipisci quos ex
            incidunt! Saepe?
          </Text>
          <span className="OurProducts__seeMore">
            <a href={IG_URL} target="_blank" rel="noopener noreferrer">
              SEE MORE
            </a>
          </span>
        </div>
      </div>
    </Element>
  );
};
