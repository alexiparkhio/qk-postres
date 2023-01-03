import React from "react";
import { Header } from "../shared/Header/Header";
import { Text } from "../shared/Text/Text";
import "./ACookieForEveryOccasion.scss";

export const ACookieForEveryOccasion: React.FC = () => {
  return (
    <div className="ACookieForEveryOccasion">
      <div className="ACookieForEveryOccasion__textContainer">
        <Header>A Cookie For Every Occasion</Header>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          molestias voluptate vitae necessitatibus perferendis eveniet corporis
          dolor repudiandae nesciunt quae atque ipsam, saepe quis, deserunt
          nobis accusantium repellat ducimus doloribus.
        </Text>
      </div>
    </div>
  );
};
