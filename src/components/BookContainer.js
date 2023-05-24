import React from "react";
import { useEffect, useState } from "react";
import "../styles/all.css";
import {
  dataBookSpanish,
  dataBookEnglish,
  allProyectsSpanish,
  allProyectsEnglish,
} from "../Data";

const BookContainer = ({ language, setLanguage }) => {
  const [dataBook, setDataBook] = useState(dataBookSpanish);
  const indexInitial = dataBook.map((element, i) => i).reverse();
  const translateInitial = dataBook.map((element) => 0);
  const [indexes, setIndexes] = useState(indexInitial);
  const [translateBook, setTranslateBook] = useState(0);
  const [pointerEvent, setPointerEvent] = useState("all");
  const [translate, setTranslate] = useState(translateInitial);
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  const [allProyects, setAllProyects] = useState(allProyectsSpanish);
  const handleWindowScreen = () => {
    setWidthScreen(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowScreen);
  }, [widthScreen]);

  useEffect(() => {
    if (language === "spanish") {
      setAllProyects(allProyectsSpanish);
      setDataBook(dataBookSpanish);
    } else {
      setAllProyects(allProyectsEnglish);
      setDataBook(dataBookEnglish);
    }
  }, [language]);

  const functionTranslateFrontPage = (d) => {
    const newTranslate = translate.map((element, i) =>
      i === d ? -180 : element
    );

    setTranslate(newTranslate);
  };

  const functionPageIndex = (proyectoId) => {
    const numberOfTranslations = Math.ceil(proyectoId / 2);

    const arrayTranslation = Array.from(
      { length: numberOfTranslations },
      (_, index) => index + 1
    );

    arrayTranslation.forEach((element, i) => {
      setPointerEvent("none");
      setTimeout(() => {
        let newTranslate = translate.map((element, index) =>
          index <= i + 1 ? -180 : element
        );

        const newindex = indexes.map((element, i3) => {
          if (i + 1 === i3) {
            return dataBook.length - 1;
          } else {
            if (i + 1 === i3 - 1) {
              return dataBook.length - 2;
            } else if (i + 1 === dataBook.length - 1) {
              return dataBook.length - 2;
            } else {
              return dataBook.length - 3;
            }
          }
        });

        setIndexes(newindex);

        setTimeout(() => {
          setTranslate(newTranslate);
        }, 200);

        if (i === arrayTranslation.length - 1) {
          setTimeout(() => {
            setPointerEvent("all");
          }, 700);
        }
      }, (i + 1) * 500);
    });
  };
  const backToIndex = (proyectoId) => {
    const numberOfTranslations = Math.ceil(proyectoId / 2);

    const arrayTranslation = Array.from(
      { length: numberOfTranslations },
      (_, index) => index + 1
    );

    arrayTranslation.forEach((element, i) => {
      setPointerEvent("none");
      setTimeout(() => {
        let newTranslate = translate.map((element, index) =>
          index >= arrayTranslation.length - i ? 0 : element
        );

        const newindex = indexes.map((element, i3) => {
          if (arrayTranslation.length - i === i3) {
            return dataBook.length - 1;
          } else {
            if (arrayTranslation.length - i === i3 - 1) {
              return dataBook.length - 2;
            } else {
              return dataBook.length - 3;
            }
          }
        });

        setIndexes(newindex);

        setTimeout(() => {
          setTranslate(newTranslate);
        }, 200);

        if (i === arrayTranslation.length - 1) {
          setTimeout(() => {
            setPointerEvent("all");
          }, 700);
        }
      }, (i + 1) * 500);
    });
  };

  const functionTranslateBackPage = (d) => {
    const newTranslate = translate.map((element, i) => (i === d ? 0 : element));

    setTranslate(newTranslate);
  };

  const indexPage = (d) => {
    const newindex = indexes.map((element, i) => {
      if (i === d) {
        return dataBook.length - 1;
      } else {
        if (i === d + 1) {
          return dataBook.length - 2;
        } else if (d === dataBook.length - 1 && i === d - 1) {
          return dataBook.length - 2;
        } else {
          return dataBook.length - 3;
        }
      }
    });

    setIndexes(newindex);
  };

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

              if (widthScreen > 575) {
                if (i === 0) {
                  setTranslateBook(`90px`);
                }

                if (i === dataBook.length - 1) {
                  setTranslateBook(`220px`);
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
                  allProyects.map((element, index) => (
                    <li
                      onClick={(e) => {
                        e.stopPropagation();

                        functionPageIndex((index + 1) * 2);
                      }}
                      className="mb-2 proyects"
                    >
                      {element.proyect}
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

              if (widthScreen > 575) {
                if (i === 0) {
                  setTranslateBook(`0px`);
                }
                if (i === dataBook.length - 1) {
                  setTranslateBook(`90px`);
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
