import React from "react";
import { Header } from "../Header/Header";
import "./Card.scss";

interface CardProps {
  image: string;
  tag: string;
}

export const Card: React.FC<CardProps> = ({ image, tag }) => {
  return (
    <div className="Card">
      <img
        src={require(`../../../assets/images/${image}.jpeg`)}
        alt={image}
        className="Card__picture"
      />
      <Header>{tag}</Header>
    </div>
  );
};
