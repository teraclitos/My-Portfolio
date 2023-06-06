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
  move,
}) => {
  const [moveResponsive, setMoveResponsive] = useState(false);

  const nameTilte = () => {
    if (widthScreen > 992) {
      if (language === "english") {
        return "FRANCISCO TERAN";
      } else {
        return "FRANCISCO TERÁN";
      }
    } else {
      if (language === "english") {
        return "F.TERAN";
      } else {
        return "F.TERÁN";
      }
    }
  };
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

        if (dataBook.length !== positionPage) {
          setMoveResponsive(true);
        } else {
          setTranslateBook(`calc(47vw - 50%)`);
          setMoveResponsive(true);
        }

        setPositionPage(0);
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
  useEffect(() => {
    if ((move, moveResponsive)) {
      setTranslateBook("0%");
      setMoveResponsive(false);
    }
  }, [move]);
  return (
    <div className=" px-3 px-lg-5   d-flex justify-content-between align-items-center nav-bar  ">
      <div className="open-container d-flex d-lg-none">
        <FontAwesomeIcon
          style={{ pointerEvents: pointerEvent }}
          onClick={() => {
            !openNav ? setOpenNav(true) : setOpenNav(false);

            if (!openNav) {
              setOpenNav(true);
            }
            indexFunctionBook();
          }}
          className="responsive-open red "
          icon={!openNav ? faBars : faXmark}
        />
      </div>
      <h1 className="text-center  portfolio-name mb-0 ">
        <span
          className="old-letter red"
          onClick={() => {
            window.location.reload();
          }}
        >
          {nameTilte()}
        </span>
      </h1>
      <div className="  d-flex justify-content-around ms-lg-5  align-items-center ">
        <div className="link-nav text-center dark-brown">
          <span
            style={{ pointerEvents: pointerEvent }}
            className="hover-nav-link letter-title-book d-none d-lg-inline-block"
            onClick={() => {
              indexFunctionBook();
            }}
          >
            {language === "english" ? "Index" : "Índice"}
          </span>
        </div>

        <div
          className="py-3 d-flex ms-lg-5  justify-content-center wooden-button letter-title-book"
          onClick={() => {
            functionLanguage();
          }}
        >
          {language === "english" ? "Español" : "English"}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
