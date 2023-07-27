import React from 'react';
import '../styles/footer.scss';

const Footer = () => {
   return (
   
        <footer>
          <div className="block-socmedia">
            <p className="footer-text">&copy; 2023 Online English School. All rights reserved.</p>
            <div className="soc-media">
              <a href="https://www.youtube.com/">
                <span className="icon">
                  <img className="icon" src="../assets/facebook.svg" alt="facebook" />
                </span>
              </a>
              <a href="https://www.youtube.com/">
                <span className="icon">
                  <img className="icon" src="../assets/instagram.svg" alt="instagram" />
                </span>
              </a>
            </div>
          </div>
        </footer>
      );
    };
    

export default Footer;