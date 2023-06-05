import React from "react";
import { Document, Page } from "react-pdf";

const CV = () => {
  const CVUrl = "../../public/FranciscoTerán CV.pdf";
  return (
    <div>
      <Document file={CVUrl}>
        <Page pageNumber={2} />
      </Document>
    </div>
  );
};

export default CV;
