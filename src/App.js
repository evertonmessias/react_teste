import React from 'react';
import logo from './logo.svg';
import './App.css';
import Conversor from './components/Conversor'

function App() {
  return (
    <div className="site">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="main">        
        <Conversor moeda1="USD" moeda2="BRL"></Conversor>
      </main>
    </div>
  );
}
export default App;
