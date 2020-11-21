import React from 'react';
import '../assets/styles/components/pasoapaso.scss';

const Pasoapaso = () => (
  <div className='root'>
    <form action='' className='pasos'>
      <div className='pasos__header'>
        <ul className='barra'>
          <li className='barra__opcion active' id='cesta'>Cesta</li>
          <li className='barra__opcion' id='pago'>Pago</li>
          <li className='barra__opcion' id='listo'>Listo</li>
        </ul>
      </div>
      <div className='pasos__body'>
        <div className='paso active to-left' id='cesta'>
          <h2>Tu cesta</h2>
          <p>componentes correspondientes a cesta</p>
          <input type='email' placeholder='correo' />
          <div className='pasos__body--boton'>
            <button type='button' className='boton__paso--next' data-to-step='pago' data-step='cesta'>siguiente</button>
          </div>
        </div>

        <div className='paso' id='pago'>
          <h2>Elige tu forma de pago</h2>
          <p>componentes correspondientes a pago</p>
          <input type='text' placeholder='nombre' />
          <div className='pasos__body--boton'>
            <button type='button' className='boton__paso--next' data-to-step='listo' data-step='pago'>continuar</button>
          </div>
        </div>

        <div className='paso' id='listo'>
          <h2>Pago realizado</h2>
          <p>componentes correspondientes a pago</p>
          <input type='text' placeholder='apellido' />
          <div className='pasos__body--boton'>
            <button type='submit' className='boton__paso--next' data-to-step='listo' data-step='pago'>continuar</button>
          </div>
        </div>
      </div>
    </form>
  </div>
);

export default Pasoapaso;
