import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import "./Cart.css";
import cohete from "../NavBar/cohete.png";

const Cart = () => {
  const { items, removeItems, clearItems } = useContext(CartContext);

  console.log(items);

  return (
    // <div>
    //   <h1>Aqui terminaras tu compra</h1>
    //   <img src={cohete} className="cohete2 bg-light" alt="cohete"/>
    // </div>

    <div>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <button
              onClick={() => {
                removeItems(item.id);
              }}
            >
              Borrar Producto
            </button>
          </div>
        );
      })}

          <button
              onClick={() => {
                clearItems();
              }}
            >
              Vaciar carrito
          </button>
    </div>
  );
};

export default Cart;
