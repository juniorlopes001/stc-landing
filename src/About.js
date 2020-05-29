import React from "react";
import { ReactSVG } from "react-svg";
import doctorsStc from "./assets/img/doctors-stc.svg";
import saudeStc from "./assets/img/saude.svg";
import tecnologiaStc from "./assets/img/tecnologia.svg";
import notificacaoStc from "./assets/img/notificacao.svg";

const About = () => {
  return (
    <>
    
      <div className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-lg-6 col-xl-6">
              <h1>Saúde Te Chama</h1>
              <p>
               Notificando a saúde
              </p>
            </div>
            <div className="col-12 col-sm-12 col-lg-6 col-xl-6">
              <div className="doctors-stc">
                <ReactSVG src={doctorsStc} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
      <div className="card-section">
            <div className="row">
              <div className=" col-12 col-sm-12 col-lg-4">
                <div className="card-icon">
                  <ReactSVG src={saudeStc} />
                </div>
              </div>
              <div className="col-12 col-sm-12 col-lg-4">
                <div className="card-icon">
                  <ReactSVG src={tecnologiaStc} />
                </div>
              </div>
              <div className="col-12 col-sm-12 col-lg-4">
                <div className="card-icon">
                  <ReactSVG src={notificacaoStc} />
                </div>
              </div>
            </div>
          </div>
      </div>
      </>
  );
};

export default About;
