import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import {getProductsByCategory, products} from '../Mock/products'
import Loader from '../Loader/Loader'


const ItemListContainer = (props) =>{

const onAdd = (number) =>{
    alert(`Agregaste ${number} productos`)
    }
    

const [productsList, setProductsList] = useState([]);
const [loading, setLoading] = useState(false)
const {categoryId} = useParams()

const getProducts = () => 
    new Promise((resolve, reject) =>{
        setTimeout(() => resolve(products), 2000)
    })

    
useEffect(() => {
    setLoading(true)

    if(!categoryId){
        getProducts()
    .then(products => setProductsList(products))
    .catch(error => console.error(error))
    setLoading(false)
    }else{
        getProductsByCategory(categoryId)
            .then(products => setProductsList(products))
        setLoading(false)
    }

}, [categoryId])



    return(
    <>
        <h2>{props.saludo}</h2>
        {loading ? <Loader/> : <ItemList productsList={productsList}/>}
        

    </>
    )
}


export default ItemListContainer