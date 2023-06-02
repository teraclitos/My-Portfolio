import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const GitHubIcon = () => {
  return (
    <a
      className="icon-footer-link"
      target="blank"
      href="https://github.com/teraclitos"
    >
      <FontAwesomeIcon className="icon-footer" icon={faGithub} />
    </a>
  );
};

export default GitHubIcon;
