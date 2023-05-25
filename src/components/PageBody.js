import React from "react";
import BookContainer from "./BookContainer";

const PageBody = ({
  language,
  setLanguage,
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
}) => {
  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <BookContainer
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
    </div>
  );
};

export default PageBody;
