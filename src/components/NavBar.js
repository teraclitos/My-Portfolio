import React from "react";
import { useState, useEffect } from "react";
import "../styles/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({
  language,
  setLanguage,
  setTranslateBook,
  pointerEvent,
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
  const indexFunctionBook = () => {
    if (widthScreen <= 992) {
      if (!openNav) {
        functionPageIndex(4, 0);

        setPositionPage(2);
        if (widthScreen > 575) {
          setTranslateBook("50%");
        } else {
          setTranslateBook(`calc(47vw - 50%)`);
        }
      } else {
        backToIndex(positionPage * 2, 1);
        setPositionPage(0);
        setTranslateBook("0%");
      }
    } else {
      if (positionPage < 2) {
        functionPageIndex((2 - positionPage) * 2, positionPage);
        if (positionPage === 0) {
          setTranslateBook("50%");
        }
      } else {
        backToIndex((positionPage - 1) * 2, -1);
        if (positionPage === dataBook.length) {
          setTranslateBook("50%");
        }
      }
      setPositionPage(2);
    }
  };
  const functionLanguage = () => {
    language === "spanish" ? setLanguage("english") : setLanguage("spanish");
  };

  return (
    <div className=" pe-lg-5 ps-lg-5  d-block d-lg-flex justify-content-between align-items-center nav-bar  ">
      <h1 className="portfolio-name old-letter text-center red  ">
        {widthScreen > 992 ? "Francisco Terán" : "F T"}
      </h1>
      <div className=" d-block d-lg-flex justify-content-around ms-lg-5 pt-4 pt-lg-0 align-items-center ">
        <div className="link-nav text-center dark-brown">
          <span
            style={{ pointerEvents: pointerEvent }}
            className="hover-nav-link letter-title-book"
            onClick={() => {
              indexFunctionBook();
            }}
          >
            {language === "english" ? "Index" : "Índice"}
          </span>
        </div>

        <div
          className="py-3 d-none d-lg-flex ms-lg-5 justify-content-center wooden-button letter-title-book"
          onClick={() => {
            functionLanguage();
          }}
        >
          {language === "english" ? "Español" : "English"}
        </div>
      </div>
      <div
        className="py-3 d-flex d-lg-none justify-content-center wooden-button wooden-button-responsive "
        onClick={() => {
          functionLanguage();
        }}
      >
        {language === "spanish"
          ? setLanguage("english")
          : setLanguage("spanish")}
      </div>

      <FontAwesomeIcon
        style={{ pointerEvents: pointerEvent }}
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
