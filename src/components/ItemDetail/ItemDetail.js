import React from "react";
import "./ItemDetail.css";
import ItemCount from "../Count/ItemCount";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "@mui/material";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";

const ItemDetail = ({ games, item }) => {
  const { addItem, items } = useContext(CartContext);

  const onAdd = (quantity) => {
    addItem({ ...games, quantity }, quantity);

    toast.success(
      `Agregaste la cantidad de ${quantity} juego/s digitales, con el nombre de ${games.title} al carrito`,
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };

  return (
    <div className="detailContainer">
      <div>
        <img src={games.pictureURL} alt="" className="imageContainer" />
      </div>

      <div className="infoContainer">
        <h2>
          <b>{games.title}</b>
        </h2>

        <p>{games.description}</p>
        <p>
          Voces: <b>{games.Voices}</b>
        </p>
        <p>
          Textos: <b>{games.Texts}</b>
        </p>
        <p>
          Tamaño: <b>{games.size}</b>
        </p>
        <p>
          Espacio requerido en consola: <b>{games.RequiredInConsole}</b>
        </p>
        <p>
          Instalacion: <b>{games.installation}</b>
        </p>
        <p className="precioDetail1">
          Precio: <b className="precioDetail2">${games.price}</b>
        </p>

        <ItemCount item={item} onAdd={onAdd} initial={1} stock={10} />

        <Link to="/cart" className="Link">
          <Button
            variant="contained"
            color="success"
            size="large"
            style={{
              marginTop: "10px",
              paddingLeft: "43px",
              paddingRight: "43px",
            }}
          >
            Ir al carrito
          </Button>
        </Link>

        <ToastContainer />
      </div>
    </div>
  );
};

export default ItemDetail;
