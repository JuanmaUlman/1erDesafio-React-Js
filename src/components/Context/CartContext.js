import React, { createContext, useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";


export const CartContext = createContext();


export const CartProvider = ({ children }) => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
    }, [items])



  const isInCart = (title) => {
    const found = items.find(item => item.title === title)
    return found
  };

  const addItem = (item, quantity) => {
  // // setItems([...items, item])

    isInCart(item.title)
            ?
            setItems(items.map((prod) => {
                    if(prod.title === item.title){
                        prod.quantity += quantity;
                    }
                    return prod;
            }))
            :
      setItems([...items, {id: item.id, title: item.title, price: item.price, category: item.category, image: item.pictureURL, quantity: quantity }]);
            console.log(items);


  };

  const removeItem = (title) =>{
    setItems(items.filter(item => item.title !== title))
  }

  const clearItems = () =>{
    setItems([])
  }


  const getTotal = () => {
    // let total = 0
    return items.reduce((acc, item) => (acc += item.quantity * item.price), 0 )
  }

  const totalProducts = () =>{
    return items.reduce((acc, item) => (acc + item.quantity), 0)
  } 
//   // totalAPagar.textContent = carritoStorage.reduce((acc, prod) => acc += prod.precio * prod.cantidad, 0)
// subTotal.textContent =
// "$" +
// carritoStorage.reduce((acc, prod) => (acc += prod.precio * prod.cantidad), 0);



  return (
    <CartContext.Provider value={{items, addItem, removeItem, clearItems, getTotal, totalProducts}}>
      {children}
    </CartContext.Provider>
  );
};
