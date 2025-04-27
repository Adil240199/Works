import React from "react";
import "./footer.scss";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
const Footer = () => {
  return (
    <footer id="idFooter">
      <div className="block-socmedia">
        <p className="footer-text">
          &copy; 2023 Online English School. All rights reserved.
        </p>
        <div className="soc-media">
          <a href="https://www.youtube.com/">
            <span className="icon">
              <img className="icon" src={facebook} alt="facebook" />
            </span>
          </a>
          <a href="https://www.youtube.com/">
            <span className="icon">
              <img className="icon" src={instagram} alt="instagram" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
