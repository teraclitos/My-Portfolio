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
}) => {
  return (
    <Container fluid className="min-vh-100 page-main-container">
      <NavBar language={language} setLanguage={setLanguage} />
      <Container>
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
