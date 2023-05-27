import React from "react";
import { useState, useEffect } from "react";
import "../styles/all.css";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({
  language,
  setLanguage,
  setTranslateBook,
  setPointerEvent,
  functionTranslateFrontPage,
  indexPage,
  backToIndex,
  positionPage,
  setPositionPage,
  dataBook,
  widthScreen,
  navBarLinks,
}) => {
  const [heightNav, setHeightNav] = useState("5em");
  const proyectFunctionBook = () => {
    if (positionPage === 0) {
      if (widthScreen > 575) {
        setTranslateBook("50%");
      } else {
        setTranslateBook(`calc(47vw - 50%)`);
      }

      setPointerEvent("none");
      indexPage(0);
      setTimeout(() => {
        functionTranslateFrontPage(0);
      }, 200);
      setTimeout(() => {
        setPointerEvent("all");
      }, 700);
      setPositionPage(0);
    } else {
      backToIndex(positionPage * 2);
      setPositionPage(0);

      if (positionPage === dataBook.length - 1) {
        if (widthScreen > 575) {
          setTranslateBook("50%");
        } else {
          setTranslateBook(`calc(47vw - 50%)`);
        }
      }
    }
  };
  const functionLanguage = () => {
    language === "spanish" ? setLanguage("english") : setLanguage("spanish");
  };
  return (
    <div
      style={{ height: heightNav }}
      className="py-5 pe-lg-5 ps-lg-5  d-block d-lg-flex justify-content-between align-items-center nav-bar-container "
    >
      <h1 className="portfolio-name text-center ">
        {widthScreen > 992 ? "Francisco Terán" : "F T"}
      </h1>
      <div className=" d-block d-lg-flex justify-content-around ms-lg-5  align-items-center">
        {navBarLinks.map((element) => (
          <div className="link-nav text-center ">
            <span
              onClick={() => {
                if (element === "Proyectos" || element === "Proyects") {
                  proyectFunctionBook();
                }
              }}
            >
              {element}
            </span>
          </div>
        ))}

        <div
          className="py-3 d-none d-lg-flex ms-lg-5 justify-content-center wooden-button "
          onClick={() => {
            functionLanguage();
          }}
        >
          {language}
        </div>
      </div>
      <div
        className="py-3 d-flex d-lg-none justify-content-center wooden-button wooden-button-responsive "
        onClick={() => {
          functionLanguage();
        }}
      >
        {language}
      </div>
      <div
        onClick={() => {
          heightNav === "5em" ? setHeightNav("20em") : setHeightNav("5em");
        }}
        className="py-3 d-flex d-lg-none justify-content-center wooden-button wooden-button-responsive-open "
      >
        open
      </div>
    </div>
  );
};

export default NavBar;
