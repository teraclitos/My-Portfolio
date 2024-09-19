import React from 'react'
import BookContainer from './book'

const PageBody = ({
  language,
  setLanguage,
  dataBook,
  translateBook,
  setTranslateBook,
  widthScreen,
  allProjects,
  indexes,
  pointerEvent,
  setPointerEvent,
  translate,
  functionTranslateFrontPage,
  functionTranslateBackPage,
  functionChangePageForward,
  functionChangePageBackward,
  positionPage,
  setPositionPage,
  indexOfTheBook,
  openNav,
  setOpenNav,
  indexPage

}) => {
  return (
    <div className='min-vh-100 d-flex justify-content-center align-items-center'>
      <BookContainer
        language={language}
        setLanguage={setLanguage}
        dataBook={dataBook}
        translateBook={translateBook}
        setTranslateBook={setTranslateBook}
        widthScreen={widthScreen}
        allProjects={allProjects}
        indexes={indexes}
        pointerEvent={pointerEvent}
        setPointerEvent={setPointerEvent}
        translate={translate}
        functionTranslateFrontPage={functionTranslateFrontPage}
        functionTranslateBackPage={functionTranslateBackPage}
        functionChangePageForward={functionChangePageForward}
        functionChangePageBackward={functionChangePageBackward}
        positionPage={positionPage}
        setPositionPage={setPositionPage}
        indexOfTheBook={indexOfTheBook}
        openNav={openNav}
        setOpenNav={setOpenNav}
        indexPage={indexPage}

      />
    </div>
  )
}

export default PageBody
