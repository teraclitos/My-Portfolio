import React from "react";
import MailIcon from "./MailIcon";
import GitHubIcon from "./GitHubIcon";
import LinkedinIcon from "./LinkedinIcon";
import WhatsupIcon from "./WhatsupIcon";
import "../styles/all.css";

const Footer = () => {
  return (
    <div className="py-5 d-flex justify-content-end">
      <div>
        <MailIcon />
        <GitHubIcon />
        <LinkedinIcon />
        <WhatsupIcon />
      </div>
    </div>
  );
};

export default Footer;
