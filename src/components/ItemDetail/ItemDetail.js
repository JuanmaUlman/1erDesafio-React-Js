import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../Mock/products";
import "./ItemDetail.css";

const ItemDetail = () => {
  const [games, setGames] = useState([]);

  const detailItem = () => new Promise((resolve, reject) => {
     resolve(products);
    });

  let { id } = useParams();

  useEffect(() => {
    detailItem().then((products) => setGames(products));
  }, [id]);

  return (
    <div>
      {games.map((game) => {
        return (
          <div key={game.id} className="detailContainer">
            <div>
              <img
                src={game.pictureURL}
                alt="DBZ"
                className="imageContainer"
              />
            </div>

            <div className="infoContainer">
              <h2>
                <b>{game.title}</b>
              </h2>

              <p>
                {game.description}
              </p>
              <p>
                Voces: <b>{game.Voices}</b>
              </p>
              <p>
                Textos: <b>{game.Texts}</b>
              </p>
              <p>
                Tamaño: <b>{game.size}</b>
              </p>
              <p>
                Espacio requerido en consola:{" "}
                <b>{game.RequiredInConsole}</b>{" "}
              </p>
              <p>
                Instalacion: <b>{game.installation}</b>{" "}
              </p>
              <p className="precioDetail1">
                Precio: <b className="precioDetail2">${game.price}</b>{" "}
              </p>
            </div>
          </div>
        );
      })}
    </div>

    //     <div >
    // <h2 className='detalles'>Detalles del juego</h2>

    // </div>
  );
};

export default ItemDetail;
