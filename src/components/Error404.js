import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import "../styles/all.css";

const Error404 = ({ language }) => {

   useEffect(() => {
    document.title = 'Francisco Teran | Error 404';
  }, []);

  return (
    <div className="error-404-container">
      <img
        src="https://res.cloudinary.com/duuwqmpmn/image/upload/v1686004427/logo-error-404_vnksdy.png"
        alt="logo-404"
        className="logo-404"
      />
      <div>
        <Link
        to="/"
          className="letter-title-book dark-brown back-main link-404"
        >
          {language === "english"
            ? "Back to main page"
            : "Volver a la pàgina prinipal"}
        </Link>
      </div>
    </div>
  );
};

export default Error404;
