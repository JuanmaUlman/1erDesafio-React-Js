import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import {getProductsByCategory, products} from '../Mock/products'


const ItemListContainer = (props) =>{

const onAdd = (number) =>{
    alert(`Agregaste ${number} productos`)
    }
    

const [productsList, setProductsList] = useState([]);
const {categoryId} = useParams()


const getProducts = () => 
    new Promise((resolve, reject) =>{
        setTimeout(() => resolve(products), 2000)
    })

    
useEffect(() => {
    
    if(!categoryId){
        getProducts()
    .then(products => setProductsList(products))
    .catch(error => console.error(error))
    }else{
        getProductsByCategory(categoryId)
            .then(products => setProductsList(products))
    }

}, [categoryId])



    return(
    <>
        <h2>{props.saludo}</h2>

        <ItemList productsList={productsList}/>
    </>
    )
}


export default ItemListContainer