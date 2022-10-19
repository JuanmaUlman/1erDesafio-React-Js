import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";

//Firebase
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/FirebaseConfig";

const CategoryType = () => {
  const [gamesList, setGamesList] = useState([]);

  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const getGames = async () => {
      const q = query(
        collection(db, "games"),
        where("category", "==", categoryId)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
        setGamesList(docs);
      });
    };

    getGames();

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [categoryId]);

  return <div>{loading ? <Loader /> : <ItemList gamesList={gamesList} />}</div>;
};

export default CategoryType;
