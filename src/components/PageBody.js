import React from "react";
import BookContainer from "./BookContainer";

const PageBody = ({ language, setLanguage }) => {
  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <BookContainer language={language} setLanguage={setLanguage} />
    </div>
  );
};

export default PageBody;
