import React from "react";
import { useState, useEffect } from "react";
import "../styles/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({
  language,
  setLanguage,
  setTranslateBook,
  setPointerEvent,
  functionTranslateFrontPage,
  functionTranslateBackPage,
  indexPage,
  backToIndex,
  positionPage,
  setPositionPage,
  dataBook,
  widthScreen,
  functionPageIndex,
  navBarLinks,
  openNav,
  setOpenNav,
}) => {
  // const [heightNav, setHeightNav] = useState("7em");

  const indexFunctionBook = () => {
    if (positionPage < 2) {
      if (!openNav) {
        setPositionPage(2);
        if (widthScreen > 575) {
          functionPageIndex((1 - positionPage + 1) * 2, positionPage);
          setTranslateBook("50%");
        } else {
          functionPageIndex(4, 0);
          setTranslateBook(`calc(47vw - 50%)`);
        }
      } else {
        if (widthScreen <= 575) {
          backToIndex(positionPage * 2, 1);
          setPositionPage(0);
          setTranslateBook("0%");
        }
      }
    } else {
      if (widthScreen <= 575) {
        backToIndex(positionPage * 2, 1);
        setPositionPage(0);
        setTranslateBook("0%");
      } else {
        if (positionPage > 2) {
          backToIndex(positionPage * 2, -1);
        }

        setPositionPage(2);
      }

      // if (positionPage === dataBook.length - 1) {
      //   if (widthScreen > 575) {
      //     setTranslateBook("50%");
      //   } else {
      //     setTranslateBook(`calc(47vw - 50%)`);
      //   }
      // }
    }
  };
  const functionLanguage = () => {
    language === "spanish" ? setLanguage("english") : setLanguage("spanish");
  };
  // const initailStateColors = navBarLinks.map((element) => 0);

  // const [colors, setColors] = useState(initailStateColors);

  // const setColorsFunction = (position) => {
  //   const newColors = colors.map((element, i) => (position === i ? 1 : 0));

  //   setColors(newColors);
  // };
  return (
    <div
      // style={{ height: heightNav }}
      className=" pe-lg-5 ps-lg-5  d-block d-lg-flex justify-content-between align-items-center nav-bar "
    >
      <h1 className="portfolio-name old-letter text-center red  ">
        {widthScreen > 992 ? "Francisco Terán" : "F T"}
      </h1>
      <div className=" d-block d-lg-flex justify-content-around ms-lg-5 pt-4 pt-lg-0 align-items-center ">
        {/* {navBarLinks.map((element, i) => ( */}
        <div className="link-nav text-center dark-brown">
          <span
            className="hover-nav-link"
            // className={colors[i] === 0 ? "dark-brown hover-nav-link" : "red"}
            onClick={() => {
              // setColorsFunction(i);
              // if (element === "Proyectos" || element === "Proyects") {
              indexFunctionBook();
              // }
            }}
          >
            {language === "english" ? "Index" : "Índice"}
            {/* {element} */}
          </span>
        </div>
        {/* ))} */}

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

      <FontAwesomeIcon
        // onClick={() => {
        //   heightNav === "7em" ? setHeightNav("19em") : setHeightNav("7em");
        // }}

        onClick={() => {
          !openNav ? setOpenNav(true) : setOpenNav(false);

          if (!openNav) {
            setOpenNav(true);
          }
          indexFunctionBook();
        }}
        className="responsive-open red d-flex d-lg-none"
        icon={!openNav ? faBars : faXmark}
      />
    </div>
  );
};

export default NavBar;
