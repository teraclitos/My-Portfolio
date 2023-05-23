import React from "react";
import "../styles/all.css";

const NavBar = ({ language, setLanguage }) => {
  return (
    <div className="py-5 d-flex justify-content-between">
      <h1 className="portfolio-name">Francisco Terán</h1>

      <button
        className="py-0"
        onClick={() => {
          language === "spanish"
            ? setLanguage("english")
            : setLanguage("spanish");
        }}
      >
        {language}
      </button>
    </div>
  );
};

export default NavBar;
