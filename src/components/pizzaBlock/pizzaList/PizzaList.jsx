import React from "react";
import Pizza from "../pizza";

const PizzaList = ({ pizza, activeCategory }) => {
  return (
    <>
      <h2 className="content__title">Все пиццы</h2>

      <div className="content__items">
        {pizza.map((pizzaItm) => (
          <Pizza key={pizzaItm.id} {...pizzaItm} />
        ))}
      </div>
    </>
  );
};

export default PizzaList;
