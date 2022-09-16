import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import "./Cart.css"
import cohete from "../NavBar/cohete.png"

const Cart = () => {
  const {items, addItem} = useContext(CartContext)



  return (
    // <div>
    //   <h1>Aqui terminaras tu compra</h1>
    //   <img src={cohete} className="cohete2 bg-light" alt="cohete"/>
    // </div>

    <div>
      {items.map((item) =>{
        <div key={item.id}>
          <h3>{item.name}</h3>
        </div>
      })}
    </div>


  );
};

export default Cart;






