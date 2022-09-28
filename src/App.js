import React from "react";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";

//react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartContext, CartProvider } from "./components/Context/CartContext";
import ItemDetail from "./components/ItemDetail/ItemDetail";

const App = () => {
  return (
    <Router>
      <CartProvider>

      <div className="App container-fluid">
        <div className="row">
          <NavBar />
        </div>

        <Routes>
          <Route path="/" element={<ItemListContainer saludo="Pixeles Games" />}/>
          <Route path="category/:categoryId" element={<ItemListContainer />}/>
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </div>
        
      </CartProvider>
    </Router>
  );
};

export default App;
