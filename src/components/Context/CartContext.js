import React, { createContext, useState } from "react";
import "react-toastify/dist/ReactToastify.css";


export const CartContext = createContext();


export const CartProvider = ({ children }) => {

  const [items, setItems] = useState([{
    id: 1,
    title: 'primer producto',
    quantity: 5
  }]);



  const isInCart = (id) => {
    const found = items.find(item => item.id === id)
    return found
  };

  const addItem = (item, quantity) => {
    isInCart(item.id)
            ?
            setItems()
            :
      setItems([...items, {id: item.id, name: item.title, price: item.price, quantity: quantity }]);

  
//  toast.success(`Agregaste ${number} productos`, {
//     position: "top-right",
//     autoClose: 3000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//   });
  };


//   isInCart(id) ? null : 
//   const yaExisteEnCarrito = () => {};


  return (
    <CartContext.Provider value={{items, addItem}}>
      //Paso 4{children}
    </CartContext.Provider>
  );
};
