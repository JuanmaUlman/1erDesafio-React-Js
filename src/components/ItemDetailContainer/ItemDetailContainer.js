import React, { useState, useEffect  } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
// import { getproductsById} from '../Mock/products'
import Loader from '../Loader/Loader'



//Firebase
// import { collection, query, where, getDocs, documentId, } from "firebase/firestore";
import { db } from "../../Firebase/FirebaseConfig";

import { doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false)
  const { id } = useParams();


  useEffect(() => {
    const getGames = async () => {

      const docRef = doc(db, "games", id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        setGames(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    
    





      // const q = query(collection(db, "games"), where(documentId(), "==", id));

      // let docs;
      
      // const querySnapshot = await getDocs(q);
      
      // querySnapshot.forEach((doc) => {
      //   // doc.data() is never undefined for query doc snapshots
      //   // console.log(doc.id, " => ", doc.data());
      //   docs = ({ ...doc.data(), id: doc.id });
      //   console.log(docs);
      // });
      // setGames(docs);
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