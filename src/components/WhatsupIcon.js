import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsupIcon = ({ language }) => {
  return (
    <a
      className="icon-footer-link"
      target="blank"
      href={
        language === "english"
          ? "https://wa.link/otcpwg"
          : "https://wa.link/ibnibl"
      }
    >
      <FontAwesomeIcon className="icon-footer" icon={faWhatsapp} />
    </a>
  );
};

export default WhatsupIcon;
