/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/styles/components/beneficios.scss';

const Beneficios = () => (
  <div className='beneficios'>
  <h2>Beneficios</h2>
    <div className='beneficios__gr'>
      <h4>Dafiti</h4>
      <p>
        20% de descuento en moda Dafiti.com.co Válido hasta el 30 de noviembre o agotar existencias. Terminos y condiciones
        <a>Aquí</a>
      </p>
    </div>
    <div className='beneficios__gr'>
      <h4>cornershop</h4>
      <p>
        Bono de $40.000 para hacer mercado en cornershop. solo aplica para clientes que compraron su anterior SOATcon Grupo R5 Válido hasta el 30 de noviembre o agotar existencias. Terminos y condiciones
        <a>Aquí</a>
      </p>
    </div>
    <div className='beneficios__gr'>
      <h4>Vigencia</h4>
      <p>
        Iniciará vigencia el día después de su vencimiento.
      </p>
    </div>
    <div className='beneficios__gr'>
      <h4>Entrega</h4>
      <p>
        Entrega inmediata por correo y SMS.
      </p>
    </div>
  </div>
);

export default Beneficios;
