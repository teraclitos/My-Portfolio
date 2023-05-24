import React from "react";
import "../styles/all.css";

const NavBar = ({ language, setLanguage }) => {
  return (
    <div className="py-5 d-flex justify-content-between align-items-center ps-5">
      <h1 className="portfolio-name">Francisco Terán</h1>
      <div className="w-50 d-flex justify-content-around align-items-center">
        <div className="link-nav">Proyectos</div>
        <div className="link-nav">Acerca de mí</div>
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
    </div>
  );
};

export default NavBar;
