import React from 'react';
import '../assets/styles/components/vehiculo.scss';

const vehiculo = () => (
  <section className='vehiculo'>
    <h2>Mira tus datos</h2>
    <div className='vehiculo__datos'>
      <p>Nombre:</p>
      <p>Apellido:</p>
      <p>Placa:</p>
    </div>
    <h2>Tu vehículo</h2>
    <div className='vehiculo__datos'>
      <p>Marca:</p>
      <p>Modelo:</p>
      <p>Linea:</p>
    </div>
  </section>
);

export default vehiculo;
