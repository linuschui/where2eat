import React from "react";
import "../Cards.css";
import CardItem from "../CardItem";

function FASSCards() {
  return (
    <div className="cards">
      <h1>Check out dining options in FASS!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/cards-fass-coffeehut3.jpeg"
              text="The Coffee Hut"
              label="Cafe"
              path="/thecoffeehut"
            />
            <CardItem
              src="images/cards-fass-coffeeroaster1.jpeg"
              text="The Coffee Roaster"
              label="Cafe"
              path="/thecoffeeroaster"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FASSCards;
