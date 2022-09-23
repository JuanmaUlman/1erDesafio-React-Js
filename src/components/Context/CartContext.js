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
  // // setItems([...items, item])

    isInCart(item.id)
            ?
            setItems(items.map((prod) => {
                    if(prod.id === item.id){
                        prod.quantity += quantity;
                    }
                    return prod;
            }))
            :
      setItems([...items, {id: item.id, title: item.title, price: item.price, category: item.category, image: item.pictureURL, quantity: quantity }]);
            console.log(items);

        //   const newItems = items.filter(prod  => prod.id !== item.id);
  //   newItems.push({...items, quantity: newQuantity});
  //   setItems(newItems)

  
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
