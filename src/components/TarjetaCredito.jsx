/* eslint-disable react/jsx-no-undef */
import React from 'react';
import '../assets/styles/components/tarjetacredito.scss';

const TrajetaCredito = () => (
  <section className='tarjetacredito'>
    <div className='tarjetacredito__titulo'>
      <h2>Tarjeta de Credito</h2>
      <Link to='/'>
        <p id='close' className='close'><span>&times;</span></p>
      </Link>
    </div>
    <div className='tarjetacredito__contenedor'>
      <div className='tarjetacredito__contenedor--form'>
        <form>
          <h3>Añade tus datos</h3>
          <input name='ntarjeta' className='input' type='number' placeholder='N° de tarjeta' />
          <input name='date' className='input' type='number' placeholder='MM/AA' />
          <input name='codigo' className='input' type='text' placeholder='Código de seguridad' />
          <input name='nombre' className='input' type='text' placeholder='Nombre' />
          <div className='pagoseguro'>
            <img src='https://img.icons8.com/metro/26/000000/lock-2.png' alt='seguro' />
            <p>Pago 100% seguro</p>
          </div>
          <Link to='/'>
            <button type='button'>Confirmar</button>
          </Link>
        </form>
      </div>
    </div>
  </section>
);

export default TrajetaCredito;
