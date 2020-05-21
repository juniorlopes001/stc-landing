import React from "react";
import desktopSvg from "./assets/img/desktop.svg";

const MobileSystem = () => {
  return (
    <div className="container mt-5percent">
      <div className="row">
        <div className="col-12 col-sm-12 col-lg-6 col-xl-6">
          <div className="device-img">
            <img src={desktopSvg} alt="imagem sistema em desktop" />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-lg-6 col-xl-6">
          <div className="device-about">
            <h3>Aplicativo</h3>
            <p>
              O Aplicativo para uso do paciente, permite ao usuário interagir
              com os sistemas de saúde locais, recebendo e confirmando
              notificações de agendamentos de consultas e procedimentos,
              esclarecendo duvidas com os atendentes dos municípios bem como com
              os prestadores de saúde cadastrados e possibilitando responder a
              questionários enviados para avaliar e melhorar o atendimento do
              sistema de saúde, seus atendimentos, prestadores, médicos e
              procedimentos envolvidos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileSystem;
