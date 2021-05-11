import React from 'react';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import './styles/Global.css';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;