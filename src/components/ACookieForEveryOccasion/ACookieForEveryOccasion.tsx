import React from "react";
import { Element } from "react-scroll";
import { Card } from "../shared/Card/Card";
import { Cards } from "../shared/Cards/Cards";
import { Header } from "../shared/Header/Header";
import { Text } from "../shared/Text/Text";
import "./ACookieForEveryOccasion.scss";

export const ACookieForEveryOccasion: React.FC = () => {
  return (
    <Element id="a-cookie" name="a-cookie">
      <div className="ACookieForEveryOccasion">
        <div className="ACookieForEveryOccasion__textContainer">
          <Header>A Cookie For Every Occasion</Header>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            molestias voluptate vitae necessitatibus perferendis eveniet
            corporis dolor repudiandae nesciunt quae atque ipsam, saepe quis,
            deserunt nobis accusantium repellat ducimus doloribus.
          </Text>
        </div>

        <Cards>
          <Card image="harry-potter" tag="Birthdays" />
          <Card image="baby" tag="Baby Showers" />
          <Card image="halloween" tag="Seasonal Cookies" />
          <Card image="cinderelle" tag="Theme Parties" />
        </Cards>
      </div>
    </Element>
  );
};
