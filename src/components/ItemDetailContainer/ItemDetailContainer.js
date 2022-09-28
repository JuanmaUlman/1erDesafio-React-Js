import React, { useState, useEffect  } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
// import { getproductsById} from '../Mock/products'
import Loader from '../Loader/Loader'



//Firebase
import { collection, query, where, getDocs, documentId, doc } from "firebase/firestore";
import { db } from "../../Firebase/FirebaseConfig";




const ItemDetailContainer = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false)
  const { id } = useParams();


  useEffect(() => {
    const getGames = async () => {
      const q = query(collection(db, "games"), where(documentId(), "==", id));

      const docs = [];
      
      const querySnapshot = await getDocs(q);
      
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        docs.push({ ...doc.data(), id: doc.id });

      });

      setGames(docs);

    };
    // setLoading(true)
    getGames()
    
  }, [id])


console.log(id);

  return (
    <div>
          {loading ? <Loader/> : <ItemDetail games={games} />}
    </div>
  )

}



export default ItemDetailContainer