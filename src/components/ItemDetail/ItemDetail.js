import React, { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../Count/ItemCount";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemDetail = ({
  title,
  pictureURL,
  description,
  Voices,
  Texts,
  size,
  RequiredInConsole,
  installation,
  price,
}) => {
  const [addToCart, setAddToCart] = useState(0);

  const onAdd = (number) => {
    // alert(`Agregaste ${number} productos`);

    toast.success(`Agregaste ${number} productos`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    setAddToCart(number);
  };

  console.log(addToCart);

  return (
    <div className="detailContainer">
      <div>
        <img src={pictureURL} alt="" className="imageContainer" />
      </div>

      <div className="infoContainer">
        <h2>
          <b>{title}</b>
        </h2>

        <p>{description}</p>
        <p>
          Voces: <b>{Voices}</b>
        </p>
        <p>
          Textos: <b>{Texts}</b>
        </p>
        <p>
          Tamaño: <b>{size}</b>
        </p>
        <p>
          Espacio requerido en consola: <b>{RequiredInConsole}</b>
        </p>
        <p>
          Instalacion: <b>{installation}</b>
        </p>
        <p className="precioDetail1">
          Precio: <b className="precioDetail2">${price}</b>
        </p>

        {addToCart === 0 ? (
          <ItemCount onAdd={onAdd} initial={1} stock={10} />
        ) : (
          <Link to="/cart">
            <button className="btn btn-success btn-lg">Terminar compra</button>
          </Link>
        )}

        <ToastContainer />
      </div>
    </div>
  );
};

export default ItemDetail;
