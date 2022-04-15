import React from "react";
import "./Footer.css";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="container">
        <div className="above">
          <div className="block-left">
              <h4>Carsharing Y</h4>
              <ul className="list-unstyled">
                <li>About</li>
                <li>Cars</li>
                <li>Future</li>
              </ul>
          </div>
          <div className="block">
              <h4>Legal</h4>
              <ul className="list-unstyled">
                <li>Imprint</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
          </div>
          {/* Column3 */}
          <div className="block-right">
              <h4>Contact</h4>
              <ul className="list-unstyled">
                <li>68159 Mannheim</li>
                <li>Coblitzallee 1-9</li>
                <li>Email: moayad.yaghi@sap.com</li>
              </ul>
          </div>
        </div>  
        <hr />
        <div className="below">
          <p className="below-line">
            &copy;{new Date().getFullYear()} Carsharing Y - All rights reserved | Terms Of Service | Privacy
          </p>
          <br/>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    list-style: none;
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  ul li a {
    color: var(--mainGrey);
  }

  ul li a:hover {
    color: var(--mainLightGrey);
  }
`;