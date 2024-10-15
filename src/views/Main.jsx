import React from 'react'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import '../styles/all.css'
import NavBar from '../components/NavBar'
import PageBody from '../components/PageBody'
import Footer from '../components/Footer'
import Error404 from '../components/Error404'
import Loader from '../components/Loader'

const Main = ({
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
  navBarLinks,
  indexOfTheBook,
  openNav,
  setOpenNav,
  move,
  setMove,
  loader,
  setLoader,
  opacityLoader,
  setOpacityLoader,
  displayLoader,
  setDisplayLoader,
  bodyLoader,
  setBodyLoader,
  newLoad,
  setNewLoad,
  setIndexes,
  indexInitial,
  indexPage

}) => {
  return (
    <>
      <Loader
        loader={loader}
        setLoader={setLoader}
        opacityLoader={opacityLoader}
        setOpacityLoader={setOpacityLoader}
        displayLoader={displayLoader}
        setDisplayLoader={setDisplayLoader}
      />
      <Container
        style={{ height: bodyLoader }}
        fluid
        className='min-vh-100 page-main-container pb-5 px-0'
      >
        <NavBar
          language={language}
          setLanguage={setLanguage}
          setTranslateBook={setTranslateBook}
          pointerEvent={pointerEvent}
          setPointerEvent={setPointerEvent}
          functionTranslateFrontPage={functionTranslateFrontPage}
          functionTranslateBackPage={functionTranslateBackPage}
          functionChangePageBackward={functionChangePageBackward}
          positionPage={positionPage}
          setPositionPage={setPositionPage}
          dataBook={dataBook}
          widthScreen={widthScreen}
          navBarLinks={navBarLinks}
          functionChangePageForward={functionChangePageForward}
          openNav={openNav}
          setOpenNav={setOpenNav}
          move={move}
          setMove={setMove}
          newLoad={newLoad}
          setNewLoad={setNewLoad}
          setLoader={setLoader}
          setOpacityLoader={setOpacityLoader}
          setDisplayLoader={setDisplayLoader}
          setBodyLoader={setBodyLoader}
          setIndexes={setIndexes}
          indexInitial={indexInitial}
          translate={translate}
          indexes={indexes}

        />

        <Container className='py-3'>
          <Routes>
            <Route
              path='/'
              exact
              element={
                <PageBody
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
              }
            />

            <Route
              path='*' element={<Error404 language={language} />}
            />
          </Routes>
        </Container>
        <Footer language={language} />
      </Container>
    </>
  )
}

export default Main
