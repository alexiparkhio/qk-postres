import React from "react";
import { IG_URL } from "../shared/constants";
import { Header } from "../shared/Header/Header";
import { Text } from "../shared/Text/Text";
import "./TopScreen.scss";

export const TopScreen: React.FC = () => {
  return (
    <div className="TopScreen__content">
      <div className="TopScreen__leftBox">
        <Header>Lorem Ipsum</Header>

        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos libero
          facere aperiam consequatur necessitatibus rem illo, impedit eum id
          maxime! Facere distinctio neque qui sunt provident nostrum nobis
          consectetur placeat.
        </Text>

        <div
          onClick={() => window.open(IG_URL, "_blank")}
          className="TopScreen__boxBtn"
        >
          <span>SEE MORE</span>
        </div>
      </div>
    </div>
  );
};
