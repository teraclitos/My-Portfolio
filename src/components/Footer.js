import React from "react";
import MailIcon from "./MailIcon";
import GitHubIcon from "./GitHubIcon";
import LinkedinIcon from "./LinkedinIcon";
import WhatsupIcon from "./WhatsupIcon";
import "../styles/all.css";

const Footer = () => {
  return (
    <div className="py-2 px-lg-5 d-flex flex-column flex-lg-row justify-content-between align-items-center red ">
      <div className="mb-4 mb-lg-0 ">
        <span className="old-letter fs-3 ">F T</span>
      </div>
      <div className="d-flex justify-content center icon-footer-container">
        <MailIcon />
        <GitHubIcon />
        <LinkedinIcon />
        <WhatsupIcon />
      </div>
    </div>
  );
};

export default Footer;
