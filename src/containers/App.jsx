import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import Beneficio from '../components/Beneficio';
import '../assets/styles/App.scss';
import Ups from '../components/Ups';

const App = () => (
  <div className='App'>
    <Header />
    <Ups />
    <Footer />
  </div>
);

export default App;
