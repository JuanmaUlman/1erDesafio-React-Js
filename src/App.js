import React from "react";
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";


function App() {
  return (

    <div className="App container-fluid">
      <div className="row">
        <NavBar/>
      </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido a la tienda virtual
        </p>
        <p>
          Que tu experiencia sea placentera!
        </p>
        <p><b>Ulman Juan Manuel</b></p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
  );
}

export default App;
