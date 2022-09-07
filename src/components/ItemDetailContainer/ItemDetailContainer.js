import React, { useState } from 'react'
import { useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { products } from '../Mock/products'



const ItemDetailContainer = () => {

    const [productsDetail, setProductsDetails] = useState([])

    const getItem = () => new Promise ((resolve, reject) =>{
        setTimeout(() => resolve(products[2]), 2000)
    })


    useEffect(() => {
        getItem()
            .then(products => setProductsDetails(products))
    })

    console.log(productsDetail);

  return (
    <div>
        <ItemDetail productsDetail={productsDetail} />
    </div>
  )
  
} 



export default ItemDetailContainer