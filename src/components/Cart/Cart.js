import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import "./Cart.css";
import cohete from "../NavBar/cohete.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, removeItem, clearItems, getTotal, totalProducts } =
    useContext(CartContext);

  if (items.length === 0) {
    return (
      <div>
        <h4 className="noProducts">No hay productos en el carrito</h4>
        <div>
          <img src={cohete} className="cohete2 bg-light" alt="cohete" />
        </div>
        <Link to="/">
          <button className="btn btn-primary">Volver a la tienda</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="cartContainer">
        {items.map((item) => {
          return (
            <div key={item.id}>
              <Card sx={{ maxWidth: 200 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  image={item.image}
                />
                <CardContent style={{ textAlign: "start", marginTop: "" }}>
                  <Typography gutterBottom variant="body1" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Equipo: {item.category}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Cantidad seleccionada: {item.quantity}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Precio: ${item.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<DeleteIcon />}
                    onClick={() => {
                      removeItem(item.title);
                    }}
                  >
                    Borrar Producto
                  </Button>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>

      <div className="finalItems">
        <Button
          className="btn-vaciar"
          onClick={() => {
            clearItems();
          }}
          variant="contained"
          color="error"
          style={{ marginTop: "10px" }}
        >
          Vaciar carrito
        </Button>
        <Link to="shop" className="Link">
          <Button
            className="btn-finalizar"
            variant="contained"
            color="success"
            style={{ marginTop: "10px" }}
          >
            Finalizar Compra
          </Button>
        </Link>
        <h3>Cantidad de productos en el carrito: {totalProducts()}</h3>
        <h3>Total en carrito: ${getTotal()}</h3>
      </div>
    </div>
  );
};
export default Cart;
