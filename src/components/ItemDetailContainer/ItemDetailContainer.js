import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";

//Firebase
import { db } from "../../Firebase/FirebaseConfig";

import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
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
    };

    setLoading(true);
    getGames();

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [id]);

  console.log(id);

  return <div>{loading ? <Loader /> : <ItemDetail games={games} />}</div>;
};

export default ItemDetailContainer;
