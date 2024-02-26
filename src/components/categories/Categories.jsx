import React, { useState } from "react";
const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const Categories = ({ activeCategory, handleCategory }) => {
  return (
    <div className="categories">
      <ul>
        {categories.map((category, indx) => (
          <li
            key={category}
            onClick={() => handleCategory(indx)}
            className={activeCategory === indx ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
