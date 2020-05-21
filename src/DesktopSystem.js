import React from 'react';
import desktopSvg from './assets/img/desktop.svg'

const DesktopSystem = () => {
  return (
    <div className='bg-green'>
 <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-lg-6 col-xl-6">
          <div className="device-about">
            <h3>Sistema Web</h3>
            <p>
            O Sistema atende aos colaboradores de saúde envolvidos com os pacientes, promovendo comunicação rápida e efetiva com os pacientes. Atendendo também aos profissionais e prestadores de saúde que compõe o sistema de saúde. Promove o acompanhamento dos agendamentos realizados, das necessidades especiais dos pacientes e o da elaboração e resultado das pesquisas de qualidade aplicadas. Compondo assim um meio fácil e seguro para a realização e acompanhamento dos atendimentos de saúde realizados aos pacientes. O Sistema pode se comunicar diretamente com o software já utilizado pelo Consórcio e/ou município para capturar os dados de cadastro dos pacientes, profissionais, prestadores, procedimentos, transporte e outros. Bem como utilizar o agendamento já realizado no software vigente quando for o caso.
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-lg-6 col-xl-6">
          <div className="device-img">
            <img src={desktopSvg} alt='imagem sistema em desktop' />
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
};
export default DesktopSystem;
