import React, { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button} from '@mui/material';
import { CartContext } from '../Context/CartContext';




const CartWidgets = () => {
const {items} = useContext(CartContext);
let itemsInCart = 0


items.map((item) => {
  itemsInCart = itemsInCart +item.quantity
})


  return (
<Button 
    variant="outlined" 
    startIcon={<ShoppingCartIcon 
    />}
    
>
{itemsInCart}
</Button>

  )


}

export default CartWidgets