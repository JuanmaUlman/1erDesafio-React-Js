import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button} from '@mui/material';



const CartWidgets = () => {
  return (

<Button 
    variant="outlined" 
    endIcon={<ShoppingCartIcon />}
>
  Carrito
</Button>

  )


}

export default CartWidgets