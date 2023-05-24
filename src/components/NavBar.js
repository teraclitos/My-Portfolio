import React from "react";
import "../styles/all.css";

const NavBar = ({ language, setLanguage }) => {
  return (
    <div className="py-5 d-flex justify-content-between">
      <h1 className="portfolio-name">Francisco Terán</h1>

      <div
        className="py-3 px-3 wooden-button"
        onClick={() => {
          language === "spanish"
            ? setLanguage("english")
            : setLanguage("spanish");
        }}
      >
        {language}
      </div>
    </div>
  );
};

export default NavBar;
