import React from "react";
import Header from "../components/header";
import NotFoundBlock from "../components/NotFoundBlock/NotFoundBlock";

const NotFoundPage = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <NotFoundBlock />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
