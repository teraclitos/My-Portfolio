import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "../styles/all.css";
import NavBar from "../components/NavBar";
import PageBody from "../components/PageBody";
import Footer from "../components/Footer";
import Error404 from "../components/Error404";

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
  setOpenNav
}) => {
  return (
    <Container fluid className="min-vh-100 page-main-container pb-5 px-0">
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

          <Route path="*" element={<Error404 />} />
        </Routes>
      </Container>
      <Footer />
    </Container>
  );
};

export default Main;
