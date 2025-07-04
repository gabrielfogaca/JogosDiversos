import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/navbar';
import Forca from './components/forca';

function App() {
  return (
    <>
      <Navbar />
      <Forca />
    </>
  );
}

export default App;
