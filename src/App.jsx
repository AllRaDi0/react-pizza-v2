import { Outlet } from "react-router-dom";
import Header from "./components/header";
import "./styles/app.scss";
import { createContext, useState } from "react";

export const SearchContex = createContext("");

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <SearchContex.Provider value={{ searchValue, setSearchValue }}>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Outlet />
          </div>
        </div>
      </div>
    </SearchContex.Provider>
  );
}

export default App;
