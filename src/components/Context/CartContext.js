import React, { createContext, useState } from "react";
import "react-toastify/dist/ReactToastify.css";


export const CartContext = createContext();


export const CartProvider = ({ children }) => {

  const [items, setItems] = useState([]);



  const isInCart = (id) => {
    const found = items.find(item => item.id === id)
    return found
  };

  const addItem = (item, quantity) => {
    isInCart(item.id)
            ?
            setItems(items.map((prod) => {
                    if(prod.id === item.id){
                        prod.quantity += quantity;
                    }
                    return prod;
            }))
            :
      setItems([...items, {id: item.id, name: item.name, price: item.price, quantity: quantity }]);


  
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

  const removeItem = (id) =>{
    setItems(items.filter(item => item.id !== id))
  }

  const clearItems = () =>{
    setItems([])
  }

//   isInCart(id) ? null : 
//   const yaExisteEnCarrito = () => {};


  return (
    <CartContext.Provider value={{items, addItem, removeItem, clearItems}}>
      {children}
    </CartContext.Provider>
  );
};
