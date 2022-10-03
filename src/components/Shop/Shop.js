import React, { useContext } from "react";
import { TextField } from "@mui/material";
import "./Shop.css";
import { useState } from "react";
import MessageSuccess from "../MessageSucsess/MessageSuccess";
import { CartContext } from "../Context/CartContext";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase/FirebaseConfig";

const Shop = () => {
  const { getTotal, items } = useContext(CartContext);

  const purchaseOrder = {
    buyer: {
      nombre: "",
      telefono: "",
      email: "",
    },
    items: items.map((game) => ({
  
      title: game.title,
      price: game.price,
    })),

    total: getTotal(),
  };

  const [values, SetValues] = useState(purchaseOrder);
  const [purchaseID, setPurchaseID] = useState("");

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    SetValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(values);

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "purchases"), {
      values,
    });
    console.log("Document written with ID: ", docRef.id);
    setPurchaseID(docRef.id);
    // SetValues(purchaseOrder);
  };

  return (
    <div>
      <h1> Shop </h1>
      <form className="form" onSubmit={onSubmit}>
        <TextField
          placeholder="Nombre"
          style={{ margin: 10, width: 400 }}
          name="nombre"
          value={values.nombre}
          onChange={handleOnChange}
        />
        <TextField
          placeholder="Telefono"
          type="number"
          style={{ margin: 10, width: 400 }}
          name="telefono"
          value={values.telefono}
          onChange={handleOnChange}
        />
        <TextField
          placeholder="Email"
          style={{ margin: 10, width: 400 }}
          name="email"
          value={values.email}
          onChange={handleOnChange}
        />

        <button>Finalizar</button>
      </form>
      {purchaseID && <MessageSuccess purchaseID={purchaseID} />}
    </div>
  );
};

export default Shop;
