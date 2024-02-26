import React, { useEffect, useState } from "react";

export const useFetchData = (URL, activeCategory, activeSort) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  const categoryParam = activeCategory > 0 ? activeCategory : "";
  let sortParam = "rating";
  switch (activeSort) {
    case 0:
      sortParam = "rating";
      break;
    case 1:
      sortParam = "price";
      break;
    case 2:
      sortParam = "price&order=desc";
      break;
    case 3:
      sortParam = "title";
      break;
  }
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const response = await fetch(
          `${URL}?category=${categoryParam}&sortBy=${sortParam}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const pizza = await response.json();
        setData(pizza);
      } catch (error) {
        console.log("useFetchData", error);
        setErr(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [URL, activeCategory, activeSort]);

  return {
    data,
    loading,
    err,
  };
};
