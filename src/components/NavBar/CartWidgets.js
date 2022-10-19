import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidgets = () => {
  const { items } = useContext(CartContext);
  let itemsInCart = 0;

  items.map((item) => {
    itemsInCart = itemsInCart + item.quantity;
  });

  if (items.length === 0) {
    return "";
  }
  
    return (
      <Link to="cart">
        <Button variant="outlined" startIcon={<ShoppingCartIcon />}>
          {itemsInCart}
        </Button>
      </Link>
    );
  
};

export default CartWidgets;
