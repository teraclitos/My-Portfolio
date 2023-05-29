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
 
}) => {
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

              setPositionPage(i);

              if (widthScreen > 575) {
                if (i === 0) {
                  setTranslateBook(`50%`);
                }

                if (i === dataBook.length - 1) {
                  setTranslateBook(`100%`);
                }
              } else {
                if (i === 0) {
                  setTranslateBook(`calc(47vw - 50%)`);
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
            <h1>{element.index && element.index}</h1>
            <div>
              <ul>
                {i === 1 &&
                  index.map((element, index) => (
                    <li
                      // onClick={(e) => {
                      //   e.stopPropagation();

                      //   functionPageIndex((index + 1) * 2);

                      //   setPositionPage(index + 1);
                      // }}
                      className="mb-2 proyects"
                    >
                      {element}
                    </li>
                  ))}
                {element.descriptionProyectFrontPage}
              </ul>
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
              i === dataBook.length - 1 ? "face-back portada-back" : "face-back"
            }
            style={{ pointerEvents: pointerEvent }}
          >
            <h1>{element.titleProyect}</h1>
            <div>{element.descriptionProyectBackPage}</div>

            <div className="number-page">{element.pageBackNumber}</div>
            {i > 0 && (
              <div
                className="back-to-index"
                onClick={(e) => {
                  e.stopPropagation();
                  backToIndex(i * 2);
                }}
              >
                {language === "spanish" ? "Índice" : "Index"}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookContainer;
