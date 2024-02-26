import React from "react";
import { useState } from "react";
import PizzaList from "../components/pizzaBlock/pizzaList";
import Categories from "../components/categories";
import Sort from "../components/sort";
import { useFetchData } from "../hook/useFetchData";

const URL = "https://65a7ee9f94c2c5762da7f8c6.mockapi.io/pizzas";

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSort, setActiveSort] = useState(0);
  const [isOpenSort, setIsOpenSort] = useState(false);

  const {
    data: pizza,
    loading,
    err,
  } = useFetchData(URL, activeCategory, activeSort);

  const handleCategory = (indx) => {
    setActiveCategory(indx);
  };

  const handleSort = (indx) => {
    setActiveSort(indx);
    setIsOpenSort(false);
  };

  const toggleSort = () => {
    setIsOpenSort(true);
  };

  return (
    <>
      <div className="content__top">
        <Categories
          activeCategory={activeCategory}
          handleCategory={handleCategory}
        />
        <Sort
          activeSort={activeSort}
          handleSort={handleSort}
          isOpenSort={isOpenSort}
          toggleSort={toggleSort}
        />
      </div>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <PizzaList pizza={pizza} activeCategory={activeCategory} />
      )}
    </>
  );
};

export default HomePage;
