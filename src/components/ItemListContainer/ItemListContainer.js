import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import "./ItemListContainer.css";

//Firebase
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/FirebaseConfig";

const ItemListContainer = (props) => {
  const [loading, setLoading] = useState(false);

  const [gamesList, setGamesList] = useState([]);

  const getGames = async () => {
    const q = query(collection(db, "games"));
    const docs = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      docs.push({ ...doc.data(), id: doc.id });
      setGamesList(docs);
    });
  };

  useEffect(() => {
    setLoading(true);
    getGames();

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {/* <h3>{props.saludo}</h3> */}

      <div className="ListContainer">
        {loading ? <Loader /> : <ItemList gamesList={gamesList} />}
      </div>
    </div>
  );
};

export default ItemListContainer;
