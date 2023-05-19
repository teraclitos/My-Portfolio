import React from "react";
import { useEffect, useState } from "react";
import "../styles/all.css";

const BookContainer = () => {
  const dataBook = [
    { title1: "", text1: "", title2: "", text2: "" },
    {
      title1: "Índice",
      text1: "",
      title2: "Inmobiliaria",
      text2: "",
      pageback: 1,
    },
    {
      title1: "",
      text1: "",
      pagefront: 2,
      title2: "Portfolio",
      text2: "",
      pageback: 3,
    },
    {
      title1: "",
      text1: "",
      pagefront: 4,
      title2: "Rollingcode",
      text2: "",
      pageback: 5,
    },
    { title1: "", text1: "", pagefront: 6, title2: "", text2: "" },
  ];
  const proyects = [
    { proyect: "Proyecto inmobiliaria" },
    { proyect: "proyecto portafolio de arquitecto" },
    { proyect: "Proyecto final de Rolling de Code" },
  ];

  const indexInitial = dataBook.map((element, i) => i).reverse();
  const translateInitial = dataBook.map((element) => 0);

  const [indexes, setIndexes] = useState(indexInitial);
  const [translateBook, setTranslateBook] = useState(0);
  const [pointerEvent, setPointerEvent] = useState("all");
  const [translate, setTranslate] = useState(translateInitial);
  const [transition, setTransition] = useState(1);

  const functionTranslateFrontPage = (d) => {
    setTransition(1);
    const newTranslate = translate.map((element, i) =>
      i === d ? -180 : element
    );

    setTranslate(newTranslate);
  };

  const functionPageIndex = (proyectoId) => {
    const numberOfTranslations = Math.ceil(proyectoId / 2);

    if (numberOfTranslations !== 1) {
      setTransition(0.6);
    } else {
      setTransition(1);
    }
    const arrayTranslation = Array.from(
      { length: numberOfTranslations },
      (_, index) => index + 1
    );

    arrayTranslation.forEach((element, i) => {
      setPointerEvent("none");
      setTimeout(
        () => {
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
          }, 150);

          if (i === arrayTranslation.length - 1) {
            setTimeout(() => {
              setPointerEvent("all");
            }, 450);
          }
        },
        i === 0 ? 0 : i * 300
      );
    });
  };
  const backToIndex = (proyectoId) => {
    const numberOfTranslations = Math.ceil(proyectoId / 2);
    if (numberOfTranslations !== 1) {
      setTransition(0.6);
    } else {
      setTransition(1);
    }

    const arrayTranslation = Array.from(
      { length: numberOfTranslations },
      (_, index) => index + 1
    );

    arrayTranslation.forEach((element, i) => {
      setPointerEvent("none");
      setTimeout(
        () => {
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
          }, 150);

          console.log(newTranslate);

          if (i === arrayTranslation.length - 1) {
            setTimeout(() => {
              setPointerEvent("all");
            }, 450);
          }
        },
        i === 0 ? 0 : i * 300
      );
    });
  };

  const functionTranslateBackPage = (d) => {
    const newTranslate = translate.map((element, i) => (i === d ? 0 : element));

    setTranslate(newTranslate);
  };

  const indexPage = (d) => {
    setTransition(1);
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
      style={{ transform: `translateX( ${translateBook}px` }}
      className="book-content "
    >
      {dataBook.map((element, i) => (
        <div
          style={{
            zIndex: indexes[i],
            transform: `rotateY( ${translate[i]}deg`,
            transition: `${transition}s`,
          }}
          className="book"
        >
          <div
            onClick={() => {
              indexPage(i);
              if (i === 0) {
                setTranslateBook(90);
              }

              if (i === dataBook.length - 1) {
                setTranslateBook(220);
              }
              setPointerEvent("none");
              setTimeout(() => {
                functionTranslateFrontPage(i);
              }, 200);

              setTimeout(() => {
                setPointerEvent("all");
              }, 700);
            }}
            className={i == 0 ? "face-front portada" : "face-front"}
            style={{ pointerEvents: pointerEvent }}
          >
            <h1>{element.title1}</h1>
            <div>
              <ul>
                {i === 1 &&
                  proyects.map((element, index) => (
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
                {element.text1}
              </ul>
              <div className="number-page">{element.pagefront}</div>
            </div>
          </div>
          <div
            onClick={() => {
              indexPage(i);

              if (i === 0) {
                setTranslateBook(0);
              }
              if (i === dataBook.length - 1) {
                setTranslateBook(90);
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
            <h1>{element.title2}</h1>
            <div>{element.text2}</div>

            <div className="number-page">{element.pageback}</div>
            {i > 0 && (
              <div
                className="back-to-index"
                onClick={(e) => {
                  e.stopPropagation();
                  backToIndex(i * 2);
                }}
              >
                Índice
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookContainer;
