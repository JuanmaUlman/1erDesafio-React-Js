import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import {products} from '../Mock/products'


const ItemListContainer = (props) =>{

 const onAdd = (number) =>{
        alert(`Agregaste ${number} productos`)
      }
    


    const [productsList, setProductsList] = useState([]);


const getProducts = () => 
    new Promise((resolve, reject) =>{
        setTimeout(() => resolve(products), 2000)
    })

    
useEffect(() => {
    getProducts()
    .then(products => setProductsList(products))
    .catch(error => console.error(error))
}, [])



    return(
    <>
        <h2>{props.saludo}</h2>

        <ItemList productsList={productsList}/>
    </>
    )
}


export default ItemListContainer