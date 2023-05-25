import Main from "./views/Main";
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  dataBookSpanish,
  dataBookEnglish,
  allProyectsSpanish,
  allProyectsEnglish,
} from "./Data";

function App() {
  const [language, setLanguage] = useState("spanish");
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

  return (
    <BrowserRouter>
      <Main
        language={language}
        setLanguage={setLanguage}
        dataBook={dataBook}
        translateBook={translateBook}
        setTranslateBook={setTranslateBook}
        widthScreen={widthScreen}
        allProyects={allProyects}
        indexes={indexes}
        pointerEvent={pointerEvent}
        setPointerEvent={setPointerEvent}
        translate={translate}
        functionTranslateFrontPage={functionTranslateFrontPage}
        functionTranslateBackPage={functionTranslateBackPage}
        functionPageIndex={functionPageIndex}
        backToIndex={backToIndex}
        indexPage={indexPage}
      />
    </BrowserRouter>
  );
}

export default App;
