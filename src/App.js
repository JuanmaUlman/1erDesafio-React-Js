import React from "react";
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";




function App() {



  return (

    <div className="App container-fluid">

      <div className="row">
        <NavBar/>
      </div>
    

      <div>
      <ItemListContainer
      saludo = 'Bienvenido a American Games'
       />
      </div>




    </div>
  );
}

export default App;
