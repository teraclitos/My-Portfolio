import React from "react";
import "../styles/all.css";
import { useState, useEffect } from "react";

const Loader = ({ loader, setLoader }) => {
  const [opacityLoader, setOpacityLoader] = useState("100%");
  const [displayLoader, setDisplayLoader] = useState("flex");

  useEffect(() => {
    if (loader === false) {
      setOpacityLoader("0%");
      setTimeout(() => {
        setDisplayLoader("none");
      }, 500);
    }
  }, [loader]);

  return (
    <div
      style={{ opacity: opacityLoader, display: displayLoader }}
      className="loader-container"
    >
      <div class="lds-dual-ring"></div>
    </div>
  );
};

export default Loader;
