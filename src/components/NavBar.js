import React from "react";
import "../styles/all.css";

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
}) => {
  return (
    <div className="py-5 d-flex justify-content-between align-items-center ps-5">
      <h1 className="portfolio-name">Francisco Terán</h1>
      <div className="w-50 d-flex justify-content-around align-items-center">
        <div
          onClick={() => {
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
          }}
          className="link-nav"
        >
          Proyectos
        </div>
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
