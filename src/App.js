import React from "react";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";
import Shop from "./components/Shop/Shop";
//react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/Context/CartContext";

import CategoryType from "./components/CategoryType/CategoryType";

const App = () => {
  return (
    <Router>
      <CartProvider>
        <div className="App container-fluid bg-light">
          <div className="row">
            <NavBar />
          </div>

          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer saludo="Selecciona tu juego favorito, y subi al siguiente nivel!!" />
              }
            />
            <Route path="category/:categoryId" element={<CategoryType />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/shop" element={<Shop />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;
