import React from "react";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

//react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App container-fluid">
        <div className="row">
          <NavBar />
        </div>

        <Routes>
          <Route path="/" element={<ItemListContainer saludo="Bienvenido a American Games" />}/>
          <Route path="category/:categoryId" element={<ItemListContainer />}/>
          <Route path="item/:id" element={<ItemDetailContainer />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
