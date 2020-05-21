import React from "react";
import logoVerde from "./assets/img/stc-verde.png";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="footer-header">
              <img src={logoVerde} />
            </div>
          </div>
        </div>

        <div className="footer-content">
          <div className="row footer-content">
            <div className="col-12 col-lg-3">
              <nav>
                <ul>
                  <li className="li-title">Informação</li>
                  <li>
                    <a href="#">Informação 1</a>
                  </li>
                  <li>
                    <a href="#">Informação 1</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-12 col-lg-3">
              <nav>
                <ul>
                  <li className="li-title">Informação 1</li>
                  <li>
                    <a href="#">Informação 1</a>
                  </li>
                  <li>
                    <a href="#">Informação 1</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-12 col-lg-3">
              <nav>
                <ul>
                  <li className="li-title">Informação 1</li>
                  <li>
                    <a href="#">Informação 1</a>
                  </li>
                  <li>
                    <a href="#">Informação 1</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
