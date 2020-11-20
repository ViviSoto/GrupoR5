import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';
import Beneficio from '../components/Beneficio';
import Ups from '../components/Ups';
import Bono from '../components/Bono';
import TarjetaCredito from '../components/TarjetaCredito';
import Pse from '../components/Pse';
import Vehiculo from '../components/Vehiculo';
import Descubrir from '../components/Descubrir';
import Pasoapaso from '../components/Pasoapaso';

const App = () => (
  <div className='App'>
    <Header />
    <Pasoapaso />
    <Descubrir />
    <Vehiculo />
    <Beneficio />
    <Ups />
    <Bono />
    <TarjetaCredito />
    <Pse />
    <Footer />
  </div>
);

export default App;
