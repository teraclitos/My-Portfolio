import React from "react";
import { useEffect, useState } from "react";
import "../styles/all.css";

const BookContainer = () => {
  const dataBook = [
    { title1: "", title2: "", text1: "", text2: "" },
    { title1: "Índice", title2: "Title1", text1: "hola", text2: "hola" },
    { title1: "Title2", title2: "Title3", text1: "hola", text2: "hola" },
    { title1: "Title4", title2: "Title5", text1: "hola", text2: "hola" },
    { title1: "Title6", title2: "Title7", text1: "hola", text2: "hola" },
    { title1: "Title8", title2: "Title9", text1: "hola", text2: "hola" },
    { title1: "Title10", title2: "", text1: "hola", text2: "" },
  ];

  const indexInitial = dataBook.map((element, i) => i).reverse();
  const translateInitial = dataBook.map((element) => 0);

  const [indexes, setIndexes] = useState(indexInitial);
  const [translateBook, setTranslateBook] = useState(0);
  const [pointerEvent, setPointerEvent] = useState("all");
  const [translate, setTranslate] = useState(translateInitial);
  const functionTranslateFrontPage = (d) => {
    const newTranslate = translate.map((element, i) =>
      i === d ? -180 : element
    );

    setTranslate(newTranslate);
  };

  const functionPageIndex = (proyectoId) => {
    const numberOfTransaltions = Math.ceil(proyectoId / 2);
    const arrayTranslation = Array.from(
      { length: numberOfTransaltions },
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

        console.log(newTranslate);

        setTimeout(() => {
          setTranslate(newTranslate);
        }, 200);

        if (i === arrayTranslation.length - 1) {
          setTimeout(() => {
            setPointerEvent("all");
          }, 700);
        }
      }, (i + 1) * 400);
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
      style={{ transform: `translateX( ${translateBook}px` }}
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
              if (i === 0) {
                setTranslateBook(90);
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
            <h1
              onClick={(e) => {
                e.stopPropagation();
                {
                  i === 1 && functionPageIndex(5);
                }
              }}
            >
              {element.title1}
            </h1>
            <p>{element.text1}</p>
          </div>
          <div
            onClick={() => {
              indexPage(i);

              if (i === 0) {
                setTranslateBook(0);
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
            <p>{element.text2}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookContainer;
