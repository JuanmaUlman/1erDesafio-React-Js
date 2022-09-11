import React from "react";
import "./ItemDetail.css";
import ItemCount from '../Count/ItemCount'

const ItemDetail = ({title, pictureURL, description, Voices, Texts, size, RequiredInConsole, installation, price}) => {

  const onAdd = (number) =>{
    alert(`Agregaste ${number} productos`)
    }

        return (
          <div className="detailContainer">
            <div>
              <img
                src={pictureURL}
                alt=""
                className="imageContainer"
              />
            </div>

            <div className="infoContainer">
              <h2>
                <b>{title}</b>
              </h2>

              <p>
                {description}
              </p>
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

              <ItemCount 
            onAdd={onAdd}
            initial={1}
            stock={10}/>
            </div>
          </div>
        );
      }


export default ItemDetail;



