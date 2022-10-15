import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";

//Firebase
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/FirebaseConfig";

const ItemListContainer = (props) => {
  const onAdd = (number) => {
    alert(`Agregaste ${number} productos`);
  };

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
  console.log(gamesList);

  // const [productsList, setProductsList] = useState([]);

  // const { categoryId } = useParams();


  useEffect(() => {
    setLoading(true)
    getGames();

    setTimeout(() => {
      setLoading(false);
    },2000)


    // setLoading(false)

  }, []);

  return (
    <>
      <h3>{props.saludo}</h3>
      {/* <Loader /> */}
      {loading ? <Loader /> : <ItemList gamesList={gamesList} />}
    </>
  );
};

export default ItemListContainer;
