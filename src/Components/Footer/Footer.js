import React from "react";
import styled from "styled-components";
// import "./Footer.css";
import { Link } from "react-router-dom";

const MarketLink = "/MarketPage";

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-3 col-sm-6">
              <h4>Contact</h4>
              <ul className="list-unstyled">
                <li>68159 Mannheim</li>
                <li>Coblitzallee 1-9</li>
                <li>Mail: moayad.yaghi@outlook.com</li>
                <li>Telefon:</li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="col-md-3 col-sm-6">
              <h4>Market</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to={MarketLink}>Offers</Link>
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="col-md-3 col-sm-6">
              <h4>Information</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to={""}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          {/*Footer Bottom*/}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} Carsharing Y - All Rights
              Reserved
            </p>
          </div>
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
