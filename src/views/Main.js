import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "../styles/all.css";
import NavBar from "../components/NavBar";
import PageBody from "../components/PageBody";
import Footer from "../components/Footer";
import Error404 from "../components/Error404";

const Main = ({ language, setLanguage }) => {
  return (
    <Container fluid className="min-vh-100 page-main-container">
      <Container>
        <NavBar language={language} setLanguage={setLanguage} />
        <Routes>
          <Route
            path="/"
            element={<PageBody language={language} setLanguage={setLanguage} />}
          />

          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Container>
    </Container>
  );
};

export default Main;
