import React from "react";
import './App.css';
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";



function App() {



  return (

    <div className="App container-fluid">
      <div className="row">
        <NavBar/>
      </div>

      <header className="App-header">

      <div>
      <ItemListContainer
      saludo = 'Greeting'
       />
      </div>


      <hr />



        <p>
          Bienvenido a la tienda virtual
        </p>
        <hr />
        <p>
          Que tu experiencia sea placentera!
        </p>
        <p><b>Ulman Juan Manuel</b></p>

      </header>

    </div>
  );
}

export default App;
