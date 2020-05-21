import React, { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import arrobaSvg from "./assets/img/internet.svg";
import personSvg from "./assets/img/person.svg";

const Form = () => {
  return (

    <div className='bg-secundary'>
   <div className="container-fluid">
      <div className="form-card">
        <h3>Solicite uma demonstração</h3>
        <form>
          <div className="input-form">
            <ReactSVG src={arrobaSvg} />
            <input type="text" />
          </div>
          <div className="input-form">
            <ReactSVG src={personSvg} />
            <input type="text" />
          </div>
          <div className="input-form">
            <textarea placeholder="Digite sua mensagem aqui..."></textarea>
          </div>
          <div className="text-right">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
    </div>
 
  );
};

export default Form;
