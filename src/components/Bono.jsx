/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/styles/components/bono.scss';

const Bono = () => (
  <section className='bono'>
    <div className='bono__titulo'>
      <h2>Bonos</h2>
      <a href='#' id='close' className='close'><span>&times;</span></a>
    </div>
    <div className='bono__contenedor'>
      <h3>Agregar bono de Descuento</h3>
      <div className='bono__contenedor--form'>
        <form>
          <p>Código de descuento</p>
          <input name='codigo' className='input' type='text' placeholder='Código' />
          <button type='button'>Confirmar</button>
        </form>
      </div>
      <div className='bono__contenedor--bonos'>
        <p>Bonos de descuento</p>
        <div className='card'>
          <p>
            Bono para tu
            <br />
            {' '}
            motocicleta
          </p>
        </div>
        <button type='button'>Agregar Bono</button>
      </div>
    </div>
  </section>
);

export default Bono;
