import React from "react";
import "./Cart.css"
import cohete from "../NavBar/cohete.png"

const Cart = () => {
  return (
    <div>
      <h1>Aqui terminaras tu compra</h1>
      <img src={cohete} className="cohete2 bg-light" alt="cohete"/>
    </div>
  );
};

export default Cart;
