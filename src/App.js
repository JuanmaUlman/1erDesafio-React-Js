import React from "react";
import './App.css';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
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
      <ItemDetailContainer/>
      </div>




    </div>
  );
}

export default App;
