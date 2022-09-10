import React, { useState, useEffect  } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getproductsById} from '../Mock/products'




const ItemDetailContainer = () => {
  const [games, setGames] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getproductsById(id)
      .then(game =>  setGames(game))
  }, [id])

console.log(id);
console.log(games)

  return (
    <div>
          <ItemDetail {...games} />
    </div>
  )
  
} 



export default ItemDetailContainer