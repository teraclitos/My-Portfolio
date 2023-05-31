import React from "react";
import { useEffect, useState } from "react";
import "../styles/all.css";

const BookContainer = ({
  language,
  dataBook,
  translateBook,
  setTranslateBook,
  widthScreen,
  allProyects,
  indexes,
  pointerEvent,
  setPointerEvent,
  translate,
  functionTranslateFrontPage,
  functionTranslateBackPage,
  functionPageIndex,
  backToIndex,
  indexPage,
  positionPage,
  setPositionPage,
  index,
  openNav,
  setOpenNav,
}) => {
  const arrayInclude = [2, 4];
  return (
    <div
      style={{
        transform: `translateX( ${translateBook}`,
      }}
      className="book-content "
    >
      {dataBook.map((element, i) => (
        <div
          style={{
            zIndex: indexes[i],
            transform: `rotateY( ${translate[i]}deg`,
          }}
          className="book"
        >
          <div
            onClick={() => {
              indexPage(i);

              setPositionPage(i + 1);

              if (widthScreen > 575) {
                if (i === 0) {
                  setTranslateBook(`50%`);
                  setOpenNav(true);
                }

                if (i === dataBook.length - 1) {
                  setTranslateBook(`100%`);
                }
              } else {
                if (i === 0) {
                  setTranslateBook(`calc(47vw - 50%)`);
                  setOpenNav(true);
                }
                if (i === dataBook.length - 1) {
                  setTranslateBook(`calc(72.5vw - 50%)`);
                }
              }

              setPointerEvent("none");
              setTimeout(() => {
                functionTranslateFrontPage(i);
              }, 200);

              setTimeout(() => {
                setPointerEvent("all");
              }, 700);
            }}
            className={i === 0 ? "face-front portada" : "face-front"}
            style={{ pointerEvents: pointerEvent }}
          >
            <div className={i === 3 ? "pt-0" : "pt-3"}>
              {i === 1 && (
                <div className="book-title-container ">
                  <h5 className="text-center mt-3 sub-title-size letter-book-title">
                    <i>{element.subtitleFront}</i>
                  </h5>
                  <h2 className="text-center old-letter red mt-3 title-size">
                    {element.titleFront}
                  </h2>
                </div>
              )}

              {arrayInclude.includes(i) && (
                <div>
                  <b>
                    <h2 className="letter-title-book title-size text-center mb-3">
                      {element.titleFront}
                    </h2>
                  </b>
                  <ul className="list-style-none p-0 d-flex flex-column align-items-center ">
                    {i === 2 &&
                      index.map((element, index) => (
                        <li
                          onClick={(e) => {
                            e.stopPropagation();

                            if (index === 0) {
                              functionPageIndex(4, 2);
                              setPositionPage(4);
                            } else if (index === 1) {
                              functionPageIndex(2, 2);
                              setPositionPage(3);
                            }
                          }}
                          className="mb-2 proyects letter-title-book"
                        >
                          {element}
                        </li>
                      ))}
                    {i === 4 &&
                      allProyects.map((element, index) => (
                        <li
                          onClick={(e) => {
                            e.stopPropagation();

                            functionPageIndex((index + 1) * 2, 4);

                            setPositionPage(index + 5);
                          }}
                          className="mb-2 proyects  letter-title-book "
                        >
                          {element.proyect}
                        </li>
                      ))}
                  </ul>
                </div>
              )}
              <p className="letter-body-size">
                {element.descriptionProyectFrontPage}
              </p>
              <div className="number-page">{element.pageFrontNumber}</div>
            </div>
          </div>
          <div
            onClick={() => {
              indexPage(i);
              setPositionPage(i);

              if (widthScreen > 575) {
                if (i === 0) {
                  setTranslateBook(`0%`);
                }
                if (i === dataBook.length - 1) {
                  setTranslateBook(`50%`);
                }
              } else {
                if (i === 0) {
                  setTranslateBook(`0px`);
                  setOpenNav(false);
                }
                if (i === dataBook.length - 1) {
                  setTranslateBook(`calc(47vw - 50%)`);
                }
              }
              setPointerEvent("none");
              setTimeout(() => {
                functionTranslateBackPage(i);
              }, 200);
              setTimeout(() => {
                setPointerEvent("all");
              }, 700);
            }}
            className={
              i === dataBook.length - 1
                ? "face-back portada-back "
                : "face-back "
            }
            style={{ pointerEvents: pointerEvent }}
          >
            <div className="pt-3">
              {i === 2 && (
                <div className="d-flex flex-column align-items-center ">
                  <b>
                    <h2 className="title-size letter-title-book">
                      {element.titleBack}
                    </h2>
                  </b>
                  <img className="img-me mt-3" src={element.url} alt="me" />
                  <div className="wooden-button wooden-button-cv  mt-2 letter-title-book">
                    CV
                  </div>
                </div>
              )}

              {i !== 2 && (
                <div className="d-flex flex-column align-items-center ">
                  <b>
                    <h2 className="letter-title-book title-size  text-center">
                      {element.titleBack}
                    </h2>
                  </b>
                  <div className="img-proyects-container">
                    <img
                      className="mt-2 img-proyects"
                      src={element.url}
                      alt={element.titleBack}
                    />
                  </div>
                  <div>{element.descriptionProyectBackPage}</div>
                </div>
              )}

              <div className="number-page">{element.pageBackNumber}</div>
              {i > 1 && (
                <div
                  style={{ pointerEvents: pointerEvent }}
                  className="back-to-index letter-title-book"
                  onClick={(e) => {
                    e.stopPropagation();
                    backToIndex(i * 2, -1);
                    setPositionPage(2);
                  }}
                >
                  {language === "spanish" ? "Índice" : "Index"}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookContainer;
