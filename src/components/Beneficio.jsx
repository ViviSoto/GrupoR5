/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/styles/components/beneficio.scss';

const Beneficio = () => (
  <section className='beneficios'>
    <div className='beneficios__titulo'>
      <h2>Beneficios</h2>
      <a href='#' id='close' className='close'><span>&times;</span></a>
    </div>
    <div className='beneficios__contenedor'>
      <div className='beneficios__contenedor--grupo '>
        <div className='beneficio '>
          <img src='../assets/img/dafiti.png' alt='logo-dafiti' />
          <p>
            20% de descuento en moda Dafiti.com.co Válido hasta el 30 de noviembre o agotar existencias. Terminos y condiciones
            {' '}
            <a>Aquí</a>
          </p>
        </div>
        <div className='beneficio '>
          <img src='../assets/img/corner.png' alt='logo-cornershop' />
          <p>
            Bono de $40.000 para hacer mercado en cornershop. Aplica para clientes que compraron su anterior SOAT con Grupo R5 Válido hasta el 30 de noviembre o agotar existencias. Terminos y condiciones
            {' '}
            <a> Aquí</a>
          </p>
        </div>
        <div className='beneficio2'>
          <img src='https://img.icons8.com/ios/50/000000/tear-off-calendar--v1.png' alt='calendar' />
          <p>
            Iniciará vigencia el día después de su vencimiento.
          </p>
        </div>
        <div className='beneficio2'>
          <img src='https://img.icons8.com/ios/64/000000/push-notifications.png' alt='celular' />
          <p>
            Entrega inmediata por correo y SMS.
          </p>
        </div>
      </div>
    </div>
    <div className='boton__continuar'>
      <button type='button'>Continuar</button>
    </div>
  </section>
);

export default Beneficio;
