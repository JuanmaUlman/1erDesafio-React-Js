import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({title, pictureURL, description, Voices, Texts, size, RequiredInConsole, installation, price}) => {

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
            </div>
          </div>
        );
      }


    //     <div >
    // <h2 className='detalles'>Detalles del juego</h2>

    // </div>
 
export default ItemDetail;





// const ItemDetail = () => {
//   const [games, setGames] = useState([]);

// const detailItem = () => new Promise((resolve, reject) => {
//     resolve(products.find(p => p.id === id));
//   });

//   let { id } = useParams();

//   useEffect(() => {
//     detailItem().then((products) => setGames(products));
//   }, [id]);
// const { id } = useParams();
// useEffect(() => {
//     detailItem().then(setGames);
//   }, [id]);
// const [game, setGame] = useState([]);