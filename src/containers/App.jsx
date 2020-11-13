import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Beneficios from '../components/Beneficios';
import '../assets/styles/App.scss';

const App = () => (
  <div className='App'>
    <Header />
    <Beneficios />
    <Footer />
  </div>
);

export default App;
