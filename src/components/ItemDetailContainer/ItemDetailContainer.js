import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { products} from '../Mock/products'



const ItemDetailContainer = () => {

    const [productsDetail, setProductsDetails] = useState([])



    const getItem = () => new Promise ((resolve, reject) =>{
        setTimeout(() => resolve(products), 2000)
    })


    useEffect(() => {
        getItem()
            .then(products => setProductsDetails(products))
    }, [])

    console.log(productsDetail);

  return (
    <div>
      {productsDetail.map((game) => {
        return(
          <Link to={`/item/${game.id}`}>
          <ItemDetail key={game.id}/>
          </Link>
        )
      })}



    </div>
  )
  
} 



export default ItemDetailContainer