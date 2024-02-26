import React, { useState } from "react";

export const usePizzaParams = (initialType = 0, initialSize = 0) => {
  const [activeParams, setAtctiveParams] = useState({
    activeType: initialType,
    activeSize: initialSize,
  });

  const handleActiveType = (indx) => {
    setAtctiveParams({
      ...activeParams,
      activeType: indx,
    });
  };

  const handleActiveSize = (indx) => {
    setAtctiveParams({
      ...activeParams,
      activeSize: indx,
    });
  };

  return { activeParams, handleActiveType, handleActiveSize };
};
