import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "../styles/all.css";
import NavBar from "../components/NavBar";
import PageBody from "../components/PageBody";
import Footer from "../components/Footer";
import Error404 from "../components/Error404";
import Loader from "../components/Loader";

const Main = ({
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
  positionPage,
  setPositionPage,
  navBarLinks,
  index,
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
        className="min-vh-100 page-main-container pb-5 px-0"
      >
        <NavBar
          language={language}
          setLanguage={setLanguage}
          setTranslateBook={setTranslateBook}
          pointerEvent={pointerEvent}
          setPointerEvent={setPointerEvent}
          functionTranslateFrontPage={functionTranslateFrontPage}
          functionTranslateBackPage={functionTranslateBackPage}
          indexPage={indexPage}
          backToIndex={backToIndex}
          positionPage={positionPage}
          setPositionPage={setPositionPage}
          dataBook={dataBook}
          widthScreen={widthScreen}
          navBarLinks={navBarLinks}
          functionPageIndex={functionPageIndex}
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
        />

        <Container className="py-3">
          <Routes>
            <Route
              path="/"
              element={
                <PageBody
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
                  positionPage={positionPage}
                  setPositionPage={setPositionPage}
                  index={index}
                  openNav={openNav}
                  setOpenNav={setOpenNav}
                />
              }
            />

            <Route path="*" element={<Error404 language={language} />} />
          </Routes>
        </Container>
        <Footer  language={language} />
      </Container>
    </>
  );
};

export default Main;
