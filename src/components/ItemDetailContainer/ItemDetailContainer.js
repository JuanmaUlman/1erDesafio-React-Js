import React, { useState, useEffect  } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getproductsById} from '../Mock/products'
import Loader from '../Loader/Loader'




const ItemDetailContainer = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false)
  const { id } = useParams();

  useEffect(() => {
    setLoading(true)

    getproductsById(id)
      .then(game =>  {setGames(game)
        setLoading(false)
      })
  }, [id])

console.log(useParams());
console.log(games)

  return (
    <div>
          
          {loading ? <Loader/> : <ItemDetail {...games} />}
    </div>
  )
  
} 



export default ItemDetailContainer