import Main from "./views/Main";
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  dataBookSpanish,
  dataBookEnglish,
  allProyectsSpanish,
  allProyectsEnglish,
  navBarLinksEnglish,
  navBarLinksSpanish,
  indexSpanish,
  indexEnglish,
} from "./Data";

function App() {
  const [language, setLanguage] = useState("english");
  const [dataBook, setDataBook] = useState(dataBookSpanish);
  const indexInitial = dataBook
    .map((element, i) => {
      if (i >= dataBook.length - 2) {
        return i;
      } else {
        return dataBook.length - 3;
      }
    })
    .reverse();
  const translateInitial = dataBook.map((element) => 0);
  const [indexes, setIndexes] = useState(indexInitial);
  const [translateBook, setTranslateBook] = useState(0);
  const [pointerEvent, setPointerEvent] = useState("all");
  const [translate, setTranslate] = useState(translateInitial);
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  const [allProyects, setAllProyects] = useState(allProyectsSpanish);
  const [positionPage, setPositionPage] = useState(0);
  const [navBarLinks, setNavBarLinks] = useState(navBarLinksSpanish);
  const [index, setIndex] = useState(indexSpanish);
  const [openNav, setOpenNav] = useState(false);
  const [move, setMove] = useState(false);
  const [loader, setLoader] = useState(true);
  const [newLoad, setNewLoad] = useState(0);
  const [opacityLoader, setOpacityLoader] = useState("100%");
  const [displayLoader, setDisplayLoader] = useState("flex");
  const [bodyLoader, setBodyLoader] = useState("none");

  const handleWindowScreen = () => {
    setWidthScreen(window.innerWidth);
  };

  const functionTranslateFrontPage = (d, start) => {
    const newTranslate = translate.map((element, i) =>
      i === d ? -180 : element
    );

    setTranslate(newTranslate);
  };

  const functionPageIndex = (proyectoId, start) => {
    const numberOfTranslations = Math.ceil(proyectoId / 2);

    const arrayTranslation = Array.from(
      { length: numberOfTranslations },
      (_, index) => index + 1
    );

    arrayTranslation.forEach((element, i) => {
      setPointerEvent("none");
      setTimeout(() => {
        let newTranslate = translate.map((element, index) =>
          index <= i + start ? -180 : element
        );

        const newindex = indexes.map((element, i3) => {
          if (i + start === i3) {
            return dataBook.length - 1;
          } else {
            if (i + start === i3 - 1) {
              return dataBook.length - 2;
            } else if (i + start === dataBook.length - 1) {
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
      }, i * 500);
    });
  };
  const backToIndex = (proyectoId, start) => {
    const numberOfTranslations = Math.ceil(proyectoId / 2 + start);

    const arrayTranslation = Array.from(
      { length: numberOfTranslations },
      (_, index) => index + 1
    );

    arrayTranslation.forEach((element, i) => {
      setPointerEvent("none");
      setTimeout(() => {
        let newTranslate = translate.map((element, index) =>
          index + start >= arrayTranslation.length - i ? 0 : element
        );

        const newindex = indexes.map((element, i3) => {
          if (arrayTranslation.length - i - start === i3) {
            return dataBook.length - 1;
          } else {
            if (arrayTranslation.length - i - start === i3 - 1) {
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
          setMove(true);
          setTimeout(() => {
            setPointerEvent("all");
            setMove(false);
          }, 700);
        }
      }, i * 500);
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
    if (d == dataBook.length - 1 && positionPage === dataBook.length) {
      const exceptionIndex = indexes.map((element, i) => {
        if (i === dataBook.length - 1) {
          return dataBook.length - 2;
        } else if (i === dataBook.length - 2) {
          return dataBook.length - 1;
        } else {
          return dataBook.length - 3;
        }
      });
      setTimeout(() => {
        setIndexes(exceptionIndex);
      }, 500);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowScreen);
  }, [widthScreen]);

  useEffect(() => {
    if (language === "spanish") {
      setAllProyects(allProyectsSpanish);
      setDataBook(dataBookSpanish);
      setNavBarLinks(navBarLinksSpanish);
      setIndex(indexSpanish);
    } else {
      setAllProyects(allProyectsEnglish);
      setDataBook(dataBookEnglish);
      setNavBarLinks(navBarLinksEnglish);
      setIndex(indexEnglish);
    }
  }, [language]);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
      setBodyLoader("block");
    }, 2000);
  }, [newLoad]);

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
        setIndexes={setIndexes}
        pointerEvent={pointerEvent}
        setPointerEvent={setPointerEvent}
        translate={translate}
        functionTranslateFrontPage={functionTranslateFrontPage}
        functionTranslateBackPage={functionTranslateBackPage}
        functionPageIndex={functionPageIndex}
        backToIndex={backToIndex}
        indexPage={indexPage}
        positionPage={positionPage}
        setPositionPage={setPositionPage}
        navBarLinks={navBarLinks}
        index={index}
        openNav={openNav}
        setOpenNav={setOpenNav}
        move={move}
        setMove={setMove}
        loader={loader}
        setLoader={setLoader}
        opacityLoader={opacityLoader}
        setOpacityLoader={setOpacityLoader}
        displayLoader={displayLoader}
        setDisplayLoader={setDisplayLoader}
        bodyLoader={bodyLoader}
        setBodyLoader={setBodyLoader}
        newLoad={newLoad}
        setNewLoad={setNewLoad}
        indexInitial={indexInitial}
      />
    </BrowserRouter>
  );
}

export default App;
